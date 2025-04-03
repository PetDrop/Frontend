import * as React from "react";
import { View, Text, ScrollView, TextInput, KeyboardAvoidingView } from "react-native";
import { Color } from "../GlobalStyles";
import { styles } from '../styles/ProfilePage.styles';
import Header from "../components/Home/Header";
import AddImage from "../components/AddImage";
import AddButton from "../components/AddButton";
import SubmitButton from '../components/Profile/SubmitButton';
import { GET_ACCOUNT_BY_EMAIL, UPDATE_ACCOUNT } from "../data/endpoints";
import { Account } from "../data/dataTypes";

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

const Profile = ({ navigation, route }: ProfileType) => {
  const [address, setAddress] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [numEmergencyContacts, setNumEmergencyContacts] = React.useState(1);
  const [emergencyContacts, setEmergencyContacts] = React.useReducer(updateEmergencyContacts, ['']);

  /* handles submit button being pressed
    checks to make sure required fields have values
    and removes empty values from emergencyContacts - 
    passes the result into call to write to db
  */
  const Submit = () => {
    if (address === '' || phone === '') {
      alert('Must enter address and phone number');
      return;
    }
    let contacts: string[] = [];
    emergencyContacts.forEach(contact => {
      if (contact !== '') {
        contacts.push(contact);
      }
    });
    WriteToDB(contacts);
  }

  /* puts all state info into an object 
  * that is then written to the db
  */
  const WriteToDB = async (contacts: string[]) => {
    const oldAccount = route.params.account;
    // create updated account object with new info, to be put in the db
    const updatedAccount: Account = {
      id: oldAccount.id,
      username: oldAccount.username,
      email: oldAccount.email,
      password: oldAccount.password,
      phone: phone,
      address: address,
      emergencyContacts: contacts,
      pets: [],
      reminders: []
    };
    // then update the account in the db with the new info
    try {
      const response = await fetch(UPDATE_ACCOUNT, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedAccount),
      });
      if (response.ok) {
        // navigate to home screen and pass the account there
        navigation.navigate('Home', { account: updatedAccount });
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
        placeholder="ENTER EMERGENCY CONTACT"
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
        <AddImage onPressFunction={() => {}} containerStyle={styles.addPictureContainer}/>

        {/* user's name */}
        <Text style={styles.nameHeading}>Name</Text>

        {/* text inputs */}
        <TextInput
          style={[styles.textInput]}
          placeholder="ENTER ADDRESS"
          placeholderTextColor={Color.colorCornflowerblue}
          value={address}
          onChangeText={setAddress}
        />
        <TextInput
          style={[styles.textInput]}
          placeholder="ENTER PHONE"
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
          <SubmitButton onPressFunction={Submit} />
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Profile;
