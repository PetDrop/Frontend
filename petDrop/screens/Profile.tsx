import * as React from "react";
import { View, Text, ScrollView, TextInput, KeyboardAvoidingView } from "react-native";
import { Color } from "../GlobalStyles";
import { styles } from '../styles/ProfilePage.styles';
import Header from "../components/Home/Header";
import AddPicture from '../components/Profile/AddPicture';
import AddButton from "../components/AddButton";
import SubmitButton from '../components/Profile/SubmitButton';
import { GET_ACCOUNT_BY_EMAIL, UPDATE_ACCOUNT } from "../data/endpoints";

function updateEmergencyContacts(state: string[], action: { index: number, text: string }) {
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

  /* puts all state info into an object 
  * that is then written to the db
  */
  const writeToDB = async () => {
    const email = props.route.params.email;
    let id, username, password;
    try {
      // first get the account to be updated from the db
      // in order to pass the prior info along
      let response = await fetch(GET_ACCOUNT_BY_EMAIL + `${email}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const account = await response.json();
        id = account.id;
        username = account.username
        password = account.password
      } else {
        console.log('unable to retrieve account from database: status code ' + response.status);
        alert('submission failed');
      }
      // then update the account with the new info
      response = await fetch(UPDATE_ACCOUNT, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: id,
          username: username,
          email: email,
          password: password,
          phone: phone,
          address: address,
          emergencyContacts: emergencyContacts
        }),
      });
      if (response.ok) {
        props.navigation.navigate('Home');
      } else {
        console.log('unable to write account to database: status code ' + response.status);
        alert('submission failed');
      }
    } catch (error) {
      console.error(error);
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
          setEmergencyContacts({ index: i, text });
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
          <AddButton onPressFunction={() => { setNumEmergencyContacts(numEmergencyContacts + 1) }} />
        </View>

        {/* submit button */}
        <View style={styles.submitButtonContainer}>
          <SubmitButton onPressFunction={writeToDB} />
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Profile;
