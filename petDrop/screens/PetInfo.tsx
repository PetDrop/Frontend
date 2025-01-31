import * as React from "react";
import { Image } from "expo-image";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import BlueCircleBig from "../assets/blue_circle_big.svg";
import EditIcon from "../assets/edit_icon.svg";
import TopBottomBar from "../components/TopBottomBar";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

type PetInfoType = {
  navigation: any;
}

const PetInfo = (props: PetInfoType) => {
  return (
    <View style={styles.petInfo}>
      <ScrollView contentContainerStyle={{paddingBottom: 900}}>
        <Image
          style={[styles.untitledArtwork52Copy1, styles.untitledLayout]}
          contentFit="cover"
          source={require("../assets/blue_dog_big.png")}
        />
        <BlueCircleBig style={styles.subtractIcon1} width={146} height={146} />
        <Text style={[styles.sparky, styles.blueTypo1]}>Sparky</Text>
        <Text style={[styles.age8Breed, styles.breedTypo]}>
          {`Age: 8
Breed: Lab
Address: 123 Street Dr. 
Vet: Dog inc. 
      +1 123-222-4444`}
        </Text>
        <Image
          style={[styles.untitledArtwork52Copy2, styles.untitledLayout]}
          contentFit="cover"
          source={require("../assets/pink_dog_big.png")}
        />
        <BlueCircleBig style={styles.subtractIcon2} width={146} height={146} />
        <Text style={[styles.blue, styles.blueTypo1]}>Blue</Text>
        <Text style={[styles.age12Breed, styles.breedTypo]}>{`Age: 12
Breed: Lab
Address: 123 Street Dr. 
Vet: Dog inc. 
      +1 123-222-4444`}
        </Text>
        <Text style={[styles.medications, styles.medicationsTypo]}>
          Medications:
        </Text>
        <Text style={[styles.medications1, styles.medicationsTypo]}>
          Medications:
        </Text>
        <Text style={[styles.eyeDropsSparky, styles.blueTypo]}>
          Eye drops (Sparky, Red bottle, 2 drops, twice a day)
        </Text>
        <Text
          style={[styles.antibioticsBlueBlue, styles.blueTypo]}
        >{`Antibiotics (Blue, Blue bottle, 1 pill, morning) `}</Text>
        <Text
          style={[styles.heartgardBlueBlack, styles.blueTypo]}
        >{`Heartgard (Blue, Black box, 1 pill, every night) `}</Text>
        <View style={[styles.petInfoChild, styles.petLayout]} />
        <View style={[styles.petInfoItem, styles.petLayout]} />
        <View style={[styles.petInfoInner, styles.petLayout]} />
        <View style={[styles.rectangleParent, styles.rectangleLayout]}>
          <View style={styles.groupChild} />
          <Text style={[styles.add, styles.addPosition]}>ADD</Text>
          <View style={styles.rectangleGroup}>
            <View style={styles.groupItem} />
            <View style={[styles.groupInner, styles.groupPosition]} />
          </View>
        </View>
        <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
          <View style={styles.groupChild} />
          <Text style={[styles.add, styles.addPosition]}>ADD</Text>
          <View style={styles.rectangleGroup}>
            <View style={styles.groupItem} />
            <View style={[styles.groupChild2, styles.groupPosition]} />
          </View>
        </View>
        <View style={[styles.petInfoChild1, styles.petChildLayout]} />
        <View style={[styles.petInfoChild2, styles.petChildLayout]} />
        <Pressable onPress={() => {props.navigation.navigate("PetInfo1")}} style={styles.newPetPressable}>
        <View style={[styles.petInfoChild3, styles.groupParentPosition]} />
        <View style={[styles.groupParent, styles.groupParentPosition]}>
          <View style={styles.rectangleParent1}>
            <View style={[styles.groupChild3, styles.groupChildLayout]} />
            <View style={[styles.groupChild4, styles.groupChildLayout]} />
          </View>
          <Text style={[styles.addNewPet, styles.addPosition]}>Add new pet</Text>
        </View>
        </Pressable>
        <EditIcon
          style={[styles.groupIcon, styles.groupIconLayout]}
          width={29}
          height={29}
        />
        <EditIcon
          style={[styles.petInfoChild4, styles.groupIconLayout]}
          width={29}
          height={29}
        />
        <Text style={[styles.petdrop, styles.blueTypo1]}>petdrop.</Text>
        <Text style={styles.neverMissA}>NEVER MISS A DROP.</Text>
      </ScrollView>
      <TopBottomBar navigation = {props.navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
  newPetPressable: {
    position: "absolute",
  },
  untitledLayout: {
    height: 128,
    width: 96,
    left: 39,
    position: "absolute",
  },
  blueTypo1: {
    textAlign: "left",
    color: Color.colorCornflowerblue,
    fontFamily: FontFamily.jsMathCmbx10,
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
  blueTypo: {
    left: 52,
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorCornflowerblue,
    position: "absolute",
  },
  petLayout: {
    height: 21,
    width: 21,
    borderRadius: Border.br_7xs,
    left: 22,
    position: "absolute",
  },
  rectangleLayout: {
    height: 23,
    width: 40,
    left: 22,
    position: "absolute",
  },
  addPosition: {
    color: Color.colorFloralwhite,
    top: 0,
    fontFamily: FontFamily.koulenRegular,
    textAlign: "left",
    position: "absolute",
  },
  groupPosition: {
    left: 2,
    top: 4,
    transform: [
      {
        rotate: "-90deg",
      },
    ],
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
  groupChildLayout: {
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
  untitledArtwork52Copy1: {
    top: 210,
  },
  subtractIcon1: {
    top: 190,
    left: 10,
  },
  subtractIcon2: {
    top: 430,
    left: 10,
  },
  sparky: {
    top: 190,
    fontSize: FontSize.size_17xl,
    left: 176,
    color: Color.colorCornflowerblue,
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
    fontSize: FontSize.size_17xl,
    left: 176,
    color: Color.colorCornflowerblue,
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
  },
  antibioticsBlueBlue: {
    top: 802,
  },
  heartgardBlueBlack: {
    top: 836,
  },
  petInfoChild: {
    top: 415,
    backgroundColor: Color.colorFirebrick,
  },
  petInfoItem: {
    top: 803,
    backgroundColor: Color.colorGoldenrod,
  },
  petInfoInner: {
    top: 837,
    backgroundColor: Color.colorDarkkhaki,
  },
  groupChild: {
    top: 1,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorCornflowerblue,
    left: 0,
    width: 40,
    height: 21,
    position: "absolute",
  },
  add: {
    left: 18,
    fontSize: FontSize.size_smi,
    color: Color.colorFloralwhite,
    top: 0,
  },
  groupItem: {
    top: 4,
    height: 2,
    borderRadius: Border.br_10xs,
    width: 10,
    left: 2,
    position: "absolute",
    backgroundColor: Color.colorFloralwhite,
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
    left: 3,
    height: 10,
    width: 10,
    position: "absolute",
  },
  rectangleParent: {
    top: 449,
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
    backgroundColor: Color.colorCornflowerblue,
  },
  groupChild3: {
    top: 7,
    left: 0,
  },
  groupChild4: {
    top: 7,
    left: 0,
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
  },
  neverMissA: {
    top: 143,
    left: 44,
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorCornflowerblue,
    position: "absolute",
  },
  petInfo: {
    flex: 1,
    width: "100%",
    height: 1122,
    overflow: "hidden",
    backgroundColor: Color.colorFloralwhite,
  },
});

export default PetInfo;
