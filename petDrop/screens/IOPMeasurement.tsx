import React, { useState, useCallback, useMemo } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, Alert, Dimensions } from 'react-native';
import { NavigationProp, useFocusEffect } from '@react-navigation/native';
import Header from '../components/Header';
import TopBottomBar from '../components/TopBottomBar';
import PetSwitch from '../components/ItemSwitch';
import { styles } from '../styles/IOPMeasurement.styles';
import { ScreenEnum, Color } from '../GlobalStyles';
import { useAccount } from '../context/AccountContext';
import { Pet, emptyPet } from '../data/dataTypes';
import { SEND_IOP_MEASUREMENT, httpRequest } from '../data/endpoints';

const { height } = Dimensions.get('window');

type IOPMeasurementProps = {
    navigation: NavigationProp<any>;
};

type InputMode = 'range' | 'manual';

const IOPMeasurement = ({ navigation }: IOPMeasurementProps) => {
    const { account } = useAccount();
    const [selectedPetId, setSelectedPetId] = useState(account.pets[0]?.id || account.sharedPets[0]?.id || '');
    const [inputMode, setInputMode] = useState<InputMode>('range');
    const [selectedRange, setSelectedRange] = useState<string>('');
    const [manualValue, setManualValue] = useState<string>('');
    const [error, setError] = useState<string>('');

    // Derive the selected pet from account whenever it changes
    const selectedPet = useMemo(() => {
        return (
            account.pets.find((p) => p.id === selectedPetId) ||
            account.sharedPets.find((p) => p.id === selectedPetId) ||
            emptyPet
        );
    }, [account, selectedPetId]);

    useFocusEffect(
        useCallback(() => {
            setSelectedPetId(account.pets[0]?.id || account.sharedPets[0]?.id || '');
        }, [])
    );

    const rangeOptions = [
        { label: '<15 mmHg', value: '<15' },
        { label: '15-25 mmHg', value: '15-25' },
        { label: '26-35 mmHg', value: '26-35' },
        { label: '>35 mmHg', value: '>35' },
    ];

    const validateManualInput = (value: string): boolean => {
        // Remove any non-numeric characters except decimal point
        const cleaned = value.replace(/[^0-9.]/g, '');
        
        // Check if it's a valid number with at most one decimal place
        const regex = /^\d+(\.\d)?$/;
        if (!regex.test(cleaned)) {
            return false;
        }

        const numValue = parseFloat(cleaned);
        return !isNaN(numValue) && numValue >= 0;
    };

    const handleManualInputChange = (value: string) => {
        // Allow empty string, numbers, and one decimal point
        if (value === '' || /^\d*\.?\d*$/.test(value)) {
            // Check decimal places
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

    const handleSubmit = async () => {
        // Reset error
        setError('');

        // Validate pet selection
        if (!selectedPet || selectedPet.id === '') {
            setError('Please select a pet');
            return;
        }

        // Validate measurement input
        const measurement = getIOPMeasurement();
        if (!measurement) {
            setError('Please enter or select an IOP measurement');
            return;
        }

        // Validate manual input format if in manual mode
        if (inputMode === 'manual') {
            if (!validateManualInput(measurement)) {
                setError('Please enter a valid number with at most one decimal place');
                return;
            }
        }

        // Validate vet email exists
        if (!selectedPet.vet || selectedPet.vet.trim() === '') {
            setError('Selected pet does not have a veterinarian email address');
            return;
        }

        // Validate owner email exists
        if (!account.email || account.email.trim() === '') {
            setError('Account email is missing');
            return;
        }

        try {
            const requestBody = {
                petId: selectedPet.id,
                iopMeasurement: measurement,
                ownerEmail: account.email,
                ownerName: account.username || account.email,
            };

            const response = await httpRequest(
                SEND_IOP_MEASUREMENT,
                'POST',
                JSON.stringify(requestBody),
                false
            );

            if (response.ok) {
                // Reset form
                setSelectedRange('');
                setManualValue('');
                setError('');
                Alert.alert('Success', 'IOP measurement email sent successfully to veterinarian');
            } else {
                const errorData = await response.json().catch(() => ({}));
                setError(errorData.message || 'Failed to send IOP measurement email');
            }
        } catch (error) {
            setError('Network error. Please try again.');
            console.error('Error sending IOP measurement:', error);
        }
    };

    const isSubmitDisabled = () => {
        if (!selectedPet || selectedPet.id === '') return true;
        if (inputMode === 'range' && !selectedRange) return true;
        if (inputMode === 'manual' && !manualValue.trim()) return true;
        return false;
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
                                setError('');
                            }}
                            switchItem="Pet"
                        />
                    </View>
                </View>

                <View style={styles.contentContainer}>
                    {/* Input Mode Selection */}
                    <Text style={styles.sectionTitle}>Measurement Method</Text>
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
                            <Text style={styles.sectionTitle}>Select Range</Text>
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
                            <Text style={styles.sectionTitle}>Enter Measurement</Text>
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

                    {/* Error Message */}
                    {error ? <Text style={styles.errorText}>{error}</Text> : null}

                    {/* Submit Button */}
                    <TouchableOpacity
                        style={[
                            styles.submitButton,
                            isSubmitDisabled() && styles.submitButtonDisabled,
                        ]}
                        onPress={handleSubmit}
                        disabled={isSubmitDisabled()}
                    >
                        <Text style={styles.submitButtonText}>Send to Veterinarian</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <TopBottomBar navigation={navigation} currentScreen={ScreenEnum.IOPMeasurement} />
        </View>
    );
};

export default IOPMeasurement;

