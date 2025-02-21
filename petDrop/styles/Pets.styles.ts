import { StyleSheet, Dimensions } from 'react-native';
import { Color, FontFamily, FontSize, Border } from '../GlobalStyles';

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
	pageTitle: {
		fontSize: FontSize.size_17xl,
		fontFamily: FontFamily.jsMathCmbx10,
		color: Color.colorCornflowerblue,
		left: width * 0.1,
		marginBottom: height * 0.02,
	},
	petCard: {
		borderRadius: Border.br_3xs,
		marginHorizontal: width * 0.05, // Keep horizontal margin, reduce vertical
		paddingHorizontal: width * 0.05, // Keep padding for content
	},

	petHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	petImage: {
		width: width * 0.2,
		height: width * 0.25,
		borderRadius: Border.br_3xs,
		top: height * 0.03,
	},
	petInfo: {
		flex: 1,
		marginLeft: width * 0.1,
	},
	petName: {
		fontSize: 42,
		fontFamily: FontFamily.jsMathCmbx10,
		color: Color.colorCornflowerblue,
		paddingBottom: height * 0.01,
		marginLeft: width * -0.005,
	},
	petDetails: {
		fontSize: 15,
		fontFamily: FontFamily.koulenRegular,
		color: Color.colorCornflowerblue,
	},
	editIcon: {
		width: width * 0.07,
		height: height * 0.03,
		marginTop: height * 0.015
	},
	medicationsTitle: {
		fontSize: 32,
		fontFamily: FontFamily.jsMathCmbx10,
		color: Color.colorCornflowerblue,
		marginTop: height * 0.02,
	},
	medicationsContainer: {
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
	addPetButton: {
		backgroundColor: Color.colorCornflowerblue,
		borderRadius: Border.br_xl,
		alignItems: 'center',
		justifyContent: 'center',
		marginHorizontal: width * 0.1,
	},
	addPetText: {
		fontSize: 36,
		fontFamily: FontFamily.koulenRegular,
		color: Color.colorFloralwhite,
	},
	circleBackground: {
		position: 'absolute',
		width: width * 0.3, // Adjust size as needed
		height: width * 0.3,
		left: width * -0.06,
		top: height * 0.01,
	},

	separatorBar: {
		height: height * 0.01, // Adjust thickness
		backgroundColor: Color.colorLightskyblue, // Matches the blue theme
		width: width * 0.95, // Spans most of the screen
		alignSelf: 'center',
		marginTop: height * 0.03, // Space above bar
		borderRadius: Border.br_10xs,
		marginBottom: height * -0.06, // Space below bar
	},
	addMedicationButton: {
		left: width * -0.1,
    },
});

export default styles;
