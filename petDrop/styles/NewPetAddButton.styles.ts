import { Dimensions, StyleSheet } from 'react-native';
import { Border, Color, FontFamily, FontSize } from '../GlobalStyles';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dropdownText: {
    color: Color.colorCornflowerblue,
    fontFamily: FontFamily.koulenRegular,
    fontWeight: '700',
    flex: 1,
  },
  dropdownItem: {
    paddingHorizontal: width * 0.0256,
    paddingVertical: height * 0.015,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: Color.colorGainsboro_200,
  },
  dropdownItemSelected: {
    backgroundColor: Color.colorLightskyblue,
  },
  dropdownItemTextSelected: {
    color: Color.colorDarkslateblue,
    fontWeight: '600',
  },
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
    minHeight: height * 0.06,
    borderWidth: Border.br_4,
    borderColor: Color.colorCornflowerblue,
    borderRadius: Border.br_14,
    width: width * 0.5,
    marginBottom: height * 0.02,
    fontWeight: 700,
    color: Color.colorCornflowerblue,
    paddingLeft: width * 0.0256,
  },
  fieldRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: height * 0.02,
  },
  labelSpacer: {
    width: width * 0.28,
    marginRight: width * 0.02,
  },
  fieldLabel: {
    width: width * 0.28,
    marginRight: width * 0.02,
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_base,
    color: Color.colorCornflowerblue,
    fontWeight: '600',
  },
  inputInRow: {
    marginBottom: 0,
    flex: 1,
  },
});

export default styles;