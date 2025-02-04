import * as React from "react";
import { StyleSheet, View, Text, Pressable, Dimensions } from "react-native";
import { Image } from "expo-image";
import WhiteCircle from "../assets/white_circle.svg";
import DarkBlueCircle from "../assets/dark_blue_circle.svg";
import MedicationInfo from "../components/MedicationInfo";
import TopBottomBar from "../components/TopBottomBar";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const { width, height } = Dimensions.get('window');
type MedicationsArchiveType = {
  navigation: any;
}

const MedicationsArchive = (props: MedicationsArchiveType) => {
  return (
    <View style={styles.medicationsArchive}>
      <View style={styles.medicationsArchiveChild} />
      <Text style={[styles.petdrop, styles.petdropTypo]}>petdrop.</Text>
      <Text style={[styles.neverMissA, styles.textTypo]}>
        NEVER MISS A DROP.
      </Text>
      <Text style={[styles.medications, styles.petdropTypo]}>Medications</Text>
      <Text style={[styles.text, styles.textTypo]}>{`>`}</Text>
      <Pressable onPress={() => {props.navigation.navigate("MedicationsArchive1")}}>
        <Text style={[styles.switch, styles.textTypo]}>SWITCH</Text>
      </Pressable>
      <WhiteCircle style={styles.medicationsArchiveItem} width={(width * 0.0821)} height={(height * 0.0379)} />
      <Image
        style={styles.untitledArtwork52Copy3}
        contentFit="cover"
        source={require("../assets/blue_dog_small.png")}
      />
      <DarkBlueCircle style={styles.subtractIcon}/>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.innerGroupChildLayout]} />
        <Text style={[styles.add, styles.addTypo]}>ADD</Text>
        <View style={styles.rectangleGroup}>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <View style={[styles.groupInner, styles.groupLayout]} />
        </View>
      </View>
      <MedicationInfo />
      <Text style={[styles.petSparkyDates, styles.addTypo]}>{`Pet: Sparky
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
      <TopBottomBar groupViewLeft={1} navigation = {props.navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({
  petdropTypo: {
    textAlign: "left",
    color: Color.colorCornflowerblue,
    fontFamily: FontFamily.jsMathCmbx10,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.koulenRegular,
    textAlign: "left",
    color: Color.colorCornflowerblue,
    position: "absolute",
  },
  groupChildLayout: {
    width: (width * 0.1026),
    position: "absolute",
  },
  innerGroupChildLayout: {
    width: (width * 0.1),
    position: "absolute",
  },
  addTypo: {
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
    textAlign: "left",
    position: "absolute",
  },
  groupLayout: {
    height: (height * 0.0024),
    borderRadius: Border.br_10xs,
    width: (width * 0.0256),
    position: "absolute",
    backgroundColor: Color.colorFloralwhite,
  },
  medicationsArchiveChild: {
    top: (height * 0.2239),
    left: (width * 0.641),
    borderRadius: Border.br_2xl,
    backgroundColor: Color.colorGainsboro_100,
    width: (width * 0.3),
    height: (height * 0.0498),
    position: "absolute",
  },
  petdrop: {
    top: (height * 0.0972),
    left: (width * 0.0641),
    fontSize: FontSize.size_45xl,
    width: (width * 0.8769),
    height: (height * 0.1327),
  },
  neverMissA: {
    top: (height * 0.1694),
    left: (width * 0.1333),
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.koulenRegular,
  },
  medications: {
    top: (height * 0.2334),
    left: (width * 0.0872),
    fontSize: FontSize.size_5xl,
    width: (width * 0.4641),
  },
  text: {
    top: (height * 0.2334),
    left: (width * 0.8923),
    fontSize: FontSize.size_base,
    transform: [
      {
        rotate: "90deg",
      },
    ],
  },
  switch: {
    top: (height * 0.2287),
    left: (width * 0.7513),
    fontSize: FontSize.size_xl,
  },
  medicationsArchiveItem: {
    top: (height * 0.2299),
    left: (width * 0.6564),
    position: "absolute",
  },
  untitledArtwork52Copy3: {
    top: (height * 0.2346),
    left: (width * 0.6692),
    width: (width * 0.059),
    height: (height * 0.0355),
    position: "absolute",
  },
  subtractIcon: {
    top: (height * 0.2287),
    left: (width * 0.6538),
    width: (width * 0.872),
    height: (height * 0.403),
  },
  groupChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorCornflowerblue,
    height: (height * 0.0249),
  },
  add: {
    left: (width * 0.0462),
  },
  groupItem: {
    top: (height * 0.0047),
  },
  groupInner: {
    top: (height * 0.0047),
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
    top: (height * 0.7998),
    left: (width * 0.1564),
    height: (height * 0.273),
  },
  petSparkyDates: {
    top: (height * 0.3637),
    left: (width * 0.1872),
    lineHeight: 30,
    width: (width * 0.3128),
    height: (height * 0.4325),
  },
  medicationsArchive: {
    flex: 1,
    width: width,
    height: height,
    overflow: "hidden",
    backgroundColor: Color.colorFloralwhite,
  },
});

export default MedicationsArchive;
