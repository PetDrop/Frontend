import { Dimensions, StyleSheet } from 'react-native';
import { Border, Color, FontFamily, FontSize } from '../GlobalStyles';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    newPetAddButtonBlueOval: {
    height: (height * 0.0249),
    width: "100%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorCornflowerblue,
  },
  newPetAddButtonPlusContainer: {
    top: (height * 0.0071),
    right: (width * 0.01),
    height: (height * 0.0118),
    width: (width * 0.0256),
    position: "absolute",
  },
  newPetAddButtonText: {
    textAlign: "left",
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
    left: (width * 0.0154),
    top: (height * -0.001),
  },
  newPetAddButtonGroupItem: {
    top: (height * 0.0047),
    height: (height * 0.0024),
    borderRadius: Border.br_10xs,
    width: (width * 0.0256),
    position: "absolute",
    backgroundColor: Color.colorFloralwhite,
  },
  newPetAddButtonGroupInner: {
    top: (height * 0.0047),
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  newPetAddButtonGroupLayout: {
    height: (height * 0.0024),
    width: (width * 0.0256),
    borderRadius: Border.br_10xs,
    position: "absolute",
    backgroundColor: Color.colorFloralwhite,
  }
});

export default styles;