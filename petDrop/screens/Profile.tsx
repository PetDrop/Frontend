import * as React from "react";
import { View, Text, ScrollView, TextInput, KeyboardAvoidingView } from "react-native";
import { Color } from "../GlobalStyles";
import { styles } from '../styles/ProfilePage.styles';
import Header from "../components/Home/Header";
import AddImage from "../components/AddImage";
import AddButton from "../components/CustomButton";
import SaveChangesButton from '../components/CustomButton';
import { GET_ACCOUNT_BY_EMAIL, httpRequest, UPDATE_ACCOUNT } from "../data/endpoints";
import { Account } from "../data/dataTypes";
import { useReducer, useState } from "react";
import * as ImagePicker from 'expo-image-picker';

function updateSharedUsers(state: string[], action: { index: number, text: string }) {
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
  const account: Account = route.params.account;

  const [image, setImage] = useState('');
  const [username, setUsername] = useState(account.username);
  const [email, setEmail] = useState(account.email);
  const [password, setPassword] = useState(account.password);
  const [numSharedUsers, setNumSharedUsers] = useState(Math.max(account.sharedUsers.length, 1));
  const [sharedUsers, setSharedUsers] = useReducer(updateSharedUsers, account.sharedUsers);

  /* handles submit button being pressed
    checks to make sure required fields have values
    and removes empty values from sharedUsers - 
    passes the result into call to write to db
  */
  const UpdateAccount = () => {
    let contacts: string[] = [];
    sharedUsers.forEach(contact => {
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
    // create updated account object with new info, to be put in the db
    const updatedAccount: Account = {
      id: account.id,
      username: username,
      email: email,
      password: password,
      sharedUsers: contacts,
      pets: account.pets,
      reminders: account.reminders
    };
    // then update the account in the db with the new info
    try {
      const response = await httpRequest(UPDATE_ACCOUNT, 'PUT', JSON.stringify(updatedAccount));
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

  /* list of shared user text inputs */
  let sharedUserInputs = Array<React.JSX.Element>(numSharedUsers);
  for (let i: number = 0; i < numSharedUsers; i++) {
    sharedUserInputs[i] =
      <TextInput
        key={`sharedUser${i + 1}`}
        style={[styles.textInput]}
        placeholder="ENTER SHARED USER"
        placeholderTextColor={Color.colorCornflowerblue}
        value={sharedUsers[i]}
        onChangeText={(text) => {
          setSharedUsers({ index: i, text });
        }}
      />
  }

  const addImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
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

        {/* profile picture */}
        <AddImage onPressFunction={addImage} containerStyle={styles.addPictureContainer} uri={image}/>

        {/* user's username */}
        <Text style={styles.nameHeading}>{route.params.account.username}</Text>

        {/* text inputs */}
        <TextInput
          style={[styles.textInput]}
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={[styles.textInput]}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={[styles.textInput]}
          value={password}
          onChangeText={setPassword}
        />

        {/* shared users */}
        {sharedUserInputs}

        {/* add shared user button */}
        <View style={styles.addButtonContainer}>
          <AddButton onPressFunction={() => { setNumSharedUsers(numSharedUsers + 1) }} innerText={'+ ADD'}/>
        </View>

        {/* save changes button */}
        <View style={styles.saveChangesButtonContainer}>
          <SaveChangesButton onPressFunction={UpdateAccount} innerText={'Save Changes'} />
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Profile;
