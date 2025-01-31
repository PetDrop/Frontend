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
    width: "88.97%",
    left: "5.38%",
    top: "25.83%",
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
    height: "2.13%",
    fontSize: FontSize.size_mini,
    top: "33.18%",
  },
  textTypo4: {
    left: "11.54%",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.jsMathCmbx10,
    position: "absolute",
  },
  textTypo3: {
    top: "62.68%",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.jsMathCmbx10,
    position: "absolute",
  },
  textTypo2: {
    left: "24.1%",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.jsMathCmbx10,
    position: "absolute",
  },
  textTypo1: {
    left: "35.64%",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.jsMathCmbx10,
    position: "absolute",
  },
  textPosition: {
    left: "48.21%",
    textAlign: "left",
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.jsMathCmbx10,
    position: "absolute",
  },
  textTypo: {
    left: "85.9%",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.jsMathCmbx10,
    position: "absolute",
  },
  tTypo: {
    width: "3.33%",
    height: "2.13%",
    fontSize: FontSize.size_mini,
    top: "33.18%",
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
    height: "2.49%",
    width: "5.38%",
    left: "10.51%",
    position: "absolute",
  },
  homeChildLayout: {
    height: "0.71%",
    borderRadius: Border.br_10xs,
    position: "absolute",
  },
  homeChildPosition: {
    left: "9.74%",
    height: "0.71%",
    borderRadius: Border.br_10xs,
    position: "absolute",
  },
  groupLayout: {
    height: "0.24%",
    width: "2.56%",
    borderRadius: Border.br_10xs,
    position: "absolute",
    backgroundColor: Color.colorFloralwhite,
  },
  hiTypo: {
    height: "3.2%",
    top: "22.63%",
    color: Color.colorCornflowerblue,
    textAlign: "left",
    fontFamily: FontFamily.jsMathCmbx10,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  groupPosition: {
    top: "0.47%",
    left: "0%",
  },
  homeChild: {
    borderRadius: Border.br_12xl,
    backgroundColor: Color.colorCornflowerblue,
    height: "41.11%",
    position: "absolute",
  },
  homeItem: {
    borderTopLeftRadius: Border.br_12xl,
    borderTopRightRadius: Border.br_12xl,
    height: "5.69%",
    width: "88.97%",
    left: "5.38%",
    top: "25.83%",
  },
  september: {
    top: "27.73%",
    left: "10.26%",
    fontSize: FontSize.size_5xl,
    color: Color.colorFloralwhite,
  },
  s: {
    width: "2.82%",
    height: "2.13%",
    fontSize: FontSize.size_mini,
    top: "63.18%",
    textAlign: "left",
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.jsMathCmbx10,
    position: "absolute",
    left: "10.51%",
  },
  text: {
    fontSize: FontSize.size_xs,
    top: "38.03%",
  },
  text1: {
    top: "44.19%",
    fontSize: FontSize.size_xs,
  },
  text2: {
    top: "50.36%",
    fontSize: FontSize.size_xs,
    left: "10.51%",
  },
  text3: {
    top: "56.52%",
    fontSize: FontSize.size_xs,
    left: "10.51%",
  },
  text4: {
    left: "10.51%",
  },
  text5: {
    top: "38.03%",
  },
  text6: {
    top: "44.19%",
  },
  text7: {
    left: "23.08%",
    top: "50.36%",
    fontSize: FontSize.size_xs,
  },
  text8: {
    left: "23.08%",
    top: "56.52%",
    fontSize: FontSize.size_xs,
  },
  text9: {
    left: "23.08%",
  },
  text10: {
    left: "36.67%",
    fontSize: FontSize.size_xs,
    top: "38.03%",
  },
  text11: {
    top: "44.19%",
  },
  text12: {
    top: "50.36%",
  },
  text13: {
    top: "56.52%",
  },
  text14: {
    left: 192,
    fontSize: FontSize.size_xs,
    top: "38.03%",
  },
  text15: {
    top: "44.19%",
    fontSize: FontSize.size_xs,
  },
  text16: {
    top: "50.36%",
    fontSize: FontSize.size_xs,
  },
  text17: {
    top: "56.52%",
    fontSize: FontSize.size_xs,
  },
  text18: {
    left: "61.97%",
    fontSize: FontSize.size_xs,
    top: "38.03%",
  },
  text19: {
    left: "60.77%",
    top: "44.19%",
    fontSize: FontSize.size_xs,
  },
  text20: {
    left: "60.77%",
    top: "50.36%",
    fontSize: FontSize.size_xs,
  },
  text21: {
    left: "60.77%",
    top: "56.52%",
    fontSize: FontSize.size_xs,
  },
  text22: {
    left: "74.36%",
    fontSize: FontSize.size_xs,
    top: "38.03%",
  },
  text23: {
    left: "73.33%",
    top: "44.19%",
    fontSize: FontSize.size_xs,
  },
  text24: {
    left: "73.33%",
    top: "50.36%",
    fontSize: FontSize.size_xs,
  },
  text25: {
    left: "73.33%",
    top: "56.52%",
    fontSize: FontSize.size_xs,
  },
  text26: {
    left: "86.92%",
    fontSize: FontSize.size_xs,
    top: "38.03%",
  },
  text27: {
    top: "44.19%",
  },
  text28: {
    top: "50.36%",
  },
  text29: {
    top: "56.52%",
  },
  s1: {
    left: "86.67%",
    width: "2.82%",
    height: "2.13%",
    fontSize: FontSize.size_mini,
    top: "33.18%",
    textAlign: "left",
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.jsMathCmbx10,
    position: "absolute",
  },
  m: {
    left: "22.31%",
    width: "4.62%",
    height: "2.13%",
    fontSize: FontSize.size_mini,
    top: "33.18%",
    textAlign: "left",
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.jsMathCmbx10,
    position: "absolute",
  },
  t: {
    left: "35.9%",
  },
  w: {
    width: "5.13%",
    height: "2.13%",
    fontSize: FontSize.size_mini,
    top: "33.18%",
  },
  t1: {
    left: "62.31%",
  },
  f: {
    left: "74.62%",
    width: "3.08%",
    height: "2.13%",
    fontSize: FontSize.size_mini,
    top: "33.18%",
    textAlign: "left",
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.jsMathCmbx10,
    position: "absolute",
  },
  eyeDropsRed: {
    top: "74.29%",
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
    color: Color.colorCornflowerblue,
    left: "18.21%",
  },
  antibioticsBlueBottle: {
    top: "78.32%",
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
    color: Color.colorCornflowerblue,
    left: "18.21%",
  },
  heartgardBlackBox: {
    top: "82.35%",
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
    color: Color.colorCornflowerblue,
    left: "18.21%",
  },
  dayOutline: {
    top: "49.53%",
    left: "58.97%",
  },
  homeInner: {
    top: "74.41%",
    backgroundColor: Color.colorFirebrick,
    borderRadius: Border.br_7xs,
    width: "5.38%",
  },
  rectangleView: {
    top: "78.44%",
    backgroundColor: Color.colorGoldenrod,
    borderRadius: Border.br_7xs,
    width: "5.38%",
  },
  homeChild1: {
    top: "82.46%",
    backgroundColor: Color.colorDarkkhaki,
    borderRadius: Border.br_7xs,
    width: "5.38%",
  },
  homeChild2: {
    top: "53.2%",
    width: "28.72%",
    backgroundColor: Color.colorFirebrick,
    left: "60.77%",
  },
  homeChild3: {
    top: "40.88%",
    width: "40.51%",
    backgroundColor: Color.colorDarkkhaki,
    left: "23.08%",
  },
  homeChild4: {
    top: "54.27%",
    width: "16.15%",
    backgroundColor: Color.colorGoldenrod,
    left: "73.33%",
  },
  homeChild5: {
    top: "59.72%",
    width: "4.36%",
    backgroundColor: Color.colorGoldenrod,
  },
  homeChild6: {
    top: "58.65%",
    width: "16.92%",
    backgroundColor: Color.colorFirebrick,
  },
  groupChild: {
    borderRadius: 11,
    left: "0%",
    top: "0%",
    height: "2.49%",
    width: "5.38%",
    backgroundColor: Color.colorLightskyblue,
    position: "absolute",
  },
  hi: {
    width: "10.26%",
    left: "10.51%",
  },
  jane: {
    left: "19.23%",
    width: "20.26%",
  },
  petdrop: {
    top: "9.72%",
    left: "6.41%",
    fontSize: FontSize.size_45xl,
    width: "87.69%",
    height: "13.27%",
    color: Color.colorCornflowerblue,
    fontFamily: FontFamily.jsMathCmbx10,
  },
  neverMissA: {
    top: "16.94%",
    left: "13.33%",
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
    color: Color.colorCornflowerblue,
  },
  groupIcon: {
    top: "27.37%",
    left: "83.85%",
    position: "absolute",
  },
  groupChild1: {
    borderRadius: 17,
    width: "83.54%",
    height: "89.47%",
    backgroundColor: Color.colorCornflowerblue,
    position: "absolute",
  },
  medications: {
    left: "9.15%",
    width: "90.85%",
    height: "86.84%",
    top: "-11.76%",
    fontFamily: FontFamily.koulenRegular,
    textAlign: "left",
    color: Color.colorFloralwhite,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  rectangleContainer: {
    top: "68.96%",
    width: "42.05%",
    height: "4.5%",
    left: "10.51%",
    position: "absolute",
  },
  home: {
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    backgroundColor: Color.colorFloralwhite,
  },
});

export default Home;