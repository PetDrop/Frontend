import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    newPetButtonGroupParent: {
        top: (height * 0.3637),
        left: (width * 0.4513),
        height: (height * 0.325),
        width: (width * 0.1641),
        position: "absolute",
        justifyContent: "space-evenly"
      }
});

export default styles;