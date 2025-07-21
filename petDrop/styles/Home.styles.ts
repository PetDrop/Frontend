import { Dimensions, StyleSheet } from 'react-native';
import { Border, Color, FontFamily, FontSize } from '../GlobalStyles';
import { Theme } from 'react-native-calendars/src/types';

const { width, height } = Dimensions.get('window');

export const calendarTheme: Theme = {
	textSectionTitleColor: Color.colorDarkslateblue,
	selectedDayBackgroundColor: '#00adf5',
	selectedDayTextColor: '#ffffff',
	todayTextColor: Color.colorDarkslateblue,
	dayTextColor: Color.colorCornflowerblue,
	textDisabledColor: Color.colorLightskyblue,
	textDayFontWeight: '800',
}

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: width,
		height: height,
		overflow: 'hidden',
		backgroundColor: Color.colorFloralwhite,
	},
	/** CALENDAR */
	calendarContainer: {
		backgroundColor: Color.colorLightskyblue,
		borderRadius: Border.br_12xl,
		width: width * 0.9,
		alignSelf: 'center',
		paddingVertical: height * 0.02,
		paddingHorizontal: width * 0.05,
		marginTop: height * 0.02,
	},
	calendar: {
		backgroundColor: Color.colorLightskyblue,
	},

	/** Medications List **/
	medicationsContainer: {
		marginTop: height * 0.03,
		paddingHorizontal: 20,
	},
	medicationsHeader: {
		flexDirection: 'row',
		justifyContent: 'center', // Centers the text inside
		backgroundColor: Color.colorCornflowerblue,
		borderRadius: height * 0.04, // Adjusted to create an oval shape
		alignSelf: 'flex-start',
		left: width * 0.05,
		width: width * 0.4,
	},

	medicationsHeaderText: {
		fontSize: FontSize.size_5xl,
		fontFamily: FontFamily.koulenRegular,
		color: Color.colorFloralwhite,
	},
	medicationItem: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 10,
		left: width * 0.05,
	},
	medicationIndicator: {
		width: width * 0.03,
		height: height * 0.015,
		borderRadius: 6,
		marginRight: width * 0.02,
	},
	medicationText: {
		fontSize: FontSize.size_lg,
		fontFamily: FontFamily.koulenRegular,
		color: Color.colorCornflowerblue,
	},

	/** User Greeting **/
	greetingContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: width * 0.05,
	},
	greetingText: {
		fontSize: FontSize.size_17xl,
		fontFamily: FontFamily.jsMathCmbx10,
		color: Color.colorCornflowerblue,
	},
	greetingName: {
		fontSize: FontSize.size_17xl,
		fontFamily: FontFamily.jsMathCmbx10,
		color: Color.colorCornflowerblue,
		marginLeft: width * 0.02,
	},

	/** Header **/
	headerContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	menuIcon: {
		width: 30,
		height: 30,
	},
    scrollContainer: {
         paddingBottom: height * 0.2,
		paddingTop: height * 0.05,
    },

	/** Select Med Popup **/
	medSwitchContainer: {
		top: 400,
		left: 70,
	},
});

export default styles;
