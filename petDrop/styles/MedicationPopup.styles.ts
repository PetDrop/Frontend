import { Dimensions, StyleSheet } from 'react-native';
import { Border, Color, FontFamily, FontSize } from '../GlobalStyles';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    saveTypo: {
        color: Color.colorFloralwhite,
        fontSize: FontSize.size_5xl,
        textAlign: "left",
        fontFamily: FontFamily.koulenRegular,
        position: "absolute",
    },
    textTypo: {
        height: 155,
        width: 159,
        color: Color.colorCornflowerblue,
        fontSize: FontSize.size_xl,
        textAlign: "left",
        fontFamily: FontFamily.koulenRegular,
        position: "absolute",
    },
    ellipseLayout: {
        height: 22,
        width: 22,
        position: "absolute",
    },
    groupChild: {
        borderRadius: Border.br_12xl,
        backgroundColor: Color.colorCornflowerblue,
        top: 0,
        height: 432,
        left: 0,
        position: "absolute",
        width: 360,
    },
    groupItem: {
        top: 67,
        height: 365,
        backgroundColor: Color.colorFloralwhite,
        left: 0,
        position: "absolute",
        width: 360,
        borderBottomLeftRadius: Border.br_12xl,
        borderBottomRightRadius: Border.br_12xl,
    },
    exDosageTake: {
        top: 319,
        left: 48,
        fontSize: FontSize.size_mini,
        color: Color.colorLightskyblue,
        textAlign: "left",
        fontFamily: FontFamily.koulenRegular,
        position: "absolute",
    },
    groupInner: {
        top: 305,
        borderRadius: Border.br_sm,
        borderStyle: "solid",
        borderColor: Color.colorCornflowerblue,
        borderWidth: 4,
        width: 289,
        height: 50,
        left: 31,
        position: "absolute",
    },
    rectangleView: {
        borderRadius: 17,
        height: 34,
        top: 4,
        width: 74,
        backgroundColor: Color.colorCornflowerblue,
        left: 0,
        position: "absolute",
    },
    save: {
        left: 16,
        width: 41,
        height: 33,
        top: 0,
    },
    rectangleGroup: {
        top: 374,
        left: 270,
        height: 38,
        width: 74,
        position: "absolute",
    },
    closePopup: {
        top: 10,
        left: 300,
        width: 45,
        height: 45,
    },
    medication: {
        top: 12,
        left: 52,
    },
    groupChild1: {
        top: 20,
        left: 18,
        borderRadius: Border.br_7xs,
        backgroundColor: Color.colorFirebrick,
        width: 26,
        height: 26,
        position: "absolute",
    },
    datesSeptember19: {
        top: 83,
        left: 31,
    },
    text: {
        top: 119,
        left: 231,
    },
    polygonIcon: {
        top: 27,
        left: 158,
        borderRadius: Border.br_12xs,
        position: "absolute",
    },
    ellipseIcon: {
        top: 0,
        left: 0,
    },
    groupChild2: {
        top: 6,
        height: 3,
        borderRadius: Border.br_10xs,
        width: 14,
        backgroundColor: Color.colorFloralwhite,
        left: 0,
        position: "absolute",
    },
    groupChildPosition: {
        transform: [
          {
            rotate: "-90deg",
          },
        ],
        left: 6,
        top: 14,
        height: 3,
        borderRadius: Border.br_10xs,
        width: 14,
        backgroundColor: Color.colorFloralwhite,
        position: "absolute",
    },
    rectangleContainer: {
        left: 4,
        height: 14,
        width: 14,
        top: 4,
        position: "absolute",
    },
    ellipseParent: {
        top: 157,
        left: 30,
        width: 22,
    },
    ellipseGroup: {
        top: 232,
        left: 30,
        width: 22,
    },
    rectangleParent: {
        height: 432,
        left: 0,
        position: "absolute",
        width: 360,
    },
    medicationPopup: {
        top: 206,
        height: 432,
        overflow: "hidden",
        width: 360,
        left: 15,
    },
    opaqueBackground: {
		backgroundColor: Color.colorGainsboro_100,
		opacity: 0.5,
		height: height,
		width: width,
		position: 'absolute',
	},
	medPopupContainer: {
		height: height * 0.5,
		width: width,
		position: 'absolute'
	},
});

export default styles;