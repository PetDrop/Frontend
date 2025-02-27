import * as React from "react";
import { View, Text, ScrollView, TextInput } from "react-native";
import { Color } from "../GlobalStyles";
import { styles } from '../styles/ProfilePage.styles';
import Header from "../components/Home/Header";
import AddPicture from '../components/Profile/AddPicture';
import AddButton from "../components/AddButton";
import SubmitButton from '../components/Profile/SubmitButton';

function updateEmergencyContacts(state: string[], action: {index: number, value: string}) {
  let newState;
  /* new inputs have been added */
  if (state.length < action.index + 1) {
    /* expand state array before updating value */
    newState = state.concat(Array<string>((action.index + 1) - state.length).fill(''));

    /* add new value to copy of old state */
    newState = newState.slice(0, action.index).concat([action.value]).concat(newState.slice(action.index + 1));
  } else {
    /* add new value to copy of old state */
    newState = state.slice(0, action.index).concat([action.value]).concat(state.slice(action.index + 1));
  }
  return newState;
}

const Profile = () => {
  const [address, setAddress] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [numEmergencyContacts, setNumEmergencyContacts] = React.useState(1);
  const [emergencyContacts, setEmergencyContacts] = React.useReducer(updateEmergencyContacts, Array<string>(numEmergencyContacts).fill(''));

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
      onChangeText={(value) => {
        let index = i; // not sure why this is needed, but I get an error trying to pass i into the following:
        setEmergencyContacts({index, value});
      }}
    />
  }

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

        {/* emergency contacts */}
        {emergencyContactInputs}

        {/* add button */}
        <View style={styles.addButtonContainer}>
          <AddButton onPressFunction={() => {setNumEmergencyContacts(numEmergencyContacts + 1)}}/>
        </View>

        {/* submit button */}
        <View style={styles.submitButtonContainer}>
          <SubmitButton onPressFunction={() => {console.log('submit')}}/>
        </View>

      </ScrollView>
    </View>
  );
};

export default Profile;
