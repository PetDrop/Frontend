import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import LoginSignup from './LoginSignup.js';
import HomePage from './HomePage.js';

const App = () => {
const [currentPage, setCurrentPage] = useState('LoginSignup');

  const renderPage = () => {
    switch(currentPage) {
      case 'HomePage':
        return <HomePage setPage={setCurrentPage}/>
      default:
        return <LoginSignup setPage={setCurrentPage}/>
    }
  }

  return (
    <View style={styles.container}>
      {renderPage()}
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