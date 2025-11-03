import { Dimensions, StyleSheet } from 'react-native';
import { Border, Color, FontFamily } from '../GlobalStyles';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.colorFloralwhite,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        width: width * 0.9,
        backgroundColor: Color.colorLightskyblue,
        borderRadius: Border.br_31,
        padding: width * 0.05,
    },
    title: {
        fontSize: height * 0.035,
        color: Color.colorCornflowerblue,
        fontFamily: FontFamily.jsMathCmbx10,
        textAlign: 'center',
        marginBottom: height * 0.01,
    },
    label: {
        fontSize: height * 0.022,
        color: Color.colorDarkslateblue,
        fontFamily: FontFamily.koulenRegular,
        marginTop: height * 0.015,
    },
    input: {
        height: height * 0.06,
        borderRadius: Border.br_14,
        backgroundColor: Color.colorFloralwhite,
        paddingHorizontal: width * 0.03,
        fontSize: height * 0.02,
        color: Color.colorDarkslateblue,
        marginTop: height * 0.01,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: height * 0.02,
        gap: width * 0.03,
    },
    button: {
        flex: 1,
        height: height * 0.06,
        backgroundColor: Color.colorCornflowerblue,
        borderRadius: Border.br_14,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonDisabled: {
        opacity: 0.7,
    },
    buttonText: {
        fontSize: height * 0.022,
        color: 'white',
        fontFamily: FontFamily.koulenRegular,
    },
    secondaryButton: {
        flex: 1,
        height: height * 0.06,
        backgroundColor: Color.colorFloralwhite,
        borderRadius: Border.br_14,
        borderWidth: 2,
        borderColor: Color.colorCornflowerblue,
        justifyContent: 'center',
        alignItems: 'center',
    },
    secondaryButtonText: {
        fontSize: height * 0.022,
        color: Color.colorCornflowerblue,
        fontFamily: FontFamily.koulenRegular,
    },
});

export default styles;

