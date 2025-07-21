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
		alignContent: 'center'
	  },
});

export default styles;
