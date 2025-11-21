import React, { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, Alert, Dimensions } from 'react-native';
import { NavigationProp, useFocusEffect } from '@react-navigation/native';
import { LineChart } from 'react-native-chart-kit';
import { captureRef } from 'react-native-view-shot';
import * as FileSystem from 'expo-file-system';
import Header from '../components/Header';
import TopBottomBar from '../components/TopBottomBar';
import PetSwitch from '../components/ItemSwitch';
import CustomDateTimePicker from '../components/MedicationPopup/CustomDateTimePicker';
import { styles } from '../styles/IOPMeasurement.styles';
import { ScreenEnum, Color } from '../GlobalStyles';
import { useAccount } from '../context/AccountContext';
import { Pet, emptyPet, IOPMeasurementSession, IOPMeasurement as IOPMeasurementData } from '../data/dataTypes';
import { SEND_IOP_MEASUREMENT_REPORT, httpRequest } from '../data/endpoints';
import HelpButton from '../components/HelpButton';
import HelpPopup from '../components/HelpPopup';
import { helpText } from '../data/helpText';
import {
    getIOPMeasurementSession,
    saveIOPMeasurementSession,
    addMeasurementToSession,
    removeMeasurementFromSession,
    clearIOPMeasurementSession,
} from '../utils/iopStorage';

const { height, width } = Dimensions.get('window');
const ObjectID = require('bson-objectid');

type IOPMeasurementProps = {
    navigation: NavigationProp<any>;
};

type InputMode = 'range' | 'manual';

