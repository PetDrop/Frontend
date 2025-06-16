import { Dimensions, StyleSheet } from 'react-native';
import { Border, Color, FontFamily, FontSize } from '../GlobalStyles';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    periodCard: {
        paddingBottom: height * 0.01,
        borderRadius: Border.br_30,
        borderWidth: 3,
        borderColor: Color.colorCornflowerblue,
        width: width * 0.8,
        marginLeft: width * 0.03,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    dateText: {
        color: Color.colorCornflowerblue,
        fontSize: FontSize.size_5xl,
        textAlign: "center",
        fontFamily: FontFamily.koulenRegular,
    },
});

export default styles;