import { Dimensions, StyleSheet } from 'react-native';
import { Border, Color, FontFamily, FontSize } from '../GlobalStyles';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
		flex: 1,
		width: width,
		height: height,
		overflow: 'hidden',
        position: 'absolute',
	},
    opaqueBackground: {
		backgroundColor: Color.colorGainsboro_100,
		opacity: 0.5,
		height: height,
		width: width,
	},
    medicationPopup: {
        top: height * -0.85,
        height: height * 0.75,
        width: width * 0.923,
        left: width * 0.038,
    },
    topBanner: {
        borderTopLeftRadius: Border.br_31,
        borderTopRightRadius: Border.br_31,
        backgroundColor: Color.colorCornflowerblue,
        height: height * 0.079,
        width: width * 0.923,
        flexDirection: 'row'
    },
    colorIndicator: {
        top: height * 0.024,
        left: width * 0.046,
        borderRadius: Border.br_6,
        width: width * 0.067,
        height: height * 0.031,
    },
    dropdownDefault: {
        top: height * 0.014,
        left: width * 0.077,
        flexDirection: 'row',
        width: width * 0.461,
    },
    downArrow: {
        top: height * 0.0175,
        left: width * 0.025,
        borderRadius: Border.br_1,
    },
    dropdownItem: {
        backgroundColor: Color.colorCornflowerblue,
        paddingBottom: height * 0.012,
        alignItems: 'center',
    },
    closePopupContainer: {
        top: height * 0.012,
        left: width * 0.25,
    },
    closePopup: {
        width: width * 0.115,
        height: height * 0.053,
    },
    popupBody: {
        height: height * 0.9,
        backgroundColor: Color.colorFloralwhite,
        width: width * 0.923,
        borderBottomLeftRadius: Border.br_31,
        borderBottomRightRadius: Border.br_31,
        borderColor: Color.colorCornflowerblue,
        borderWidth: 3,
    },
    dateCardContainer: {
        marginTop: height * 0.01
    },
    textInput: {
        height: height * 0.12,
        borderWidth: Border.br_4,
        borderColor: Color.colorCornflowerblue,
        borderRadius: Border.br_14,
        width: width * 0.75,
        marginTop: height * 0.05,
        marginLeft: width * 0.075,
        marginBottom: height * 0.075,
        fontWeight: 700,
        fontSize: FontSize.size_base,
        color: Color.colorCornflowerblue,
        paddingLeft: width * 0.0256,
        paddingTop: height * 0.01,
    },
    instructionButtonOval: {
        borderRadius: Border.br_17,
        height: height * 0.04,
        top: height * -0.11,
        left: width * 0.06,
        width: width * 0.4,
        backgroundColor: Color.colorCornflowerblue,
    },
    reminderButtonOval: {
        borderRadius: Border.br_17,
        height: height * 0.04,
        top: height * -0.09,
        left: width * 0.06,
        width: width * 0.4,
        backgroundColor: Color.colorCornflowerblue,
    },
    buttonText: {
        top: height * -0.005,
    },
    saveButtonOval: {
        borderRadius: Border.br_17,
        height: height * 0.04,
        top: height * -0.13,
        left: width * 0.692,
        width: width * 0.19,
        backgroundColor: Color.colorCornflowerblue,
    },
    deleteButtonContainer: {
        top: height * -0.23,
        left: width * 0.6
    },
    text: {
        color: Color.colorFloralwhite,
        fontSize: FontSize.size_5xl,
        textAlign: "center",
        fontFamily: FontFamily.koulenRegular,
    },
});

export default styles;