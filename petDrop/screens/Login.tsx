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
import { GET_ACCOUNT_BY_EMAIL, GET_ACCOUNT_BY_USERNAME, httpRequest } from '../data/endpoints';
import { Account } from '../data/dataTypes';

const { width, height } = Dimensions.get('window');

type LoginType = {
	navigation: any;
};

const Login = (props: LoginType) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);


    // populates an accounts sharedPets with all the pets shared with them
    const addSharedInfo = async (account: Account) => {
        // initialize sharedPets since it's undefined in db
        account.sharedPets = [];
        // check each account they requested info from
        account.sharedUsers.forEach(async (sharedUser) => {
            const response = await httpRequest(GET_ACCOUNT_BY_USERNAME + sharedUser, 'GET', '');
            if (response.ok) {
                // if account found check if they volunteered their info
                const sharedAccount: Account = await response.json();
                if (sharedAccount.usersSharedWith.includes(account.username)) {
                    account.sharedPets = account.sharedPets.concat(sharedAccount.pets);
                    console.log(account.sharedPets);
                }
            } else {
                console.log('could not find account with username: ' + sharedUser + '\n status code: ' + response.status);
            }
        })
    }

    /* handles submit button being pressed
        checks to make sure email and password are entered
        and that they match an account 
    */
    const Submit = async () => {
        if (username === '' || password === '') {
            alert('Must enter a username and password');
            return;
        }
        try {
            // try to find account with the email entered
            const response = await httpRequest(GET_ACCOUNT_BY_USERNAME + username, 'GET', '');
            if (response.ok) {
                // if account found check its password against the one entered
                const account: Account = await response.json();
                if (account.password === password) {
                    // if info is correct, populate the account with shared info
                    await addSharedInfo(account);
                    // navigate home and pass the account there
                    props.navigation.navigate('Home', {account: account});
                } else {
                    console.log('incorrect password for username: ' + username);
                    alert('Incorrect username or password');
                }
            } else {
                // http request failed - most likely means no account with entered email exists
                console.log('could not find account with username: ' + username + '\n status code: ' + response.status);
                alert('Incorrect username or password');
            }
        } catch (error) {
            console.error(error);
        }
    };

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
                        <Text style={styles.loginText}>Login</Text>
                    </View>

                    {/* Blue Container with Inputs */}
                    <View style={styles.blueContainer}>
                        <Text style={styles.inputLabel}>Username:</Text>
                        <TextInput
                            style={styles.inputField}
                            placeholder="Enter your username"
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
                        <Pressable style={styles.checkboxContainer} onPress={() => setRememberMe(!rememberMe)}>
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
                            <Text style={styles.buttonText}>Sign Up</Text>
                        </Pressable>

                        <Pressable style={styles.button} onPress={Submit}>
                            <Text style={styles.buttonText}>Submit</Text>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.colorFloralwhite,
    },
    scrollContainer: {
        flexGrow: 1,
        alignItems: 'center',
        paddingBottom: height * 0.025,
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
    loginText: {
        fontSize: 45,
        color: Color.colorCornflowerblue,
        fontFamily: FontFamily.jsMathCmbx10,
        textAlign: 'center',
        marginTop: height * 0.02,
    },
    blueContainer: {
        width: width * 0.9,
        backgroundColor: Color.colorLightskyblue,
        borderRadius: Border.br_12xl,
        marginTop: height * 0.01,
        alignSelf: 'stretch',
        flexGrow: 0.4,
        marginLeft: width * 0.05,
        // paddingVertical: height * 0.01,
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
        borderRadius: Border.br_sm,
        backgroundColor: Color.colorFloralwhite,
        paddingHorizontal: 10,
        fontSize: 16,
        color: Color.colorDarkslateblue,
        marginBottom: height * -0.03, // Space between fields
        marginLeft: width * 0.065,
    },

    /* Checkbox */
    checkboxContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: height * 0.05,
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
        backgroundColor: Color.colorCornflowerblue,
    },
    checkboxText: {
        fontSize: 16,
        color: Color.colorDarkslateblue,
        fontFamily: FontFamily.koulenRegular,
    },

    /* Forgot Password */
    forgotPassword: {
        fontSize: 16,
        color: Color.colorDarkslateblue,
        fontFamily: FontFamily.koulenRegular,
        textAlign: 'center',
        marginTop: height * 0.015,
    },

    /* Button Row */
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: width * 0.75,
        marginTop: height * 0.03,
    },
    button: {
        width: width * 0.35,
        height: height * 0.06,
        backgroundColor: Color.colorLightskyblue,
        borderRadius: Border.br_sm,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: 'black',
        fontFamily: FontFamily.koulenRegular,
    },

    /* Slogan Image */
    sloganImage: {
        width: width * 0.5,
        height: height * 0.1,
        resizeMode: 'contain',
        marginTop: height * 0.02,
        alignSelf: 'flex-start',
        marginLeft: width * 0.05,
    },
});

export default Login;
