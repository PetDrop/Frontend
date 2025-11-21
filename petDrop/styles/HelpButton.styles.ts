import { Dimensions, StyleSheet } from 'react-native';
import { Color, FontFamily, FontSize } from '../GlobalStyles';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    helpButton: {
        position: 'absolute',
        top: height * 0.05,
        right: width * 0.05,
        width: width * 0.1,
        height: width * 0.1,
        borderRadius: width * 0.05,
        backgroundColor: Color.colorCornflowerblue,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    helpButtonInPopup: {
        position: 'absolute',
        top: height * 0.015,
        right: width * 0.15,
        width: width * 0.1,
        height: width * 0.1,
        borderRadius: width * 0.05,
        backgroundColor: Color.colorCornflowerblue,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 10,
    },
    helpButtonText: {
        color: Color.colorWhite,
        fontSize: FontSize.size_5xl,
        fontFamily: FontFamily.koulenRegular,
        fontWeight: 'bold',
    },
});

export default styles;

