import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const LoginSignup = (setPage) => {
    const [signIn, setSignIn] = useState('true');

    const changeView = () => {
        setSignIn(!signIn);
    }

    const textBoxes = 
    <View style={styles.textContainer}>
        <View style={styles.textBox}>
            <TextInput placeholder='email' style={styles.text} autoCapitalize='none'></TextInput>
        </View>
        <View style={styles.textBox}>
            <TextInput placeholder='password' secureTextEntry='true' style={styles.text} autoCapitalize='none'></TextInput>
        </View>
    </View>;

    if (signIn) {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Sign In</Text>
                {textBoxes}
                <Button title='Sign in' onPress={setPage('HomePage')}/>
                <Button title='Sign up' onPress={changeView}/>
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Sign Up</Text>
                {textBoxes}
                <Button title='Create account' onPress={changeView}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textBox: {
        width: 300,
        height: 50,
        borderWidth: 1,
        borderColor: 'black',
        borderCurve: 'circular',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 25,
    },
    heading: {
        fontSize: 50,
        fontWeight: '300',
    },
    textContainer: {
        justifyContent: 'space-evenly',
        height: 150
    },
    container: {
        height: 300,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
});

export default LoginSignup;