import { Dimensions, StyleSheet } from 'react-native';
import { Border, Color, FontFamily, FontSize } from '../GlobalStyles';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    addButton: {
        backgroundColor: Color.colorCornflowerblue,
        borderRadius: Border.br_xl,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: height * 0.02,
        width: width * 0.2,
        marginLeft: width * 0.1,
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: FontSize.size_5xl,
        fontFamily: FontFamily.koulenRegular,
        color: Color.colorFloralwhite,
    }
});

export default styles;