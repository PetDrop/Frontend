import { Dimensions, StyleSheet } from 'react-native';
import { Border, Color, FontFamily, FontSize } from '../GlobalStyles';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    submitButtonContainer: {
        marginLeft: width * 0.6,
        marginTop: height * 0.04,
    },
    submitButton: {
        borderRadius: Border.br_17,
        height: height * 0.05,
        width: width * 0.275,
        backgroundColor: Color.colorCornflowerblue,
    },
    submitText: {
        marginTop: height * -0.005,
        marginLeft: width * 0.04,
        fontSize: FontSize.size_30,
        color: Color.colorFloralwhite,
        fontFamily: FontFamily.koulenRegular,
    },
});

export default styles;