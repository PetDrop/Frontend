import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  newPetButtonGroupParent: {
    top: (height * 0.38),
    left: (width * 0.4513),
    width: (width * 0.3),
    position: 'absolute',
  }
});

export default styles;