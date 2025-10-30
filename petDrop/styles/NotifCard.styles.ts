import { Dimensions, StyleSheet } from 'react-native';
import { Border, Color, FontFamily, FontSize } from '../GlobalStyles';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: Color.colorFloralwhite,
        borderRadius: width * 0.04,
        padding: width * 0.04,
        marginVertical: height * 0.01,
        borderWidth: 2,
        borderColor: Color.colorCornflowerblue,
    },
    intervalSwitchContainer: {
        marginBottom: height * 0.015,
        alignSelf: 'center',
        marginLeft: width * 0.07,
    },
    selectorContainer: {
        backgroundColor: Color.colorLightskyblue,
        borderRadius: width * 0.03,
        padding: width * 0.03,
        marginBottom: height * 0.012,
        borderWidth: 1,
        borderColor: Color.colorCornflowerblue,
    },
    selectorText: {
        fontSize: FontSize.size_base,
        fontFamily: FontFamily.koulenRegular,
        color: Color.colorDarkslateblue,
        marginBottom: height * 0.008,
    },
    selectorButton: {
        backgroundColor: Color.colorCornflowerblue,
        paddingHorizontal: width * 0.04,
        paddingVertical: height * 0.01,
        borderRadius: width * 0.02,
        marginBottom: height * 0.008,
    },
    selectorButtonText: {
        color: Color.colorWhite,
        fontSize: FontSize.size_base,
        fontFamily: FontFamily.koulenRegular,
        textAlign: 'center',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: height * 0.006,
        paddingVertical: height * 0.006,
        paddingHorizontal: width * 0.025,
        backgroundColor: Color.colorWhite,
        borderRadius: width * 0.02,
    },
    rowText: {
        fontSize: FontSize.size_base,
        fontFamily: FontFamily.koulenRegular,
        color: Color.colorDarkslateblue,
    },
    removeButton: {
        backgroundColor: Color.colorFirebrick,
        paddingHorizontal: width * 0.03,
        paddingVertical: height * 0.008,
        borderRadius: width * 0.015,
    },
    removeButtonText: {
        color: Color.colorCornflowerblue,
        fontSize: FontSize.size_smi,
        fontFamily: FontFamily.koulenRegular,
    },
    addButton: {
        backgroundColor: Color.colorCornflowerblue,
        paddingHorizontal: width * 0.04,
        paddingVertical: height * 0.01,
        borderRadius: width * 0.02,
        marginTop: height * 0.008,
    },
    addButtonText: {
        color: Color.colorWhite,
        fontSize: FontSize.size_base,
        fontFamily: FontFamily.koulenRegular,
        textAlign: 'center',
    },
    numberInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: height * 0.012,
    },
    numberInputLabel: {
        fontSize: FontSize.size_base,
        fontFamily: FontFamily.koulenRegular,
        color: Color.colorDarkslateblue,
        marginRight: width * 0.03,
    },
    numberInput: {
        borderWidth: 2,
        borderRadius: width * 0.02,
        paddingHorizontal: width * 0.03,
        paddingVertical: height * 0.008,
        width: width * 0.15,
        backgroundColor: Color.colorWhite,
        borderColor: Color.colorCornflowerblue,
        fontSize: FontSize.size_base,
        fontFamily: FontFamily.koulenRegular,
        color: Color.colorDarkslateblue,
    },
    deleteButton: {
        backgroundColor: Color.colorFirebrick,
        paddingHorizontal: width * 0.04,
        paddingVertical: height * 0.012,
        borderRadius: width * 0.02,
        marginTop: height * 0.015,
    },
    deleteButtonText: {
        color: Color.colorWhite,
        fontSize: FontSize.size_base,
        fontFamily: FontFamily.koulenRegular,
        textAlign: 'center',
    },
});

export default styles;