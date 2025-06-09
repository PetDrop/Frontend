import { Dimensions, StyleSheet } from 'react-native';
import { Border, Color, FontFamily, FontSize } from '../GlobalStyles';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    imageOutline: {
        position: 'absolute',
        width: (width * 0.375),
        height: (height * 0.173),
        borderWidth: 10,
        borderColor: Color.colorLightskyblue,
        borderRadius: Border.br_12xl,
    },
    plusSign: {
        marginTop: height * 0.05,
        marginLeft: width * 0.1425
    },
    rotate90: {
        transform: [
            {
                rotate: "-90deg",
            },
        ],
    },
    plusSignLine: {
        top: (height * 0.0154),
        height: (height * 0.0083),
        backgroundColor: Color.colorCornflowerblue,
        borderRadius: Border.br_8xs_9,
        width: (width * 0.0846),
        position: "absolute",
    },
    addImageText: {
        fontFamily: FontFamily.jsMathCmbx10,
        color: Color.colorCornflowerblue,
        fontWeight: 'bold',
        top: height * 0.05,
        left: width * -0.055,
    },
    image: {
        width: width * 0.325,
        height: height * 0.15,
        top: height * 0.012,
        left: width * 0.025
    },
});

export default styles;