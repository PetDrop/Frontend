import * as React from "react";
import { View, Text, ScrollView, TextInput } from "react-native";
import { Color } from "../GlobalStyles";
import { styles } from '../styles/ProfilePage.styles';
import Header from "../components/Home/Header";
import AddPicture from '../components/Profile/AddPicture';
import AddButton from "../components/AddButton";
import SubmitButton from '../components/Profile/SubmitButton';

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
        <Header />

        {/* profile title */}
        <Text style={styles.title}>Profile</Text>

        {/* cirlce with plus sign for adding profile picture */}
        <AddPicture />

        {/* user's name */}
        <Text style={styles.nameHeading}>Name</Text>

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

        {/* add button */}
        <View style={styles.addButtonContainer}>
          <AddButton />
        </View>

        {/* submit button */}
        <View style={styles.submitButtonContainer}>
          <SubmitButton />
        </View>

      </ScrollView>
    </View>
  );
};

export default Profile;