const IOPMeasurement = ({ navigation }: IOPMeasurementProps) => {
    const { account } = useAccount();
    const [selectedPetId, setSelectedPetId] = useState(account.pets[0]?.id || account.sharedPets[0]?.id || '');
    const [session, setSession] = useState<IOPMeasurementSession | null>(null);
    const [inputMode, setInputMode] = useState<InputMode>('range');
    const [selectedRange, setSelectedRange] = useState<string>('');
    const [manualValue, setManualValue] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [showHelp, setShowHelp] = useState(false);
    
    // Session setup state
    const [numberOfDays, setNumberOfDays] = useState<string>('');
    const [timesOfDay, setTimesOfDay] = useState<Date[]>([]);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [datePickerMode, setDatePickerMode] = useState<'date' | 'time'>('date');
    const [tempDate, setTempDate] = useState<Date>(new Date());
    
    // Measurement input state
    const [selectedMeasurementTime, setSelectedMeasurementTime] = useState<Date | null>(null);
    const [showMeasurementDatePicker, setShowMeasurementDatePicker] = useState(false);
    const [showMeasurementTimePicker, setShowMeasurementTimePicker] = useState(false);
    const [tempMeasurementDate, setTempMeasurementDate] = useState<Date>(new Date());
    
    const graphRef = useRef<View>(null);

    // Derive the selected pet from account whenever it changes
    const selectedPet = useMemo(() => {
        return (
            account.pets.find((p) => p.id === selectedPetId) ||
            account.sharedPets.find((p) => p.id === selectedPetId) ||
            emptyPet
        );
    }, [account, selectedPetId]);

    // Load session on mount and when pet changes
    useEffect(() => {
        loadSession();
    }, [selectedPetId]);

    useFocusEffect(
        useCallback(() => {
            setSelectedPetId(account.pets[0]?.id || account.sharedPets[0]?.id || '');
        }, [])
    );

    const loadSession = async () => {
        if (!selectedPetId) return;
        const loadedSession = await getIOPMeasurementSession(selectedPetId);
        setSession(loadedSession);
    };

    const rangeOptions = [
        { label: '<15 mmHg', value: '<15' },
        { label: '15-25 mmHg', value: '15-25' },
        { label: '26-35 mmHg', value: '26-35' },
        { label: '>35 mmHg', value: '>35' },
    ];

    const validateManualInput = (value: string): boolean => {
        const cleaned = value.replace(/[^0-9.]/g, '');
        const regex = /^\d+(\.\d)?$/;
        if (!regex.test(cleaned)) {
            return false;
        }
        const numValue = parseFloat(cleaned);
        return !isNaN(numValue) && numValue >= 0;
    };

    const handleManualInputChange = (value: string) => {
        if (value === '' || /^\d*\.?\d*$/.test(value)) {
            const parts = value.split('.');
            if (parts.length <= 2 && (parts[1] === undefined || parts[1].length <= 1)) {
                setManualValue(value);
                setError('');
            }
        }
    };

    const getIOPMeasurement = (): string => {
        if (inputMode === 'range') {
            return selectedRange;
        } else {
            return manualValue.trim();
        }
    };

    const formatDateTime = (date: Date): string => {
        return date.toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
        });
    };

    const formatChartLabel = (date: Date, index: number, total: number, isAlternate: boolean = false): string => {
        // Very short format for chart labels to prevent overlap
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const ampm = hour >= 12 ? 'P' : 'A';
        const displayHour = hour % 12 || 12;
        
        // Use shorter format for better spacing
        const timeStr = `${displayHour}:${minute.toString().padStart(2, '0')}${ampm}`;
        
        // For many points, show just time. For fewer points, show date and time
        // Add a leading space for alternate labels to create visual offset
        if (total > 8) {
            return isAlternate ? ` ${timeStr}` : timeStr;
        } else {
            const dateTimeStr = `${month}/${day}\n${timeStr}`;
            return isAlternate ? ` ${dateTimeStr}` : dateTimeStr;
        }
    };

    const handleStartSession = async () => {
        if (!selectedPet || selectedPet.id === '') {
            setError('Please select a pet');
            return;
        }

        if (!numberOfDays || parseInt(numberOfDays) <= 0) {
            setError('Please enter a valid number of days');
            return;
        }

        if (timesOfDay.length === 0) {
            setError('Please add at least one measurement time');
            return;
        }

        const newSession: IOPMeasurementSession = {
            petId: selectedPet.id,
            startDate: new Date(),
            numberOfDays: parseInt(numberOfDays),
            timesOfDay: timesOfDay,
            measurements: [],
            isComplete: false,
        };

        await saveIOPMeasurementSession(newSession);
        setSession(newSession);
        setError('');
        setNumberOfDays('');
        setTimesOfDay([]);
    };

    const handleAddTime = () => {
        setTempDate(new Date());
        setDatePickerMode('time');
        setShowDatePicker(true);
    };

    const handleDatePickerConfirm = (date: Date) => {
        if (datePickerMode === 'date') {
            setTempDate(date);
            setDatePickerMode('time');
        } else {
            // Combine date and time
            const combinedDate = new Date(tempDate);
            combinedDate.setHours(date.getHours());
            combinedDate.setMinutes(date.getMinutes());
            combinedDate.setSeconds(0);
            combinedDate.setMilliseconds(0);
            
            // Check if this time already exists
            const timeExists = timesOfDay.some(t => 
                t.getTime() === combinedDate.getTime()
            );
            
            if (!timeExists) {
                setTimesOfDay([...timesOfDay, combinedDate].sort((a, b) => a.getTime() - b.getTime()));
            }
            setShowDatePicker(false);
            setDatePickerMode('date');
        }
    };

    const handleRemoveTime = (index: number) => {
        setTimesOfDay(timesOfDay.filter((_, i) => i !== index));
    };

    const handleAddMeasurement = async () => {
        if (!session) return;

        const measurement = getIOPMeasurement();
        if (!measurement) {
            setError('Please enter or select an IOP measurement');
            return;
        }

        if (inputMode === 'manual') {
            if (!validateManualInput(measurement)) {
                setError('Please enter a valid number with at most one decimal place');
                return;
            }
        }

        if (!selectedMeasurementTime) {
            setError('Please select a measurement time');
            return;
        }

        const newMeasurement: IOPMeasurementData = {
            id: ObjectID(),
            value: measurement,
            timestamp: selectedMeasurementTime,
        };

        await addMeasurementToSession(session.petId, newMeasurement);
        await loadSession();
        setSelectedRange('');
        setManualValue('');
        setSelectedMeasurementTime(null);
        setError('');
    };

    const handleRemoveMeasurement = async (measurementId: string) => {
        if (!session) return;
        await removeMeasurementFromSession(session.petId, measurementId);
        await loadSession();
    };

    const handleSelectMeasurementTime = () => {
        setTempMeasurementDate(new Date());
        setShowMeasurementDatePicker(true);
    };

    const handleMeasurementDateConfirm = (date: Date) => {
        setTempMeasurementDate(date);
        setShowMeasurementDatePicker(false);
        setShowMeasurementTimePicker(true);
    };

    const handleMeasurementTimeConfirm = (time: Date) => {
        const combinedDate = new Date(tempMeasurementDate);
        combinedDate.setHours(time.getHours());
        combinedDate.setMinutes(time.getMinutes());
        combinedDate.setSeconds(0);
        combinedDate.setMilliseconds(0);
        setSelectedMeasurementTime(combinedDate);
        setShowMeasurementTimePicker(false);
    };

    const captureGraph = async (): Promise<string | null> => {
        try {
            if (!graphRef.current) return null;
            const uri = await captureRef(graphRef.current, {
                format: 'png',
                quality: 1.0,
            });
            // Read file and convert to base64 using expo-file-system
            const base64 = await FileSystem.readAsStringAsync(uri, {
                encoding: FileSystem.EncodingType.Base64,
            });
            return base64;
        } catch (error: any) {
            // Handle case where react-native-view-shot native module is not available
            if (error?.message?.includes('RNViewShot') || error?.message?.includes('TurboModuleRegistry')) {
                console.warn('react-native-view-shot native module not available - graph capture skipped. Please rebuild your development build.');
            } else {
                console.error('Failed to capture graph:', error);
            }
            // Return null to allow report to be sent without graph (data table will still be included)
            return null;
        }
    };

    const handleSendReport = async () => {
        if (!session || !selectedPet) return;

        if (session.measurements.length === 0) {
            setError('No measurements to send');
            return;
        }

        if (!selectedPet.vet || selectedPet.vet.trim() === '') {
            setError('Selected pet does not have a veterinarian email address');
            return;
        }

        if (!account.email || account.email.trim() === '') {
            setError('Account email is missing');
            return;
        }

        try {
            const graphImageBase64 = await captureGraph();
            // Note: graphImageBase64 can be null if capture fails, but we'll still send the report with data table

            // Format measurements for email
            const measurementsData = session.measurements.map(m => ({
                value: m.value,
                timestamp: m.timestamp.toUTCString(),
            }));

            const requestBody = {
                petId: selectedPet.id,
                ownerEmail: account.email,
                ownerName: account.username || account.email,
                graphImageBase64: graphImageBase64 || '', // Empty string if capture failed
                measurements: measurementsData,
            };

            const response = await httpRequest(
                SEND_IOP_MEASUREMENT_REPORT,
                'POST',
                JSON.stringify(requestBody),
                false
            );

            if (response.ok) {
                await clearIOPMeasurementSession(session.petId);
                setSession(null);
                Alert.alert('Success', 'IOP measurement report sent successfully to veterinarian');
            } else {
                const errorData = await response.json().catch(() => ({}));
                setError(errorData.message || 'Failed to send IOP measurement report');
            }
        } catch (error) {
            setError('Network error. Please try again.');
            console.error('Error sending IOP measurement report:', error);
        }
    };

    const prepareChartData = () => {
        if (!session || session.measurements.length === 0) {
            return {
                labels: [''],
                datasets: [{
                    data: [0],
                }],
            };
        }

        const sortedMeasurements = [...session.measurements].sort(
            (a, b) => a.timestamp.getTime() - b.timestamp.getTime()
        );

        // Create labels with alternating pattern to prevent overlap
        const labels: string[] = [];
        let labelIndex = 0; // Track which visible label we're on for alternating
        
        if (sortedMeasurements.length <= 3) {
            // Show all labels if we have very few measurements
            sortedMeasurements.forEach((m, index) => {
                labels.push(formatChartLabel(m.timestamp, index, sortedMeasurements.length, index % 2 === 1));
            });
        } else if (sortedMeasurements.length <= 8) {
            // For small sets, show every other label to create spacing, alternate heights
            sortedMeasurements.forEach((m, index) => {
                if (index === 0 || index % 2 === 0) {
                    const isAlternate = labelIndex % 2 === 1;
                    labels.push(formatChartLabel(m.timestamp, index, sortedMeasurements.length, isAlternate));
                    labelIndex++;
                } else {
                    labels.push('');
                }
            });
        } else {
            // For larger sets, show labels in a staggered pattern
            const maxVisibleLabels = 6;
            const step = Math.max(1, Math.floor(sortedMeasurements.length / maxVisibleLabels));
            
            sortedMeasurements.forEach((m, index) => {
                // Always show first and last
                if (index === 0) {
                    labels.push(formatChartLabel(m.timestamp, index, sortedMeasurements.length, false));
                    labelIndex++;
                } else if (index === sortedMeasurements.length - 1) {
                    const isAlternate = labelIndex % 2 === 1;
                    labels.push(formatChartLabel(m.timestamp, index, sortedMeasurements.length, isAlternate));
                } 
                // Show labels at strategic intervals with alternating pattern
                else if (index % step === 0) {
                    const isAlternate = labelIndex % 2 === 1;
                    labels.push(formatChartLabel(m.timestamp, index, sortedMeasurements.length, isAlternate));
                    labelIndex++;
                } 
                else {
                    labels.push('');
                }
            });
        }

        const data = sortedMeasurements.map(m => {
            // Convert range values to numeric for chart
            if (m.value === '<15') return 10;
            if (m.value === '15-25') return 20;
            if (m.value === '26-35') return 30;
            if (m.value === '>35') return 40;
            return parseFloat(m.value) || 0;
        });

        return {
            labels,
            datasets: [{
                data,
            }],
        };
    };

    const chartData = prepareChartData();
    const isSessionComplete = session && session.measurements.length >= session.timesOfDay.length * session.numberOfDays;

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Header navigation={navigation} />

                <View style={styles.headerContainer}>
                    <Text style={styles.pageTitle}>IOP Measurement</Text>
                    <View style={styles.petSwitchWrapper}>
                        <PetSwitch
                            text={'Select Pet'}
                            data={[...(account.pets ?? []), ...(account.sharedPets ?? [])]}
                            selectedItem={selectedPet}
                            onSwitch={(item: Pet) => {
                                setSelectedPetId(item.id);
                                setError('');
                            }}
                            switchItem="Pet"
                        />
                    </View>
                </View>

                <View style={styles.contentContainer}>
                    {!session ? (
                        // Session Setup Mode
                        <>
                            <Text style={styles.sectionTitle}>Number of Days</Text>
                            <TextInput
                                style={styles.numberInput}
                                value={numberOfDays}
                                onChangeText={setNumberOfDays}
                                placeholder="e.g., 7"
                                keyboardType="numeric"
                            />

                            <Text style={styles.sectionTitle}>Measurement Times</Text>
                            <View style={styles.timeListContainer}>
                                {timesOfDay.map((time, index) => (
                                    <View key={index} style={styles.timeItem}>
                                        <Text style={styles.timeItemText}>{formatDateTime(time)}</Text>
                                        <TouchableOpacity
                                            style={styles.removeTimeButton}
                                            onPress={() => handleRemoveTime(index)}
                                        >
                                            <Text style={styles.removeTimeButtonText}>Remove</Text>
                                        </TouchableOpacity>
                                    </View>
                                ))}
                            </View>

                            <TouchableOpacity style={styles.addTimeButton} onPress={handleAddTime}>
                                <Text style={styles.addTimeButtonText}>Add Measurement Time</Text>
                            </TouchableOpacity>

                            {error ? <Text style={styles.errorText}>{error}</Text> : null}

                            <TouchableOpacity
                                style={[
                                    styles.submitButton,
                                    (!numberOfDays || timesOfDay.length === 0) && styles.submitButtonDisabled,
                                ]}
                                onPress={handleStartSession}
                                disabled={!numberOfDays || timesOfDay.length === 0}
                            >
                                <Text style={styles.submitButtonText}>Start Measurement Period</Text>
                            </TouchableOpacity>
                        </>
                    ) : (
                        // Active Session Mode
                        <>
                            <Text style={styles.progressIndicator}>
                                Progress: {session.measurements.length} / {session.timesOfDay.length * session.numberOfDays} measurements
                            </Text>

                            {/* Graph */}
                            {session.measurements.length > 0 && (
                                <View style={styles.graphContainer} ref={graphRef} collapsable={false}>
                                    <Text style={styles.sectionTitle}>Measurement Graph</Text>
                                    <View style={styles.graphWrapper}>
                                        <LineChart
                                            data={chartData}
                                            width={width * 0.89}
                                            height={height * 0.3}
                                            chartConfig={{
                                                backgroundColor: Color.colorWhite,
                                                backgroundGradientFrom: Color.colorWhite,
                                                backgroundGradientTo: Color.colorWhite,
                                                decimalPlaces: 1,
                                                color: (opacity = 1) => `rgba(100, 149, 237, ${opacity})`,
                                                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                                                style: {
                                                    borderRadius: 16,
                                                },
                                                propsForDots: {
                                                    r: '6',
                                                    strokeWidth: '2',
                                                    stroke: Color.colorCornflowerblue,
                                                },
                                                propsForLabels: {
                                                    fontSize: 10,
                                                },
                                            }}
                                            bezier
                                            style={{
                                                marginVertical: 8,
                                                borderRadius: 16,
                                            }}
                                            withVerticalLabels={true}
                                            withHorizontalLabels={true}
                                            segments={4}
                                        />
                                    </View>
                                </View>
                            )}

                            {/* Measurement Input */}
                            <Text style={styles.sectionTitle}>Add Measurement</Text>

                            {/* Input Mode Selection */}
                            <View style={styles.inputModeContainer}>
                                <TouchableOpacity
                                    style={[
                                        styles.modeButton,
                                        inputMode === 'range' && styles.modeButtonActive,
                                    ]}
                                    onPress={() => {
                                        setInputMode('range');
                                        setManualValue('');
                                        setError('');
                                    }}
                                >
                                    <Text
                                        style={[
                                            styles.modeButtonText,
                                            inputMode === 'range' && styles.modeButtonTextActive,
                                        ]}
                                    >
                                        Range
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[
                                        styles.modeButton,
                                        inputMode === 'manual' && styles.modeButtonActive,
                                    ]}
                                    onPress={() => {
                                        setInputMode('manual');
                                        setSelectedRange('');
                                        setError('');
                                    }}
                                >
                                    <Text
                                        style={[
                                            styles.modeButtonText,
                                            inputMode === 'manual' && styles.modeButtonTextActive,
                                        ]}
                                    >
                                        Manual
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            {/* Range Selection */}
                            {inputMode === 'range' && (
                                <View style={styles.rangeContainer}>
                                    {rangeOptions.map((option) => (
                                        <TouchableOpacity
                                            key={option.value}
                                            style={[
                                                styles.rangeOption,
                                                selectedRange === option.value && styles.rangeOptionSelected,
                                            ]}
                                            onPress={() => {
                                                setSelectedRange(option.value);
                                                setError('');
                                            }}
                                        >
                                            <View
                                                style={[
                                                    styles.radioIndicator,
                                                    selectedRange === option.value
                                                        ? styles.radioIndicatorSelected
                                                        : styles.radioIndicatorUnselected,
                                                ]}
                                            />
                                            <Text style={styles.rangeOptionText}>{option.label}</Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            )}

                            {/* Manual Input */}
                            {inputMode === 'manual' && (
                                <View style={styles.manualInputContainer}>
                                    <Text style={styles.inputLabel}>IOP Value (mmHg, one decimal place)</Text>
                                    <TextInput
                                        style={styles.textInput}
                                        value={manualValue}
                                        onChangeText={handleManualInputChange}
                                        placeholder="e.g., 18.5"
                                        keyboardType="decimal-pad"
                                        maxLength={10}
                                    />
                                </View>
                            )}

                            {/* Measurement Time Selection */}
                            <Text style={styles.sectionTitle}>Measurement Time</Text>
                            <TouchableOpacity
                                style={styles.dateTimeSelector}
                                onPress={handleSelectMeasurementTime}
                            >
                                <Text style={styles.dateTimeSelectorText}>
                                    {selectedMeasurementTime
                                        ? formatDateTime(selectedMeasurementTime)
                                        : 'Select measurement time'}
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[
                                    styles.submitButton,
                                    (!getIOPMeasurement() || !selectedMeasurementTime) && styles.submitButtonDisabled,
                                ]}
                                onPress={handleAddMeasurement}
                                disabled={!getIOPMeasurement() || !selectedMeasurementTime}
                            >
                                <Text style={styles.submitButtonText}>Add Measurement</Text>
                            </TouchableOpacity>

                            {/* Measurement List */}
                            {session.measurements.length > 0 && (
                                <View style={styles.measurementListContainer}>
                                    <Text style={styles.sectionTitle}>Measurements</Text>
                                    {session.measurements
                                        .sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime())
                                        .map((measurement) => (
                                            <View key={measurement.id} style={styles.measurementItem}>
                                                <Text style={styles.measurementItemText}>
                                                    {measurement.value} mmHg - {formatDateTime(measurement.timestamp)}
                                                </Text>
                                                <TouchableOpacity
                                                    style={styles.removeMeasurementButton}
                                                    onPress={() => handleRemoveMeasurement(measurement.id)}
                                                >
                                                    <Text style={styles.removeMeasurementButtonText}>Remove</Text>
                                                </TouchableOpacity>
                                            </View>
                                        ))}
                                </View>
                            )}

                            {error ? <Text style={styles.errorText}>{error}</Text> : null}

                            {/* Send Report Button */}
                            <TouchableOpacity
                                style={[
                                    styles.submitButton,
                                    (session.measurements.length === 0) && styles.submitButtonDisabled,
                                ]}
                                onPress={handleSendReport}
                                disabled={session.measurements.length === 0}
                            >
                                <Text style={styles.submitButtonText}>Send Report to Veterinarian</Text>
                            </TouchableOpacity>
                        </>
                    )}
                </View>
            </ScrollView>

            <TopBottomBar navigation={navigation} currentScreen={ScreenEnum.IOPMeasurement} />

            <HelpButton onPress={() => setShowHelp(true)} />
            <HelpPopup
                isVisible={showHelp}
                helpText={helpText.IOPMeasurement}
                onClose={() => setShowHelp(false)}
            />

            {/* Date/Time Pickers */}
            <CustomDateTimePicker
                isVisible={showDatePicker}
                mode={datePickerMode}
                onConfirm={handleDatePickerConfirm}
                onCancel={() => {
                    setShowDatePicker(false);
                    setDatePickerMode('date');
                }}
                initialDate={tempDate}
            />

            <CustomDateTimePicker
                isVisible={showMeasurementDatePicker}
                mode="date"
                onConfirm={handleMeasurementDateConfirm}
                onCancel={() => setShowMeasurementDatePicker(false)}
                initialDate={tempMeasurementDate}
            />

            <CustomDateTimePicker
                isVisible={showMeasurementTimePicker}
                mode="time"
                onConfirm={handleMeasurementTimeConfirm}
                onCancel={() => setShowMeasurementTimePicker(false)}
                initialDate={tempMeasurementDate}
            />
        </View>
    );
};

export default IOPMeasurement;
