import { Dimensions, StyleSheet } from 'react-native';
import { Border, Color, FontFamily, FontSize } from '../GlobalStyles';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    opaqueBackground: {
		backgroundColor: Color.colorGainsboro_100,
		opacity: 0.5,
		height: height,
		width: width,
	},
    medicationPopup: {
        top: height * -0.756,
        height: height * 0.512,
        width: width * 0.923,
        left: width * 0.038,
    },
    topBanner: {
        borderTopLeftRadius: Border.br_12xl,
        borderTopRightRadius: Border.br_12xl,
        backgroundColor: Color.colorCornflowerblue,
        height: height * 0.079,
        width: width * 0.923,
        flexDirection: 'row'
    },
    colorIndicator: {
        top: height * 0.024,
        left: width * 0.046,
        borderRadius: Border.br_7xs,
        backgroundColor: Color.colorFirebrick,
        width: width * 0.067,
        height: height * 0.031,
    },
    medicationName: {
        top: height * 0.014,
        left: width * 0.077,
    },
    downArrow: {
        top: height * 0.031,
        left: width * 0.103,
        borderRadius: Border.br_12xs,
    },
    closePopup: {
        top: height * 0.012,
        left: width * 0.41,
        width: width * 0.115,
        height: height * 0.053,
    },
    popupBody: {
        height: height * 0.432,
        backgroundColor: Color.colorFloralwhite,
        width: width * 0.923,
        borderBottomLeftRadius: Border.br_12xl,
        borderBottomRightRadius: Border.br_12xl,
    },
    saveButtonOval: {
        borderRadius: Border.br_17,
        height: height * 0.04,
        top: height * 0.373,
        left: width * 0.692,
        width: width * 0.19,
        backgroundColor: Color.colorCornflowerblue,
    },
    saveButtonText: {
        top: height * -0.005,
        left: width * 0.046,
    },
    text: {
        color: Color.colorFloralwhite,
        fontSize: FontSize.size_5xl,
        textAlign: "left",
        fontFamily: FontFamily.koulenRegular,
    },
});

export default styles;