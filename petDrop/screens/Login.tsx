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

type LoginType = {
	navigation: any;
};

const Login = (props: LoginType) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

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
                        <Text style={styles.loginSignupText}>Login</Text>
                    </View>

                    {/* Blue Container with Inputs */}
                    <View style={styles.blueContainer}>
                        <Text style={styles.inputLabel}>Username / E-Mail:</Text>
                        <TextInput
                            style={styles.inputField}
                            placeholder="Enter your email"
                            placeholderTextColor="#A9A9A9"
                            value={username}
                            onChangeText={setUsername}
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

                        {/* Remember Me Checkbox */}
                        <Pressable style={styles.loginCheckboxContainer} onPress={() => setRememberMe(!rememberMe)}>
                            <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]} />
                            <Text style={styles.checkboxText}>Remember Me</Text>
                        </Pressable>

                        {/* Forgot Password */}
                        <Pressable onPress={() => console.log('Forgot Password Pressed')}>
                            <Text style={styles.forgotPassword}>Forgot Password?</Text>
                        </Pressable>
                    </View>

                    {/* Buttons Row */}
                    <View style={styles.buttonRow}>
                        <Pressable style={styles.button} onPress={() => props.navigation.navigate('Signup')}>
                            <Text style={styles.loginButtonText}>Sign Up</Text>
                        </Pressable>

                        <Pressable style={styles.button} onPress={() => props.navigation.navigate('Home')}>
                            <Text style={styles.loginButtonText}>Submit</Text>
                        </Pressable>
                    </View>

                    {/* Petdrop Slogan Image */}
                    <Image
                        style={styles.sloganImage}
                        source={require('../assets/petdrop_slogan.png')}
                    />
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

export default Login;