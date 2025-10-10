import * as React from "react";
import { View, Text, ScrollView, TextInput, KeyboardAvoidingView } from "react-native";
import { Color } from "../GlobalStyles";
import { styles } from '../styles/ProfilePage.styles';
import Header from "../components/Header";
import AddImage from "../components/AddImage";
import AddButton from "../components/CustomButton";
import SaveChangesButton from '../components/CustomButton';
import { GET_ACCOUNT_BY_EMAIL, httpRequest, UPDATE_ACCOUNT } from "../data/endpoints";
import { Account } from "../data/dataTypes";
import { useReducer, useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import { NavigationProp } from "@react-navigation/native";
import { useAccount } from "../context/AccountContext";

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
  navigation: NavigationProp<any>;
  route: any;
};

const Profile = ({ navigation, route }: ProfileType) => {
  const { account, setAccount } = useAccount();

  const [image, setImage] = useState(account.image);
  const [username, setUsername] = useState(account.username);
  const [email, setEmail] = useState(account.email);
  const [password, setPassword] = useState(account.password);
  const [numSharedUsers, setNumSharedUsers] = useState(Math.max(account.sharedUsers.length, 1));
  const [sharedUsers, setSharedUsers] = useReducer(updateSharedUsers, account.sharedUsers);
  const [numUsersSharedWith, setNumUsersSharedWith] = useState(Math.max(account.usersSharedWith.length, 1));
  const [usersSharedWith, setUsersSharedWith] = useReducer(updateSharedUsers, account.usersSharedWith);

  const pushToken: string = route.params.pushToken;

  /* handles submit button being pressed
    checks to make sure required fields have values
    and removes empty values from sharedUsers and usersSharedWith - 
    passes the results into call to write to db
  */
  const UpdateAccount = () => {
    let sharedUserContacts: string[] = [];
    sharedUsers.forEach(contact => {
      if (contact !== '') {
        sharedUserContacts.push(contact);
      }
    });
    let userSharedWithContacts: string[] = [];
    usersSharedWith.forEach(contact => {
      if (contact !== '') {
        userSharedWithContacts.push(contact);
      }
    });
    WriteToDB(sharedUserContacts, userSharedWithContacts);
  }

  /* puts all state info into an object 
  * that is then written to the db
  */
  const WriteToDB = async (sharedUserContacts: string[], usersSharedWithContacts: string[]) => {
    // create updated account object with new info, to be put in the db
    setAccount({
      id: account.id,
      username: username,
      email: email,
      password: password,
      sharedUsers: sharedUserContacts,
      usersSharedWith: usersSharedWithContacts,
      pets: account.pets,
      sharedPets: account.sharedPets,
      image: image
    });
    // then update the account in the db with the new info
    try {
      const response = await httpRequest(UPDATE_ACCOUNT, 'PUT', JSON.stringify(account));
      if (response.ok) {
        // navigate to home screen and pass the account there
        navigation.navigate('Home', { pushToken: pushToken });
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
        placeholder="ENTER USER'S NAME"
        placeholderTextColor={Color.colorCornflowerblue}
        value={sharedUsers[i]}
        onChangeText={(text) => {
          setSharedUsers({ index: i, text });
        }}
      />
  }

  /* list of "userSharedWith" text inputs */
  let userSharedWithInputs = Array<React.JSX.Element>(numUsersSharedWith);
  for (let i: number = 0; i < numUsersSharedWith; i++) {
    userSharedWithInputs[i] =
      <TextInput
        key={`userSharedWith${i + 1}`}
        style={[styles.textInput]}
        placeholder="ENTER USER'S NAME"
        placeholderTextColor={Color.colorCornflowerblue}
        value={usersSharedWith[i]}
        onChangeText={(text) => {
          setUsersSharedWith({ index: i, text });
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
      <View style={styles.banner}></View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* header */}
        <Header navigation={navigation} account={account} />

        {/* profile title */}
        <Text style={styles.title}>{`${account.username}'s Profile`}</Text>

        {/* profile picture */}
        <AddImage onPressFunction={addImage} containerStyle={styles.addPictureContainer} uri={image} />


        {/* text inputs */}
        <Text style={styles.inputHeading}>Username</Text>
        <TextInput
          style={[styles.textInput]}
          value={username}
          onChangeText={setUsername}
        />
        <Text style={styles.inputHeading}>Email</Text>
        <TextInput
          style={[styles.textInput]}
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.inputHeading}>Password</Text>
        <TextInput
          style={[styles.textInput]}
          value={password}
          onChangeText={setPassword}
        />

        {/* shared users */}
        <Text style={styles.inputHeading}>Request Info From Users</Text>
        {sharedUserInputs}

        {/* add shared user button */}
        <View style={styles.addButtonContainer}>
          <AddButton onPressFunction={() => { setNumSharedUsers(numSharedUsers + 1) }} innerText={'+ ADD'} color={Color.colorCornflowerblue} />
        </View>

        {/* users shared with */}
        <Text style={styles.inputHeading}>Share Info With Users</Text>
        {userSharedWithInputs}

        {/* add user shared with button */}
        <View style={styles.addButtonContainer}>
          <AddButton onPressFunction={() => { setNumUsersSharedWith(numUsersSharedWith + 1) }} innerText={'+ ADD'} color={Color.colorCornflowerblue} />
        </View>

        {/* save changes button */}
        <View style={styles.saveChangesButtonContainer}>
          <SaveChangesButton onPressFunction={UpdateAccount} innerText={'Save'} color={Color.colorCornflowerblue} />
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Profile;
