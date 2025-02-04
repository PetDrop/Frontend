import * as React from "react";
import { Image } from "expo-image";
import { Dimensions, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import BlueCircleBig from "../assets/blue_circle_big.svg";
import EditIcon from "../assets/edit_icon.svg";
import TopBottomBar from "../components/TopBottomBar";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const { width, height } = Dimensions.get('window');

type PetInfoType = {
  navigation: any;
}

const PetInfo = (props: PetInfoType) => {
  return (
    <View style={styles.petInfo}>
      <ScrollView contentContainerStyle={{paddingBottom: (height * 1.0664)}}>
        <Image
          style={[styles.untitledArtwork52Copy1, styles.untitledLayout]}
          contentFit="cover"
          source={require("../assets/blue_dog_big.png")}
        />
        <BlueCircleBig style={styles.subtractIcon1} width={(width * 0.3744)} height={(height * 0.173)} />
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
        <BlueCircleBig style={styles.subtractIcon2} width={(width * 0.3744)} height={(height * 0.173)} />
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
    height: (height * 0.1517),
    width: (width * 0.2462),
    left: (width * 0.1),
    position: "absolute",
  },
  blueTypo1: {
    textAlign: "left",
    color: Color.colorCornflowerblue,
    fontFamily: FontFamily.jsMathCmbx10,
    position: "absolute",
  },
  breedTypo: {
    width: (width * 0.3872),
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorCornflowerblue,
    left: (width * 0.4513),
    position: "absolute",
  },
  medicationsTypo: {
    left: (width * 0.0538),
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    color: Color.colorCornflowerblue,
    fontFamily: FontFamily.jsMathCmbx10,
    position: "absolute",
  },
  blueTypo: {
    left: (width * 0.1333),
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorCornflowerblue,
    position: "absolute",
  },
  petLayout: {
    height: (height * 0.0249),
    width: (width * 0.0538),
    borderRadius: Border.br_7xs,
    left: (width * 0.0564),
    position: "absolute",
  },
  rectangleLayout: {
    height: (height * 0.0273),
    width: (width * 0.1026),
    left: (width * 0.0564),
    position: "absolute",
  },
  addPosition: {
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.koulenRegular,
    textAlign: "left",
    position: "absolute",
  },
  groupPosition: {
    left: (width * 0.0051),
    top: (height * 0.0047),
    transform: [
      {
        rotate: "-90deg",
      },
    ],
    height: (height * 0.0024),
    borderRadius: Border.br_10xs,
    width: (width * 0.0256),
    position: "absolute",
    backgroundColor: Color.colorFloralwhite,
  },
  petChildLayout: {
    height: (height * 0.0071),
    width: (width * 0.8846),
    borderRadius: Border.br_10xs,
    backgroundColor: Color.colorLightskyblue,
    left: (width * 0.0564),
    position: "absolute",
  },
  groupParentPosition: {
    top: (height * 1.1813),
    position: "absolute",
  },
  groupChildLayout: {
    height: (height * 0.0036),
    width: (width * 0.0436),
    borderRadius: Border.br_10xs,
    position: "absolute",
    backgroundColor: Color.colorFloralwhite,
  },
  groupIconLayout: {
    height: (height * 0.0344),
    width: (width * 0.0744),
    left: (width * 0.8744),
    position: "absolute",
  },
  untitledArtwork52Copy1: {
    top: (height * 0.2488),
  },
  subtractIcon1: {
    top: (height * 0.2251),
    left: (width * 0.0256),
  },
  subtractIcon2: {
    top: (height * 0.5095),
    left: (width * 0.0256),
  },
  sparky: {
    top: (height * 0.2251),
    fontSize: FontSize.size_17xl,
    left: (width * 0.4513),
    color: Color.colorCornflowerblue,
    fontFamily: FontFamily.jsMathCmbx10,
  },
  age8Breed: {
    top: (height * 0.2808),
  },
  untitledArtwork52Copy2: {
    top: (height * 0.7073),
  },
  blue: {
    top: (height * 0.6836),
    fontSize: FontSize.size_17xl,
    left: (width * 0.4513),
    color: Color.colorCornflowerblue,
    fontFamily: FontFamily.jsMathCmbx10,
  },
  age12Breed: {
    top: (height * 0.7393),
  },
  medications: {
    top: (height * 0.4467),
    fontSize: FontSize.size_5xl,
  },
  medications1: {
    top: (height * 0.9052),
    fontSize: FontSize.size_5xl,
  },
  eyeDropsSparky: {
    top: (height * 0.4905),
  },
  antibioticsBlueBlue: {
    top: (height * 0.9502),
  },
  heartgardBlueBlack: {
    top: (height * 0.9905),
  },
  petInfoChild: {
    top: (height * 0.4917),
    backgroundColor: Color.colorFirebrick,
  },
  petInfoItem: {
    top: (height * 0.9514),
    backgroundColor: Color.colorGoldenrod,
  },
  petInfoInner: {
    top: (height * 0.9917),
    backgroundColor: Color.colorDarkkhaki,
  },
  groupChild: {
    top: (height * 0.0012),
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorCornflowerblue,
    width: (width * 0.1026),
    height: (height * 0.0249),
    position: "absolute",
  },
  add: {
    left: (width * 0.0462),
    fontSize: FontSize.size_smi,
    color: Color.colorFloralwhite,
  },
  groupItem: {
    top: (height * 0.0047),
    height: (height * 0.0024),
    borderRadius: Border.br_10xs,
    width: (width * 0.0256),
    left: (width * 0.0051),
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
    top: (height * 0.0071),
    left: (width * 0.0077),
    height: (height * 0.0118),
    width: (width * 0.0256),
    position: "absolute",
  },
  rectangleParent: {
    top: (height * 0.532),
  },
  groupChild2: {
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  rectangleContainer: {
    top: (height * 1.0332),
  },
  petInfoChild1: {
    top: (height * 0.6161),
  },
  petInfoChild2: {
    top: (height * 1.1173),
  },
  petInfoChild3: {
    left: (width * 0.1538),
    borderRadius: 21,
    width: (width * 0.6897),
    height: (height * 0.0486),
    backgroundColor: Color.colorCornflowerblue,
  },
  groupChild3: {
    top: (height * 0.0083),
  },
  groupChild4: {
    top: (height * 0.0083),
    transform: [
      {
        rotate: "-90deg",
      },
    ],
  },
  rectangleParent1: {
    top: (height * 0.0142),
    height: (height * 0.0201),
    width: (width * 0.0436),
    position: "absolute",
  },
  addNewPet: {
    left: (width * 0.0821),
    fontSize: FontSize.size_5xl,
  },
  groupParent: {
    left: (width * 0.3128),
    width: (width * 0.3718),
    height: (height * 0.0509),
  },
  groupIcon: {
    top: (height * 0.218),
  },
  petInfoChild4: {
    top: (height * 0.6706),
  },
  petdrop: {
    top: (height * 0.0972),
    left: (width * 0.0436),
    fontSize: FontSize.size_45xl,
    width: (width * 0.8769),
    height: (height * 0.1327),
  },
  neverMissA: {
    top: (height * 0.1694),
    left: (width * 0.1128),
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    color: Color.colorCornflowerblue,
    position: "absolute",
  },
  petInfo: {
    flex: 1,
    width: width,
    height: height,
    overflow: "hidden",
    backgroundColor: Color.colorFloralwhite,
  },
});

export default PetInfo;
