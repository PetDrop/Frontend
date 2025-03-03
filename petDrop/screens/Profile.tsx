import * as React from "react";
import { View, Text, ScrollView, TextInput, KeyboardAvoidingView } from "react-native";
import { Color } from "../GlobalStyles";
import { styles } from '../styles/ProfilePage.styles';
import Header from "../components/Home/Header";
import AddPicture from '../components/Profile/AddPicture';
import AddButton from "../components/AddButton";
import SubmitButton from '../components/Profile/SubmitButton';
import RNFSTurbo from 'react-native-fs-turbo'

function updateEmergencyContacts(state: string[], action: {index: number, text: string}) {
  let newState;
  /* new inputs have been added */
  if (state.length < action.index + 1) {
    /* expand state array before updating value */
    newState = state.concat(Array<string>((action.index + 1) - state.length).fill(''));

    /* add new value to copy of old state */
    newState = newState.slice(0, action.index).concat([action.text]).concat(newState.slice(action.index + 1));
  } else {
    /* add new value to copy of old state */
    newState = state.slice(0, action.index).concat([action.text]).concat(state.slice(action.index + 1));
  }
  return newState;
}

type ProfileType = {
	navigation: any;
  route: any;
};

const Profile = (props: ProfileType) => {
  const [address, setAddress] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [numEmergencyContacts, setNumEmergencyContacts] = React.useState(1);
  const [emergencyContacts, setEmergencyContacts] = React.useReducer(updateEmergencyContacts, ['']);

  /* helper function to find an element in db */
  function checkEmail(element: any) {
    return element.email === props.route.params.email;
  }

  /* puts all state info into an object 
  * that is then written to the db
  */
  function writeToDB(): boolean {

    // Path to db
    const path = '../data/accounts.json';

    try {
      // read the data
      const data = RNFSTurbo.readFile(path, 'utf8');

      // parse data into json object
      const accounts = JSON.parse(data);

      // get the old account
      const account = accounts.find(checkEmail);

      /* add new info to account */
      const updatedAccount = 
      {
        id: account?.id,
        username: account?.username, 
        email: account?.email,
        password: account?.password,
        address: address,
        phoneNumber: phone,
        emergencyContacts: emergencyContacts
      }

      // write new account to file
      RNFSTurbo.writeFile(path, JSON.stringify(updatedAccount), 'utf8');
      return true;
      
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  /* list of emergency contact text inputs */
  let emergencyContactInputs = Array<React.JSX.Element>(numEmergencyContacts);
  for (let i: number = 0; i < numEmergencyContacts; i++) {
    emergencyContactInputs[i] = 
    <TextInput 
      key={`emergencyContact${i + 1}`}
      style={[styles.textInput]}
      placeholder="EMERGENCY CONTACT"
      placeholderTextColor={Color.colorCornflowerblue}
      value={emergencyContacts[i]}
      onChangeText={(text) => {
        setEmergencyContacts({index: i, text});
      }}
    />
  }

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>

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

        {/* emergency contacts */}
        {emergencyContactInputs}

        {/* add emergency contact button */}
        <View style={styles.addButtonContainer}>
          <AddButton onPressFunction={() => {setNumEmergencyContacts(numEmergencyContacts + 1)}}/>
        </View>

        {/* submit button */}
        <View style={styles.submitButtonContainer}>
          <SubmitButton onPressFunction={async () => {
              if (writeToDB()) {
                props.navigation.navigate('Home');
              } else {
                console.log("unable to write user info to db");
              }
            }}/>
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Profile;
