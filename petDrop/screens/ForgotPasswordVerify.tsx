import * as React from 'react';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, Text, TextInput, View, Pressable } from 'react-native';
import { RESET_PASSWORD, httpRequest } from '../data/endpoints';
import styles from '../styles/ForgotPasswordVerify.styles';

type ScreenProps = {
    navigation: any;
    route: { params?: { email?: string } };
};

const ForgotPasswordVerify = ({ navigation, route }: ScreenProps) => {
    const initialEmail = route?.params?.email ?? '';
    const [email, setEmail] = useState(initialEmail);
    const [code, setCode] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [loading, setLoading] = useState(false);

    const submit = async () => {
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Enter a valid email');
            return;
        }
        if (!/^\d{6}$/.test(code)) {
            alert('Enter the 6-digit code');
            return;
        }
        if (!password || password.length < 8) {
            alert('Password must be at least 8 characters');
            return;
        }
        if (password !== confirm) {
            alert('Passwords do not match');
            return;
        }
        setLoading(true);
        try {
            const resp = await httpRequest(RESET_PASSWORD, 'POST', JSON.stringify({ email, code, newPassword: password }), true);
            if (resp.ok) {
                navigation.navigate('Login');
            }
        } catch (e) {
            // httpRequest already alerted
        } finally {
            setLoading(false);
        }
    };

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>Enter code</Text>
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
                <Text style={styles.label}>6-digit code</Text>
                <TextInput
                    style={styles.input}
                    placeholder="123456"
                    placeholderTextColor="#A9A9A9"
                    keyboardType="number-pad"
                    maxLength={6}
                    value={code}
                    onChangeText={setCode}
                />
                <Text style={styles.label}>New password</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter new password"
                    placeholderTextColor="#A9A9A9"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <Text style={styles.label}>Confirm password</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Confirm new password"
                    placeholderTextColor="#A9A9A9"
                    secureTextEntry
                    value={confirm}
                    onChangeText={setConfirm}
                />
                <View style={styles.buttonRow}>
                    <Pressable style={styles.secondaryButton} onPress={() => navigation.goBack()}>
                        <Text style={styles.secondaryButtonText}>Back</Text>
                    </Pressable>
                    <Pressable style={[styles.button, loading && styles.buttonDisabled]} onPress={submit} disabled={loading}>
                        <Text style={styles.buttonText}>{loading ? 'Resetting…' : 'Reset password'}</Text>
                    </Pressable>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};
export default ForgotPasswordVerify;


