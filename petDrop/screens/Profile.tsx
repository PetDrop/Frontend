import * as React from "react";
import { View, Text, ScrollView, TextInput } from "react-native";
import AddPicture from '../components/Profile/AddPicture';
import { styles } from '../styles/ProfilePage.styles';
import Header from "../components/Home/Header";
import { Color } from "../GlobalStyles";

const Profile = () => {
  const [address, setAddress] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [emergencyContacts, setEmergencyContacts] = React.useState([]);

  return (
    <View style={styles.container}>

      {/* top banner */}
      <View style={styles.banner} />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* header */}
        <Header/>

        {/* profile title */}
        <Text style={[styles.profile, styles.nameTypo]}>Profile</Text>

        {/* cirlce with plus sign for adding profile picture */}
        <AddPicture />

        {/* user's name */}
        <Text style={[styles.name, styles.nameTypo]}>Name</Text>

        {/* text inputs */}
        <TextInput 
          style={[styles.textInput]}
          placeholder="ADDRESS"
          placeholderTextColor={Color.colorCornflowerblue}
          value={address}
          onChangeText={setAddress}
        />
        <TextInput 
          style={[styles.textInput]}
          placeholder="PHONE"
          placeholderTextColor={Color.colorCornflowerblue}
          value={phone}
          onChangeText={setPhone}
        />
        {/* TODO: create state to track how many of 
            the following should be rendered */}
        <TextInput 
          style={[styles.textInput]}
          placeholder="EMERGENCY CONTACTS"
          placeholderTextColor={Color.colorCornflowerblue}
          value={emergencyContacts[0]} // replace 0 with index variable from for-loop
          //onChangeText={setEmergencyContacts}
        />

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
    </View>
  );
};

export default Profile;
