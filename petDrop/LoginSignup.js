import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const LoginSignup = () => {
    return (
      <View style={styles.container}>
        <View style={textBox.container}>
            <TextInput placeholder='username'></TextInput>
        </View>
        <View style={{ height: 10}}></View>
        <View style={textBox.container}>
            <TextInput placeholder='password' secureTextEntry='true'></TextInput>
        </View>
        <Button title='Sign in'></Button>
      </View>
    );
}

const textBox = StyleSheet.create({
    container: {
        width: 200,
        height: 50,
        borderWidth: 1,
        borderColor: 'black',
    },
});

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
export default LoginSignup;