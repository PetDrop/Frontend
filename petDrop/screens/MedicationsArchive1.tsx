import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const MedicationsArchive1 = () => {
  return (
    <View style={styles.medicationsArchive}>
      <Text style={[styles.petdrop, styles.petdropTypo]}>petdrop.</Text>
      <Text style={[styles.neverMissA, styles.textTypo]}>
        NEVER MISS A DROP.
      </Text>
      <Text style={[styles.medications, styles.petdropTypo]}>Medications</Text>
      <View style={styles.medicationsArchiveChild} />
      <Text style={[styles.text, styles.textTypo]}>{`>`}</Text>
      <Text style={[styles.switch, styles.switchTypo]}>SWITCH</Text>
      <Image
        style={styles.medicationsArchiveItem}
        contentFit="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={styles.untitledArtwork52Copy2}
        contentFit="cover"
        source={require("../assets/untitled-artwork-52-copy-21.png")}
      />
      <Image
        style={styles.subtractIcon}
        contentFit="cover"
        source={require("../assets/subtract3.png")}
      />
      <Text style={[styles.eyeDrops, styles.switchTypo]}>{`Eye drops `}</Text>
      <View style={[styles.rectangleParent, styles.groupLayout1]}>
        <View style={[styles.groupChild, styles.groupLayout1]} />
        <View style={styles.groupItem} />
        <Text
          style={[styles.antibioticsBlue, styles.addTypo]}
        >{`Antibiotics: Blue `}</Text>
        <Text style={[styles.datesSept1923, styles.addTypo]}>{`Dates: Sept 19-23
Notifications: 6am + 6pm
Message: “2 drops”`}</Text>
        <View style={[styles.groupInner, styles.groupLayout]} />
        <Image
          style={styles.groupIcon}
          contentFit="cover"
          source={require("../assets/group-8.png")}
        />
      </View>
      <View style={[styles.rectangleGroup, styles.groupLayout1]}>
        <View style={[styles.groupChild, styles.groupLayout1]} />
        <View style={styles.groupItem} />
        <Text style={[styles.antibioticsBlue, styles.addTypo]}>
          Heartgard: Blue
        </Text>
        <Text style={[styles.datesSept1923, styles.addTypo]}>{`Dates: Sept 19-23
Notifications: 6am + 6pm
Message: “2 drops”`}</Text>
        <View style={[styles.groupChild2, styles.groupLayout]} />
        <Image
          style={styles.groupIcon}
          contentFit="cover"
          source={require("../assets/group-8.png")}
        />
      </View>
      <View style={[styles.rectangleContainer, styles.text1Layout]}>
        <View style={styles.groupChild4} />
        <Text style={[styles.add, styles.addTypo]}>ADD</Text>
        <View style={[styles.groupView, styles.groupChildLayout2]}>
          <View style={[styles.groupChild5, styles.groupChildPosition1]} />
          <View style={[styles.groupChild6, styles.groupChildLayout1]} />
        </View>
      </View>
      <View style={styles.groupParent}>
        <View style={[styles.rectangleParent1, styles.groupChild7Layout]}>
          <View style={[styles.groupChild7, styles.groupChild7Layout]} />
          <Text style={[styles.text1, styles.text1Layout]}>9:53</Text>
          <View style={styles.groupContainer}>
            <View style={styles.rectangleParent2}>
              <View style={[styles.groupChild8, styles.groupChildBg]} />
              <View style={[styles.groupChild9, styles.groupChildBorder]} />
              <View style={[styles.groupChild10, styles.groupChildBorder]} />
            </View>
            <View
              style={[styles.rectangleParent3, styles.groupChild11Position]}
            >
              <View
                style={[styles.groupChild11, styles.groupChild11Position]}
              />
              <View style={[styles.groupChild12, styles.groupChildBg]} />
              <View style={[styles.groupChild13, styles.groupChildBg]} />
            </View>
            <Image
              style={[styles.groupChild14, styles.groupChildLayout2]}
              contentFit="cover"
              source={require("../assets/group-23.png")}
            />
          </View>
        </View>
        <View style={[styles.instanceChild, styles.polygonIconPosition]} />
        <View
          style={[styles.rectangleParent4, styles.rectangleParentPosition1]}
        >
          <View style={[styles.groupChild15, styles.groupChildPosition]} />
          <Text style={[styles.meds, styles.addTypo]}>MEDS</Text>
        </View>
        <View
          style={[styles.rectangleParent5, styles.rectangleParentPosition1]}
        >
          <View style={[styles.groupChild15, styles.groupChildPosition]} />
          <Text style={[styles.reminders, styles.addTypo]}>Reminders</Text>
        </View>
        <View
          style={[styles.rectangleParent6, styles.rectangleParentPosition1]}
        >
          <View style={[styles.groupChild15, styles.groupChildPosition]} />
          <Text style={[styles.share, styles.addTypo]}>SHARE</Text>
        </View>
        <View style={[styles.rectangleParent7, styles.rectangleParentPosition]}>
          <View style={[styles.groupChild18, styles.groupChildPosition]} />
          <Text style={[styles.pets, styles.addTypo]}>PETs</Text>
        </View>
        <View style={[styles.rectangleParent8, styles.rectangleParentPosition]}>
          <View style={[styles.groupChild19, styles.polygonIconLayout]} />
          <Image
            style={[styles.polygonIcon, styles.polygonIconLayout]}
            contentFit="cover"
            source={require("../assets/polygon-1.png")}
          />
        </View>
        <View style={[styles.rectangleParent9, styles.rectangleParentPosition]}>
          <View style={[styles.groupChild20, styles.groupChildLayout]} />
          <View style={[styles.groupChild21, styles.groupChildLayout]} />
          <View style={[styles.groupChild22, styles.groupChildLayout]} />
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
  switchTypo: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.koulenRegular,
    textAlign: "left",
    color: Color.colorCornflowerblue,
    position: "absolute",
  },
  groupLayout1: {
    height: 111,
    width: 281,
    position: "absolute",
  },
  addTypo: {
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.koulenRegular,
    textAlign: "left",
    position: "absolute",
  },
  groupLayout: {
    height: 19,
    width: 19,
    borderRadius: Border.br_7xs,
    left: 12,
    top: 7,
    position: "absolute",
  },
  text1Layout: {
    height: 23,
    position: "absolute",
  },
  groupChildLayout2: {
    width: 10,
    position: "absolute",
  },
  groupChildPosition1: {
    top: 4,
    borderRadius: Border.br_10xs,
  },
  groupChildLayout1: {
    top: 10,
    height: 2,
    width: 10,
  },
  groupChild7Layout: {
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
  groupChild11Position: {
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
  medicationsArchiveChild: {
    top: 189,
    left: 250,
    borderRadius: Border.br_2xl,
    backgroundColor: Color.colorGainsboro_100,
    width: 117,
    height: 42,
    position: "absolute",
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
  },
  medicationsArchiveItem: {
    top: 194,
    left: 256,
    width: 32,
    height: 32,
    position: "absolute",
  },
  untitledArtwork52Copy2: {
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
  eyeDrops: {
    top: 435,
    left: 67,
  },
  groupChild: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorCornflowerblue,
    left: 0,
    top: 0,
  },
  groupItem: {
    top: 32,
    borderBottomRightRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_xl,
    height: 79,
    backgroundColor: Color.colorLightskyblue,
    left: 0,
    width: 281,
    position: "absolute",
  },
  antibioticsBlue: {
    left: 39,
    top: 3,
    fontSize: FontSize.size_base,
  },
  datesSept1923: {
    top: 35,
    left: 14,
    fontSize: FontSize.size_smi,
  },
  groupInner: {
    backgroundColor: Color.colorGoldenrod,
  },
  groupIcon: {
    left: 245,
    width: 29,
    height: 29,
    top: 3,
    position: "absolute",
  },
  rectangleParent: {
    top: 264,
    left: 55,
    height: 111,
  },
  groupChild2: {
    backgroundColor: Color.colorDarkkhaki,
  },
  rectangleGroup: {
    top: 392,
    left: 55,
    height: 111,
  },
  groupChild4: {
    top: 1,
    borderRadius: Border.br_3xs,
    height: 21,
    width: 40,
    backgroundColor: Color.colorLightskyblue,
    left: 0,
    position: "absolute",
  },
  add: {
    left: 18,
    top: 0,
    fontSize: FontSize.size_smi,
  },
  groupChild5: {
    height: 2,
    borderRadius: Border.br_10xs,
    width: 10,
    position: "absolute",
    left: 0,
    backgroundColor: Color.colorFloralwhite,
  },
  groupChild6: {
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
  groupView: {
    top: 6,
    height: 10,
    left: 3,
  },
  rectangleContainer: {
    top: 523,
    left: 66,
    width: 40,
  },
  groupChild7: {
    backgroundColor: Color.colorLightskyblue,
    top: 0,
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
  groupChild8: {
    top: 2,
    left: 2,
    width: 14,
    height: 8,
    borderRadius: Border.br_10xs,
  },
  groupChild9: {
    left: 20,
    borderWidth: 0.5,
    width: 1,
    height: 4,
    borderRadius: Border.br_10xs,
    top: 4,
  },
  groupChild10: {
    borderWidth: 1,
    width: 20,
    borderRadius: Border.br_9xs,
    height: 12,
    left: 0,
    top: 0,
  },
  rectangleParent2: {
    width: 21,
    height: 12,
    top: 0,
    left: 52,
    position: "absolute",
  },
  groupChild11: {
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_9xs,
    height: 2,
    left: 0,
  },
  groupChild12: {
    top: 5,
    width: 17,
    borderRadius: Border.br_9xs,
    height: 2,
    left: 3,
  },
  groupChild13: {
    left: 6,
    borderRadius: Border.br_9xs,
    top: 10,
    height: 2,
    width: 10,
  },
  rectangleParent3: {
    left: 23,
    height: 12,
  },
  groupChild14: {
    height: 12,
    left: 0,
    top: 0,
  },
  groupContainer: {
    top: 23,
    left: 292,
    width: 73,
    height: 12,
    position: "absolute",
  },
  rectangleParent1: {
    top: -797,
  },
  instanceChild: {
    height: "146.81%",
    top: "-46.81%",
    bottom: "0%",
    backgroundColor: Color.colorLightskyblue,
    position: "absolute",
  },
  groupChild15: {
    height: "95.65%",
    top: "4.35%",
  },
  meds: {
    left: "16.67%",
    top: "0%",
    fontSize: FontSize.size_smi,
  },
  rectangleParent4: {
    width: "9.23%",
    right: "34.1%",
    left: "56.67%",
  },
  reminders: {
    left: "9.52%",
    top: "0%",
    fontSize: FontSize.size_smi,
  },
  rectangleParent5: {
    width: "16.15%",
    right: "49.74%",
    left: "34.1%",
  },
  share: {
    left: "14.63%",
    top: "0%",
    fontSize: FontSize.size_smi,
  },
  rectangleParent6: {
    width: "10.51%",
    right: "17.18%",
    left: "72.31%",
  },
  groupChild18: {
    height: "100%",
    top: "0%",
  },
  pets: {
    height: "95.45%",
    width: "67.65%",
    left: "17.65%",
    top: "0%",
    fontSize: FontSize.size_smi,
  },
  rectangleParent7: {
    width: "8.72%",
    right: "72.31%",
    left: "18.97%",
  },
  groupChild19: {
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
  rectangleParent8: {
    width: "7.44%",
    right: "87.44%",
    left: "5.13%",
  },
  groupChild20: {
    bottom: "81.82%",
    top: "0%",
  },
  groupChild21: {
    top: "40.91%",
    bottom: "40.91%",
  },
  groupChild22: {
    top: "81.82%",
    bottom: "0%",
  },
  rectangleParent9: {
    width: "5.64%",
    right: "5.13%",
    left: "89.23%",
  },
  groupParent: {
    top: 797,
    left: -1,
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

export default MedicationsArchive1;
