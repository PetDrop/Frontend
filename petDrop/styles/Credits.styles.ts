import { Dimensions, StyleSheet } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.colorFloralwhite,
        alignItems: 'center'
    },
    header: {
        fontSize: FontSize.size_30,
        fontWeight: 'bold',
        fontFamily: FontFamily.juaRegular,
        color: Color.colorCornflowerblue,
        marginTop: height * 0.13,
    },
    card: {
        width: width * 0.8,
        height: height * 0.6,
        marginTop: height * 0.035,
        marginHorizontal: width * 0.1,
        borderRadius: Border.br_14,
        backgroundColor: Color.colorGainsboro_200,
        alignItems: 'center',
    },
    image: {
        width: '40%',
        height: '28%',
        marginVertical: height * 0.015,
    },
    name: {
        marginTop: height * 0.025,
        marginHorizontal: width * 0.05,
        fontSize: FontSize.size_30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    title: {
        marginHorizontal: width * 0.05,
        fontSize: FontSize.size_30,
        textAlign: 'center',
    },
    description: {
        marginHorizontal: width * 0.05,
        fontSize: FontSize.size_xl,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    pagination: {
      flexDirection: 'row',
      justifyContent: 'center',
      top: height * -0.16,
    },
    dot: {
      height: height * 0.01,
      width: width * 0.02,
      borderRadius: Border.br_4,
      backgroundColor: '#333',
      marginHorizontal: width * 0.01,
    },
});

export default styles;