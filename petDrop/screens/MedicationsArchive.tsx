import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const MedicationsArchive = () => {
  return (
    <View style={styles.medicationsArchive}>
      <View style={styles.medicationsArchiveChild} />
      <Text style={[styles.petdrop, styles.petdropTypo]}>petdrop.</Text>
      <Text style={[styles.neverMissA, styles.textTypo]}>
        NEVER MISS A DROP.
      </Text>
      <Text style={[styles.medications, styles.petdropTypo]}>Medications</Text>
      <Text style={[styles.text, styles.textTypo]}>{`>`}</Text>
      <Text style={[styles.switch, styles.textTypo]}>SWITCH</Text>
      <Image
        style={styles.medicationsArchiveItem}
        contentFit="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={styles.untitledArtwork52Copy3}
        contentFit="cover"
        source={require("../assets/untitled-artwork-52-copy-3.png")}
      />
      <Image
        style={styles.subtractIcon}
        contentFit="cover"
        source={require("../assets/subtract2.png")}
      />
      <View style={[styles.rectangleParent, styles.text1Layout]}>
        <View style={styles.groupChild} />
        <Text style={[styles.add, styles.sparkyTypo]}>ADD</Text>
        <View style={[styles.rectangleGroup, styles.groupLayout2]}>
          <View style={[styles.groupItem, styles.groupPosition]} />
          <View style={[styles.groupInner, styles.groupLayout1]} />
        </View>
      </View>
      <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
        <View style={[styles.rectangleView, styles.rectangleLayout]} />
        <View style={[styles.groupChild1, styles.rectangleLayout]} />
        <Text
          style={[styles.eyeDropsSparky, styles.groupIconPosition]}
        >{`Eye drops: SPARKY `}</Text>
        <View style={styles.groupChild2} />
        <Image
          style={[styles.groupIcon, styles.groupIconPosition]}
          contentFit="cover"
          source={require("../assets/group-8.png")}
        />
      </View>
      <Text style={[styles.petSparkyDates, styles.sparkyTypo]}>{`Pet: Sparky
Dates: Sept 19-23
Drug:
Diagnosis: 
Location on body: 
APPLICATION: 
Vet Notes: 
R/l Eye: right/left/both
Notifications: 6am + 6pm
Message: “2 drops”
Other:`}</Text>
      <View style={styles.groupParent}>
        <View style={[styles.groupView, styles.groupLayout]}>
          <View style={[styles.groupChild3, styles.groupLayout]} />
          <Text style={[styles.text1, styles.text1Layout]}>9:53</Text>
          <View style={styles.groupContainer}>
            <View style={styles.rectangleParent1}>
              <View style={[styles.groupChild4, styles.groupChildBg]} />
              <View style={[styles.groupChild5, styles.groupChildBorder]} />
              <View style={[styles.groupChild6, styles.groupChildBorder]} />
            </View>
            <View style={[styles.rectangleParent2, styles.groupChild7Position]}>
              <View style={[styles.groupChild7, styles.groupChild7Position]} />
              <View style={[styles.groupChild8, styles.groupChildBg]} />
              <View style={[styles.groupChild9, styles.groupChildBg]} />
            </View>
            <Image
              style={[styles.groupChild10, styles.groupLayout2]}
              contentFit="cover"
              source={require("../assets/group-23.png")}
            />
          </View>
        </View>
        <View style={[styles.instanceChild, styles.polygonIconPosition]} />
        <View
          style={[styles.rectangleParent3, styles.rectangleParentPosition1]}
        >
          <View style={[styles.groupChild11, styles.groupChildPosition]} />
          <Text style={[styles.meds, styles.sparkyTypo]}>MEDS</Text>
        </View>
        <View
          style={[styles.rectangleParent4, styles.rectangleParentPosition1]}
        >
          <View style={[styles.groupChild11, styles.groupChildPosition]} />
          <Text style={[styles.reminders, styles.sparkyTypo]}>Reminders</Text>
        </View>
        <View
          style={[styles.rectangleParent5, styles.rectangleParentPosition1]}
        >
          <View style={[styles.groupChild11, styles.groupChildPosition]} />
          <Text style={[styles.share, styles.sparkyTypo]}>SHARE</Text>
        </View>
        <View style={[styles.rectangleParent6, styles.rectangleParentPosition]}>
          <View style={[styles.groupChild14, styles.groupChildPosition]} />
          <Text style={[styles.pets, styles.sparkyTypo]}>PETs</Text>
        </View>
        <View style={[styles.rectangleParent7, styles.rectangleParentPosition]}>
          <View style={[styles.groupChild15, styles.polygonIconLayout]} />
          <Image
            style={[styles.polygonIcon, styles.polygonIconLayout]}
            contentFit="cover"
            source={require("../assets/polygon-1.png")}
          />
        </View>
        <View style={[styles.rectangleParent8, styles.rectangleParentPosition]}>
          <View style={[styles.groupChild16, styles.groupChildLayout]} />
          <View style={[styles.groupChild17, styles.groupChildLayout]} />
          <View style={[styles.groupChild18, styles.groupChildLayout]} />
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
  textTypo: {
    fontFamily: FontFamily.koulenRegular,
    textAlign: "left",
    color: Color.colorCornflowerblue,
    position: "absolute",
  },
  text1Layout: {
    height: 23,
    position: "absolute",
  },
  sparkyTypo: {
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.koulenRegular,
    textAlign: "left",
  },
  groupLayout2: {
    width: 10,
    position: "absolute",
  },
  groupPosition: {
    top: 4,
    borderRadius: Border.br_10xs,
  },
  groupLayout1: {
    top: 10,
    height: 2,
    width: 10,
  },
  rectangleLayout: {
    width: 281,
    position: "absolute",
  },
  groupIconPosition: {
    top: 3,
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
  groupChild7Position: {
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
  medicationsArchiveChild: {
    top: 189,
    left: 250,
    borderRadius: Border.br_2xl,
    backgroundColor: Color.colorGainsboro_100,
    width: 117,
    height: 42,
    position: "absolute",
  },
  petdrop: {
    top: 82,
    left: 25,
    fontSize: FontSize.size_45xl,
    width: 342,
    height: 112,
    textAlign: "left",
  },
  neverMissA: {
    top: 133,
    fontSize: FontSize.size_smi,
    left: 52,
  },
  medications: {
    top: 197,
    left: 34,
    fontSize: FontSize.size_5xl,
    width: 181,
    textAlign: "left",
  },
  text: {
    top: 207,
    left: 367,
    transform: [
      {
        rotate: "89.4deg",
      },
    ],
    fontSize: FontSize.size_base,
  },
  switch: {
    top: 193,
    left: 293,
    fontSize: FontSize.size_xl,
  },
  medicationsArchiveItem: {
    top: 194,
    left: 256,
    width: 32,
    height: 32,
    position: "absolute",
  },
  untitledArtwork52Copy3: {
    top: 198,
    left: 261,
    width: 23,
    height: 30,
    position: "absolute",
  },
  subtractIcon: {
    width: 34,
    height: 34,
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
    top: 675,
    left: 61,
    width: 40,
  },
  rectangleView: {
    borderRadius: Border.br_xl,
    height: 111,
    backgroundColor: Color.colorCornflowerblue,
    top: 0,
    left: 0,
  },
  groupChild1: {
    top: 32,
    borderBottomRightRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_xl,
    height: 358,
    backgroundColor: Color.colorLightskyblue,
    left: 0,
  },
  eyeDropsSparky: {
    left: 39,
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.koulenRegular,
    textAlign: "left",
    fontSize: FontSize.size_base,
  },
  groupChild2: {
    top: 7,
    left: 12,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorFirebrick,
    width: 19,
    height: 19,
    position: "absolute",
  },
  groupIcon: {
    left: 245,
    width: 29,
    height: 29,
  },
  rectangleContainer: {
    top: 265,
    height: 390,
    left: 52,
  },
  petSparkyDates: {
    top: 307,
    left: 73,
    lineHeight: 30,
    width: 122,
    height: 365,
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  groupChild3: {
    top: 0,
    backgroundColor: Color.colorLightskyblue,
  },
  text1: {
    top: 19,
    left: 36,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.juaRegular,
    color: Color.colorWhite,
    width: 77,
    textAlign: "left",
  },
  groupChild4: {
    top: 2,
    left: 2,
    width: 14,
    height: 8,
    borderRadius: Border.br_10xs,
  },
  groupChild5: {
    left: 20,
    borderWidth: 0.5,
    width: 1,
    height: 4,
    borderRadius: Border.br_10xs,
    top: 4,
  },
  groupChild6: {
    borderWidth: 1,
    width: 20,
    borderRadius: Border.br_9xs,
    height: 12,
    top: 0,
    left: 0,
  },
  rectangleParent1: {
    width: 21,
    height: 12,
    top: 0,
    left: 52,
    position: "absolute",
  },
  groupChild7: {
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_9xs,
    height: 2,
    left: 0,
  },
  groupChild8: {
    top: 5,
    width: 17,
    borderRadius: Border.br_9xs,
    height: 2,
    left: 3,
  },
  groupChild9: {
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
  groupChild10: {
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
  instanceChild: {
    height: "146.81%",
    top: "-46.81%",
    bottom: "0%",
    backgroundColor: Color.colorLightskyblue,
    position: "absolute",
  },
  groupChild11: {
    height: "95.65%",
    top: "4.35%",
  },
  meds: {
    left: "16.67%",
    top: "0%",
    fontSize: FontSize.size_smi,
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
    fontSize: FontSize.size_smi,
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
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  rectangleParent5: {
    width: "10.51%",
    right: "17.18%",
    left: "72.31%",
  },
  groupChild14: {
    height: "100%",
    top: "0%",
  },
  pets: {
    height: "95.45%",
    width: "67.65%",
    left: "17.65%",
    top: "0%",
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  rectangleParent6: {
    width: "8.72%",
    right: "72.31%",
    left: "18.97%",
  },
  groupChild15: {
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
  rectangleParent7: {
    width: "7.44%",
    right: "87.44%",
    left: "5.13%",
  },
  groupChild16: {
    bottom: "81.82%",
    top: "0%",
  },
  groupChild17: {
    top: "40.91%",
    bottom: "40.91%",
  },
  groupChild18: {
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
    left: 1,
    height: 47,
    width: 390,
    position: "absolute",
  },
  medicationsArchive: {
    flex: 1,
    height: 2080,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorFloralwhite,
  },
});

export default MedicationsArchive;
