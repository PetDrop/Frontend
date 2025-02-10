import * as React from "react";
import { Image } from "expo-image";
import { Dimensions, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import BlueCircleBig from "../assets/blue_circle_big.svg";
import EditIcon from "../assets/edit_icon.svg";
import TopBottomBar from "../components/TopBottomBar";
import { Color, FontFamily, FontSize, Border, ScreenEnum, styles } from "../GlobalStyles";

const { width, height } = Dimensions.get('window');

type PetInfoType = {
  navigation: any;
}

const PetInfo = (props: PetInfoType) => {
  return (
    <View style={styles.outermostView}>
      <ScrollView contentContainerStyle={{paddingBottom: (height * 1.0664)}}>
        <Image
          style={[styles.petInfoUntitledArtwork52Copy1, styles.untitledLayout]}
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
          style={[styles.petInfoUntitledArtwork52Copy2, styles.untitledLayout]}
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
        <Text style={[styles.petInfoMedications, styles.medicationsTypo]}>
          Medications:
        </Text>
        <Text style={[styles.medications1, styles.medicationsTypo]}>
          Medications:
        </Text>
        <Text style={[styles.petInfoEyeDropsSparky, styles.blueTypo]}>
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
        <View style={[styles.petInfoRectangleParent, styles.rectangleLayout]}>
          <View style={styles.petInfoGroupChild} />
          <Text style={[styles.add, styles.addPosition]}>ADD</Text>
          <View style={styles.petInfoRectangleGroup}>
            <View style={styles.petInfoGroupItem} />
            <View style={[styles.remindersGroupInner, styles.petInfoGroupPosition]} />
          </View>
        </View>
        <View style={[styles.petInfoRectangleContainer, styles.rectangleLayout]}>
          <View style={styles.petInfoGroupChild} />
          <Text style={[styles.add, styles.addPosition]}>ADD</Text>
          <View style={styles.petInfoRectangleGroup}>
            <View style={styles.petInfoGroupItem} />
            <View style={[styles.petInfoGroupChild2, styles.petInfoGroupPosition]} />
          </View>
        </View>
        <View style={[styles.petInfoChild1, styles.petChildLayout]} />
        <View style={[styles.petInfoChild2, styles.petChildLayout]} />
        <Pressable onPress={() => {props.navigation.navigate("PetInfo1")}} style={styles.newPetPressable}>
        <View style={[styles.petInfoChild3, styles.groupParentPosition]} />
        <View style={[styles.petInfoGroupParent, styles.groupParentPosition]}>
          <View style={styles.rectangleParent1}>
            <View style={[styles.petInfoGroupChild3, styles.petInfoGroupChildLayout]} />
            <View style={[styles.petInfoGroupChild4, styles.petInfoGroupChildLayout]} />
          </View>
          <Text style={[styles.addNewPet, styles.addPosition]}>Add new pet</Text>
        </View>
        </Pressable>
        <EditIcon
          style={[styles.petInfoGroupIcon, styles.groupIconLayout]}
          width={(width * 0.0744)}
          height={(height * 0.0344)}
        />
        <EditIcon
          style={[styles.petInfoChild4, styles.groupIconLayout]}
          width={(width * 0.0744)}
          height={(height * 0.0344)}
        />
        <Text style={[styles.petInfoLogoText, styles.blueTypo1]}>petdrop.</Text>
        <Text style={styles.petInfoLogoSubtext}>NEVER MISS A DROP.</Text>
      </ScrollView>
      <TopBottomBar navigation = {props.navigation} currentScreen={ScreenEnum.PetInfo}/>
    </View>
  );
};

export default PetInfo;