import { Dimensions, StyleSheet } from 'react-native';
import { Border, Color, FontFamily, FontSize } from '../GlobalStyles';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
      opaqueBackground: {
          backgroundColor: Color.colorGainsboro_100,
          opacity: 0.5,
          height: height,
          width: width,
      },
      reminderPopup: {
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
        top: height * 0.03,
        left: width * 0.046,
        borderRadius: Border.br_6,
        backgroundColor: Color.colorFirebrick,
        width: width * 0.067,
        height: height * 0.031,
      },
      header: {
        top: height * 0.019,
        left: width * 0.077,
        fontSize: FontSize.size_5xl,
        color: Color.colorFloralwhite,
        textAlign: "left",
        fontFamily: FontFamily.koulenRegular,
        width : width * 0.4
      },
      closePopup: {
        top: height * 0.014,
        left: width * 0.372,
        width: width * 0.115,
        height: height * 0.053,
      },
      popupBody: {
        height: height * 0.65,
        backgroundColor: Color.colorFloralwhite,
        width: width * 0.923,
        borderBottomLeftRadius: Border.br_31,
        borderBottomRightRadius: Border.br_31,
        borderColor: Color.colorCornflowerblue,
        borderWidth: 3,
      },
      selectionContainer: {
        flexDirection: 'row',
        borderRadius: Border.br_17,
        alignItems: 'center',
        marginTop: height * 0.02,
        height: height * 0.125,
      },
      selectionText: {
        width: width * 0.4
      },
      itemSwitchContainer: {
      },
      timeCard: {
        borderRadius: Border.br_17,
        borderWidth: 2,
        borderColor: Color.colorCornflowerblue,
        width: width * 0.3,
        marginBottom: height * 0.01,
      },
      timeCardContainer: {
        alignItems: 'center',
        marginTop: height * 0.02,
      },
      addNotifButton: {
        alignItems: 'center'
      },
      saveButtonOval: {
          borderRadius: Border.br_17,
          height: height * 0.04,
          top: height * -0.05,
          left: width * 0.5,
          width: width * 0.19,
          backgroundColor: Color.colorCornflowerblue
      },
      saveButtonText: {
          top: height * -0.005,
          color: Color.colorFloralwhite,
          fontSize: FontSize.size_5xl,
          textAlign: "center",
          fontFamily: FontFamily.koulenRegular,
      },
      deleteButtonContainer: {
        top: height * -0.06,
        left: width * 0.05,
        width: width * 0.2,
      },
      text: {
          color: Color.colorCornflowerblue,
          fontSize: FontSize.size_5xl,
          textAlign: "center",
          fontFamily: FontFamily.koulenRegular,
      },
      // Modal styles for NotificationPopup
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
          maxWidth: width * 1.0,
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
      buttonContainer: {
          marginTop: height * 0.012,
          width: '100%'
      },
});

export default styles;