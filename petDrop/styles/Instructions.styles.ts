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
});

export default styles;
