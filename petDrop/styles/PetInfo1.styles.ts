import { Dimensions, StyleSheet } from 'react-native';
import { Color, FontFamily, FontSize, Border } from '../GlobalStyles';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    outermostView: {
        flex: 1,
        width: width,
        height: height,
        overflow: "hidden",
        backgroundColor: Color.colorFloralwhite,
    },
    nameTypo: {
        textAlign: "left",
        fontFamily: FontFamily.jsMathCmbx10,
        position: "absolute",
        color: Color.colorCornflowerblue,
    },
    addPetTypo: {
        fontSize: FontSize.size_5xl,
        textAlign: "left",
        color: Color.colorCornflowerblue,
        fontFamily: FontFamily.jsMathCmbx10,
        position: "absolute",
    },
    groupChild1Layout: {
        height: (height * 0.0083),
        backgroundColor: Color.colorCornflowerblue,
        borderRadius: Border.br_8xs_9,
        width: (width * 0.0846),
        position: "absolute",
    },
    petInfo1GroupChildLayout: {
        width: (width * 0.1026),
        position: "absolute",
    },
    petInfo1SubtractIcon: {
        top: (height * 0.3045),
        left: (width * 0.0282),
    },
    petInfo1Name: {
        top: (height * 0.3128),
        left: (width * 0.4513),
        fontSize: FontSize.size_17xl,
        width: (width * 0.3026),
        height: (height * 0.0509),
    },
    petInfo1Medications: {
        top: (height * 0.5415),
        left: (width * 0.0538),
    },
    petInfo1RectangleParent: {
        top: (height * 0.5818),
        height: (height * 0.0273),
        left: (width * 0.0564),
    },
    petInfo1RectangleView: {
        top: (height * 0.0154),
    },
    petInfo1GroupChild1: {
        top: (height * 0.0154),
        transform: [
            {
                rotate: "-90deg",
            },
        ],
    },
    petInfo1RectangleContainer: {
        top: (height * 0.3709),
        left: (width * 0.1718),
        height: (height * 0.0391),
        width: (width * 0.0846),
        position: "absolute",
    },
    petInfo1AddPet: {
        top: (height * 0.2227),
        width: (width * 0.4641),
        left: (width * 0.0564),
    },
    petInfo1GroupChild: {
        top: (height * 0.0012),
        borderRadius: Border.br_3xs,
        backgroundColor: Color.colorCornflowerblue,
        width: (width * 0.1026),
        height: (height * 0.0249),
        position: "absolute",
    },
    petInfo1Add: {
        left: (width * 0.046),
        top: (height * -0.0006),
        fontSize: FontSize.size_smi,
        color: Color.colorFloralwhite,
    },
    petInfo1AddTypo: {
        color: Color.colorFloralwhite,
        fontFamily: FontFamily.koulenRegular,
        fontSize: FontSize.size_smi,
        textAlign: "left",
        position: "absolute",
    },
    petInfo1RectangleGroup: {
        top: (height * 0.0071),
        left: (width * 0.0077),
        height: (height * 0.0118),
        width: (width * 0.0256),
        position: "absolute",
    },
    petInfo1GroupItem: {
        top: (height * 0.0047),
        height: (height * 0.0024),
        borderRadius: Border.br_10xs,
        width: (width * 0.0256),
        position: "absolute",
        backgroundColor: Color.colorFloralwhite,
    },
    petInfo1LogoText: {
        top: (height * 0.0972),
        left: (width * 0.0436),
        fontSize: FontSize.size_45xl,
        width: (width * 0.8769),
        height: (height * 0.1327),
    },
    petInfo1LogoSubtext: {
        top: (height * 0.1694),
        left: (width * 0.1128),
        fontFamily: FontFamily.koulenRegular,
        fontSize: FontSize.size_smi,
        textAlign: "left",
        color: Color.colorCornflowerblue,
        position: "absolute",
    },
    petInfo1GroupLayout: {
        height: (height * 0.0024),
        width: (width * 0.0256),
        borderRadius: Border.br_10xs,
        position: "absolute",
        backgroundColor: Color.colorFloralwhite,
    },
    petInfo1GroupInner: {
        top: (height * 0.0047),
        transform: [
            {
                rotate: "-90deg",
            },
        ],
    }
});

export default styles;