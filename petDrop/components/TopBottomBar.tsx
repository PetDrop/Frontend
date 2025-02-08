import { Image } from "expo-image";
import React, { useMemo } from "react";
import { Pressable, StyleSheet, View, Text, Dimensions } from "react-native";
import PetInfoButton from "../assets/pet_info_button.svg";
import RemindersButton from "../assets/reminders_button.svg";
import HouseButtonRoof from "../assets/house_button_roof.svg";
import ShareButtonRightArrow from "../assets/share_button_right_arrow.svg";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const { width, height } = Dimensions.get('window');

export type TopBottomBarType = {
  /** Style props */
  groupViewLeft?: number | string;
  navigation: any;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TopBottomBar = (props: TopBottomBarType) => {
  const groupViewStyle = useMemo(() => {
    return {
      ...getStyleValue("left", props.groupViewLeft),
    };
  }, [props.groupViewLeft]);

  return (
    <View style={[styles.groupParent, groupViewStyle]}>
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
      </View>
      <View style={styles.instanceChild} />
      <Pressable onPress={() => {props.navigation.navigate("Home")}} style={styles.pressable}>
        <View style={[styles.groupView, styles.groupViewPosition]}>
          <HouseButtonRoof 
            style={styles.polygonIcon} 
            width={(width * 0.0513)} 
            height={(height * 0.0178)} />
          <View style={styles.groupChild4} />
        </View>
      </Pressable>
      <Pressable onPress={() => {props.navigation.navigate("PetInfo")}}>
        <PetInfoButton 
          style={styles.instanceItem} 
          width={(width * 0.0808)} 
          height={(height * 0.029)} />
      </Pressable>
      <Pressable onPress={() => {props.navigation.navigate("Reminders")}}>
        <RemindersButton
          style={[styles.instanceInner, styles.groupChild10Layout]}
          width={(width * 0.0672)}
          height={(height * 0.0296)}
        />
      </Pressable>
      <Pressable onPress={() => {props.navigation.navigate("MedicationsArchive")}}>
        <Image
          style={[styles.instanceChild1, styles.instanceChild1Position]}
          contentFit="cover"
          source={require("../assets/medications_button.png")}
        />
      </Pressable>
      <View style={[styles.rectangleParent2, styles.instanceChild1Position]}>
        <View style={[styles.groupChild8, styles.groupChildPosition]} />
        <View style={[styles.groupChild9, styles.groupChildPosition]} />
        <ShareButtonRightArrow
          style={[styles.groupChild10, styles.groupChild10Layout]}
          width={(width * 0.0385)}
          height={(height * 0.0237)}
        />
      </View>
      <Text style={[styles.buttonText, {left: (width * 0.1154)}]}>HOME</Text>
      <Text style={[styles.buttonText, {left: (width * 0.2949)}]}>PETS</Text>
      <Text style={[styles.buttonText, {left: (width * 0.4487)}]}>REMINDERS</Text>
      <Text style={[styles.buttonText, {left: (width * 0.6667)}]}>MEDS</Text>
      <Text style={[styles.buttonText, {left: (width * 0.8205)}]}>SHARE</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    top: (height * -0.0142),
    color: Color.colorFloralwhite,
    fontFamily: FontFamily.koulenRegular,
    fontSize: FontSize.size_smi,
    position: "absolute"
  },
  pressable: {
    left: (width * 0.0128),
    height: (height * 0.0592),
    width: (width * 0.0769),
    position: "absolute",
  },
  groupChild1Position: {
    width: (width * 0.0564),
    position: "absolute",
  },
  groupChildLayout1: {
    height: (height * 0.0024),
    borderRadius: Border.br_9xs,
  },
  groupLayout: {
    width: (width * 0.0256),
    position: "absolute",
  },
  groupViewPosition: {
    top: (height * -0.0474),
    height: (height * 0.028),
    position: "absolute",
  },
  groupChild10Layout: {
    height: (height * 0.0237),
    position: "absolute",
  },
  instanceChild1Position: {
    top: (height * -0.0474),
    position: "absolute",
  },
  groupChildPosition: {
    top: (height * 0.0095),
    backgroundColor: Color.colorCornflowerblue,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.colorLightskyblue,
    height: (height * 0.0735),
    width: width,
    position: "absolute",
  },
  text: {
    top: (height * 0.0225),
    left: (width * 0.0923),
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.juaRegular,
    color: Color.colorWhite,
    textAlign: "left",
    width: (width * 0.1974),
    height: (height * 0.0273),
    position: "absolute",
  },
  groupItem: {
    top: (height * 0.0024),
    left: (width * 0.0051),
    width: (width * 0.0359),
    height: (height * 0.0095),
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_10xs,
    position: "absolute",
  },
  groupInner: {
    top: (height * 0.0047),
    left: (width * 0.0513),
    borderWidth: 0.5,
    width: (width * 0.0026),
    height: (height * 0.0047),
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    borderRadius: Border.br_10xs,
    position: "absolute",
  },
  rectangleView: {
    borderWidth: 1,
    width: (width * 0.0513),
    borderRadius: Border.br_9xs,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    height: (height * 0.0142),
    position: "absolute",
  },
  rectangleGroup: {
    left: (width * 0.1333),
    width: (width * 0.0538),
    height: (height * 0.0142),
    position: "absolute",
  },
  groupChild1: {
    backgroundColor: Color.colorGainsboro_200,
    width: (width * 0.0564),
    position: "absolute",
  },
  groupChild2: {
    top: (height * 0.0059),
    width: (width * 0.0436),
    left: (width * 0.0077),
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  groupChild3: {
    top: (height * 0.0118),
    left: (width * 0.0154),
    height: (height * 0.0024),
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorWhite,
  },
  rectangleContainer: {
    left: (width * 0.059),
    height: (height * 0.0142),
  },
  groupIcon: {
    height: (height * 0.0142),
  },
  groupContainer: {
    top: (height * 0.0273),
    left: (width * 0.7487),
    width: (width * 0.1872),
    height: (height * 0.0142),
    position: "absolute",
  },
  rectangleParent: {
    top: (height * -0.9443),
    height: (height * 0.0735),
    width: width,
    position: "absolute",
  },
  instanceChild: {
    height: (height * 0.1363),
    top: (height * -0.0758),
    width: width,
    backgroundColor: Color.colorLightskyblue,
    position: "absolute",
  },
  groupChild4: {
    width: (width * 0.0513),
    top: (height * 0.0089),
    left: (width * 0.0564),
    backgroundColor: Color.colorCornflowerblue,
    height: (height * 0.0191),
    borderRadius: Border.br_10xs,
    position: "absolute",
  },
  polygonIcon: {
    overflow: "hidden",
    top: (height * -0.0028),
    left: (width * 0.0564),
    position: "absolute",
  },
  groupView: {
    width: (width * 0.0744),
    left: (width * 0.0513),
  },
  instanceItem: {
    left: (width * 0.2821),
    top: (height * -0.045),
    position: "absolute",
  },
  instanceInner: {
    left: (width * 0.4744),
    top: (height * -0.0474),
  },
  instanceChild1: {
    left: (width * 0.6641),
    width: (width * 0.0744),
    height: (height * 0.0344),
  },
  groupChild8: {
    borderRadius: Border.br_10xs_5,
    width: (width * 0.0077),
    height: (height * 0.0201),
  },
  groupChild9: {
    left: (width * 0.0026),
    width: (width * 0.0256),
    height: (height * 0.0036),
    borderRadius: Border.br_10xs,
  },
  groupChild10: {
    borderRadius: Border.br_12xs,
    left: (width * 0.0205),
  },
  rectangleParent2: {
    left: (width * 0.8436),
    width: (width * 0.0462),
    height: (height * 0.0296),
  },
  groupParent: {
    top: (height * 0.9443),
    height: (height * 0.0557),
    width: width,
    position: "absolute",
  },
});

export default TopBottomBar;
