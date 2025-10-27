import { Dimensions, StyleSheet } from 'react-native';
import { Border, Color, FontFamily, FontSize } from '../GlobalStyles';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
		flex: 1,
		width: width,
		height: height,
		overflow: 'hidden',
        position: 'absolute',
	},
    opaqueBackground: {
		backgroundColor: Color.colorGainsboro_100,
		opacity: 0.5,
		height: height,
		width: width,
	},
    medicationPopup: {
        top: height * -0.85,
        height: height * 0.75,
        width: width * 0.923,
        left: width * 0.038,
    },
    topBanner: {
        borderTopLeftRadius: Border.br_31,
        borderTopRightRadius: Border.br_31,
        backgroundColor: Color.colorCornflowerblue,
        height: height * 0.079,
        width: width * 0.923,
        flexDirection: 'row'
    },
    colorIndicator: {
        top: height * 0.024,
        left: width * 0.046,
        borderRadius: Border.br_6,
        width: width * 0.067,
        height: height * 0.031,
    },
    dropdownDefault: {
        top: height * 0.014,
        left: width * 0.077,
        flexDirection: 'row',
        width: width * 0.461,
    },
    downArrow: {
        top: height * 0.0175,
        left: width * 0.025,
        borderRadius: Border.br_1,
    },
    dropdownItem: {
        backgroundColor: Color.colorCornflowerblue,
        paddingBottom: height * 0.012,
        alignItems: 'center',
    },
    closePopupContainer: {
        top: height * 0.012,
        left: width * 0.25,
    },
    closePopup: {
        width: width * 0.115,
        height: height * 0.053,
    },
    popupBody: {
        height: height * 0.9,
        backgroundColor: Color.colorFloralwhite,
        width: width * 0.923,
        borderBottomLeftRadius: Border.br_31,
        borderBottomRightRadius: Border.br_31,
        borderColor: Color.colorCornflowerblue,
        borderWidth: 3,
    },
    notifCardContainer: {
        marginTop: height * 0.01
    },
    textInput: {
        height: height * 0.12,
        borderWidth: Border.br_4,
        borderColor: Color.colorCornflowerblue,
        borderRadius: Border.br_14,
        width: width * 0.75,
        marginTop: height * 0.05,
        marginLeft: width * 0.075,
        marginBottom: height * 0.075,
        fontWeight: 700,
        fontSize: FontSize.size_base,
        color: Color.colorCornflowerblue,
        paddingLeft: width * 0.0256,
        paddingTop: height * 0.01,
    },
    instructionButtonOval: {
        borderRadius: Border.br_17,
        height: height * 0.04,
        top: height * -0.11,
        left: width * 0.06,
        width: width * 0.4,
        backgroundColor: Color.colorCornflowerblue,
    },
    saveButtonContainer: {
        top: height * -0.13,
        left: width * 0.692,
    },
    deleteButtonContainer: {
        top: height * -0.23,
        left: width * 0.6
    },
    text: {
        color: Color.colorFloralwhite,
        fontSize: FontSize.size_5xl,
        textAlign: "center",
        fontFamily: FontFamily.koulenRegular,
    },
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
        elevation: 5
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
        paddingHorizontal: width * 0.0375,
        paddingVertical: height * 0.0125,
        borderWidth: 1,
        borderColor: Color.colorCornflowerblue,
        borderRadius: width * 0.02,
        backgroundColor: 'white',
        minWidth: width * 0.5
    },
    dropdownText: {
        color: Color.colorCornflowerblue,
        fontSize: FontSize.size_base
    },
    dropdownItemNew: {
        paddingHorizontal: width * 0.0375,
        paddingVertical: height * 0.0125,
        backgroundColor: 'white'
    },
    readonlyDropdown: {
        paddingHorizontal: width * 0.0375,
        paddingVertical: height * 0.0125,
        borderWidth: 1,
        borderColor: Color.colorCornflowerblue,
        borderRadius: width * 0.02,
        backgroundColor: '#f0f0f0',
        minWidth: width * 0.5
    },
    scrollContainer: {
        width: '100%',
        maxHeight: height * 0.5
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