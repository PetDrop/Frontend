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
import { Account } from "../data/dataTypes";

const { width, height } = Dimensions.get("window");

type HomeProps = {
  navigation: any;
  route: any;
};

const Home = ({ navigation, route }: HomeProps) => {
  const [popupShowing, setPopupShowing] = React.useState(false);

  // store the user's account info to avoid typing "route.params.account" repeatedly
  let account: Account = route.params.account;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <Header />

        {/* User Greeting */}
        <UserGreeting name={account.username} />

        {/* Calendar Section */}
        <View style={styles.calendarContainer}>
          <Text style={styles.monthText}>September.</Text>
          <EditIcon style={styles.editIcon} width={width * 0.07} height={height * 0.1} />
          <View style={styles.calendarBody}>
            <Pressable onPress={() => { setPopupShowing(true) }}>
              <Calendar pets={account.pets} />
            </Pressable>
          </View>
        </View>

        {/* Medications List */}
        <MedicationsList pets={account.pets} />

      </ScrollView>
      {/* Bottom Navigation */}
      <TopBottomBar navigation={navigation} currentScreen={ScreenEnum.Home} account={account} />

      {/* Pop-up to view a reminder */}
      <ReminderPopup isActive={popupShowing} showingFunction={setPopupShowing} pets={account.pets} />
    </View>
  );
};

export default Home;