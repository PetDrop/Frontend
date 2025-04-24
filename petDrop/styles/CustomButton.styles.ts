import { Dimensions, StyleSheet } from 'react-native';
import { Border, Color, FontFamily, FontSize } from '../GlobalStyles';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    customButtonContainer: {
        marginLeft: width * 0.6,
        marginTop: height * 0.04,
    },
    customButton: {
        borderRadius: Border.br_17,
        height: height * 0.05,
        backgroundColor: Color.colorCornflowerblue,
    },
    customText: {
        marginTop: height * -0.005,
        marginLeft: width * 0.04,
        fontSize: FontSize.size_30,
        color: Color.colorFloralwhite,
        fontFamily: FontFamily.koulenRegular,
    },
});

export default styles;