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
    addMedicationButton: {
        top: (height * 0.58),
        height: (height * 0.05),
        left: (width * 0.0564),
        width: (width * 0.1026),
        position: "absolute",
    },
    petInfo1AddPet: {
        top: (height * 0.2227),
        width: (width * 0.4641),
        left: (width * 0.0564),
    },
    logoImageContainer: {
        marginTop: height * 0.05
    },
    addImageContainer: {
        marginTop: height * 0.09,
        marginLeft: width * 0.0282,
    },
});

export default styles;