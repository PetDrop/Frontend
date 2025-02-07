import * as React from "react";
import { StyleSheet, View, Text, Button, Dimensions } from "react-native";
import { Image } from "expo-image";
import DayOutline from "../assets/day_outline.svg";
import EditIcon from "../assets/edit_icon.svg";
import TopBottomBar from "../components/TopBottomBar";
import { Color, FontFamily, FontSize, Border, ScreenEnum, styles } from "../GlobalStyles";

const { width, height } = Dimensions.get('window');

type HomeType = {
  navigation: any;
}

const Home = (props: HomeType) => {
  return (
    <View style={styles.outermostView}>
      <View style={[styles.homeChild, styles.homePosition]} />
      <View style={[styles.homeItem, styles.homeItemBg]} />
      <Text style={[styles.september, styles.textTypo5]}>September.</Text>
      <Text style={[styles.s, styles.sLayout]}>S</Text>
      <Text style={[styles.homeText, styles.textTypo4]}>1</Text>
      <Text style={[styles.text1, styles.textTypo4]}>8</Text>
      <Text style={[styles.text2, styles.textTypo5]}>15</Text>
      <Text style={[styles.text3, styles.textTypo5]}>22</Text>
      <Text style={[styles.text4, styles.textTypo3]}>29</Text>
      <Text style={[styles.text5, styles.textTypo2]}>2</Text>
      <Text style={[styles.text6, styles.textTypo2]}>9</Text>
      <Text style={[styles.text7, styles.textTypo5]}>16</Text>
      <Text style={[styles.text8, styles.textTypo5]}>23</Text>
      <Text style={[styles.text9, styles.textTypo3]}>30</Text>
      <Text style={[styles.text10, styles.textTypo5]}>3</Text>
      <Text style={[styles.text11, styles.textTypo1]}>10</Text>
      <Text style={[styles.text12, styles.textTypo1]}>17</Text>
      <Text style={[styles.text13, styles.textTypo1]}>24</Text>
      <Text style={[styles.text14, styles.textTypo5]}>4</Text>
      <Text style={[styles.text15, styles.textPosition]}>11</Text>
      <Text style={[styles.text16, styles.textPosition]}>18</Text>
      <Text style={[styles.text17, styles.textPosition]}>25</Text>
      <Text style={[styles.text18, styles.textTypo5]}>5</Text>
      <Text style={[styles.text19, styles.textTypo5]}>12</Text>
      <Text style={[styles.text20, styles.textTypo5]}>19</Text>
      <Text style={[styles.text21, styles.textTypo5]}>26</Text>
      <Text style={[styles.text22, styles.textTypo5]}>6</Text>
      <Text style={[styles.text23, styles.textTypo5]}>13</Text>
      <Text style={[styles.text24, styles.textTypo5]}>20</Text>
      <Text style={[styles.text25, styles.textTypo5]}>27</Text>
      <Text style={[styles.text26, styles.textTypo5]}>7</Text>
      <Text style={[styles.text27, styles.homeTextTypo]}>14</Text>
      <Text style={[styles.text28, styles.homeTextTypo]}>21</Text>
      <Text style={[styles.text29, styles.homeTextTypo]}>28</Text>
      <Text style={[styles.s1, styles.sLayout]}>S</Text>
      <Text style={[styles.m, styles.sLayout]}>M</Text>
      <Text style={[styles.t, styles.tTypo]}>T</Text>
      <Text style={[styles.w, styles.textPosition]}>W</Text>
      <Text style={[styles.t1, styles.tTypo]}>T</Text>
      <Text style={[styles.f, styles.sLayout]}>F</Text>
      <Text style={[styles.eyeDropsRed, styles.petdropClr]}>
        Eye drops (Red bottle, 2 drops, twice a day)
      </Text>
      <Text
        style={[styles.antibioticsBlueBottle, styles.petdropClr]}
      >{`Antibiotics (Blue bottle, 1 pill, morning) `}</Text>
      <Text
        style={[styles.heartgardBlackBox, styles.petdropClr]}
      >{`Heartgard (Black box, 1 pill, every night) `}</Text>
      <DayOutline style={styles.dayOutline} width={(width * 0.0718)} height={(height * 0.0332)} />
      <View style={[styles.homeInner, styles.homeLayout]} />
      <View style={[styles.homeRectangleView, styles.homeLayout]} />
      <View style={[styles.homeChild1, styles.homeLayout]} />
      <View style={[styles.homeChild2, styles.homeChildLayout]} />
      <View style={[styles.homeChild3, styles.homeChildLayout]} />
      <View style={[styles.homeChild4, styles.homeChildLayout]} />
      <View style={[styles.homeChild5, styles.homeChildPosition]} />
      <View style={[styles.homeChild6, styles.homeChildPosition]} />
      <Text style={[styles.hi, styles.hiTypo]}>Hi, </Text>
      <Text style={[styles.jane, styles.hiTypo]}>Jane!</Text>
      <Text style={[styles.homeLogoText, styles.petdropClr]}>petdrop.</Text>
      <Text style={[styles.homeLogoSubtext, styles.petdropClr]}>
        NEVER MISS A DROP.
      </Text>
      <EditIcon style={styles.homeGroupIcon} width={(width * 0.0744)} height={(height * 0.0344)} />
      <View style={styles.homeRectangleContainer}>
        <View style={[styles.homeGroupChild1, styles.homeGroupPosition]} />
        <Text style={styles.homeMedications}>MEDICATIONS</Text>
      </View>
      <TopBottomBar navigation = {props.navigation} currentScreen={ScreenEnum.Home}/>
    </View>
  );
};

export default Home;