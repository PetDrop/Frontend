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
        top: height * -0.75,
        height: height * 0.498,
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
      medicationName: {
        top: height * 0.019,
        left: width * 0.077,
        fontSize: FontSize.size_5xl,
        color: Color.colorFloralwhite,
        textAlign: "left",
        fontFamily: FontFamily.koulenRegular,
      },
      closePopup: {
        top: height * 0.014,
        left: width * 0.372,
        width: width * 0.115,
        height: height * 0.053,
      },
      popupBody: {
        backgroundColor: Color.colorFloralwhite,
        height: height * 0.41,
        width: width * 0.923,
        borderBottomLeftRadius: Border.br_12xl,
        borderBottomRightRadius: Border.br_12xl,
      },
});

export default styles;