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
	headerContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
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
		marginTop: height * 0.01,
		marginLeft: width * 0.1,
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
	innerHeader: {
		alignItems: 'center',
		flexDirection: 'row',
		width: width * 0.7
	},
	editIcon: {
		width: width * 0.06,
		height: height * 0.03,
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
});

export default styles;
