import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Home = () => {
  return (
    <View style={styles.home}>
      <View style={[styles.homeChild, styles.homePosition]} />
      <View style={[styles.homeItem, styles.homePosition]} />
      <Text style={[styles.september, styles.textClr]}>September.</Text>
      <Text style={[styles.s, styles.sLayout]}>S</Text>
      <Text style={[styles.text, styles.textTypo4]}>1</Text>
      <Text style={[styles.text1, styles.textTypo4]}>8</Text>
      <Text style={[styles.text2, styles.textClr]}>15</Text>
      <Text style={[styles.text3, styles.textClr]}>22</Text>
      <Text style={[styles.text4, styles.textTypo3]}>29</Text>
      <Text style={[styles.text5, styles.textTypo2]}>2</Text>
      <Text style={[styles.text6, styles.textTypo2]}>9</Text>
      <Text style={[styles.text7, styles.textClr]}>16</Text>
      <Text style={[styles.text8, styles.textClr]}>23</Text>
      <Text style={[styles.text9, styles.textTypo3]}>30</Text>
      <Text style={[styles.text10, styles.textClr]}>3</Text>
      <Text style={[styles.text11, styles.textTypo1]}>10</Text>
      <Text style={[styles.text12, styles.textTypo1]}>17</Text>
      <Text style={[styles.text13, styles.textTypo1]}>24</Text>
      <Text style={[styles.text14, styles.textClr]}>4</Text>
      <Text style={[styles.text15, styles.textPosition]}>11</Text>
      <Text style={[styles.text16, styles.textPosition]}>18</Text>
      <Text style={[styles.text17, styles.textPosition]}>25</Text>
      <Text style={[styles.text18, styles.textClr]}>5</Text>
      <Text style={[styles.text19, styles.textClr]}>12</Text>
      <Text style={[styles.text20, styles.textClr]}>19</Text>
      <Text style={[styles.text21, styles.textClr]}>26</Text>
      <Text style={[styles.text22, styles.textClr]}>6</Text>
      <Text style={[styles.text23, styles.textClr]}>13</Text>
      <Text style={[styles.text24, styles.textClr]}>20</Text>
      <Text style={[styles.text25, styles.textClr]}>27</Text>
      <Text style={[styles.text26, styles.textClr]}>7</Text>
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
      <Image
        style={styles.subtractIcon}
        contentFit="cover"
        source={require("../assets/subtract1.png")}
      />
      <View style={[styles.homeInner, styles.homeChildLayout1]} />
      <View style={[styles.rectangleView, styles.homeChildLayout1]} />
      <View style={[styles.homeChild1, styles.homeChildLayout1]} />
      <View style={[styles.homeChild2, styles.homeChildLayout]} />
      <View style={[styles.homeChild3, styles.homeChildLayout]} />
      <View style={[styles.homeChild4, styles.homeChildLayout]} />
      <View style={[styles.homeChild5, styles.homeChildPosition]} />
      <View style={[styles.homeChild6, styles.homeChildPosition]} />
      <View style={[styles.rectangleParent, styles.text30Layout]}>
        <View style={[styles.groupChild, styles.homeChildLayout1]} />
        <Text style={[styles.add, styles.addTypo]}>ADD</Text>
        <View style={[styles.rectangleGroup, styles.groupLayout2]}>
          <View style={[styles.groupItem, styles.groupLayout2]} />
          <View style={[styles.groupInner, styles.groupLayout1]} />
        </View>
      </View>
      <Text style={[styles.hi, styles.hiTypo]}>{`Hi, `}</Text>
      <Text style={[styles.jane, styles.hiTypo]}>Jane!</Text>
      <Text style={[styles.petdrop, styles.petdropClr]}>petdrop.</Text>
      <Text style={[styles.neverMissA, styles.neverMissAPosition]}>
        NEVER MISS A DROP.
      </Text>
      <Image
        style={styles.groupIcon}
        contentFit="cover"
        source={require("../assets/group-8.png")}
      />
      <View style={styles.rectangleContainer}>
        <View style={styles.groupChild1} />
        <Text style={[styles.medications, styles.petdropClr]}>MEDICATIONS</Text>
      </View>
      <View style={styles.groupParent}>
        <View style={[styles.groupView, styles.groupLayout]}>
          <View style={[styles.groupChild2, styles.groupLayout]} />
          <Text style={[styles.text30, styles.text30Layout]}>9:53</Text>
          <View style={styles.groupContainer}>
            <View style={[styles.rectangleParent1, styles.neverMissAPosition]}>
              <View style={[styles.groupChild3, styles.groupChildBg]} />
              <View style={[styles.groupChild4, styles.groupChildBorder]} />
              <View style={[styles.groupChild5, styles.groupChildBorder]} />
            </View>
            <View style={[styles.rectangleParent2, styles.groupChild6Position]}>
              <View style={[styles.groupChild6, styles.groupChild6Position]} />
              <View style={[styles.groupChild7, styles.groupChildBg]} />
              <View style={[styles.groupChild8, styles.groupChildBg]} />
            </View>
            <Image
              style={[styles.groupChild9, styles.groupLayout2]}
              contentFit="cover"
              source={require("../assets/group-23.png")}
            />
          </View>
        </View>
        <View style={[styles.componentChild, styles.polygonIconPosition]} />
        <View
          style={[styles.rectangleParent3, styles.rectangleParentPosition1]}
        >
          <View style={[styles.groupChild10, styles.groupChildPosition]} />
          <Text style={[styles.meds, styles.addTypo]}>MEDS</Text>
        </View>
        <View
          style={[styles.rectangleParent4, styles.rectangleParentPosition1]}
        >
          <View style={[styles.groupChild10, styles.groupChildPosition]} />
          <Text style={[styles.reminders, styles.addTypo]}>Reminders</Text>
        </View>
        <View
          style={[styles.rectangleParent5, styles.rectangleParentPosition1]}
        >
          <View style={[styles.groupChild10, styles.groupChildPosition]} />
          <Text style={[styles.share, styles.addTypo]}>SHARE</Text>
        </View>
        <View style={[styles.rectangleParent6, styles.rectangleParentPosition]}>
          <View style={[styles.groupChild13, styles.groupChildPosition]} />
          <Text style={[styles.pets, styles.addTypo]}>PETs</Text>
        </View>
        <View style={[styles.rectangleParent7, styles.rectangleParentPosition]}>
          <View style={[styles.groupChild14, styles.polygonIconLayout]} />
          <Image
            style={[styles.polygonIcon, styles.polygonIconLayout]}
            contentFit="cover"
            source={require("../assets/polygon-1.png")}
          />
        </View>
        <View style={[styles.rectangleParent8, styles.rectangleParentPosition]}>
          <View style={[styles.groupChild15, styles.groupChildLayout]} />
          <View style={[styles.groupChild16, styles.groupChildLayout]} />
          <View style={[styles.groupChild17, styles.groupChildLayout]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  homePosition: {
    width: 347,
    left: 21,
    top: 218,
    position: "absolute",
  },
  textClr: {
    color: Color.colorFloralwhite,
    textAlign: "left",
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
  },
  homeChildLayout1: {
    height: 21,
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
  text30Layout: {
    height: 23,
    position: "absolute",
  },
  addTypo: {
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.koulenRegular,
  },
  groupLayout2: {
    width: 10,
    position: "absolute",
  },
  groupLayout1: {
    top: 10,
    height: 2,
    width: 10,
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
  neverMissAPosition: {
    left: 52,
    position: "absolute",
  },
  groupLayout: {
    height: 62,
    width: 390,
    left: 0,
    position: "absolute",
  },
  groupChildBg: {
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  groupChildBorder: {
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    position: "absolute",
  },
  groupChild6Position: {
    width: 22,
    top: 0,
    position: "absolute",
  },
  polygonIconPosition: {
    left: "0%",
    right: "0%",
    width: "100%",
  },
  rectangleParentPosition1: {
    bottom: "61.7%",
    top: "-10.64%",
    height: "48.94%",
    position: "absolute",
  },
  groupChildPosition: {
    borderRadius: Border.br_2xs_5,
    left: "0%",
    bottom: "0%",
    right: "0%",
    backgroundColor: Color.colorCornflowerblue,
    position: "absolute",
    width: "100%",
  },
  rectangleParentPosition: {
    top: "-8.51%",
    height: "46.81%",
    bottom: "61.7%",
    position: "absolute",
  },
  polygonIconLayout: {
    height: "68.18%",
    position: "absolute",
  },
  groupChildLayout: {
    borderRadius: Border.br_mini,
    height: "18.18%",
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.colorFloralwhite,
  },
  homeChild: {
    borderRadius: Border.br_12xl,
    height: 347,
    backgroundColor: Color.colorCornflowerblue,
  },
  homeItem: {
    borderTopLeftRadius: Border.br_12xl,
    borderTopRightRadius: Border.br_12xl,
    height: 48,
    backgroundColor: Color.colorLightskyblue,
  },
  september: {
    top: 234,
    left: 40,
    textAlign: "left",
    fontFamily: FontFamily.jsMathCmbx10,
    fontSize: FontSize.size_5xl,
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
    textAlign: "left",
    fontFamily: FontFamily.jsMathCmbx10,
  },
  text3: {
    top: 477,
    fontSize: FontSize.size_xs,
    left: 41,
    textAlign: "left",
    fontFamily: FontFamily.jsMathCmbx10,
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
    textAlign: "left",
    fontFamily: FontFamily.jsMathCmbx10,
  },
  text8: {
    left: 90,
    top: 477,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.jsMathCmbx10,
  },
  text9: {
    left: 90,
  },
  text10: {
    left: 143,
    fontSize: FontSize.size_xs,
    top: 321,
    textAlign: "left",
    fontFamily: FontFamily.jsMathCmbx10,
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
    textAlign: "left",
    fontFamily: FontFamily.jsMathCmbx10,
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
    textAlign: "left",
    fontFamily: FontFamily.jsMathCmbx10,
  },
  text19: {
    left: 237,
    top: 373,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.jsMathCmbx10,
  },
  text20: {
    left: 237,
    top: 425,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.jsMathCmbx10,
  },
  text21: {
    left: 237,
    top: 477,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.jsMathCmbx10,
  },
  text22: {
    left: 290,
    fontSize: FontSize.size_xs,
    top: 321,
    textAlign: "left",
    fontFamily: FontFamily.jsMathCmbx10,
  },
  text23: {
    left: 286,
    top: 373,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.jsMathCmbx10,
  },
  text24: {
    left: 286,
    top: 425,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.jsMathCmbx10,
  },
  text25: {
    left: 286,
    top: 477,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.jsMathCmbx10,
  },
  text26: {
    left: 339,
    fontSize: FontSize.size_xs,
    top: 321,
    textAlign: "left",
    fontFamily: FontFamily.jsMathCmbx10,
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
    position: "absolute",
    fontFamily: FontFamily.jsMathCmbx10,
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
    position: "absolute",
    fontFamily: FontFamily.jsMathCmbx10,
  },
  eyeDropsRed: {
    top: 627,
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
    left: 71,
    color: Color.colorCornflowerblue,
    position: "absolute",
  },
  antibioticsBlueBottle: {
    top: 661,
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
    left: 71,
    color: Color.colorCornflowerblue,
    position: "absolute",
  },
  heartgardBlackBox: {
    top: 695,
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
    left: 71,
    color: Color.colorCornflowerblue,
    position: "absolute",
  },
  subtractIcon: {
    width: 28,
    height: 28,
  },
  homeInner: {
    top: 628,
    width: 21,
    backgroundColor: Color.colorFirebrick,
    borderRadius: Border.br_7xs,
    height: 21,
    left: 41,
  },
  rectangleView: {
    top: 662,
    backgroundColor: Color.colorGoldenrod,
    width: 21,
    borderRadius: Border.br_7xs,
    height: 21,
    left: 41,
  },
  homeChild1: {
    top: 696,
    backgroundColor: Color.colorDarkkhaki,
    width: 21,
    borderRadius: Border.br_7xs,
    height: 21,
    left: 41,
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
    top: 1,
    borderRadius: Border.br_3xs,
    left: 0,
    width: 40,
    backgroundColor: Color.colorLightskyblue,
  },
  add: {
    left: 18,
    top: 0,
    fontFamily: FontFamily.koulenRegular,
    textAlign: "left",
    color: Color.colorFloralwhite,
    position: "absolute",
  },
  groupItem: {
    height: 2,
    top: 4,
    left: 0,
    borderRadius: Border.br_10xs,
    backgroundColor: Color.colorFloralwhite,
  },
  groupInner: {
    left: 4,
    transform: [
      {
        rotate: "-90deg",
      },
    ],
    borderRadius: Border.br_10xs,
    position: "absolute",
    backgroundColor: Color.colorFloralwhite,
  },
  rectangleGroup: {
    top: 6,
    height: 10,
    left: 3,
  },
  rectangleParent: {
    top: 731,
    width: 40,
    left: 41,
  },
  hi: {
    width: 40,
    left: 41,
  },
  jane: {
    left: 85,
    width: 79,
  },
  petdrop: {
    top: 82,
    left: 25,
    fontSize: FontSize.size_45xl,
    width: 342,
    height: 112,
    fontFamily: FontFamily.jsMathCmbx10,
    position: "absolute",
  },
  neverMissA: {
    top: 133,
    color: Color.colorCornflowerblue,
    textAlign: "left",
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
  },
  groupIcon: {
    top: 231,
    left: 327,
    width: 29,
    height: 29,
    position: "absolute",
  },
  groupChild1: {
    borderRadius: 17,
    width: 137,
    height: 34,
    top: 4,
    left: 0,
    backgroundColor: Color.colorLightskyblue,
    position: "absolute",
  },
  medications: {
    left: 15,
    width: 149,
    height: 33,
    top: 0,
    fontFamily: FontFamily.koulenRegular,
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
  groupChild2: {
    top: 0,
    backgroundColor: Color.colorLightskyblue,
  },
  text30: {
    top: 19,
    left: 36,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.juaRegular,
    color: Color.colorWhite,
    width: 77,
    textAlign: "left",
  },
  groupChild3: {
    top: 2,
    left: 2,
    width: 14,
    height: 8,
    borderRadius: Border.br_10xs,
  },
  groupChild4: {
    left: 20,
    borderWidth: 0.5,
    width: 1,
    height: 4,
    top: 4,
    borderRadius: Border.br_10xs,
  },
  groupChild5: {
    borderWidth: 1,
    borderRadius: Border.br_9xs,
    height: 12,
    top: 0,
    left: 0,
    width: 20,
  },
  rectangleParent1: {
    height: 12,
    top: 0,
    width: 21,
  },
  groupChild6: {
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_9xs,
    height: 2,
    left: 0,
  },
  groupChild7: {
    top: 5,
    borderRadius: Border.br_9xs,
    height: 2,
    left: 3,
    width: 17,
  },
  groupChild8: {
    left: 6,
    borderRadius: Border.br_9xs,
    top: 10,
    height: 2,
    width: 10,
  },
  rectangleParent2: {
    left: 23,
    height: 12,
  },
  groupChild9: {
    height: 12,
    top: 0,
    left: 0,
  },
  groupContainer: {
    top: 23,
    left: 292,
    width: 73,
    height: 12,
    position: "absolute",
  },
  groupView: {
    top: -797,
  },
  componentChild: {
    height: "146.81%",
    top: "-46.81%",
    bottom: "0%",
    backgroundColor: Color.colorLightskyblue,
    position: "absolute",
  },
  groupChild10: {
    height: "95.65%",
    top: "4.35%",
  },
  meds: {
    left: "16.67%",
    top: "0%",
    fontFamily: FontFamily.koulenRegular,
    textAlign: "left",
    color: Color.colorFloralwhite,
    position: "absolute",
  },
  rectangleParent3: {
    width: "9.23%",
    right: "34.1%",
    left: "56.67%",
  },
  reminders: {
    left: "9.52%",
    top: "0%",
    fontFamily: FontFamily.koulenRegular,
    textAlign: "left",
    color: Color.colorFloralwhite,
    position: "absolute",
  },
  rectangleParent4: {
    width: "16.15%",
    right: "49.74%",
    left: "34.1%",
  },
  share: {
    left: "14.63%",
    top: "0%",
    fontFamily: FontFamily.koulenRegular,
    textAlign: "left",
    color: Color.colorFloralwhite,
    position: "absolute",
  },
  rectangleParent5: {
    width: "10.51%",
    right: "17.18%",
    left: "72.31%",
  },
  groupChild13: {
    height: "100%",
    top: "0%",
  },
  pets: {
    height: "95.45%",
    width: "67.65%",
    left: "17.65%",
    top: "0%",
    fontFamily: FontFamily.koulenRegular,
    textAlign: "left",
    color: Color.colorFloralwhite,
    position: "absolute",
  },
  rectangleParent6: {
    width: "8.72%",
    right: "72.31%",
    left: "18.97%",
  },
  groupChild14: {
    width: "65.52%",
    top: "31.82%",
    right: "17.24%",
    left: "17.24%",
    bottom: "0%",
    borderRadius: Border.br_10xs,
    backgroundColor: Color.colorCornflowerblue,
  },
  polygonIcon: {
    bottom: "31.82%",
    borderRadius: Border.br_11xs,
    maxWidth: "100%",
    maxHeight: "100%",
    top: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
    overflow: "hidden",
  },
  rectangleParent7: {
    width: "7.44%",
    right: "87.44%",
    left: "5.13%",
  },
  groupChild15: {
    bottom: "81.82%",
    top: "0%",
  },
  groupChild16: {
    top: "40.91%",
    bottom: "40.91%",
  },
  groupChild17: {
    top: "81.82%",
    bottom: "0%",
  },
  rectangleParent8: {
    width: "5.64%",
    right: "5.13%",
    left: "89.23%",
  },
  groupParent: {
    top: 797,
    height: 47,
    width: 390,
    left: 0,
    position: "absolute",
  },
  home: {
    flex: 1,
    height: 2286,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorFloralwhite,
  },
});

export default Home;
