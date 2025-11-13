import * as React from 'react';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, Text, TextInput, View, Pressable } from 'react-native';
import { FORGOT_PASSWORD, httpRequest } from '../data/endpoints';
import styles from '../styles/ForgotPasswordRequest.styles';
import HelpButton from '../components/HelpButton';
import HelpPopup from '../components/HelpPopup';
import { helpText } from '../data/helpText';

type ScreenProps = {
    navigation: any;
};

const ForgotPasswordRequest = ({ navigation }: ScreenProps) => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [showHelp, setShowHelp] = useState(false);

    const submit = async () => {
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Enter a valid email');
            return;
        }
        setLoading(true);
        try {
            await httpRequest(FORGOT_PASSWORD, 'POST', JSON.stringify({ email }), false);
            navigation.navigate('ForgotPasswordVerify', { email });
        } catch (e) {
            // httpRequest already alerted
        } finally {
            setLoading(false);
        }
    };

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Reset password</Text>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your email"
                    placeholderTextColor="#A9A9A9"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={setEmail}
                />
                <View style={styles.buttonRow}>
                    <Pressable style={styles.secondaryButton} onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.secondaryButtonText}>Cancel</Text>
                    </Pressable>
                    <Pressable style={[styles.button, loading && styles.buttonDisabled]} onPress={submit} disabled={loading}>
                        <Text style={styles.buttonText}>{loading ? 'Sending…' : 'Send code'}</Text>
                    </Pressable>
                </View>
            </View>
            <HelpButton onPress={() => setShowHelp(true)} />
            <HelpPopup
                isVisible={showHelp}
                helpText={helpText.ForgotPasswordRequest}
                onClose={() => setShowHelp(false)}
            />
        </KeyboardAvoidingView>
    );
};
export default ForgotPasswordRequest;


