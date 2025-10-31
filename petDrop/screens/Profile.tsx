import * as React from "react";
import { View, Text, ScrollView, TextInput, KeyboardAvoidingView } from "react-native";
import { Color } from "../GlobalStyles";
import { styles } from '../styles/ProfilePage.styles';
import Header from "../components/Header";
import AddImage from "../components/AddImage";
import AddButton from "../components/CustomButton";
import SaveChangesButton from '../components/CustomButton';
import { GET_ACCOUNT_BY_EMAIL, httpRequest, UPDATE_ACCOUNT } from "../data/endpoints";
import { Account, emptyAccount } from "../data/dataTypes";
import { useReducer, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
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
};

const Profile = ({ navigation }: ProfileType) => {
  const { account, setAccount } = useAccount();

  const [image, setImage] = useState(account.image);
  const [username, setUsername] = useState(account.username);
  const [email, setEmail] = useState(account.email);
  const [password, setPassword] = useState(account.password);
  const [numSharedUsers, setNumSharedUsers] = useState(Math.max(account.sharedUsers.length, 1));
  const [sharedUsers, setSharedUsers] = useReducer(updateSharedUsers, account.sharedUsers);
  const [numUsersSharedWith, setNumUsersSharedWith] = useState(Math.max(account.usersSharedWith.length, 1));
  const [usersSharedWith, setUsersSharedWith] = useReducer(updateSharedUsers, account.usersSharedWith);

  /* handles submit button being pressed
    checks to make sure required fields have values
    and removes empty values from sharedUsers and usersSharedWith - 
    passes the results into call to write to db
  */
  const UpdateAccount = () => {
    // If nothing changed, just navigate back to Home
    if (isUnchanged) {
      navigation.navigate('Home');
      return;
    }
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

  const arraysEqual = (a: string[], b: string[]) => {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  };

  const isUnchanged = React.useMemo(() => {
    const normalizedSharedUsers = (sharedUsers || []).filter((s) => s && s.trim() !== '');
    const originalSharedUsers = (account.sharedUsers || []).filter((s) => s && s.trim() !== '');
    const normalizedUsersSharedWith = (usersSharedWith || []).filter((s) => s && s.trim() !== '');
    const originalUsersSharedWith = (account.usersSharedWith || []).filter((s) => s && s.trim() !== '');

    return (
      username === account.username &&
      email === account.email &&
      password === account.password &&
      image === account.image &&
      arraysEqual(normalizedSharedUsers, originalSharedUsers) &&
      arraysEqual(normalizedUsersSharedWith, originalUsersSharedWith)
    );
  }, [username, email, password, image, sharedUsers, usersSharedWith, account]);

  /* puts all state info into an object 
  * that is then written to the db
  */
  const WriteToDB = async (sharedUserContacts: string[], usersSharedWithContacts: string[]) => {
    // build updated account object, update context, and send the same object to the backend
    const updatedAccount: Account = {
      id: account.id,
      username: username,
      email: email,
      password: password,
      sharedUsers: sharedUserContacts,
      usersSharedWith: usersSharedWithContacts,
      pets: account.pets,
      sharedPets: account.sharedPets,
      image: image
    };
    setAccount(updatedAccount);
    // then update the account in the db with the new info (do not use stale state)
    try {
      const response = await httpRequest(UPDATE_ACCOUNT, 'PUT', JSON.stringify(updatedAccount));
      if (response.ok) {
        // navigate to home screen and pass the account there
        navigation.navigate('Home');
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

  const Logout = async () => {
    try {
      // Clear account context
      setAccount(emptyAccount);

      // Remove saved password from secure storage (with AsyncStorage fallback)
      try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const SecureStore = require('expo-secure-store');
        await SecureStore.deleteItemAsync('savedPassword');
      } catch {
        // ignore
      }
      try {
        await AsyncStorage.removeItem('savedPassword_fallback');
      } catch {
        // ignore
      }

      // Clear Remember Me preference and saved username
      try {
        await AsyncStorage.setItem('rememberMe', 'false');
      } catch {
        // ignore
      }
      try {
        await AsyncStorage.removeItem('savedUsername');
      } catch {
        // ignore
      }

    } catch (e) {
      console.error(e);
    }
    // Navigate back to Login with stack reset to ensure remount
    navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
  }

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>

      {/* top banner */}
      <View style={styles.banner}></View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* header */}
        <Header navigation={navigation} />

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
          <AddButton disabled={false} onPressFunction={() => { setNumSharedUsers(numSharedUsers + 1) }} innerText={'+ ADD'} color={Color.colorCornflowerblue} />
        </View>

        {/* users shared with */}
        <Text style={styles.inputHeading}>Share Info With Users</Text>
        {userSharedWithInputs}

        {/* add user shared with button */}
        <View style={styles.addButtonContainer}>
          <AddButton disabled={false} onPressFunction={() => { setNumUsersSharedWith(numUsersSharedWith + 1) }} innerText={'+ ADD'} color={Color.colorCornflowerblue} />
        </View>

        {/* save changes button */}
        <View style={styles.saveChangesButtonContainer}>
          <SaveChangesButton disabled={false} onPressFunction={UpdateAccount} innerText={'Save'} color={Color.colorCornflowerblue} />
        </View>

        {/* logout button */}
        <View style={styles.logoutButtonContainer}>
          <AddButton disabled={false} onPressFunction={Logout} innerText={'Logout'} color={Color.colorCornflowerblue} />
        </View>

      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Profile;
