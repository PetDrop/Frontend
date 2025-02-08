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
import { Border, Color, FontFamily, FontSize } from '../GlobalStyles';
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
					<View style={styles.login}>
						<Pressable
							style={styles.login1}>
							<Text style={styles.login1Typo}>Login</Text>
						</Pressable>
						<Image
							style={[styles.dogImage]}
							contentFit="cover"
							source={require('../assets/blue_dog_big.png')}
						/>
						<BlueCircleBig
							style={styles.blueCircle}
							width={width * 0.3744}
							height={height * 0.173}
						/>
						<View style={styles.loginChild} />

						{/* Username Field */}
						<Text
							style={[styles.usernameEMail, styles.passwordTypo]}>
							Username / E-mail:
						</Text>
						<TextInput
							style={[styles.input, styles.loginInner]}
							value={username}
							onChangeText={setUsername}
							placeholder="Someone@something.com"
							placeholderTextColor="#A9A9A9"
						/>

						{/* Password Field */}
						<Text style={[styles.password, styles.passwordTypo]}>
							Password:
						</Text>
						<TextInput
							style={[styles.input, styles.loginItem]}
							value={password}
							onChangeText={setPassword}
							placeholder="Enter your password"
							placeholderTextColor="#A9A9A9"
							secureTextEntry={true}
						/>

						<Text style={styles.forgotPassword}>
							Forgot Password?
						</Text>
						<Pressable style={styles.rememberMeContainer} onPress={() => setRememberMe(!rememberMe)}>
  <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]} />
  <Text style={styles.rememberMeText}>Remember me</Text>
</Pressable>

            <View style={styles.buttonRow}>
							<Pressable
								style={styles.button}
								onPress={() => {
									props.navigation.navigate('SignUp');
								}}>
								<Text style={styles.buttonText}>Sign Up</Text>
							</Pressable>

							<Pressable
								style={styles.button}
								onPress={() => {
								props.navigation.navigate('Home');
							}}>
								<Text style={styles.buttonText}>Submit</Text>
							</Pressable>
						</View>

						<Text style={[styles.petdrop, styles.petDropTypo]}>
							petdrop.
						</Text>
						<Text style={styles.neverMissA}>
							NEVER MISS A DROP.
						</Text>
					</View>
				</ScrollView>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	scrollContainer: {
		flexGrow: 1,
	},
	dogImage: {
		top: height * 0.1777,
		left: width * 0.3825,
		height: height * 0.1517,
		width: width * 0.2462,
		position: 'absolute',
	},
	blueCircle: {
		top: height * 0.154,
		left: width * 0.3125,
	},
	login1Typo: {
		textAlign: 'center',
		left: width * 0.02,
		color: Color.colorCornflowerblue,
		fontFamily: FontFamily.jsMathCmbx10,
		position: 'absolute',
		fontSize: 45,
	},
	petDropTypo: {
		textAlign: 'left',
		color: Color.colorCornflowerblue,
		fontFamily: FontFamily.jsMathCmbx10,
		position: 'absolute',
	},
	loginLayout: {
		height: height * 0.0592,
		width: width * 0.7538,
		borderRadius: Border.br_sm,
		left: width * 0.1231,
		position: 'absolute',
		backgroundColor: Color.colorFloralwhite,
	},
	passwordTypo: {
		height: height * 0.025,
		color: Color.colorDarkslateblue,
		fontFamily: FontFamily.koulenRegular,
		fontSize: 18,
    width: width * 0.7538,
		left: width * 0.1231,
		textAlign: 'left',
		position: 'absolute',
	},
	signUpTypo: {
		textAlign: 'center',
		width: width * 0.2385,
		height: height * 0.0201,
		color: Color.colorDarkslateblue,
		fontFamily: FontFamily.koulenRegular,
		fontSize: FontSize.size_smi,
		position: 'absolute',
	},
	login1: {
		top: height * 0.3436,
		left: width * 0.359,
	},
	loginChild: {
		top: height * 0.4123,
		left: width * 0.0538,
		borderRadius: Border.br_12xl,
		backgroundColor: Color.colorLightskyblue,
		width: width * 0.8897,
		height: height * 0.3306,
		position: 'absolute',
	},
	loginItem: {
		top: height * 0.5806,
	},
	loginInner: {
		top: height * 0.4834,
	},
	usernameEMail: {
		top: height * 0.4514,
		width: width * 0.2256,
	},
	password: {
		top: height * 0.5486,
		width: width * 0.1333,
	},
	forgotPassword: {
		top: height * 0.481,
		width: width * 0.3,
		left: width * 0.375,
		height: height * 0.201,
		color: Color.colorDarkslateblue,
		fontFamily: FontFamily.koulenRegular,
		fontSize: 18,
		textAlign: 'left',
	},
	rememberMe: {
		top: height * 0.6789,
		left: width * 0.3821,
		justifyContent: 'center',
		alignItems: 'center',
	},
	signUp: {
		top: height * 0.705,
		left: width * 0.3821,
		textAlign: 'center',
	},
	petdrop: {
		top: height * 0.859,
		left: width * 0.0744,
		fontSize: FontSize.size_45xl,
		width: width * 0.8769,
		height: height * 0.1327,
	},
	neverMissA: {
		top: height * 0.9301,
		left: width * 0.1487,
		fontFamily: FontFamily.koulenRegular,
		fontSize: FontSize.size_smi,
		textAlign: 'left',
		color: Color.colorCornflowerblue,
		position: 'absolute',
	},
	login: {
		flex: 1,
		width: width,
		height: height,
		overflow: 'hidden',
		backgroundColor: Color.colorFloralwhite,
	},
	input: {
		height: height * 0.0592,
		width: width * 0.7538,
		borderRadius: Border.br_sm,
		left: width * 0.1231,
		position: 'absolute',
		backgroundColor: Color.colorFloralwhite,
		paddingHorizontal: 10,
		fontSize: FontSize.size_smi,
		color: Color.colorDarkslateblue,
	},
  buttonRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignSelf: 'center',
    top: height * 0.35,
    gap: width * 0.05, // Adjust this value to increase spacing

	},
	button: {
		width: width * 0.3, // More rectangular
		height: height * 0.07, // Slightly less tall
		backgroundColor: Color.colorLightskyblue,
		borderRadius: Border.br_sm,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonText: {
		color: 'black',
		fontSize: 18,
		fontFamily: FontFamily.koulenRegular,
	},
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    top: height * 0.325, // Adjust as needed
    left: width * 0.375,
    width: width * 0.25, // Adjust as needed
  },
  checkbox: {
    width: 20, // Adjust size if needed
    height: 20,
    borderWidth: 2,
    marginRight: 10,
    borderColor: Color.colorDarkslateblue,
    borderRadius: 4,
  },
  checkboxChecked: {
    backgroundColor: Color.colorCornflowerblue, // Change to the theme color
  },
  rememberMeText: {
    color: Color.colorDarkslateblue,
    fontSize: 18,
    fontFamily: FontFamily.koulenRegular,
  }

});

export default Login;
