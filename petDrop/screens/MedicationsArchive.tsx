import * as React from "react";
import { StyleSheet, View, Text, Pressable, Dimensions } from "react-native";
import { Image } from "expo-image";
import WhiteCircle from "../assets/white_circle.svg";
import DarkBlueCircle from "../assets/dark_blue_circle.svg";
import MedicationInfo from "../components/MedicationInfo";
import TopBottomBar from "../components/TopBottomBar";
import { Color, FontFamily, FontSize, Border, ScreenEnum, styles } from "../GlobalStyles";

const { width, height } = Dimensions.get('window');
type MedicationsArchiveType = {
  navigation: any;
}

const MedicationsArchive = (props: MedicationsArchiveType) => {
  return (
    <View style={styles.outermostView}>
      <View style={styles.medicationsArchiveChild} />
      <Text style={[styles.homeLogoText, styles.petdropTypo]}>petdrop.</Text>
      <Text style={styles.homeLogoSubtext}>
        NEVER MISS A DROP.
      </Text>
      <Text style={[styles.medsMedications, styles.petdropTypo]}>Medications</Text>
      <Text style={[styles.medsText, styles.medsTextTypo]}>{`>`}</Text>
      <Pressable onPress={() => {props.navigation.navigate("MedicationsArchive1")}}>
        <Text style={[styles.switch, styles.medsTextTypo]}>SWITCH</Text>
      </Pressable>
      <WhiteCircle style={styles.medicationsArchiveItem} width={(width * 0.0821)} height={(height * 0.0379)} />
      <Image
        style={styles.untitledArtwork52Copy3}
        contentFit="cover"
        source={require("../assets/blue_dog_small.png")}
      />
      <DarkBlueCircle style={styles.medsSubtractIcon}/>
      <View style={[styles.medsRectangleParent, styles.medsGroupChildLayout]}>
        <View style={[styles.petInfoGroupChild, styles.medsGroupChildLayout]} />
        <Text style={[styles.add, styles.addTypo]}>ADD</Text>
        <View style={styles.petInfoRectangleGroup}>
          <View style={styles.petInfoGroupItem} />
          <View style={[styles.remindersGroupInner, styles.homeGroupLayout]} />
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
      <TopBottomBar groupViewLeft={1} navigation = {props.navigation} currentScreen={ScreenEnum.MedicationsArchive}/>
    </View>
  );
};

export default MedicationsArchive;