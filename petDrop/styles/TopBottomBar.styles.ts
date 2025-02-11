import { StyleSheet, Dimensions } from 'react-native';
import { Color, Border, FontFamily } from '../GlobalStyles';

const { width, height } = Dimensions.get('window');


export const styles = StyleSheet.create({

	bottomBar: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: Color.colorLightskyblue,
		height: height * 0.125,
		width: '100%',
		position: 'absolute',
		bottom: 0,
		paddingHorizontal: width * 0.05,
	},

	navButton: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: height * 0.015,
		paddingHorizontal: width * 0.05,
		borderRadius: 15,
	},

	activeButton: {
		backgroundColor: Color.colorDarkslateblue,
		borderRadius: 15,
	},

	iconWrapper: {
		justifyContent: 'center',
		alignItems: 'center',
	},

	buttonText: {
        fontSize: 15,
        fontFamily: FontFamily.koulenRegular,
        color: Color.colorFloralwhite,
        textAlign: "center", // Ensures text stays centered
        width: width * 0.18, // Wider to fit longer words
        marginTop: height * 0.0025,
    },

    textWrapper: {
        alignItems: "center", // Center inside the button
        justifyContent: "center",
        width: "100%", // Ensures full width usage
    },

	navIcon: {
		width: width * 0.08,
		height: height * 0.03,
	},

	houseBase: {
		width: width * 0.05,
		height: height * 0.02,
		backgroundColor: Color.colorCornflowerblue,
		borderRadius: Border.br_10xs,
		bottom: 0,
	},

    iconContainer: {
    
    },

	polygonIcon: {
		width: width * 0.06,
		height: height * 0.02,
        top: height * 0.005,
	},

	medIcon: {
		width: width * 0.07,
		height: width * 0.06,
	},

	shareIcon: {
		width: width * 0.05,
		height: height * 0.03,
		tintColor: Color.colorFloralwhite,
	},

    topBar: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: height * 0.085,
    backgroundColor: Color.colorLightskyblue,
},
});

export default styles;