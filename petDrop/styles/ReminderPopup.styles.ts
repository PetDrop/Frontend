import { Dimensions, StyleSheet } from 'react-native';
import { Border, Color, FontFamily, FontSize } from '../GlobalStyles';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    reminderPosition: {
        left: 0,
        position: "absolute",
        width: 360,
      },
      reminderChildLayout: {
        height: 14,
        width: 14,
        left: 13,
        position: "absolute",
      },
      containerTypo: {
        color: Color.colorCornflowerblue,
        fontSize: FontSize.size_xl,
        left: 36,
        textAlign: "left",
        fontFamily: FontFamily.koulenRegular,
        position: "absolute",
      },
      amTypo: {
        width: 159,
        left: 231,
        height: 155,
        color: Color.colorCornflowerblue,
        fontSize: FontSize.size_xl,
        textAlign: "left",
        fontFamily: FontFamily.koulenRegular,
        position: "absolute",
      },
      reminderPopupChild: {
        top: 2,
        borderRadius: Border.br_12xl,
        backgroundColor: Color.colorCornflowerblue,
        height: 420,
      },
      reminderPopupItem: {
        top: 76,
        backgroundColor: Color.colorFloralwhite,
        height: 346,
        borderBottomLeftRadius: Border.br_12xl,
        borderBottomRightRadius: Border.br_12xl,
      },
      groupIcon: {
        top: 234,
      },
      reminderPopupChild1: {
        top: 162,
      },
      reminderPopupChild2: {
        top: 272,
      },
      reminderPopupChild3: {
        top: 345,
      },
      eyeDrops: {
        top: 18,
        left: 52,
        fontSize: FontSize.size_5xl,
        color: Color.colorFloralwhite,
        textAlign: "left",
        fontFamily: FontFamily.koulenRegular,
        position: "absolute",
        width: 240,
      },
      rectangleView: {
        top: 26,
        left: 18,
        borderRadius: Border.br_7xs,
        backgroundColor: Color.colorFirebrick,
        width: 26,
        height: 26,
        position: "absolute",
      },
      datesNotifications6am: {
        top: 89,
        width: 223,
        height: 290,
        color: Color.colorCornflowerblue,
        fontSize: FontSize.size_xl,
        left: 36,
        textAlign: "left",
        fontFamily: FontFamily.koulenRegular,
        position: "absolute",
      },
      start0919Container: {
        top: 126,
      },
      end0923Container: {
        top: 162,
      },
      am: {
        top: 167,
      },
      pm: {
        top: 203,
      },
      reminderPopup: {
        top: 212,
        height: 420,
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
      reminderPopupContainer: {
          height: height * 0.5,
          width: width,
          position: 'absolute',
      },
      closePopup: {
        top: 15,
        left: 300,
        width: 45,
        height: 45,      
      },
});

export default styles;