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
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import { Border, Color, FontFamily, styles } from '../GlobalStyles';
import BlueCircleBig from '../assets/blue_circle_big.svg';

const { width, height } = Dimensions.get('window');
    
type SignupType = {
	navigation: any;
};

const Signup = (props: SignupType) => {

    const [rememberMe, setRememberMe] = useState(false);
    const [termsOfService, setTermsOfService] = useState(false);
    const [privacyPolicy, setPrivacyPolicy] = useState(false);
    const [dataUsage, setDataUsage] = useState(false);

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

            <Text style={styles.loginSignupText}>Sign Up</Text>
            </View>

            <View style={styles.blueContainer}>
                <Text style={styles.inputLabel}>Username:</Text>
                <TextInput
                    style={styles.inputField}
                    placeholder="Choose a username"
                    placeholderTextColor="#A9A9A9"
                />

                <Text style={styles.inputLabel}>E-Mail:</Text>
                <TextInput
                    style={styles.inputField}
                    placeholder="Enter your email"
                    placeholderTextColor="#A9A9A9"
                />
                <Text style={styles.inputLabel}>Password:</Text>
                <TextInput
                    style={styles.inputField}
                    placeholder="Enter your password"
                    placeholderTextColor="#A9A9A9"
                    secureTextEntry={true}
                />

                <Text style={styles.inputLabel}>Re-enter Password:</Text>
                <TextInput
                    style={styles.inputField}
                    placeholder="Re-enter your password"
                    placeholderTextColor="#A9A9A9"
                    secureTextEntry={true}
                />

                <View style={styles.Checkboxes}>
                    <Pressable style={styles.signupCheckboxContainer} onPress={() => setRememberMe(!rememberMe)}>
                        <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]} />
                        <Text style={styles.checkboxText}>Remember Me</Text>
                    </Pressable>

                    <Pressable style={styles.signupCheckboxContainer} onPress={() => setTermsOfService(!termsOfService)}>
                        <View style={[styles.checkbox, termsOfService && styles.checkboxChecked]} />
                        <Text style={styles.checkboxText}>Accept Terms of Service</Text>
                    </Pressable>

                    <Pressable style={styles.signupCheckboxContainer} onPress={() => setPrivacyPolicy(!privacyPolicy)}>
                        <View style={[styles.checkbox, privacyPolicy && styles.checkboxChecked]} />
                        <Text style={styles.checkboxText}>Accept Privacy Policy</Text>
                    </Pressable>

                    <Pressable style={styles.signupCheckboxContainer} onPress={() => setDataUsage(!dataUsage)}>
                        <View style={[styles.checkbox, dataUsage && styles.checkboxChecked]} />
                        <Text style={styles.checkboxText}>Consent to PetDrop using your data</Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.buttonRow}>
                <Pressable style={styles.button} onPress={() => props.navigation.navigate('Login')}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </Pressable>

                <Pressable style={styles.button} onPress={() => props.navigation.navigate('Home')}>
                    <Text style={styles.loginButtonText}>Submit</Text>
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

export default Signup;
