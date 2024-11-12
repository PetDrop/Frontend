import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Reminders = () => {
  return (
    <View style={styles.reminders}>
      <Text
        style={[styles.reminders1, styles.petdropTypo]}
      >{`Reminders `}</Text>
      <Text style={[styles.datesSept1923, styles.datesTypo]}>{`Dates: Sept 19-23
Notifications: 6am + 6pm
Message: “2 drops”`}</Text>
      <Text style={[styles.datesSept2022, styles.datesTypo]}>{`Dates: Sept 20-22
Notifications: 6am
Message: “1 pill”`}</Text>
      <Text style={[styles.datesSept25, styles.datesTypo]}>{`Dates: Sept 2-5
Notifications: 6PM
Message: “1 pill”`}</Text>
      <View style={[styles.rectangleParent, styles.textLayout]}>
        <View style={styles.groupChild} />
        <Text style={[styles.add, styles.addTypo]}>ADD</Text>
        <View style={[styles.rectangleGroup, styles.groupLayout1]}>
          <View style={[styles.groupItem, styles.groupPosition]} />
          <View style={[styles.groupInner, styles.groupLayout]} />
        </View>
      </View>
      <View style={[styles.rectangleContainer, styles.viewLayout]}>
        <View style={[styles.rectangleView, styles.viewLayout]} />
        <View style={styles.groupChild1} />
        <Text
          style={[styles.eyeDropsSparky, styles.groupIconPosition]}
        >{`Eye drops: SPARKY `}</Text>
        <Text
          style={[styles.datesSept19231, styles.addTypo]}
        >{`Dates: Sept 19-23
Notifications: 6am + 6pm
Message: “2 drops”`}</Text>
        <View style={[styles.groupChild2, styles.groupChildLayout1]} />
        <Image
          style={[styles.groupIcon, styles.groupIconPosition]}
          contentFit="cover"
          source={require("../assets/group-8.png")}
        />
      </View>
      <View style={[styles.groupView, styles.viewLayout]}>
        <View style={[styles.rectangleView, styles.viewLayout]} />
        <View style={styles.groupChild1} />
        <Text
          style={[styles.eyeDropsSparky, styles.groupIconPosition]}
        >{`Antibiotics: Blue `}</Text>
        <Text
          style={[styles.datesSept19231, styles.addTypo]}
        >{`Dates: Sept 19-23
Notifications: 6am + 6pm
Message: “2 drops”`}</Text>
        <View style={[styles.groupChild5, styles.groupChildLayout1]} />
        <Image
          style={[styles.groupIcon, styles.groupIconPosition]}
          contentFit="cover"
          source={require("../assets/group-8.png")}
        />
      </View>
      <View style={[styles.rectangleParent1, styles.viewLayout]}>
        <View style={[styles.rectangleView, styles.viewLayout]} />
        <View style={styles.groupChild1} />
        <Text style={[styles.eyeDropsSparky, styles.groupIconPosition]}>
          Heartgard: Blue
        </Text>
        <Text
          style={[styles.datesSept19231, styles.addTypo]}
        >{`Dates: Sept 19-23
Notifications: 6am + 6pm
Message: “2 drops”`}</Text>
        <View style={[styles.groupChild9, styles.groupChildLayout1]} />
        <Image
          style={[styles.groupIcon, styles.groupIconPosition]}
          contentFit="cover"
          source={require("../assets/group-8.png")}
        />
      </View>
      <Text style={[styles.petdrop, styles.petdropTypo]}>petdrop.</Text>
      <Text style={[styles.neverMissA, styles.datesTypo]}>
        NEVER MISS A DROP.
      </Text>
      <View style={styles.groupParent}>
        <View style={[styles.rectangleParent2, styles.groupChild11Layout]}>
          <View style={[styles.groupChild11, styles.groupChild11Layout]} />
          <Text style={[styles.text, styles.textLayout]}>9:53</Text>
          <View style={styles.groupContainer}>
            <View style={styles.rectangleParent3}>
              <View style={[styles.groupChild12, styles.groupChildBg]} />
              <View style={[styles.groupChild13, styles.groupChildBorder]} />
              <View style={[styles.groupChild14, styles.groupChildBorder]} />
            </View>
            <View
              style={[styles.rectangleParent4, styles.groupChild15Position]}
            >
              <View
                style={[styles.groupChild15, styles.groupChild15Position]}
              />
              <View style={[styles.groupChild16, styles.groupChildBg]} />
              <View style={[styles.groupChild17, styles.groupChildBg]} />
            </View>
            <Image
              style={[styles.groupChild18, styles.groupLayout1]}
              contentFit="cover"
              source={require("../assets/group-23.png")}
            />
          </View>
        </View>
        <View style={[styles.instanceChild, styles.polygonIconPosition]} />
        <View
          style={[styles.rectangleParent5, styles.rectangleParentPosition1]}
        >
          <View style={[styles.groupChild19, styles.groupChildPosition]} />
          <Text style={[styles.meds, styles.addTypo]}>MEDS</Text>
        </View>
        <View
          style={[styles.rectangleParent6, styles.rectangleParentPosition1]}
        >
          <View style={[styles.groupChild19, styles.groupChildPosition]} />
          <Text style={[styles.reminders2, styles.addTypo]}>Reminders</Text>
        </View>
        <View
          style={[styles.rectangleParent7, styles.rectangleParentPosition1]}
        >
          <View style={[styles.groupChild19, styles.groupChildPosition]} />
          <Text style={[styles.share, styles.addTypo]}>SHARE</Text>
        </View>
        <View style={[styles.rectangleParent8, styles.rectangleParentPosition]}>
          <View style={[styles.groupChild22, styles.groupChildPosition]} />
          <Text style={[styles.pets, styles.addTypo]}>PETs</Text>
        </View>
        <View style={[styles.rectangleParent9, styles.rectangleParentPosition]}>
          <View style={[styles.groupChild23, styles.polygonIconLayout]} />
          <Image
            style={[styles.polygonIcon, styles.polygonIconLayout]}
            contentFit="cover"
            source={require("../assets/polygon-1.png")}
          />
        </View>
        <View
          style={[styles.rectangleParent10, styles.rectangleParentPosition]}
        >
          <View style={[styles.groupChild24, styles.groupChildLayout]} />
          <View style={[styles.groupChild25, styles.groupChildLayout]} />
          <View style={[styles.groupChild26, styles.groupChildLayout]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  petdropTypo: {
    color: Color.colorCornflowerblue,
    fontFamily: FontFamily.jsMathCmbx10,
    textAlign: "left",
    position: "absolute",
  },
  datesTypo: {
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorCornflowerblue,
    position: "absolute",
  },
  textLayout: {
    height: 23,
    position: "absolute",
  },
  addTypo: {
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.koulenRegular,
    textAlign: "left",
  },
  groupLayout1: {
    width: 10,
    position: "absolute",
  },
  groupPosition: {
    top: 4,
    borderRadius: Border.br_10xs,
  },
  groupLayout: {
    top: 10,
    height: 2,
    width: 10,
  },
  viewLayout: {
    height: 111,
    width: 281,
    position: "absolute",
  },
  groupIconPosition: {
    top: 3,
    position: "absolute",
  },
  groupChildLayout1: {
    height: 19,
    width: 19,
    borderRadius: Border.br_7xs,
    left: 12,
    top: 7,
    position: "absolute",
  },
  groupChild11Layout: {
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
  groupChild15Position: {
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
  reminders1: {
    top: 196,
    left: 34,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
  },
  datesSept1923: {
    top: 928,
    left: 94,
    fontFamily: FontFamily.koulenRegular,
  },
  datesSept2022: {
    top: 1062,
    left: 94,
    fontFamily: FontFamily.koulenRegular,
  },
  datesSept25: {
    top: 1237,
    left: 94,
    fontFamily: FontFamily.koulenRegular,
  },
  groupChild: {
    top: 1,
    borderRadius: Border.br_3xs,
    height: 21,
    backgroundColor: Color.colorLightskyblue,
    left: 0,
    width: 40,
    position: "absolute",
  },
  add: {
    left: 18,
    top: 0,
    fontSize: FontSize.size_smi,
    color: Color.colorFloralwhite,
    position: "absolute",
  },
  groupItem: {
    height: 2,
    borderRadius: Border.br_10xs,
    width: 10,
    position: "absolute",
    left: 0,
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
    top: 618,
    left: 64,
    width: 40,
  },
  rectangleView: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorCornflowerblue,
    top: 0,
    left: 0,
  },
  groupChild1: {
    top: 32,
    borderBottomRightRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_xl,
    height: 79,
    width: 281,
    backgroundColor: Color.colorLightskyblue,
    left: 0,
    position: "absolute",
  },
  eyeDropsSparky: {
    left: 39,
    fontSize: FontSize.size_base,
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.koulenRegular,
    textAlign: "left",
  },
  datesSept19231: {
    top: 35,
    left: 14,
    fontSize: FontSize.size_smi,
    color: Color.colorFloralwhite,
    position: "absolute",
  },
  groupChild2: {
    backgroundColor: Color.colorFirebrick,
  },
  groupIcon: {
    left: 245,
    width: 29,
    height: 29,
  },
  rectangleContainer: {
    top: 234,
    left: 55,
    height: 111,
  },
  groupChild5: {
    backgroundColor: Color.colorGoldenrod,
  },
  groupView: {
    top: 362,
    left: 55,
    height: 111,
  },
  groupChild9: {
    backgroundColor: Color.colorDarkkhaki,
  },
  rectangleParent1: {
    top: 490,
    left: 55,
    height: 111,
  },
  petdrop: {
    top: 82,
    left: 19,
    fontSize: FontSize.size_45xl,
    width: 342,
    height: 112,
    textAlign: "left",
  },
  neverMissA: {
    top: 133,
    left: 46,
  },
  groupChild11: {
    top: 0,
    backgroundColor: Color.colorLightskyblue,
  },
  text: {
    top: 19,
    left: 36,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.juaRegular,
    color: Color.colorWhite,
    width: 77,
    textAlign: "left",
  },
  groupChild12: {
    top: 2,
    left: 2,
    width: 14,
    height: 8,
    borderRadius: Border.br_10xs,
  },
  groupChild13: {
    left: 20,
    borderWidth: 0.5,
    width: 1,
    height: 4,
    borderRadius: Border.br_10xs,
    top: 4,
  },
  groupChild14: {
    borderWidth: 1,
    width: 20,
    borderRadius: Border.br_9xs,
    height: 12,
    top: 0,
    left: 0,
  },
  rectangleParent3: {
    left: 52,
    width: 21,
    height: 12,
    top: 0,
    position: "absolute",
  },
  groupChild15: {
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_9xs,
    height: 2,
    left: 0,
  },
  groupChild16: {
    top: 5,
    width: 17,
    borderRadius: Border.br_9xs,
    height: 2,
    left: 3,
  },
  groupChild17: {
    left: 6,
    borderRadius: Border.br_9xs,
    top: 10,
    height: 2,
    width: 10,
  },
  rectangleParent4: {
    left: 23,
    height: 12,
  },
  groupChild18: {
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
  rectangleParent2: {
    top: -797,
  },
  instanceChild: {
    height: "146.81%",
    top: "-46.81%",
    bottom: "0%",
    backgroundColor: Color.colorLightskyblue,
    position: "absolute",
  },
  groupChild19: {
    height: "95.65%",
    top: "4.35%",
  },
  meds: {
    left: "16.67%",
    top: "0%",
    fontSize: FontSize.size_smi,
    color: Color.colorFloralwhite,
    position: "absolute",
  },
  rectangleParent5: {
    width: "9.23%",
    right: "34.1%",
    left: "56.67%",
  },
  reminders2: {
    left: "9.52%",
    top: "0%",
    fontSize: FontSize.size_smi,
    color: Color.colorFloralwhite,
    position: "absolute",
  },
  rectangleParent6: {
    width: "16.15%",
    right: "49.74%",
    left: "34.1%",
  },
  share: {
    left: "14.63%",
    top: "0%",
    fontSize: FontSize.size_smi,
    color: Color.colorFloralwhite,
    position: "absolute",
  },
  rectangleParent7: {
    width: "10.51%",
    right: "17.18%",
    left: "72.31%",
  },
  groupChild22: {
    height: "100%",
    top: "0%",
  },
  pets: {
    height: "95.45%",
    width: "67.65%",
    left: "17.65%",
    top: "0%",
    fontSize: FontSize.size_smi,
    color: Color.colorFloralwhite,
    position: "absolute",
  },
  rectangleParent8: {
    width: "8.72%",
    right: "72.31%",
    left: "18.97%",
  },
  groupChild23: {
    width: "65.52%",
    top: "31.82%",
    right: "17.24%",
    left: "17.24%",
    bottom: "0%",
    backgroundColor: Color.colorCornflowerblue,
    borderRadius: Border.br_10xs,
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
  rectangleParent9: {
    width: "7.44%",
    right: "87.44%",
    left: "5.13%",
  },
  groupChild24: {
    bottom: "81.82%",
    top: "0%",
  },
  groupChild25: {
    top: "40.91%",
    bottom: "40.91%",
  },
  groupChild26: {
    top: "81.82%",
    bottom: "0%",
  },
  rectangleParent10: {
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
  reminders: {
    flex: 1,
    height: 1464,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorFloralwhite,
  },
});

export default Reminders;
