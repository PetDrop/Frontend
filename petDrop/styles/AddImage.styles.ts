import { Dimensions, StyleSheet } from 'react-native';
import { Border, Color, FontFamily, FontSize } from '../GlobalStyles';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    outerCircle: {
        width: (width * 0.3744),
        height: (height * 0.173),
    },
    plusSign: {
        marginTop: height * -0.105,
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
    imageContainer: {
        top: height * -0.173,
    },
});

export default styles;