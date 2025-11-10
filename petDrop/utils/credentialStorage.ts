import AsyncStorage from '@react-native-async-storage/async-storage';

// Secure password storage helper functions with runtime fallback
export const getSavedPassword = async (): Promise<string | null> => {
    try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const SecureStore = require('expo-secure-store');
        return await SecureStore.getItemAsync('savedPassword');
    } catch {
        return await AsyncStorage.getItem('savedPassword_fallback');
    }
};

export const setSavedPassword = async (value: string): Promise<void> => {
    try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const SecureStore = require('expo-secure-store');
        await SecureStore.setItemAsync('savedPassword', value);
    } catch {
        await AsyncStorage.setItem('savedPassword_fallback', value);
    }
};

export const deleteSavedPassword = async (): Promise<void> => {
    try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const SecureStore = require('expo-secure-store');
        await SecureStore.deleteItemAsync('savedPassword');
    } catch {
        await AsyncStorage.removeItem('savedPassword_fallback');
    }
};

/**
 * Gets the rememberMe preference from storage
 */
export const getRememberMePreference = async (): Promise<boolean> => {
    try {
        const storedRemember = await AsyncStorage.getItem('rememberMe');
        return storedRemember === 'true';
    } catch {
        return false;
    }
};

/**
 * Sets the rememberMe preference in storage
 */
export const setRememberMePreference = async (value: boolean): Promise<void> => {
    try {
        await AsyncStorage.setItem('rememberMe', value ? 'true' : 'false');
    } catch (e) {
        console.log('Failed to update remember-me preference');
    }
};

/**
 * Gets the saved username from storage
 */
export const getSavedUsername = async (): Promise<string | null> => {
    try {
        return await AsyncStorage.getItem('savedUsername');
    } catch {
        return null;
    }
};

/**
 * Saves credentials based on rememberMe preference
 * If rememberMe is true, saves username and password securely
 * If false, clears all saved credentials
 */
export const saveCredentials = async (
    rememberMe: boolean,
    username: string,
    password: string
): Promise<void> => {
    try {
        await setRememberMePreference(rememberMe);
        if (rememberMe) {
            await AsyncStorage.setItem('savedUsername', username);
            // Store password securely for auto-login
            await setSavedPassword(password);
        } else {
            await AsyncStorage.removeItem('savedUsername');
            await deleteSavedPassword();
        }
    } catch (e) {
        console.log('Failed to persist remember-me preference');
    }
};

/**
 * Removes the saved username from storage
 */
export const removeSavedUsername = async (): Promise<void> => {
    try {
        await AsyncStorage.removeItem('savedUsername');
    } catch (e) {
        console.log('Failed to remove saved username');
    }
};

/**
 * Clears all saved credentials
 */
export const clearCredentials = async (): Promise<void> => {
    try {
        await AsyncStorage.removeItem('savedUsername');
        await deleteSavedPassword();
        await setRememberMePreference(false);
    } catch (e) {
        console.log('Failed to clear credentials');
    }
};

