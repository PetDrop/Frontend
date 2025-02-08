import * as React from "react";
import { StyleSheet, View, Text, Button, Dimensions } from "react-native";
import { Image } from "expo-image";
import DayOutline from "../assets/day_outline.svg";
import EditIcon from "../assets/edit_icon.svg";
import TopBottomBar from "../components/TopBottomBar";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const { width, height } = Dimensions.get('window');

type HomeType = {
  navigation: any;
}

const Home = (props: HomeType) => {
  return (
    <View style={styles.home}>
      <View style={[styles.homeChild, styles.homePosition]} />
      <View style={[styles.homeItem, styles.homeItemBg]} />
      <Text style={[styles.september, styles.textTypo5]}>September.</Text>
      <Text style={[styles.s, styles.sLayout]}>S</Text>
      <Text style={[styles.text, styles.textTypo4]}>1</Text>
      <Text style={[styles.text1, styles.textTypo4]}>8</Text>
      <Text style={[styles.text2, styles.textTypo5]}>15</Text>
      <Text style={[styles.text3, styles.textTypo5]}>22</Text>
      <Text style={[styles.text4, styles.textTypo3]}>29</Text>
      <Text style={[styles.text5, styles.textTypo2]}>2</Text>
      <Text style={[styles.text6, styles.textTypo2]}>9</Text>
      <Text style={[styles.text7, styles.textTypo5]}>16</Text>
      <Text style={[styles.text8, styles.textTypo5]}>23</Text>
      <Text style={[styles.text9, styles.textTypo3]}>30</Text>
      <Text style={[styles.text10, styles.textTypo5]}>3</Text>
      <Text style={[styles.text11, styles.textTypo1]}>10</Text>
      <Text style={[styles.text12, styles.textTypo1]}>17</Text>
      <Text style={[styles.text13, styles.textTypo1]}>24</Text>
      <Text style={[styles.text14, styles.textTypo5]}>4</Text>
      <Text style={[styles.text15, styles.textPosition]}>11</Text>
      <Text style={[styles.text16, styles.textPosition]}>18</Text>
      <Text style={[styles.text17, styles.textPosition]}>25</Text>
      <Text style={[styles.text18, styles.textTypo5]}>5</Text>
      <Text style={[styles.text19, styles.textTypo5]}>12</Text>
      <Text style={[styles.text20, styles.textTypo5]}>19</Text>
      <Text style={[styles.text21, styles.textTypo5]}>26</Text>
      <Text style={[styles.text22, styles.textTypo5]}>6</Text>
      <Text style={[styles.text23, styles.textTypo5]}>13</Text>
      <Text style={[styles.text24, styles.textTypo5]}>20</Text>
      <Text style={[styles.text25, styles.textTypo5]}>27</Text>
      <Text style={[styles.text26, styles.textTypo5]}>7</Text>
      <Text style={[styles.text27, styles.textTypo]}>14</Text>
      <Text style={[styles.text28, styles.textTypo]}>21</Text>
      <Text style={[styles.text29, styles.textTypo]}>28</Text>
      <Text style={[styles.s1, styles.sLayout]}>S</Text>
      <Text style={[styles.m, styles.sLayout]}>M</Text>
      <Text style={[styles.t, styles.tTypo]}>T</Text>
      <Text style={[styles.w, styles.textPosition]}>W</Text>
      <Text style={[styles.t1, styles.tTypo]}>T</Text>
      <Text style={[styles.f, styles.sLayout]}>F</Text>
      <Text style={[styles.eyeDropsRed, styles.petdropClr]}>
        Eye drops (Red bottle, 2 drops, twice a day)
      </Text>
      <Text
        style={[styles.antibioticsBlueBottle, styles.petdropClr]}
      >{`Antibiotics (Blue bottle, 1 pill, morning) `}</Text>
      <Text
        style={[styles.heartgardBlackBox, styles.petdropClr]}
      >{`Heartgard (Black box, 1 pill, every night) `}</Text>
      <DayOutline style={styles.dayOutline} width={(width * 0.0718)} height={(height * 0.0332)} />
      <View style={[styles.homeInner, styles.homeLayout]} />
      <View style={[styles.rectangleView, styles.homeLayout]} />
      <View style={[styles.homeChild1, styles.homeLayout]} />
      <View style={[styles.homeChild2, styles.homeChildLayout]} />
      <View style={[styles.homeChild3, styles.homeChildLayout]} />
      <View style={[styles.homeChild4, styles.homeChildLayout]} />
      <View style={[styles.homeChild5, styles.homeChildPosition]} />
      <View style={[styles.homeChild6, styles.homeChildPosition]} />
      <Text style={[styles.hi, styles.hiTypo]}>Hi, </Text>
      <Text style={[styles.jane, styles.hiTypo]}>Jane!</Text>
      <Text style={[styles.petdrop, styles.petdropClr]}>petdrop.</Text>
      <Text style={[styles.neverMissA, styles.petdropClr]}>
        NEVER MISS A DROP.
      </Text>
      <EditIcon style={styles.groupIcon} width={(width * 0.0744)} height={(height * 0.0344)} />
      <View style={styles.rectangleContainer}>
        <View style={[styles.groupChild1, styles.groupPosition]} />
        <Text style={styles.medications}>MEDICATIONS</Text>
      </View>
      <TopBottomBar navigation = {props.navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
  homePosition: {
    width: (width * 0.8897),
    left: (width * 0.0538),
    top: (height * 0.2583),
  },
  homeItemBg: {
    backgroundColor: Color.colorLightskyblue,
    position: "absolute",
  },
  textTypo5: {
    textAlign: "left",
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.jsMathCmbx10,
    position: "absolute",
  },
  sLayout: {
    height: (height * 0.0213),
    fontSize: FontSize.size_mini,
    top: (height * 0.3318),
  },
  textTypo4: {
    left: (width * 0.1154),
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.jsMathCmbx10,
    position: "absolute",
  },
  textTypo3: {
    top: (height * 0.6268),
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.jsMathCmbx10,
    position: "absolute",
  },
  textTypo2: {
    left: (width * 0.241),
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.jsMathCmbx10,
    position: "absolute",
  },
  textTypo1: {
    left: (width * 0.3564),
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.jsMathCmbx10,
    position: "absolute",
  },
  textPosition: {
    left: (width * 0.4821),
    textAlign: "left",
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.jsMathCmbx10,
    position: "absolute",
  },
  textTypo: {
    left: (width * 0.859),
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.jsMathCmbx10,
    position: "absolute",
  },
  tTypo: {
    width: (width * 0.0333),
    height: (height * 0.0213),
    fontSize: FontSize.size_mini,
    top: (height * 0.3318),
    textAlign: "left",
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.jsMathCmbx10,
    position: "absolute",
  },
  petdropClr: {
    color: Color.colorCornflowerblue,
    textAlign: "left",
    position: "absolute",
  },
  homeLayout: {
    height: (height * 0.0249),
    width: (width * 0.0538),
    left: (width * 0.1051),
    position: "absolute",
  },
  homeChildLayout: {
    height: (height * 0.0071),
    borderRadius: Border.br_10xs,
    position: "absolute",
  },
  homeChildPosition: {
    left: (width * 0.0974),
    height: (height * 0.0071),
    borderRadius: Border.br_10xs,
    position: "absolute",
  },
  groupLayout: {
    height: (height * 0.0024),
    width: (width * 0.0256),
    borderRadius: Border.br_10xs,
    position: "absolute",
    backgroundColor: Color.colorFloralwhite,
  },
  hiTypo: {
    height: (height * 0.032),
    top: (height * 0.2263),
    color: Color.colorCornflowerblue,
    textAlign: "left",
    fontFamily: FontFamily.jsMathCmbx10,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  groupPosition: {
    top: (height * 0.0047),
  },
  homeChild: {
    borderRadius: Border.br_12xl,
    backgroundColor: Color.colorCornflowerblue,
    height: (height * 0.4111),
    position: "absolute",
  },
  homeItem: {
    borderTopLeftRadius: Border.br_12xl,
    borderTopRightRadius: Border.br_12xl,
    height: (height * 0.0569),
    width: (width * 0.8897),
    left: (width * 0.0538),
    top: (height * 0.2583),
  },
  september: {
    top: (height * 0.2773),
    left: (width * 0.1026),
    fontSize: FontSize.size_5xl,
    color: Color.colorFloralwhite,
  },
  s: {
    width: (width * 0.0282),
    height: (height * 0.0213),
    fontSize: FontSize.size_mini,
    top: (height * 0.6318),
    textAlign: "left",
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.jsMathCmbx10,
    position: "absolute",
    left: (width * 0.1051),
  },
  text: {
    fontSize: FontSize.size_xs,
    top: (height * 0.3803),
  },
  text1: {
    top: (height * 0.4419),
    fontSize: FontSize.size_xs,
  },
  text2: {
    top: (height * 0.5036),
    fontSize: FontSize.size_xs,
    left: (width * 0.1051),
  },
  text3: {
    top: (height * 0.5652),
    fontSize: FontSize.size_xs,
    left: (width * 0.1051),
  },
  text4: {
    left: (width * 0.1051),
  },
  text5: {
    top: (height * 0.3803),
  },
  text6: {
    top: (height * 0.4419),
  },
  text7: {
    left: (width * 0.2308),
    top: (height * 0.5036),
    fontSize: FontSize.size_xs,
  },
  text8: {
    left: (width * 0.2308),
    top: (height * 0.5652),
    fontSize: FontSize.size_xs,
  },
  text9: {
    left: (width * 0.2308),
  },
  text10: {
    left: (width * 0.3667),
    fontSize: FontSize.size_xs,
    top: (height * 0.3803),
  },
  text11: {
    top: (height * 0.4419),
  },
  text12: {
    top: (height * 0.5036),
  },
  text13: {
    top: (height * 0.5652),
  },
  text14: {
    left: (width * 0.4923),
    fontSize: FontSize.size_xs,
    top: (height * 0.3803),
  },
  text15: {
    top: (height * 0.4419),
    fontSize: FontSize.size_xs,
  },
  text16: {
    top: (height * 0.5036),
    fontSize: FontSize.size_xs,
  },
  text17: {
    top: (height * 0.5652),
    fontSize: FontSize.size_xs,
  },
  text18: {
    left: (width * 0.6197),
    fontSize: FontSize.size_xs,
    top: (height * 0.3803),
  },
  text19: {
    left: (width * 0.6077),
    top: (height * 0.4419),
    fontSize: FontSize.size_xs,
  },
  text20: {
    left: (width * 0.6077),
    top: (height * 0.5036),
    fontSize: FontSize.size_xs,
  },
  text21: {
    left: (width * 0.6077),
    top: (height * 0.5652),
    fontSize: FontSize.size_xs,
  },
  text22: {
    left: (width * 0.7436),
    fontSize: FontSize.size_xs,
    top: (height * 0.3803),
  },
  text23: {
    left: (width * 0.7333),
    top: (height * 0.4419),
    fontSize: FontSize.size_xs,
  },
  text24: {
    left: (width * 0.7333),
    top: (height * 0.5036),
    fontSize: FontSize.size_xs,
  },
  text25: {
    left: (width * 0.7333),
    top: (height * 0.5652),
    fontSize: FontSize.size_xs,
  },
  text26: {
    left: (width * 0.8692),
    fontSize: FontSize.size_xs,
    top: (height * 0.3803),
  },
  text27: {
    top: (height * 0.4419),
  },
  text28: {
    top: (height * 0.5036),
  },
  text29: {
    top: (height * 0.5652),
  },
  s1: {
    left: (width * 0.8667),
    width: (width * 0.0282),
    height: (height * 0.0213),
    fontSize: FontSize.size_mini,
    top: (height * 0.3318),
    textAlign: "left",
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.jsMathCmbx10,
    position: "absolute",
  },
  m: {
    left: (width * 0.2231),
    width: (width * 0.0462),
    height: (height * 0.0213),
    fontSize: FontSize.size_mini,
    top: (height * 0.3318),
    textAlign: "left",
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.jsMathCmbx10,
    position: "absolute",
  },
  t: {
    left: (width * 0.359),
  },
  w: {
    width: (width * 0.0513),
    height: (height * 0.0213),
    fontSize: FontSize.size_mini,
    top: (height * 0.3318),
  },
  t1: {
    left: (width * 0.6231),
  },
  f: {
    left: (width * 0.7462),
    width: (width * 0.0308),
    height: (height * 0.0213),
    fontSize: FontSize.size_mini,
    top: (height * 0.3318),
    textAlign: "left",
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.jsMathCmbx10,
    position: "absolute",
  },
  eyeDropsRed: {
    top: (height * 0.7429),
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
    color: Color.colorCornflowerblue,
    left: (width * 0.1821),
  },
  antibioticsBlueBottle: {
    top: (height * 0.7832),
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
    color: Color.colorCornflowerblue,
    left: (width * 0.1821),
  },
  heartgardBlackBox: {
    top: (height * 0.8235),
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
    color: Color.colorCornflowerblue,
    left: (width * 0.1821),
  },
  dayOutline: {
    top: (height * 0.4953),
    left: (width * 0.5897),
  },
  homeInner: {
    top: (height * 0.7441),
    backgroundColor: Color.colorFirebrick,
    borderRadius: Border.br_7xs,
    width: (width * 0.0538),
  },
  rectangleView: {
    top: (height * 0.7844),
    backgroundColor: Color.colorGoldenrod,
    borderRadius: Border.br_7xs,
    width: (width * 0.0538),
  },
  homeChild1: {
    top: (height * 0.8246),
    backgroundColor: Color.colorDarkkhaki,
    borderRadius: Border.br_7xs,
    width: (width * 0.0538),
  },
  homeChild2: {
    top: (height * 0.532),
    width: (width * 0.2872),
    backgroundColor: Color.colorFirebrick,
    left: (width * 0.6077),
  },
  homeChild3: {
    top: (height * 0.4088),
    width: (width * 0.4051),
    backgroundColor: Color.colorDarkkhaki,
    left: (width * 0.2308),
  },
  homeChild4: {
    top: (height * 0.5427),
    width: (width * 0.1615),
    backgroundColor: Color.colorGoldenrod,
    left: (width * 0.7333),
  },
  homeChild5: {
    top: (height * 0.5972),
    width: (width * 0.0436),
    backgroundColor: Color.colorGoldenrod,
  },
  homeChild6: {
    top: (height * 0.5865),
    width: (width * 0.1692),
    backgroundColor: Color.colorFirebrick,
  },
  groupChild: {
    borderRadius: 11,
    height: (height * 0.0249),
    width: (width * 0.0538),
    backgroundColor: Color.colorLightskyblue,
    position: "absolute",
  },
  hi: {
    width: (width * 0.1026),
    left: (width * 0.1051),
  },
  jane: {
    left: (width * 0.1923),
    width: (width * 0.2026),
  },
  petdrop: {
    top: (height * 0.0972),
    left: (width * 0.0641),
    fontSize: FontSize.size_45xl,
    width: (width * 0.8769),
    height: (height * 0.1327),
    color: Color.colorCornflowerblue,
    fontFamily: FontFamily.jsMathCmbx10,
  },
  neverMissA: {
    top: (height * 0.1694),
    left: (width * 0.1333),
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
    color: Color.colorCornflowerblue,
  },
  groupIcon: {
    top: (height * 0.2737),
    left: (width * 0.8385),
    position: "absolute",
  },
  groupChild1: {
    borderRadius: 17,
    width: (width * 0.3513),
    height: (height * 0.0403),
    backgroundColor: Color.colorCornflowerblue,
    position: "absolute",
  },
  medications: {
    left: (width * 0.0385),
    width: (width * 0.3821),
    height: (height * 0.0391),
    fontFamily: FontFamily.koulenRegular,
    textAlign: "left",
    color: Color.colorFloralwhite,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  rectangleContainer: {
    top: (height * 0.6896),
    width: (width * 0.4205),
    height: (height * 0.045),
    left: (width * 0.1051),
    position: "absolute",
  },
  home: {
    flex: 1,
    width: width,
    height: height,
    overflow: "hidden",
    backgroundColor: Color.colorFloralwhite,
  },
});

export default Home;