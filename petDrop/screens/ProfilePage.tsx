import * as React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Image } from "expo-image";
import Subtract from "../assets/blue_circle_big.svg";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { styles } from '../styles/ProfilePage.styles';

const ProfilePage = () => {
  return (
    <ScrollView style={styles.profilePage}>
      <View style={styles.groupChildPosition}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <Text style={styles.text}>9:53</Text>
        <View style={styles.groupParent}>
          <View style={[styles.rectangleGroup, styles.groupPosition]}>
            <View style={styles.groupItem} />
            <View style={[styles.groupInner, styles.groupInnerBorder]} />
            <View style={[styles.rectangleView, styles.groupInnerBorder]} />
          </View>
          <View style={[styles.rectangleContainer, styles.groupChild1Position]}>
            <View style={[styles.groupChild1, styles.groupChild1Position]} />
            <View style={[styles.groupChild2, styles.groupChild2Position]} />
            <View style={[styles.groupChild3, styles.groupChildLayout2]} />
          </View>
        </View>
      </View>
      <Subtract style={styles.subtractIcon} width={146} height={146} />
      <Text style={[styles.name, styles.nameTypo]}>Name</Text>
      <Text style={[styles.petdrop, styles.nameTypo]}>petdrop.</Text>
      <Text style={styles.neverMissA}>NEVER MISS A DROP.</Text>
      <Text style={[styles.address, styles.emailTypo]}>{`Address `}</Text>
      <Text style={[styles.email, styles.emailTypo]}>Email</Text>
      <Text style={[styles.phone, styles.emailTypo]}>PHONE</Text>
      <Text style={[styles.password, styles.emailTypo]}>password</Text>
      <Text style={[styles.emergencyContacts, styles.emailTypo]}>
        Emergency Contacts
      </Text>
      <View style={styles.groupView}>
        <View style={[styles.groupChild4, styles.groupChildLayout1]} />
        <View style={[styles.groupChild5, styles.groupChildTransform]} />
        <View style={[styles.groupChild6, styles.groupChildLayout]} />
        <View style={[styles.groupChild7, styles.groupChildLayout]} />
        <View style={[styles.groupChild8, styles.groupChildLayout]} />
      </View>
      <Text style={[styles.profile, styles.nameTypo]}>Profile</Text>
      <View style={[styles.profilePageChild, styles.groupChildLayout]} />
      <View style={[styles.profilePageItem, styles.groupChildLayout]} />
      <View style={[styles.rectangleParent1, styles.groupChild9Layout]}>
        <View style={[styles.groupChild9, styles.groupChild9Layout]} />
        <Text style={[styles.submit, styles.addTypo]}>SUBMIT</Text>
      </View>
      <View style={[styles.rectangleParent2, styles.groupChild10Layout]}>
        <View style={[styles.groupChild10, styles.groupChild10Layout]} />
        <Text style={[styles.add, styles.addTypo]}>ADD</Text>
        <View style={[styles.rectangleParent3, styles.groupChild2Position]}>
          <View style={styles.groupChild11} />
          <View style={[styles.groupChild12, styles.groupChildTransform]} />
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfilePage;
