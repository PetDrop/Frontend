import { StyleSheet, View } from 'react-native';
import LoginSignup from './LoginSignup.js';

const App = () => {
  return (
    <View style={styles.container}>
      <LoginSignup/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;