import { Dimensions, StyleSheet } from 'react-native';
import { Border, Color, FontFamily, FontSize } from '../GlobalStyles';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    // New modal styles
    modalBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContainer: {
        backgroundColor: 'white',
        borderRadius: width * 0.05,
        padding: width * 0.05,
        width: '90%',
        maxWidth: width * 1.25,
        maxHeight: '90%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: height * 0.0025 },
        shadowOpacity: 0.25,
        shadowRadius: width * 0.01,
        elevation: 5,
        justifyContent: 'flex-start'
    },
    closeButton: {
        position: 'absolute',
        top: height * 0.012,
        right: width * 0.025,
        zIndex: 1,
        padding: width * 0.02
    },
    closeIcon: {
        width: width * 0.06,
        height: height * 0.03
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: height * 0.025,
        width: '100%',
        paddingTop: height * 0.025
    },
    colorIndicatorNew: {
        width: width * 0.05,
        height: height * 0.025,
        borderRadius: width * 0.025,
        marginRight: width * 0.0375
    },
    dropdownButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: width * 0.05,
        paddingVertical: height * 0.018,
        borderWidth: 2,
        borderColor: Color.colorCornflowerblue,
        borderRadius: Border.br_10,
        backgroundColor: 'white',
        minWidth: width * 0.5,
    },
    dropdownText: {
        color: Color.colorDarkslateblue,
        fontSize: FontSize.size_base,
        fontFamily: FontFamily.koulenRegular,
        flex: 1,
    },
    dropdownItemNew: {
        paddingHorizontal: width * 0.05,
        paddingVertical: height * 0.018,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: Color.colorGainsboro_200,
    },
    dropdownItemSelected: {
        backgroundColor: Color.colorLightskyblue,
    },
    readonlyDropdown: {
        paddingHorizontal: width * 0.05,
        paddingVertical: height * 0.018,
        borderWidth: 2,
        borderColor: Color.colorCornflowerblue,
        borderRadius: width * 0.025,
        backgroundColor: Color.colorFloralwhite,
        minWidth: width * 0.5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    scrollContainer: {
        width: '100%',
    },
    addReminderButton: {
        backgroundColor: Color.colorCornflowerblue,
        paddingHorizontal: width * 0.05,
        paddingVertical: height * 0.0125,
        borderRadius: width * 0.02,
        marginBottom: height * 0.01875,
        alignSelf: 'flex-start'
    },
    addReminderText: {
        color: 'white',
        fontSize: FontSize.size_base,
        fontWeight: 'bold'
    },
    notifCardsContainer: {
        width: '100%'
    },
    descriptionInput: {
        borderWidth: 1,
        borderColor: Color.colorCornflowerblue,
        borderRadius: width * 0.02,
        paddingHorizontal: width * 0.0375,
        paddingVertical: height * 0.0125,
        marginTop: height * 0.01875,
        minHeight: height * 0.1,
        textAlignVertical: 'top',
        fontSize: FontSize.size_base,
        color: Color.colorCornflowerblue
    },
    actionButtonsContainer: {
        width: '100%',
        marginTop: height * 0.025
    },
    actionButton: {
        paddingHorizontal: width * 0.05,
        paddingVertical: height * 0.015,
        borderRadius: width * 0.02,
        marginBottom: height * 0.0125,
        alignItems: 'center'
    },
    instructionsButton: {
        backgroundColor: Color.colorCornflowerblue,
        paddingHorizontal: width * 0.05,
        paddingVertical: height * 0.015,
        borderRadius: width * 0.02,
        marginBottom: height * 0.0125,
        alignItems: 'center'
    },
    saveButton: {
        backgroundColor: Color.colorCornflowerblue,
        paddingHorizontal: width * 0.05,
        paddingVertical: height * 0.015,
        borderRadius: width * 0.02,
        marginBottom: height * 0.0125,
        alignItems: 'center'
    },
    deleteButton: {
        backgroundColor: Color.colorFirebrick,
        paddingHorizontal: width * 0.05,
        paddingVertical: height * 0.015,
        borderRadius: width * 0.02,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: FontSize.size_base,
        fontWeight: 'bold'
    }
});

export default styles;