import { Dimensions, StyleSheet } from 'react-native';
import { Border, Color, FontFamily, FontSize } from '../GlobalStyles';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingBottom: height * 0.01,
    },
    dateCard: {
        paddingBottom: height * 0.01,
        borderRadius: Border.br_30,
        borderWidth: 3,
        borderColor: Color.colorCornflowerblue,
        width: width * 0.45,
        marginLeft: width * 0.03,
    },
    dateText: {
        color: Color.colorCornflowerblue,
        fontSize: FontSize.size_5xl,
        textAlign: "center",
        fontFamily: FontFamily.koulenRegular,
    },
    checkbox: {
        width: width * 0.05, 
        height: height * 0.024, 
        borderWidth: 2, 
        borderColor: Color.colorCornflowerblue,
        marginLeft: width * 0.02,
        marginTop: height * 0.02,
    },
    checkboxText: {
        marginLeft: width * 0.02,
        marginTop: height * 0.02,
        fontSize: FontSize.size_xl,
        fontFamily: FontFamily.juaRegular,
        color: Color.colorCornflowerblue,
    },
});

export default styles;