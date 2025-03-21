import * as React from "react";
import { Dimensions, Text, View, ScrollView, Pressable } from "react-native";
import EditIcon from "../assets/edit_icon.svg";
import Calendar from "../components/Home/Calendar";
import Header from "../components/Home/Header";
import MedicationsList from "../components/Home/MedicationsList";
import UserGreeting from "../components/Home/UserGreeting";
import TopBottomBar from "../components/TopBottomBar";
import { ScreenEnum } from "../GlobalStyles";
import { styles } from "../styles/Home.styles";
import ReminderPopup from "../components/ReminderPopup";
import { useEffect } from "react";
import { GET_ACCOUNT_BY_USERNAME } from "../data/endpoints";
import { Account, Pet } from "../data/dataTypes";

const { width, height } = Dimensions.get("window");

type HomeProps = {
  navigation: any;
  route: any;
};

const Home = (props: HomeProps) => {
  const [popupShowing, setPopupShowing] = React.useState(false);
  const [pets, setPets] = React.useState<Pet[]>([]);

  useEffect(() => {
    try {
      // get the account of the user
      fetch(GET_ACCOUNT_BY_USERNAME + `${props.route.params.username}`)
      .then((response) => {
        if (response.ok) {
          // if account found, extract the pets
          response.json()
          .then((value) => {
            const account: Account = value;
            setPets(account.pets);
            // console.log(pets);
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
        {/* Header */}
        <Header />

        {/* User Greeting */}
        <UserGreeting name={props.route.params.username} />

        {/* Calendar Section */}
        <View style={styles.calendarContainer}>
          <Text style={styles.monthText}>September.</Text>
          <EditIcon style={styles.editIcon} width={width * 0.07} height={height * 0.1} />
          <View style={styles.calendarBody}>
            <Pressable onPress={() => { setPopupShowing(true) }}>
              <Calendar pets={pets}/>
            </Pressable>
          </View>
        </View>

        {/* Medications List */}
        <MedicationsList pets={pets}/>

      </ScrollView>
      {/* Bottom Navigation */}
      <TopBottomBar navigation={props.navigation} currentScreen={ScreenEnum.Home} username={props.route.params.username}/>
      <ReminderPopup isActive={popupShowing} showingFunction={setPopupShowing} />
    </View>
  );
};

export default Home;