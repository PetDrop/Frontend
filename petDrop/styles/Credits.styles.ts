import { Dimensions, StyleSheet } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.colorFloralwhite,
        alignItems: 'center'
    },
    headerWrapper: {
        marginTop: height * 0.05,
        marginLeft: width * -0.35,
    },
    header: {
        marginTop: height * -0.03,
        fontSize: FontSize.size_17xl,
        fontWeight: 'bold',
        fontFamily: FontFamily.juaRegular,
        color: Color.colorCornflowerblue,
    },
    card: {
        width: width * 0.85,
        height: height * 0.575,
        marginTop: height * 0.01,
        marginHorizontal: width * 0.075,
        borderRadius: Border.br_30,
        backgroundColor: Color.colorGainsboro_200,
        borderColor: Color.colorCornflowerblue,
        borderWidth: 3,
        alignItems: 'center',
    },
    image: {
        width: '40%',
        height: '40%',
        marginTop: height * -0.03,
        marginBottom: height * -0.03,
    },
    name: {
        marginTop: height * 0.025,
        marginHorizontal: width * 0.05,
        fontSize: FontSize.size_27,
        color: Color.colorCornflowerblue,
        fontWeight: '900',
        textAlign: 'center',
    },
    title: {
        marginHorizontal: width * 0.05,
        fontSize: FontSize.size_27,
        color: Color.colorCornflowerblue,
        fontWeight: '600',
        textAlign: 'center',
    },
    bio: {
        marginHorizontal: width * 0.025,
        fontSize: FontSize.size_smi,
        color: Color.colorCornflowerblue,
        fontWeight: '500',
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