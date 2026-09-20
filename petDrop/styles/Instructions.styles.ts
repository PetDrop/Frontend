import { Dimensions, StyleSheet } from 'react-native';
import { Border, Color, FontFamily, FontSize } from '../GlobalStyles';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Color.colorFloralwhite,
	},
	scrollContainer: {
		paddingTop: height * 0.05,
	},
	pageTitle: {
		fontSize: FontSize.size_17xl,
		fontFamily: FontFamily.jsMathCmbx10,
		color: Color.colorCornflowerblue,
		textAlign: 'center',
		marginLeft: width * 0.05,
	},
	instructionsContainer: {
		paddingTop: height * 0.02,
		paddingBottom: height * 0.02,
	},
	instructionText: {
		fontSize: FontSize.size_lg,
		fontFamily: FontFamily.jsMathCmbx10,
		fontWeight: 'bold',
		color: Color.colorCornflowerblue,
		marginLeft: width * 0.05,

	},
	video: {
		width: '75%',
		height: '25%',
		left: '12.5%',
		top: '2.5%'
	},
	administeredButton: {
		backgroundColor: Color.colorCornflowerblue,
		paddingHorizontal: width * 0.05,
		paddingVertical: height * 0.015,
		borderRadius: width * 0.02,
		marginTop: height * 0.02,
		marginBottom: height * 0.02,
		marginHorizontal: width * 0.05,
		alignItems: 'center',
	},
	administeredButtonText: {
		color: 'white',
		fontSize: FontSize.size_base,
		fontWeight: 'bold',
	},
});

export default styles;
