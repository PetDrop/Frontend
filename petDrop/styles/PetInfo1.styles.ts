import { Dimensions, StyleSheet } from 'react-native';
import { Color, FontFamily, FontSize, Border } from '../GlobalStyles';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    outermostView: {
        flex: 1,
        width: width,
        height: height,
        overflow: "hidden",
        backgroundColor: Color.colorFloralwhite,
    },
    scrollContainer: {
        paddingBottom: height * 0.5,
    },
    nameTypo: {
        textAlign: "left",
        fontFamily: FontFamily.jsMathCmbx10,
        color: Color.colorCornflowerblue,
    },
    addPetTypo: {
        fontSize: FontSize.size_5xl,
        textAlign: "left",
        color: Color.colorCornflowerblue,
        fontFamily: FontFamily.jsMathCmbx10,
        position: "absolute",
    },
    petInfo1Name: {
        top: (height * 0.32),
        left: (width * 0.4513),
        fontSize: FontSize.size_17xl,
        width: (width * 0.3026),
        height: (height * 0.0509),
        position: 'absolute',
    },
    petInfo1Medications: {
        top: (height * 0.54),
        left: (width * 0.0538),
    },
    addMedicationButton: {
        height: (height * 0.05),
        left: (width * 0.0564),
        width: (width * 0.1026),
    },
    petInfo1AddPet: {
        top: (height * 0.2227),
        width: (width * 0.4641),
        left: (width * 0.0564),
    },
    logoImageContainer: {
        marginTop: height * 0.05
    },
    addImageContainer: {
        marginTop: height * 0.09,
        marginLeft: width * 0.0282,
    },
    medicationList: {
        marginTop: height * 0.2,
        marginLeft: width * 0.05
    },
	medicationItem: {
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: height * 0.005,
	},
	medicationIndicator: {
		width: width * 0.03,
		height: width * 0.03,
		borderRadius: Border.br_10xs,
		marginRight: width * 0.02,
	},
	medicationText: {
		fontSize: 18,
		fontFamily: FontFamily.koulenRegular,
		color: Color.colorCornflowerblue,
	},
    submitButtonContainer: {
        marginTop: height * 0.875,
        marginLeft: width * 0.65,
        position: 'absolute',
    },
});

export default styles;