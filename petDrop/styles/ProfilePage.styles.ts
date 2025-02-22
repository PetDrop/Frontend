import { Dimensions, StyleSheet } from 'react-native';
import { Border, Color, FontFamily, FontSize } from '../GlobalStyles';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: width,
		height: height,
		overflow: 'hidden',
		backgroundColor: Color.colorFloralwhite,
	},
    scrollContainer: {
        paddingBottom: height * 0.4,
    },
    banner: {
        height: 62,
        width: 390,
        backgroundColor: Color.colorLightskyblue,
    },
    groupPosition: {
        height: 12,
    },
    groupInnerBorder: {
        borderColor: Color.colorWhite,
        borderStyle: "solid",
        position: "absolute",
    },
    groupChild1Position: {
        width: 22,
        position: "absolute",
    },
    groupChild2Position: {
        left: 3,
        position: "absolute",
    },
    groupChildLayout2: {
        top: 10,
        width: 10,
        height: 2,
    },
    nameTypo: {
        color: Color.colorCornflowerblue,
        fontFamily: FontFamily.jsMathCmbx10,
        textAlign: "left",
    },
    groupChildTransform: {
        transform: [
        {
            rotate: "-90deg",
        },
        ],
        position: "absolute",
    },
    textInput: {
        height: height * 0.06,
        borderWidth: 4,
        borderColor: Color.colorCornflowerblue,
        borderRadius: Border.br_sm,
        width: width * 0.75,
        marginBottom: height * 0.02,
        marginTop: height * 0.02,
        marginLeft: width * 0.1282,
        fontWeight: '700',
        color: Color.colorCornflowerblue,
        paddingLeft: width * 0.0256,
    },
    groupChild9Layout: {
        width: 89,
        position: "absolute",
    },
    addTypo: {
        color: Color.colorFloralwhite,
        fontFamily: FontFamily.koulenRegular,
        textAlign: "left",
        top: 0,
        position: "absolute",
    },
    groupChild10Layout: {
        width: 40,
        position: "absolute",
    },
    groupItem: {
        top: 2,
        left: 2,
        width: 14,
        height: 8,
        backgroundColor: Color.colorWhite,
        borderRadius: Border.br_10xs,
        position: "absolute",
    },
    groupInner: {
        left: 20,
        borderWidth: 0.5,
        width: 1,
        height: 4,
        top: 4,
        borderRadius: Border.br_10xs,
    },
    rectangleView: {
        borderWidth: 1,
        width: 20,
        borderRadius: Border.br_9xs,
        height: 12,
        left: 0,
        top: 0,
    },
    rectangleGroup: {
        left: 52,
        width: 21,
        height: 12,
        position: "absolute",
    },
    groupChild1: {
        backgroundColor: Color.colorGainsboro_200,
        height: 2,
        borderRadius: Border.br_9xs,
        left: 0,
    },
    groupChild2: {
        top: 5,
        width: 17,
        height: 2,
        borderRadius: Border.br_9xs,
        backgroundColor: Color.colorWhite,
    },
    groupChild3: {
        left: 6,
        width: 10,
        borderRadius: Border.br_9xs,
        backgroundColor: Color.colorWhite,
        position: "absolute",
    },
    rectangleContainer: {
        left: 23,
        height: 12,
    },
    groupIcon: {
        width: 10,
        height: 12,
        left: 0,
        position: "absolute",
    },
    groupParent: {
        top: 23,
        left: 292,
        width: 73,
        height: 12,
        position: "absolute",
    },
    name: {
        left: 54,
        fontSize: 40,
        width: 118,
        height: 43,
    },
    addPictureContainer: {
        marginLeft: width * 0.5462,
        marginTop: height * 0.15,
    },
    circle: {
        width: width * 0.3744,
        height: height * 0.173,
    },
    horizontalLine: {
        top: height * -0.09,
        left: width * 0.14,
        height: 7,
        width: 33,
        borderRadius: Border.br_8xs_9,
        backgroundColor: Color.colorCornflowerblue,
    },
    verticalLine: {
        top: height * -0.0985,
        left: width * 0.14,
        height: 7,
        width: 33,
        borderRadius: Border.br_8xs_9,
        backgroundColor: Color.colorCornflowerblue,
        transform: [
            {
                rotate: "-90deg",
            },
        ],
    },
    groupChild6: {
        top: 132,
        left: 0,
    },
    groupChild7: {
        top: 204,
        left: 0,
    },
    groupChild8: {
        top: 276,
        left: 0,
    },
    groupView: {
        top: 313,
        height: 326,
        width: 289,
        left: 50,
        position: "absolute",
    },
    profile: {
        left: 22,
        width: 181,
        fontSize: FontSize.size_5xl,
    },
    groupChild9: {
        borderRadius: 17,
        height: 34,
        backgroundColor: Color.colorCornflowerblue,
        left: 0,
        top: 4,
    },
    submit: {
        left: 15,
        width: 65,
        height: 33,
        fontSize: FontSize.size_5xl,
    },
    rectangleParent1: {
        top: 931,
        left: 266,
        height: 38,
    },
    groupChild10: {
        top: 1,
        borderRadius: Border.br_3xs,
        height: 21,
        backgroundColor: Color.colorCornflowerblue,
        left: 0,
    },
    add: {
        left: 18,
        fontSize: FontSize.size_smi,
        color: Color.colorFloralwhite,
    },
    groupChild11: {
        width: 10,
        height: 2,
        top: 4,
        borderRadius: Border.br_10xs,
        left: 0,
        position: "absolute",
        backgroundColor: Color.colorFloralwhite,
    },
    groupChild12: {
        left: 4,
        width: 10,
        top: 10,
        height: 2,
        borderRadius: Border.br_10xs,
        backgroundColor: Color.colorFloralwhite,
    },
    rectangleParent3: {
        top: 6,
        height: 10,
        width: 10,
    },
    rectangleParent2: {
        top: 792,
        left: 299,
        height: 23,
    },
});

export default styles;