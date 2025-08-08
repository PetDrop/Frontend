import { Dimensions, StyleSheet } from 'react-native';
import { Border, Color, FontFamily, FontSize } from '../GlobalStyles';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  newPetAddButtonBlueOval: {
    height: height * 0.06,
    width: '100%',
    borderRadius: Border.br_17,
    backgroundColor: Color.colorCornflowerblue,
  },
  newPetAddButtonPlusContainer: {
    top: (height * 0.0071),
    right: (width * 0.01),
    height: (height * 0.03),
    width: (width * 0.05),
    position: "absolute",
  },
  newPetAddButtonText: {
    textAlign: "left",
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_30,
    left: (width * 0.03),
  },
  newPetAddButtonGroupItem: {
    top: (height * 0.02),
    height: (height * 0.005),
    borderRadius: Border.br_3,
    width: (width * 0.05),
    position: "absolute",
    backgroundColor: Color.colorFloralwhite,
  },
  newPetAddButtonGroupInner: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  textInput: {
    height: height * 0.06,
    borderWidth: Border.br_4,
    borderColor: Color.colorCornflowerblue,
    borderRadius: Border.br_14,
    width: width * 0.5,
    marginBottom: height * 0.02,
    fontWeight: 700,
    color: Color.colorCornflowerblue,
    paddingLeft: width * 0.0256,
  },
});

export default styles;