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
        borderTopLeftRadius: Border.br_12xl,
        borderTopRightRadius: Border.br_12xl,
        backgroundColor: Color.colorCornflowerblue,
        height: height * 0.079,
        width: width * 0.923,
        flexDirection: 'row'
      },
      colorIndicator: {
        top: height * 0.03,
        left: width * 0.046,
        borderRadius: Border.br_7xs,
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
        borderBottomLeftRadius: Border.br_12xl,
        borderBottomRightRadius: Border.br_12xl,
        borderColor: Color.colorCornflowerblue,
        borderWidth: 3,
      },
      selectionContainer: {
        flexDirection: 'row',
        // backgroundColor: Color.colorCornflowerblue,
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
});

export default styles;