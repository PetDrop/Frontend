import { Dimensions, StyleSheet } from 'react-native';
import { Border, Color, FontFamily, FontSize } from '../GlobalStyles';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: width,
		height: height,
		overflow: 'hidden',
		backgroundColor: Color.colorFloralwhite,
	},
    scrollContainer: {
        paddingBottom: height * 0.1,
    },

    // top of screen banner
    banner: {
        height: height * 0.0735,
        backgroundColor: Color.colorLightskyblue,
    },

    // 'profile' title
    title: {
        marginLeft: width * 0.0564,
        fontSize: FontSize.size_17xl,
        color: Color.colorCornflowerblue,
        fontFamily: FontFamily.jsMathCmbx10,
    },

    // add picture
    addPictureContainer: {
        marginLeft: width * 0.54,
        marginBottom: height * 0.02,
        width: width * 0.3744,
        height: height * 0.173,
    },

    // user's name
    nameHeading: {
        marginLeft: width * 0.1385,
        fontSize: FontSize.size_40,
        color: Color.colorCornflowerblue,
        fontFamily: FontFamily.jsMathCmbx10,
    },

    // text inputs
    textInput: {
        height: height * 0.06,
        borderWidth: Border.br_9xs,
        borderColor: Color.colorCornflowerblue,
        borderRadius: Border.br_sm,
        width: width * 0.75,
        marginBottom: height * 0.03,
        marginLeft: width * 0.1282,
        fontWeight: 700,
        color: Color.colorCornflowerblue,
        paddingLeft: width * 0.0256,
    },
    inputHeading: {
        color: Color.colorCornflowerblue,
        fontFamily: FontFamily.jsMathCmbx10,
        fontSize: FontSize.size_5xl,
        marginLeft: width * 0.1282,
    },

    // add button
    addButtonContainer: {
        marginLeft: width * 0.625,
        marginTop: height * -0.02,
    },

    // submit button
    saveChangesButtonContainer: {
        marginLeft: width * 0.5,
        marginTop: height * 0.04,
    },
    saveChangesButton: {
        borderRadius: Border.br_17,
        height: height * 0.05,
        width: width * 0.275,
        backgroundColor: Color.colorCornflowerblue,
    },
    submitText: {
        marginTop: height * -0.005,
        marginLeft: width * 0.04,
        fontSize: FontSize.size_30,
        color: Color.colorFloralwhite,
        fontFamily: FontFamily.koulenRegular,
    },
});

export default styles;