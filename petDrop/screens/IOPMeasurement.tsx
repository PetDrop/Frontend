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
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [numberOfDays, setNumberOfDays] = useState<string>('');
    const [timesOfDay, setTimesOfDay] = useState<Date[]>([]);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showStartDatePicker, setShowStartDatePicker] = useState(false);
    const [datePickerMode, setDatePickerMode] = useState<'date' | 'time'>('time');
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
        if (loadedSession) {
            // Use stored inputMode or default to 'range' for backward compatibility
            setInputMode(loadedSession.inputMode || 'range');
        }
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

    const formatTimeOnly = (date: Date): string => {
        return date.toLocaleString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
        });
    };

    const formatDateOnly = (date: Date): string => {
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
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
            Alert.alert('Error', 'Please select a pet');
            return;
        }

        if (!startDate) {
            Alert.alert('Error', 'Please select a start date');
            return;
        }

        if (!numberOfDays || parseInt(numberOfDays) <= 0) {
            Alert.alert('Error', 'Please enter a valid number of days');
            return;
        }

        if (timesOfDay.length === 0) {
            Alert.alert('Error', 'Please add at least one measurement time');
            return;
        }

        const newSession: IOPMeasurementSession = {
            petId: selectedPet.id,
            startDate: startDate,
            numberOfDays: parseInt(numberOfDays),
            timesOfDay: timesOfDay,
            inputMode: inputMode,
            measurements: [],
            isComplete: false,
        };

        await saveIOPMeasurementSession(newSession);
        setSession(newSession);
        setStartDate(null);
        setNumberOfDays('');
        setTimesOfDay([]);
    };

    const handleAddTime = () => {
        setTempDate(new Date());
        setDatePickerMode('time');
        setShowDatePicker(true);
    };

    const handleDatePickerConfirm = (date: Date) => {
        // Store only time (normalize to epoch date so it only represents time)
        const timeOnly = new Date(0); // Epoch date (1970-01-01)
        timeOnly.setHours(date.getHours());
        timeOnly.setMinutes(date.getMinutes());
        timeOnly.setSeconds(0);
        timeOnly.setMilliseconds(0);
        
        // Check if this time already exists (compare only hours and minutes)
        const timeExists = timesOfDay.some(t => 
            t.getHours() === timeOnly.getHours() && t.getMinutes() === timeOnly.getMinutes()
        );
        
        if (!timeExists) {
            setTimesOfDay([...timesOfDay, timeOnly].sort((a, b) => {
                const aMinutes = a.getHours() * 60 + a.getMinutes();
                const bMinutes = b.getHours() * 60 + b.getMinutes();
                return aMinutes - bMinutes;
            }));
        }
        setShowDatePicker(false);
    };

    const handleRemoveTime = (index: number) => {
        setTimesOfDay(timesOfDay.filter((_, i) => i !== index));
    };

    const handleAddMeasurement = async () => {
        if (!session) return;

        const measurement = getIOPMeasurement();
        if (!measurement) {
            Alert.alert('Error', 'Please enter or select an IOP measurement');
            return;
        }

        if (inputMode === 'manual') {
            if (!validateManualInput(measurement)) {
                Alert.alert('Error', 'Please enter a valid number with at most one decimal place');
                return;
            }
        }

        if (!selectedMeasurementTime) {
            Alert.alert('Error', 'Please select a measurement time');
            return;
        }

        // Check if maximum number of measurements has been reached
        const maxMeasurements = session.timesOfDay.length * session.numberOfDays;
        if (session.measurements.length >= maxMeasurements) {
            Alert.alert('Error', `Maximum number of measurements (${maxMeasurements}) has been reached`);
            return;
        }

        // Check for duplicate measurement times (same date and time)
        const duplicateMeasurement = session.measurements.find(m => {
            const mTime = m.timestamp.getTime();
            const selectedTime = selectedMeasurementTime.getTime();
            // Check if times are within the same minute (allowing for small differences)
            return Math.abs(mTime - selectedTime) < 60000; // 60000ms = 1 minute
        });
        if (duplicateMeasurement) {
            Alert.alert('Error', 'A measurement already exists at this date and time');
            return;
        }

        // Check if the selected time matches one of the allowed times of day
        const selectedHour = selectedMeasurementTime.getHours();
        const selectedMinute = selectedMeasurementTime.getMinutes();
        const timeMatches = session.timesOfDay.some(timeOfDay => {
            return timeOfDay.getHours() === selectedHour && timeOfDay.getMinutes() === selectedMinute;
        });
        if (!timeMatches) {
            const allowedTimes = session.timesOfDay.map(t => formatTimeOnly(t)).join(', ');
            Alert.alert('Error', `Measurement time must match one of the allowed times: ${allowedTimes}`);
            return;
        }

        // Check if the selected date is within the valid date range
        const startDate = new Date(session.startDate);
        startDate.setHours(0, 0, 0, 0); // Start of start date
        
        const endDate = new Date(session.startDate);
        endDate.setDate(endDate.getDate() + session.numberOfDays - 1); // Last valid day
        endDate.setHours(23, 59, 59, 999); // End of last day
        
        const selectedDate = new Date(selectedMeasurementTime);
        if (selectedDate < startDate || selectedDate > endDate) {
            const startDateStr = formatDateOnly(session.startDate);
            const endDateObj = new Date(session.startDate);
            endDateObj.setDate(endDateObj.getDate() + session.numberOfDays - 1);
            const endDateStr = formatDateOnly(endDateObj);
            Alert.alert('Error', `Measurement date must be between ${startDateStr} and ${endDateStr}`);
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

    const handleCancelSession = async () => {
        if (!session) return;

        Alert.alert(
            'Cancel Measurement Period',
            'Are you sure you want to cancel this measurement period? All measurements will be lost.',
            [
                {
                    text: 'No',
                    style: 'cancel',
                },
                {
                    text: 'Yes, Cancel',
                    style: 'destructive',
                    onPress: async () => {
                        await clearIOPMeasurementSession(session.petId);
                        setSession(null);
                        setSelectedRange('');
                        setManualValue('');
                        setSelectedMeasurementTime(null);
                        setInputMode('range');
                    },
                },
            ]
        );
    };

    const handleSendReport = async () => {
        if (!session || !selectedPet) return;

        if (session.measurements.length === 0) {
            Alert.alert('Error', 'No measurements to send');
            return;
        }

        if (!selectedPet.vet || selectedPet.vet.trim() === '') {
            Alert.alert('Error', 'Selected pet does not have a veterinarian email address');
            return;
        }

        if (!account.email || account.email.trim() === '') {
            Alert.alert('Error', 'Account email is missing');
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
                Alert.alert('Error', errorData.message || 'Failed to send IOP measurement report');
            }
        } catch (error) {
            Alert.alert('Error', 'Network error. Please try again.');
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

    const formatYAxisLabel = (value: string | number): string => {
        if (!session || session.inputMode !== 'range') {
            // For manual mode, return the numeric value as-is
            return String(value);
        }
        
        // For range mode, convert numeric values back to range labels
        // The chart may generate intermediate values, so we need to handle ranges
        const numValue = typeof value === 'number' ? value : parseFloat(String(value));
        
        // Map numeric values to range labels
        // Data points: 10 = '<15', 20 = '15-25', 30 = '26-35', 40 = '>35'
        if (isNaN(numValue)) return String(value);
        if (numValue <= 0) return '';
        if (numValue <= 15) return '<15';
        if (numValue <= 25) return '15-25';
        if (numValue <= 35) return '26-35';
        return '>35';
    };

    const chartData = prepareChartData();
    const isSessionComplete = session && session.measurements.length >= session.timesOfDay.length * session.numberOfDays;
    
    // Calculate number of segments for Y-axis based on unique range values in range mode
    const getYAxisSegments = (): number => {
        if (!session || session.inputMode !== 'range' || session.measurements.length === 0) {
            return 4; // Default for manual mode
        }
        
        // Get unique numeric values from measurements (after conversion to chart values)
        const uniqueNumericValues = new Set(
            session.measurements.map(m => {
                if (m.value === '<15') return 10;
                if (m.value === '15-25') return 20;
                if (m.value === '26-35') return 30;
                if (m.value === '>35') return 40;
                return parseFloat(m.value) || 0;
            })
        );
        
        const uniqueCount = uniqueNumericValues.size;
        
        // segments prop controls intervals: segments={N} shows N+1 labels
        // So for N unique values, we want segments={N-1}
        // Minimum 0 segments (1 label), maximum 3 segments (4 labels for all ranges)
        return Math.max(0, Math.min(3, uniqueCount - 1));
    };

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
                            }}
                            switchItem="Pet"
                        />
                    </View>
                </View>

                <View style={styles.contentContainer}>
                    {!session ? (
                        // Session Setup Mode
                        <>
                            <Text style={styles.sectionTitle}>Start Date</Text>
                            <TouchableOpacity
                                style={styles.dateTimeSelector}
                                onPress={() => {
                                    setTempDate(startDate || new Date());
                                    setShowStartDatePicker(true);
                                }}
                            >
                                <Text style={styles.dateTimeSelectorText}>
                                    {startDate
                                        ? startDate.toDateString()
                                        : 'Select start date'}
                                </Text>
                            </TouchableOpacity>

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
                                        <Text style={styles.timeItemText}>{formatTimeOnly(time)}</Text>
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

                            {/* Input Mode Selection */}
                            <Text style={styles.sectionTitle}>Input Method</Text>
                            <View style={styles.inputModeContainer}>
                                <TouchableOpacity
                                    style={[
                                        styles.modeButton,
                                        inputMode === 'range' && styles.modeButtonActive,
                                    ]}
                                    onPress={() => {
                                        setInputMode('range');
                                        setManualValue('');
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

                            <TouchableOpacity
                                style={[
                                    styles.submitButton,
                                    (!startDate || !numberOfDays || timesOfDay.length === 0) && styles.submitButtonDisabled,
                                ]}
                                onPress={handleStartSession}
                                disabled={!startDate || !numberOfDays || timesOfDay.length === 0}
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
                                            formatYLabel={formatYAxisLabel}
                                            chartConfig={{
                                                backgroundColor: Color.colorWhite,
                                                backgroundGradientFrom: Color.colorWhite,
                                                backgroundGradientTo: Color.colorWhite,
                                                decimalPlaces: session.inputMode === 'range' ? 0 : 1,
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
                                            segments={getYAxisSegments()}
                                        />
                                    </View>
                                </View>
                            )}

                            {/* Measurement Input */}
                            <Text style={styles.sectionTitle}>Add Measurement</Text>
                            <Text style={styles.inputLabel}>
                                Input Method: {inputMode === 'range' ? 'Range' : 'Manual'}
                            </Text>

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

                            {(() => {
                                const maxMeasurements = session.timesOfDay.length * session.numberOfDays;
                                const isMaxReached = session.measurements.length >= maxMeasurements;
                                const isDisabled = !getIOPMeasurement() || !selectedMeasurementTime || isMaxReached;
                                return (
                                    <TouchableOpacity
                                        style={[
                                            styles.submitButton,
                                            isDisabled && styles.submitButtonDisabled,
                                        ]}
                                        onPress={handleAddMeasurement}
                                        disabled={isDisabled}
                                    >
                                        <Text style={styles.submitButtonText}>
                                            {isMaxReached ? 'Maximum Measurements Reached' : 'Add Measurement'}
                                        </Text>
                                    </TouchableOpacity>
                                );
                            })()}

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

                            {/* Cancel Period Button */}
                            <TouchableOpacity
                                style={styles.cancelButton}
                                onPress={handleCancelSession}
                            >
                                <Text style={styles.cancelButtonText}>Cancel Measurement Period</Text>
                            </TouchableOpacity>

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
                isVisible={showStartDatePicker}
                mode="date"
                onConfirm={(date: Date) => {
                    setStartDate(date);
                    setShowStartDatePicker(false);
                }}
                onCancel={() => setShowStartDatePicker(false)}
                initialDate={tempDate}
            />

            <CustomDateTimePicker
                isVisible={showDatePicker}
                mode={datePickerMode}
                onConfirm={handleDatePickerConfirm}
                onCancel={() => {
                    setShowDatePicker(false);
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
