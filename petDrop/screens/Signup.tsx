import * as React from 'react';
import { useState } from 'react';
import {
    Dimensions,
    Image,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import { Border, Color, FontFamily } from '../GlobalStyles';
import BlueCircleBig from '../assets/blue_circle_big.svg';
import { ADD_ACCOUNT, VALIDATE_SIGNUP, httpRequest } from '../data/endpoints';
import { Account } from '../data/dataTypes';
import { NavigationProp } from '@react-navigation/native';
import { useAccount } from '../context/AccountContext';

const { width, height } = Dimensions.get('window');

type SignupType = {
    navigation: NavigationProp<any>;
};

const Signup = ({ navigation }: SignupType) => {
    const { account, setAccount } = useAccount();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [termsOfService, setTermsOfService] = useState(false);
    const [privacyPolicy, setPrivacyPolicy] = useState(false);
    const [dataUsage, setDataUsage] = useState(false);

    const ObjectID = require('bson-objectid');

    // Validation regex patterns
    const emailPattern = /^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    const passwordPattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,30}$/;
    const usernamePattern = /^[A-Za-z].*/;

    /* Validates email format */
    const validateEmail = (email: string): boolean => {
        return emailPattern.test(email);
    };

    /* Validates password requirements */
    const validatePassword = (password: string): boolean => {
        return passwordPattern.test(password);
    };

    /* Validates username format */
    const validateUsername = (username: string): boolean => {
        return usernamePattern.test(username);
    };

    /* Validates all input fields client-side */
    const validateInputs = (): string | null => {
        // Check if fields are empty
        if (username.trim() === '' || email.trim() === '' || password === '') {
            return 'Must enter username, email, and password';
        }

        // Validate username format
        if (!validateUsername(username)) {
            return 'Username must begin with a letter';
        }

        // Validate email format
        if (!validateEmail(email)) {
            return 'Please enter a valid email address';
        }

        // Validate password requirements
        if (!validatePassword(password)) {
            return 'Password must be 8-30 characters with at least one number, one lowercase letter, and one uppercase letter';
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            return 'Passwords must match';
        }

        return null;
    };

    /* Checks if username or email already exists */
    const checkUniqueness = async (): Promise<string | null> => {
        try {
            const response = await fetch(
                `${VALIDATE_SIGNUP}?username=${encodeURIComponent(username)}&email=${encodeURIComponent(email)}`,
                {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                }
            );

            const data = await response.json();

            if (!data.valid && data.errors) {
                const errors = [];
                if (data.errors.username) errors.push(data.errors.username);
                if (data.errors.email) errors.push(data.errors.email);
                return errors.join('\n');
            }

            return null;
        } catch (error) {
            console.error('Error checking uniqueness:', error);
            return 'Unable to verify username/email. Please try again.';
        }
    };

    /* handles submit button being pressed
        and checks to make sure all fields have something entered
        as well as the passwords matching, then calls the write 
    */
    const Submit = async () => {
        // First, validate inputs client-side
        const validationError = validateInputs();
        if (validationError) {
            alert(validationError);
            return;
        }

        // Then check uniqueness with the backend
        const uniquenessError = await checkUniqueness();
        if (uniquenessError) {
            alert(uniquenessError);
            return;
        }

        // If all validations pass, proceed to create account
        WriteToDB();
    };

    /* creates new account with the information provided -
        navigates on success, alerts on failure */
    const WriteToDB = async () => {
        try {
            const response = await httpRequest(ADD_ACCOUNT, 'POST', JSON.stringify({
                id: ObjectID(),
                username: username,
                email: email,
                password: password,
                sharedUsers: [],
                usersSharedWith: [],
                pets: [],
                sharedPets: [],
                image: ''
            }), false);
            
            if (response.ok) {
                // if account successfully created, navigate to profile page for additional info, and pass the account along
                setAccount(await response.json());
                navigation.navigate('Home');
            } else {
                // Try to parse error response
                try {
                    const errorData = await response.json();
                    if (errorData.errors) {
                        const errors = [];
                        if (errorData.errors.username) errors.push(errorData.errors.username);
                        if (errorData.errors.email) errors.push(errorData.errors.email);
                        if (errorData.errors.password) errors.push(errorData.errors.password);
                        alert(errors.join('\n'));
                    } else {
                        alert('Submission failed. Please try again.');
                    }
                } catch {
                    console.log('unable to write account to database: status code ' + response.status);
                    alert('Submission failed. Please try again.');
                }
            }
        } catch (error) {
            console.error(error);
            alert('Network error. Please try again.');
        }
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView
                    contentContainerStyle={styles.scrollContainer}
                    keyboardShouldPersistTaps="handled">
                    <View>
                        <Image
                            style={styles.dogImage}
                            source={require('../assets/blue_dog_big.png')}
                        />
                        {/* Blue Circle */}
                        <BlueCircleBig
                            style={styles.blueCircle}
                            width={width * 0.3744}
                            height={height * 0.173}
                        />

                        <Text style={styles.signupText}>Sign Up</Text>
                    </View>

                    <View style={styles.blueContainer}>
                        <Text style={styles.inputLabel}>Username:</Text>
                        <TextInput
                            style={styles.inputField}
                            placeholder="Choose a username"
                            placeholderTextColor="#A9A9A9"
                            value={username}
                            onChangeText={setUsername}
                        />

                        <Text style={styles.inputLabel}>E-Mail:</Text>
                        <TextInput
                            style={styles.inputField}
                            placeholder="Enter your email"
                            placeholderTextColor="#A9A9A9"
                            value={email}
                            onChangeText={setEmail}
                        />
                        <Text style={styles.inputLabel}>Password:</Text>
                        <TextInput
                            style={styles.inputField}
                            placeholder="Enter your password"
                            placeholderTextColor="#A9A9A9"
                            secureTextEntry={true}
                            value={password}
                            onChangeText={setPassword}
                        />

                        <Text style={styles.inputLabel}>Re-enter Password:</Text>
                        <TextInput
                            style={styles.inputField}
                            placeholder="Re-enter your password"
                            placeholderTextColor="#A9A9A9"
                            secureTextEntry={true}
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                        />

                        <View style={styles.Checkboxes}>
                            <Pressable style={styles.checkboxContainer} onPress={() => setRememberMe(!rememberMe)}>
                                <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]} />
                                <Text style={styles.checkboxText}>Remember Me</Text>
                            </Pressable>

                            <Pressable style={styles.checkboxContainer} onPress={() => setTermsOfService(!termsOfService)}>
                                <View style={[styles.checkbox, termsOfService && styles.checkboxChecked]} />
                                <Text style={styles.checkboxText}>Accept Terms of Service</Text>
                            </Pressable>

                            <Pressable style={styles.checkboxContainer} onPress={() => setPrivacyPolicy(!privacyPolicy)}>
                                <View style={[styles.checkbox, privacyPolicy && styles.checkboxChecked]} />
                                <Text style={styles.checkboxText}>Accept Privacy Policy</Text>
                            </Pressable>

                            <Pressable style={styles.checkboxContainer} onPress={() => setDataUsage(!dataUsage)}>
                                <View style={[styles.checkbox, dataUsage && styles.checkboxChecked]} />
                                <Text style={styles.checkboxText}>Consent to PetDrop using your data</Text>
                            </Pressable>
                        </View>
                    </View>
                    <View style={styles.buttonRow}>
                        <Pressable style={styles.button} onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.buttonText}>Login</Text>
                        </Pressable>

                        <Pressable style={styles.button} onPress={Submit}>
                            <Text style={styles.buttonText}>Submit</Text>
                        </Pressable>
                    </View>
                    <Image
                        style={styles.sloganImage}
                        source={require('../assets/petdrop_slogan.png')}
                    />
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.colorFloralwhite,
    },

    scrollContainer: {
        flexGrow: 1, // Allows scrolling when content exceeds screen height
        alignItems: 'center',
        paddingBottom: height * 0.025, // Ensures extra space at the bottom
    },
    blueCircle: {
        justifyContent: 'center',
    },
    dogImage: {
        top: height * 0.17,
        left: width * 0.070,
        justifyContent: 'center',
        width: width * 0.2462,
        height: height * 0.1517,
    },
    signupText: {
        fontSize: 45, // Match the login page font size
        color: Color.colorCornflowerblue, // Match the theme
        fontFamily: FontFamily.jsMathCmbx10,
        textAlign: 'center',
        marginTop: height * 0.02, // Space between dog image and text
    },
    blueContainer: {
        width: width * 0.9, // Slightly smaller than full width
        minHeight: height * 0.3, // Enough space for input fields later
        backgroundColor: Color.colorLightskyblue, // Match the theme
        borderRadius: Border.br_31, // Rounded edges
        marginTop: height * 0.01, // Space between dog image and input fields
        alignSelf: 'stretch', // Ensures it takes the full width of parent
        flexGrow: 0.4, // Allows it to expand dynamically
        marginLeft: width * 0.05, // Center the container
    },
    inputLabel: {
        fontSize: 18,
        color: Color.colorDarkslateblue,
        fontFamily: FontFamily.koulenRegular,
        marginTop: height * 0.035,
        marginLeft: width * 0.065,
    },

    inputField: {
        width: width * 0.775,
        height: height * 0.06,
        borderRadius: Border.br_14,
        backgroundColor: Color.colorFloralwhite,
        paddingHorizontal: 10,
        fontSize: 16,
        color: Color.colorDarkslateblue,
        marginBottom: height * -0.03, // Space between fields
        marginLeft: width * 0.065,
    },
    /* Checkbox Styles */
    Checkboxes: {
        marginTop: height * 0.03,
        marginBottom: height * 0.02,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: height * 0.015,
        marginLeft: width * 0.065,
        width: width * 0.475,
    },
    checkbox: {
        width: width * 0.05,
        height: width * 0.05,
        borderWidth: 2,
        borderColor: Color.colorDarkslateblue,
        borderRadius: 4,
        marginRight: width * 0.03,
    },
    checkboxChecked: {
        backgroundColor: Color.colorCornflowerblue, // Change when checked
    },
    checkboxText: {
        fontSize: 16,
        color: Color.colorDarkslateblue,
        fontFamily: FontFamily.koulenRegular,
    },
    // BUTTON ROW STYLES
    buttonRow: {
        flexDirection: 'row', // Align buttons horizontally
        justifyContent: 'space-between', // Space between buttons
        width: width * 0.75, // Keeps buttons from being too wide
        marginTop: height * 0.03, // Space below blue container
    },

    button: {
        width: width * 0.35, // Rectangular shape
        height: height * 0.06, // Not too large
        backgroundColor: Color.colorLightskyblue, // Matching theme
        borderRadius: Border.br_14,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        fontSize: 18,
        color: 'black',
        fontFamily: FontFamily.koulenRegular,
    },
    sloganImage: {
        width: width * 0.5, // Proportional width
        height: height * 0.1, // Proportional height
        resizeMode: 'contain', // Ensures the image scales correctly
        marginTop: height * 0.02, // Space below the buttons
        alignSelf: 'flex-start',
        marginLeft: width * 0.05,
    },
});

export default Signup;
