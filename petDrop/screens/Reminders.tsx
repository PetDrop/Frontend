import { Image } from "expo-image";
import * as React from "react";
import { Dimensions, ScrollView, Text, View } from "react-native";
import AddReminderButton from "../components/AddButton";
import ReminderCard from "../components/Reminders/ReminderCard";
import TopBottomBar from "../components/TopBottomBar";
import mockData from "../data/mockData.json";
import { logoImage, ScreenEnum } from "../GlobalStyles";
import styles from "../styles/Reminders.styles";

import { NavigationProp } from "@react-navigation/native";
import { useEffect } from "react";
import { GET_ACCOUNT_BY_USERNAME } from "../data/endpoints";
import { Account, Pet, Reminder } from "../data/dataTypes";

const { width, height } = Dimensions.get("window");

interface Props {
  navigation: NavigationProp<any>;
  route: any;
}

const Reminders = ({ navigation, route }: Props) => {
  const [reminders, setReminders] = React.useState<Reminder[]>([]);

  // fetch pets for this account from db
  useEffect(() => {
      try {
        // get the account of the user
        fetch(GET_ACCOUNT_BY_USERNAME + `${route.params.username}`)
        .then((response) => {
          if (response.ok) {
            // if account found, extract the pets
            response.json()
            .then((value) => {
              const account: Account = value;
              setReminders(account.reminders);
              console.log(reminders);
            })
          } else {
            console.log('unable to find account of user');
          }
        })
      } catch (error) {
        console.error(error);
      }
    }, []);
    
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Logo */}
        <Image source={require("../assets/petdrop_slogan.png")} style={logoImage} />
        
        {/* Page Title */}
        <Text style={styles.pageTitle}>Reminders</Text>
        
        {/* Reminder Cards */}
        {reminders.map((reminder: Reminder) => (
          <ReminderCard key={reminder.id} reminder={reminder} />
        ))}

        {/* Add Reminder Button */}
        <AddReminderButton onPressFunction={() => {}}/>
      </ScrollView>
      
      {/* Bottom Navigation */}
      <TopBottomBar navigation={navigation} currentScreen={ScreenEnum.Reminders} username={route.params.username}/>
    </View>
  );
};

export default Reminders;