import * as React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { Image } from "expo-image";
import DayOutline from "../assets/day_outline.svg";
import EditIcon from "../assets/edit_icon.svg";
import TopBottomBar from "../components/TopBottomBar";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

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
      <DayOutline style={styles.dayOutline} width={28} height={28} />
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
      <EditIcon style={styles.groupIcon} width={29} height={29} />
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
    width: 347,
    left: 21,
    top: 218,
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
    height: 18,
    fontSize: FontSize.size_mini,
    top: 280,
  },
  textTypo4: {
    left: 45,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.jsMathCmbx10,
    position: "absolute",
  },
  textTypo3: {
    top: 529,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.jsMathCmbx10,
    position: "absolute",
  },
  textTypo2: {
    left: 94,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.jsMathCmbx10,
    position: "absolute",
  },
  textTypo1: {
    left: 139,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.jsMathCmbx10,
    position: "absolute",
  },
  textPosition: {
    left: 188,
    textAlign: "left",
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.jsMathCmbx10,
    position: "absolute",
  },
  textTypo: {
    left: 335,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.jsMathCmbx10,
    position: "absolute",
  },
  tTypo: {
    width: 13,
    height: 18,
    fontSize: FontSize.size_mini,
    top: 280,
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
    height: 21,
    width: 21,
    left: 41,
    position: "absolute",
  },
  homeChildLayout: {
    height: 6,
    borderRadius: Border.br_10xs,
    position: "absolute",
  },
  homeChildPosition: {
    left: 38,
    height: 6,
    borderRadius: Border.br_10xs,
    position: "absolute",
  },
  groupLayout: {
    height: 2,
    width: 10,
    borderRadius: Border.br_10xs,
    position: "absolute",
    backgroundColor: Color.colorFloralwhite,
  },
  hiTypo: {
    height: 27,
    top: 191,
    color: Color.colorCornflowerblue,
    textAlign: "left",
    fontFamily: FontFamily.jsMathCmbx10,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  groupPosition: {
    top: 4,
    left: 0,
  },
  homeChild: {
    borderRadius: Border.br_12xl,
    backgroundColor: Color.colorCornflowerblue,
    height: 347,
    position: "absolute",
  },
  homeItem: {
    borderTopLeftRadius: Border.br_12xl,
    borderTopRightRadius: Border.br_12xl,
    height: 48,
    width: 347,
    left: 21,
    top: 218,
  },
  september: {
    top: 234,
    left: 40,
    fontSize: FontSize.size_5xl,
    color: Color.colorFloralwhite,
  },
  s: {
    width: 11,
    height: 18,
    fontSize: FontSize.size_mini,
    top: 280,
    textAlign: "left",
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.jsMathCmbx10,
    position: "absolute",
    left: 41,
  },
  text: {
    fontSize: FontSize.size_xs,
    top: 321,
  },
  text1: {
    top: 373,
    fontSize: FontSize.size_xs,
  },
  text2: {
    top: 425,
    fontSize: FontSize.size_xs,
    left: 41,
  },
  text3: {
    top: 477,
    fontSize: FontSize.size_xs,
    left: 41,
  },
  text4: {
    left: 41,
  },
  text5: {
    top: 321,
  },
  text6: {
    top: 373,
  },
  text7: {
    left: 90,
    top: 425,
    fontSize: FontSize.size_xs,
  },
  text8: {
    left: 90,
    top: 477,
    fontSize: FontSize.size_xs,
  },
  text9: {
    left: 90,
  },
  text10: {
    left: 143,
    fontSize: FontSize.size_xs,
    top: 321,
  },
  text11: {
    top: 373,
  },
  text12: {
    top: 425,
  },
  text13: {
    top: 477,
  },
  text14: {
    left: 192,
    fontSize: FontSize.size_xs,
    top: 321,
  },
  text15: {
    top: 373,
    fontSize: FontSize.size_xs,
  },
  text16: {
    top: 425,
    fontSize: FontSize.size_xs,
  },
  text17: {
    top: 477,
    fontSize: FontSize.size_xs,
  },
  text18: {
    left: 241,
    fontSize: FontSize.size_xs,
    top: 321,
  },
  text19: {
    left: 237,
    top: 373,
    fontSize: FontSize.size_xs,
  },
  text20: {
    left: 237,
    top: 425,
    fontSize: FontSize.size_xs,
  },
  text21: {
    left: 237,
    top: 477,
    fontSize: FontSize.size_xs,
  },
  text22: {
    left: 290,
    fontSize: FontSize.size_xs,
    top: 321,
  },
  text23: {
    left: 286,
    top: 373,
    fontSize: FontSize.size_xs,
  },
  text24: {
    left: 286,
    top: 425,
    fontSize: FontSize.size_xs,
  },
  text25: {
    left: 286,
    top: 477,
    fontSize: FontSize.size_xs,
  },
  text26: {
    left: 339,
    fontSize: FontSize.size_xs,
    top: 321,
  },
  text27: {
    top: 373,
  },
  text28: {
    top: 425,
  },
  text29: {
    top: 477,
  },
  s1: {
    left: 338,
    width: 11,
    height: 18,
    fontSize: FontSize.size_mini,
    top: 280,
    textAlign: "left",
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.jsMathCmbx10,
    position: "absolute",
  },
  m: {
    left: 87,
    width: 18,
    height: 18,
    fontSize: FontSize.size_mini,
    top: 280,
    textAlign: "left",
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.jsMathCmbx10,
    position: "absolute",
  },
  t: {
    left: 140,
  },
  w: {
    width: 20,
    height: 18,
    fontSize: FontSize.size_mini,
    top: 280,
  },
  t1: {
    left: 243,
  },
  f: {
    left: 291,
    width: 12,
    height: 18,
    fontSize: FontSize.size_mini,
    top: 280,
    textAlign: "left",
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.jsMathCmbx10,
    position: "absolute",
  },
  eyeDropsRed: {
    top: 627,
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
    color: Color.colorCornflowerblue,
    left: 71,
  },
  antibioticsBlueBottle: {
    top: 661,
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
    color: Color.colorCornflowerblue,
    left: 71,
  },
  heartgardBlackBox: {
    top: 695,
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
    color: Color.colorCornflowerblue,
    left: 71,
  },
  dayOutline: {
    top: 418,
    left: 230,
  },
  homeInner: {
    top: 628,
    backgroundColor: Color.colorFirebrick,
    borderRadius: Border.br_7xs,
    width: 21,
  },
  rectangleView: {
    top: 662,
    backgroundColor: Color.colorGoldenrod,
    borderRadius: Border.br_7xs,
    width: 21,
  },
  homeChild1: {
    top: 696,
    backgroundColor: Color.colorDarkkhaki,
    borderRadius: Border.br_7xs,
    width: 21,
  },
  homeChild2: {
    top: 449,
    width: 112,
    backgroundColor: Color.colorFirebrick,
    left: 237,
  },
  homeChild3: {
    top: 345,
    width: 158,
    backgroundColor: Color.colorDarkkhaki,
    left: 90,
  },
  homeChild4: {
    top: 458,
    width: 63,
    backgroundColor: Color.colorGoldenrod,
    left: 286,
  },
  homeChild5: {
    top: 504,
    width: 17,
    backgroundColor: Color.colorGoldenrod,
  },
  homeChild6: {
    top: 495,
    width: 66,
    backgroundColor: Color.colorFirebrick,
  },
  groupChild: {
    borderRadius: 11,
    left: 0,
    top: 0,
    height: 21,
    width: 21,
    backgroundColor: Color.colorLightskyblue,
    position: "absolute",
  },
  groupItem: {
    top: 4,
    left: 0,
  },
  groupInner: {
    top: 10,
    left: 4,
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  rectangleGroup: {
    top: 5,
    left: 6,
    height: 10,
    width: 10,
    position: "absolute",
  },
  rectangleParent: {
    top: 732,
  },
  hi: {
    width: 40,
    left: 41,
  },
  jane: {
    left: 75,
    width: 79,
  },
  petdrop: {
    top: 82,
    left: 25,
    fontSize: FontSize.size_45xl,
    width: 342,
    height: 112,
    color: Color.colorCornflowerblue,
    fontFamily: FontFamily.jsMathCmbx10,
  },
  neverMissA: {
    top: 143,
    left: 52,
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
    color: Color.colorCornflowerblue,
  },
  groupIcon: {
    top: 231,
    left: 327,
    position: "absolute",
  },
  groupChild1: {
    borderRadius: 17,
    width: 137,
    height: 34,
    backgroundColor: Color.colorLightskyblue,
    position: "absolute",
  },
  medications: {
    left: 15,
    width: 149,
    height: 33,
    top: 0,
    fontFamily: FontFamily.koulenRegular,
    textAlign: "left",
    color: Color.colorFloralwhite,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  rectangleContainer: {
    top: 582,
    width: 164,
    height: 38,
    left: 41,
    position: "absolute",
  },
  home: {
    flex: 1,
    width: "100%",
    height: 2286,
    overflow: "hidden",
    backgroundColor: Color.colorFloralwhite,
  },
});

export default Home;