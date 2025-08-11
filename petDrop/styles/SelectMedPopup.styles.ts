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
    top: height * -0.65,
    height: height * 0.25,
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
  text: {
    top: height * 0.015,
    left: width * 0.03,
    color: Color.colorWhite,
    fontSize: FontSize.size_27,
    textAlign: "center",
    fontFamily: FontFamily.koulenRegular,
  },
  closePopup: {
    top: height * 0.015,
    left: width * 0.075,
    width: width * 0.115,
    height: height * 0.053,
  },
  popupBody: {
    height: height * 0.2,
    backgroundColor: Color.colorFloralwhite,
    width: width * 0.923,
    borderBottomLeftRadius: Border.br_31,
    borderBottomRightRadius: Border.br_31,
    borderColor: Color.colorCornflowerblue,
    borderWidth: 3,
  },
});

export default styles;