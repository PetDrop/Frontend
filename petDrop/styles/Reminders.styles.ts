import { Dimensions, StyleSheet } from 'react-native';
import { Border, Color, FontFamily, FontSize } from '../GlobalStyles';

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
		textAlign: 'left',
        marginLeft: width * 0.05,
	},
	reminderTitle: {
		fontSize: 22,
		fontFamily: FontFamily.koulenRegular,
		color: Color.colorFloralwhite,
	},
	reminderContent: {
		fontSize: FontSize.size_smi,
		fontFamily: FontFamily.koulenRegular,
		color: Color.colorLightskyblue,
		padding: height * 0.015,
	},
	addReminderButton: {
		backgroundColor: Color.colorCornflowerblue,
		borderRadius: Border.br_xl,
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: height * 0.02,
		marginHorizontal: width * 0.1,
		marginTop: height * 0.03,
	},
	addReminderText: {
		fontSize: FontSize.size_5xl,
		fontFamily: FontFamily.koulenRegular,
		color: Color.colorFloralwhite,
	},
	cardContainer: {
		backgroundColor: Color.colorLightskyblue,
		marginHorizontal: width * 0.05,
		marginVertical: height * 0.015,
        borderRadius: 30,
        width: width * 0.8,
        alignSelf: 'center',
	},
	header: {
		alignItems: 'center',
		flexDirection: 'row',
        paddingVertical: height * 0.01,
        backgroundColor: Color.colorCornflowerblue,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
	},
	editIcon: {
		position: 'absolute', // should not be absolute, but for now it is fine ig
		width: width * 0.06,
		height: height * 0.03,
		marginLeft: width * 0.23,
		marginTop: height * -0.02,
	},
	body: {
		padding: width * 0.04,
		backgroundColor: Color.colorLightskyblue,
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30,
	},
	reminderDetails: {
		fontSize: 18,
		fontFamily: FontFamily.koulenRegular,
		color: Color.colorFloralwhite,
		marginBottom: height * 0.005,
	},
    reminderColor: {
        width: width * 0.06,
        height: width * 0.06,
        borderRadius: 8,
        marginLeft: width * 0.05,
        marginRight: width * 0.03,
    },
    addButton: {
		backgroundColor: Color.colorCornflowerblue,
		borderRadius: Border.br_xl,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: height * 0.02,
        width: width * 0.2,
        marginLeft: width * 0.1,
	},
	buttonContent: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	buttonText: {
		fontSize: FontSize.size_5xl,
		fontFamily: FontFamily.koulenRegular,
		color: Color.colorFloralwhite,
	},
});

export default styles;
