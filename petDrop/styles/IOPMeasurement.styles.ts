import { Dimensions, StyleSheet } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.colorFloralwhite,
    },
    scrollContainer: {
        paddingBottom: height * 0.2,
        paddingTop: height * 0.05,
    },
    headerContainer: {
        flexDirection: 'column',
        paddingHorizontal: width * 0.05,
        marginTop: height * 0.02,
        marginBottom: height * 0.02,
    },
    pageTitle: {
        fontSize: FontSize.size_30,
        fontWeight: 'bold',
        fontFamily: FontFamily.juaRegular,
        color: Color.colorCornflowerblue,
        marginBottom: height * 0.015,
    },
    petSwitchWrapper: {
        alignSelf: 'flex-start',
    },
    contentContainer: {
        paddingHorizontal: width * 0.05,
        marginTop: height * 0.03,
    },
    sectionTitle: {
        fontSize: FontSize.size_xl,
        fontWeight: 'bold',
        fontFamily: FontFamily.juaRegular,
        color: Color.colorDarkslateblue,
        marginTop: height * 0.02,
        marginBottom: height * 0.01,
    },
    inputModeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: height * 0.02,
        paddingHorizontal: width * 0.05,
    },
    modeButton: {
        paddingVertical: height * 0.015,
        paddingHorizontal: width * 0.05,
        borderRadius: Border.br_10,
        backgroundColor: Color.colorGainsboro_100,
        borderWidth: 2,
        borderColor: Color.colorGainsboro_100,
    },
    modeButtonActive: {
        backgroundColor: Color.colorCornflowerblue,
        borderColor: Color.colorCornflowerblue,
    },
    modeButtonText: {
        fontSize: FontSize.size_lg,
        fontFamily: FontFamily.juaRegular,
        color: Color.colorDarkslateblue,
    },
    modeButtonTextActive: {
        color: Color.colorWhite,
    },
    rangeContainer: {
        marginTop: height * 0.02,
    },
    rangeOption: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: height * 0.015,
        paddingHorizontal: width * 0.05,
        marginVertical: height * 0.005,
        borderRadius: Border.br_10,
        backgroundColor: Color.colorGainsboro_200,
        borderWidth: 2,
        borderColor: Color.colorGainsboro_100,
    },
    rangeOptionSelected: {
        backgroundColor: Color.colorLightskyblue,
        borderColor: Color.colorCornflowerblue,
    },
    rangeOptionText: {
        fontSize: FontSize.size_lg,
        fontFamily: FontFamily.juaRegular,
        color: Color.colorDarkslateblue,
        marginLeft: width * 0.02,
    },
    radioIndicator: {
        width: width * 0.05,
        height: width * 0.05,
        borderRadius: width * 0.025,
        borderWidth: 2,
        marginRight: width * 0.025,
    },
    radioIndicatorSelected: {
        borderColor: Color.colorCornflowerblue,
        backgroundColor: Color.colorCornflowerblue,
    },
    radioIndicatorUnselected: {
        borderColor: Color.colorGainsboro_100,
        backgroundColor: 'transparent',
    },
    manualInputContainer: {
        marginTop: height * 0.02,
    },
    inputLabel: {
        fontSize: FontSize.size_lg,
        fontFamily: FontFamily.juaRegular,
        color: Color.colorDarkslateblue,
        marginBottom: height * 0.01,
    },
    textInput: {
        borderWidth: 2,
        borderColor: Color.colorCornflowerblue,
        borderRadius: Border.br_10,
        paddingHorizontal: width * 0.04,
        paddingVertical: height * 0.015,
        fontSize: FontSize.size_lg,
        fontFamily: FontFamily.juaRegular,
        backgroundColor: Color.colorWhite,
        color: Color.colorDarkslateblue,
    },
    submitButton: {
        backgroundColor: Color.colorCornflowerblue,
        borderRadius: Border.br_10,
        paddingVertical: height * 0.02,
        paddingHorizontal: width * 0.1,
        marginTop: height * 0.04,
        alignItems: 'center',
        marginHorizontal: width * 0.05,
    },
    submitButtonDisabled: {
        backgroundColor: Color.colorGainsboro_100,
    },
    submitButtonText: {
        fontSize: FontSize.size_xl,
        fontFamily: FontFamily.juaRegular,
        color: Color.colorWhite,
        fontWeight: 'bold',
    },
    errorText: {
        fontSize: FontSize.size_base,
        fontFamily: FontFamily.juaRegular,
        color: Color.colorFirebrick,
        marginTop: height * 0.01,
        marginHorizontal: width * 0.05,
    },
});

export default styles;

