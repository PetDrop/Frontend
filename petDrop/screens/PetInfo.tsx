import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PetInfo = () => {
  return (
    <View style={styles.petInfo}>
      <Image
        style={[styles.untitledArtwork52Copy1, styles.untitledLayout]}
        contentFit="cover"
        source={require("../assets/untitled-artwork-52-copy-1.png")}
      />
      <Image
        style={styles.subtractIcon}
        contentFit="cover"
        source={require("../assets/subtract.png")}
      />
      <Text style={[styles.sparky, styles.blueTypo1]}>Sparky</Text>
      <Text style={[styles.age8Breed, styles.breedTypo]}>{`Age: 8
Breed: Lab
Address: 123 Street Dr. 
Vet: Dog inc. 
      +1 123-222-4444
`}</Text>
      <Image
        style={[styles.untitledArtwork52Copy2, styles.untitledLayout]}
        contentFit="cover"
        source={require("../assets/untitled-artwork-52-copy-2.png")}
      />
      <Image
        style={styles.subtractIcon}
        contentFit="cover"
        source={require("../assets/subtract.png")}
      />
      <Text style={[styles.blue, styles.blueTypo1]}>Blue</Text>
      <Text style={[styles.age12Breed, styles.breedTypo]}>{`Age: 12
Breed: Lab
Address: 123 Street Dr. 
Vet: Dog inc. 
      +1 123-222-4444
`}</Text>
      <Text style={[styles.medications, styles.medicationsTypo]}>
        Medications:
      </Text>
      <Text style={[styles.medications1, styles.medicationsTypo]}>
        Medications:
      </Text>
      <Text style={[styles.eyeDropsSparky, styles.bluePosition]}>
        Eye drops (Sparky, Red bottle, 2 drops, twice a day)
      </Text>
      <Text
        style={[styles.antibioticsBlueBlue, styles.bluePosition]}
      >{`Antibiotics (Blue, Blue bottle, 1 pill, morning) `}</Text>
      <Text
        style={[styles.heartgardBlueBlack, styles.bluePosition]}
      >{`Heartgard (Blue, Black box, 1 pill, every night) `}</Text>
      <View style={[styles.petInfoChild, styles.childLayout]} />
      <View style={[styles.petInfoItem, styles.childLayout]} />
      <View style={[styles.petInfoInner, styles.childLayout]} />
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={[styles.groupChild, styles.childLayout]} />
        <Text style={[styles.add, styles.addTypo]}>ADD</Text>
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupItem, styles.groupPosition1]} />
          <View style={[styles.groupInner, styles.groupPosition]} />
        </View>
      </View>
      <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
        <View style={[styles.groupChild, styles.childLayout]} />
        <Text style={[styles.add, styles.addTypo]}>ADD</Text>
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupItem, styles.groupPosition1]} />
          <View style={[styles.groupChild2, styles.groupPosition]} />
        </View>
      </View>
      <View style={[styles.petInfoChild1, styles.petChildLayout]} />
      <View style={[styles.petInfoChild2, styles.petChildLayout]} />
      <View style={[styles.petInfoChild3, styles.groupParentPosition]} />
      <View style={[styles.groupParent, styles.groupParentPosition]}>
        <View style={styles.rectangleParent1}>
          <View style={[styles.groupChild3, styles.groupChildLayout1]} />
          <View style={[styles.groupChild4, styles.groupChildLayout1]} />
        </View>
        <Text style={[styles.addNewPet, styles.addTypo]}>{`Add New pet `}</Text>
      </View>
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group-8.png")}
      />
      <Image
        style={[styles.petInfoChild4, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group-8.png")}
      />
      <Text style={[styles.petdrop, styles.blueTypo1]}>petdrop.</Text>
      <Text style={[styles.neverMissA, styles.blueTypo]}>
        NEVER MISS A DROP.
      </Text>
      <View style={styles.groupContainer}>
        <View style={[styles.rectangleParent2, styles.groupChild5Layout]}>
          <View style={[styles.groupChild5, styles.groupChild5Layout]} />
          <Text style={[styles.text, styles.rectangleLayout]}>9:53</Text>
          <View style={styles.groupParent1}>
            <View style={[styles.rectangleParent3, styles.bluePosition]}>
              <View style={[styles.groupChild6, styles.groupChildBg1]} />
              <View style={[styles.groupChild7, styles.groupChildBorder]} />
              <View style={[styles.groupChild8, styles.groupChildBorder]} />
            </View>
            <View style={[styles.rectangleParent4, styles.groupChild9Position]}>
              <View style={[styles.groupChild9, styles.groupChild9Position]} />
              <View style={[styles.groupChild10, styles.groupChildBg1]} />
              <View style={[styles.groupChild11, styles.groupChildBg1]} />
            </View>
            <Image
              style={[styles.groupChild12, styles.groupLayout]}
              contentFit="cover"
              source={require("../assets/group-23.png")}
            />
          </View>
        </View>
        <View style={[styles.instanceChild, styles.polygonIconPosition]} />
        <View
          style={[styles.rectangleParent5, styles.rectangleParentPosition1]}
        >
          <View style={[styles.groupChild13, styles.groupChildBg]} />
          <Text style={[styles.meds, styles.addTypo]}>MEDS</Text>
        </View>
        <View
          style={[styles.rectangleParent6, styles.rectangleParentPosition1]}
        >
          <View style={[styles.groupChild13, styles.groupChildBg]} />
          <Text style={[styles.reminders, styles.addTypo]}>Reminders</Text>
        </View>
        <View
          style={[styles.rectangleParent7, styles.rectangleParentPosition1]}
        >
          <View style={[styles.groupChild13, styles.groupChildBg]} />
          <Text style={[styles.share, styles.addTypo]}>SHARE</Text>
        </View>
        <View style={[styles.rectangleParent8, styles.rectangleParentPosition]}>
          <View style={[styles.groupChild16, styles.groupChildBg]} />
          <Text style={[styles.pets, styles.addTypo]}>PETs</Text>
        </View>
        <View style={[styles.rectangleParent9, styles.rectangleParentPosition]}>
          <View style={[styles.groupChild17, styles.polygonIconLayout]} />
          <Image
            style={[styles.polygonIcon, styles.polygonIconLayout]}
            contentFit="cover"
            source={require("../assets/polygon-1.png")}
          />
        </View>
        <View
          style={[styles.rectangleParent10, styles.rectangleParentPosition]}
        >
          <View style={[styles.groupChild18, styles.groupChildLayout]} />
          <View style={[styles.groupChild19, styles.groupChildLayout]} />
          <View style={[styles.groupChild20, styles.groupChildLayout]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  untitledLayout: {
    height: 128,
    width: 96,
    left: 39,
    position: "absolute",
  },
  blueTypo1: {
    color: Color.colorCornflowerblue,
    fontFamily: FontFamily.jsMathCmbx10,
    textAlign: "left",
    position: "absolute",
  },
  breedTypo: {
    width: 151,
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorCornflowerblue,
    left: 176,
    position: "absolute",
  },
  medicationsTypo: {
    left: 21,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.colorCornflowerblue,
    fontFamily: FontFamily.jsMathCmbx10,
    position: "absolute",
  },
  bluePosition: {
    left: 52,
    position: "absolute",
  },
  childLayout: {
    height: 21,
    position: "absolute",
  },
  rectangleLayout: {
    height: 23,
    position: "absolute",
  },
  addTypo: {
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.koulenRegular,
    textAlign: "left",
    position: "absolute",
  },
  groupLayout: {
    width: 10,
    position: "absolute",
  },
  groupPosition1: {
    top: 4,
    borderRadius: Border.br_10xs,
  },
  groupPosition: {
    left: 4,
    transform: [
      {
        rotate: "-90deg",
      },
    ],
    top: 10,
    height: 2,
    borderRadius: Border.br_10xs,
    width: 10,
    position: "absolute",
    backgroundColor: Color.colorFloralwhite,
  },
  petChildLayout: {
    height: 6,
    width: 345,
    borderRadius: Border.br_10xs,
    backgroundColor: Color.colorLightskyblue,
    left: 22,
    position: "absolute",
  },
  groupParentPosition: {
    top: 997,
    position: "absolute",
  },
  groupChildLayout1: {
    height: 3,
    width: 17,
    borderRadius: Border.br_10xs,
    position: "absolute",
    backgroundColor: Color.colorFloralwhite,
  },
  groupIconLayout: {
    height: 29,
    width: 29,
    left: 341,
    position: "absolute",
  },
  blueTypo: {
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorCornflowerblue,
  },
  groupChild5Layout: {
    height: 62,
    width: 390,
    left: 0,
    position: "absolute",
  },
  groupChildBg1: {
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  groupChildBorder: {
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    position: "absolute",
  },
  groupChild9Position: {
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
  groupChildBg: {
    backgroundColor: Color.colorCornflowerblue,
    bottom: "0%",
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
  untitledArtwork52Copy1: {
    top: 210,
  },
  subtractIcon: {
    width: 146,
    height: 146,
  },
  sparky: {
    top: 190,
    textAlign: "left",
    fontSize: FontSize.size_17xl,
    left: 176,
    fontFamily: FontFamily.jsMathCmbx10,
  },
  age8Breed: {
    top: 237,
  },
  untitledArtwork52Copy2: {
    top: 597,
  },
  blue: {
    top: 577,
    textAlign: "left",
    fontSize: FontSize.size_17xl,
    left: 176,
    fontFamily: FontFamily.jsMathCmbx10,
  },
  age12Breed: {
    top: 624,
  },
  medications: {
    top: 377,
    fontSize: FontSize.size_5xl,
  },
  medications1: {
    top: 764,
    fontSize: FontSize.size_5xl,
  },
  eyeDropsSparky: {
    top: 414,
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorCornflowerblue,
  },
  antibioticsBlueBlue: {
    top: 802,
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorCornflowerblue,
  },
  heartgardBlueBlack: {
    top: 836,
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorCornflowerblue,
  },
  petInfoChild: {
    top: 415,
    backgroundColor: Color.colorFirebrick,
    width: 21,
    borderRadius: Border.br_7xs,
    height: 21,
    left: 22,
  },
  petInfoItem: {
    top: 803,
    backgroundColor: Color.colorGoldenrod,
    width: 21,
    borderRadius: Border.br_7xs,
    height: 21,
    left: 22,
  },
  petInfoInner: {
    top: 837,
    backgroundColor: Color.colorDarkkhaki,
    width: 21,
    borderRadius: Border.br_7xs,
    height: 21,
    left: 22,
  },
  groupChild: {
    top: 1,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorLightskyblue,
    left: 0,
    width: 40,
  },
  add: {
    left: 18,
    top: 0,
    fontSize: FontSize.size_smi,
    color: Color.colorFloralwhite,
  },
  groupItem: {
    height: 2,
    borderRadius: Border.br_10xs,
    width: 10,
    position: "absolute",
    left: 0,
    backgroundColor: Color.colorFloralwhite,
    top: 4,
  },
  groupInner: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  rectangleGroup: {
    top: 6,
    height: 10,
    left: 3,
  },
  rectangleParent: {
    top: 449,
    width: 40,
    left: 22,
    height: 23,
  },
  groupChild2: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  rectangleContainer: {
    top: 872,
    width: 40,
    left: 22,
    height: 23,
  },
  petInfoChild1: {
    top: 520,
  },
  petInfoChild2: {
    top: 943,
  },
  petInfoChild3: {
    left: 60,
    borderRadius: 21,
    width: 269,
    height: 41,
    backgroundColor: Color.colorLightskyblue,
  },
  groupChild3: {
    top: 7,
    left: 0,
  },
  groupChild4: {
    top: 17,
    left: 7,
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  rectangleParent1: {
    top: 12,
    height: 17,
    width: 17,
    left: 0,
    position: "absolute",
  },
  addNewPet: {
    left: 32,
    top: 0,
    fontSize: FontSize.size_5xl,
  },
  groupParent: {
    left: 122,
    width: 145,
    height: 43,
  },
  groupIcon: {
    top: 184,
  },
  petInfoChild4: {
    top: 566,
  },
  petdrop: {
    top: 82,
    left: 17,
    fontSize: FontSize.size_45xl,
    width: 342,
    height: 112,
    textAlign: "left",
  },
  neverMissA: {
    top: 133,
    left: 44,
    position: "absolute",
  },
  groupChild5: {
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
  groupChild6: {
    top: 2,
    left: 2,
    width: 14,
    height: 8,
    borderRadius: Border.br_10xs,
  },
  groupChild7: {
    left: 20,
    borderWidth: 0.5,
    width: 1,
    height: 4,
    borderRadius: Border.br_10xs,
    top: 4,
  },
  groupChild8: {
    borderWidth: 1,
    width: 20,
    borderRadius: Border.br_9xs,
    height: 12,
    top: 0,
    left: 0,
  },
  rectangleParent3: {
    height: 12,
    top: 0,
    width: 21,
  },
  groupChild9: {
    backgroundColor: Color.colorGainsboro_200,
    borderRadius: Border.br_9xs,
    height: 2,
    left: 0,
  },
  groupChild10: {
    top: 5,
    borderRadius: Border.br_9xs,
    width: 17,
    height: 2,
    left: 3,
  },
  groupChild11: {
    left: 6,
    borderRadius: Border.br_9xs,
    top: 10,
    backgroundColor: Color.colorWhite,
    height: 2,
    width: 10,
  },
  rectangleParent4: {
    left: 23,
    height: 12,
  },
  groupChild12: {
    height: 12,
    top: 0,
    left: 0,
  },
  groupParent1: {
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
  groupChild13: {
    height: "95.65%",
    top: "4.35%",
    borderRadius: Border.br_2xs_5,
    backgroundColor: Color.colorCornflowerblue,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  meds: {
    left: "16.67%",
    top: "0%",
    fontSize: FontSize.size_smi,
    color: Color.colorFloralwhite,
  },
  rectangleParent5: {
    width: "9.23%",
    right: "34.1%",
    left: "56.67%",
  },
  reminders: {
    left: "9.52%",
    top: "0%",
    fontSize: FontSize.size_smi,
    color: Color.colorFloralwhite,
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
  },
  rectangleParent7: {
    width: "10.51%",
    right: "17.18%",
    left: "72.31%",
  },
  groupChild16: {
    height: "100%",
    top: "0%",
    borderRadius: Border.br_2xs_5,
    backgroundColor: Color.colorCornflowerblue,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  pets: {
    height: "95.45%",
    width: "67.65%",
    left: "17.65%",
    top: "0%",
    fontSize: FontSize.size_smi,
    color: Color.colorFloralwhite,
  },
  rectangleParent8: {
    width: "8.72%",
    right: "72.31%",
    left: "18.97%",
  },
  groupChild17: {
    width: "65.52%",
    top: "31.82%",
    right: "17.24%",
    left: "17.24%",
    backgroundColor: Color.colorCornflowerblue,
    bottom: "0%",
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
  groupChild18: {
    bottom: "81.82%",
    top: "0%",
  },
  groupChild19: {
    top: "40.91%",
    bottom: "40.91%",
  },
  groupChild20: {
    top: "81.82%",
    bottom: "0%",
  },
  rectangleParent10: {
    width: "5.64%",
    right: "5.13%",
    left: "89.23%",
  },
  groupContainer: {
    top: 797,
    height: 47,
    width: 390,
    left: 0,
    position: "absolute",
  },
  petInfo: {
    flex: 1,
    height: 1928,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorFloralwhite,
  },
});

export default PetInfo;
