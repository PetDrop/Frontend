import { Dimensions, StyleSheet } from 'react-native';
import { Border, Color, FontFamily, FontSize } from '../GlobalStyles';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
	/** Container **/
	container: {
		backgroundColor: Color.colorFloralwhite,
	},
	scrollContainer: {
		paddingBottom: height * 0.2,
		paddingTop: height * 0.05,
		minHeight: height * 1.1,
	},
	pageTitle: {
		fontSize: FontSize.size_17xl,
		fontFamily: FontFamily.jsMathCmbx10,
		color: Color.colorCornflowerblue,
		textAlign: 'left',
        marginLeft: width * 0.05,
	},

	headerContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},

	/** Medication Switch **/
	itemSwitchContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: Color.colorGainsboro_100,
		borderRadius: 30,
		paddingHorizontal: width * 0.05,
		paddingVertical: height * 0.005,
		alignSelf: 'flex-end',
		marginRight: width * 0.05,
	},
	switchButton: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	switchText: {
		fontSize: 30,
		fontFamily: FontFamily.koulenRegular,
		color: Color.colorCornflowerblue,
		marginLeft: width * 0.015,
	},
	/** Medication Card **/
	medicationCardContainer: {
		backgroundColor: Color.colorLightskyblue,
		marginHorizontal: width * 0.05,
		marginVertical: height * 0.015,
		borderRadius: 30,
		width: width * 0.8,
		alignSelf: 'center',
	},
	medicationHeader: {
		alignItems: 'center',
		flexDirection: 'row',
		paddingVertical: height * 0.01,
		backgroundColor: Color.colorCornflowerblue,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
	},
	medicationInnerHeader: {
		alignItems: 'center',
		flexDirection: 'row',
		width: width * 0.7
	},
	medicationTitle: {
		fontSize: 22,
		fontFamily: FontFamily.koulenRegular,
		color: Color.colorFloralwhite,
	},
	editIcon: {
		width: width * 0.06,
		height: height * 0.03,
	},
	medicationBody: {
		padding: width * 0.04,
		backgroundColor: Color.colorLightskyblue,
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30,
	},
	medicationText: {
		fontSize: 18,
		fontFamily: FontFamily.koulenRegular,
		color: Color.colorFloralwhite,
		marginBottom: height * 0.003,
	},

	/** Medication Indicator **/
	medicationColor: {
		width: width * 0.06,
		height: width * 0.06,
		borderRadius: 8,
		marginLeft: width * 0.05,
		marginRight: width * 0.03,
	},

	/** Add Medication Button **/
	addMedicationButton: {
		marginTop: height * 0.01,
		marginLeft: width * 0.1,
	},

	/** Item Switch Modal */
	modalOverlay: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		justifyContent: 'center',
		alignItems: 'center',
	},
	modalContainer: {
		width: width * 0.75,
		backgroundColor: Color.colorFloralwhite,
		borderRadius: Border.br_xl,
		padding: width * 0.05,
		alignItems: 'center',
	},
	modalTitle: {
		fontSize: FontSize.size_5xl,
		fontFamily: FontFamily.jsMathCmbx10,
		color: Color.colorCornflowerblue,
		marginBottom: height * 0.02,
	},
	itemOption: {
		paddingVertical: height * 0.015,
		width: '100%',
		alignItems: 'center',
	},
	selectedItemOption: {
		backgroundColor: Color.colorLightskyblue,
	},
	itemOptionText: {
		fontSize: FontSize.size_xl,
		fontFamily: FontFamily.koulenRegular,
		color: Color.colorCornflowerblue,
	},
	closeButton: {
		marginTop: height * 0.02,
		backgroundColor: Color.colorCornflowerblue,
		borderRadius: Border.br_xl,
		paddingVertical: height * 0.015,
		width: '80%',
		alignItems: 'center',
	},
	closeButtonText: {
		fontSize: FontSize.size_xl,
		fontFamily: FontFamily.koulenRegular,
		color: Color.colorFloralwhite,
	},

	/** Item Image in Switch */
	itemImage: {
		width: width * 0.1,
		height: width * 0.1,
	},
	imageOutline: {
		width: width * 0.12,
		height: width * 0.12,
		borderWidth: 4,
		borderColor: Color.colorLightskyblue,
		borderRadius: Border.br_10xs_5
	},
});

export default styles;
