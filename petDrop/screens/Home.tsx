import React from "react";
import { Dimensions, Text, View, ScrollView } from "react-native";
import EditIcon from "../assets/edit_icon.svg";
import Calendar from "../components/Home/Calendar";
import Header from "../components/Home/Header";
import MedicationsList from "../components/Home/MedicationsList";
import UserGreeting from "../components/Home/UserGreeting";
import TopBottomBar from "../components/TopBottomBar";
import { ScreenEnum } from "../GlobalStyles";
import { styles } from "../styles/Home.styles";

const { width, height } = Dimensions.get("window");

type HomeProps = {
  navigation: any;
};

const Home = ({ navigation }: HomeProps) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      {/* Header */}
      <Header />
      
      {/* User Greeting */}
      <UserGreeting name="Jane" />
      
      {/* Calendar Section */}
      <View style={styles.calendarContainer}>
        <Text style={styles.monthText}>September.</Text>
          <EditIcon style={styles.editIcon} width={width * 0.07} height={height * 0.1} />
        <View style={styles.calendarBody}>
          <Calendar />
        </View>
      </View>
      
      {/* Medications List */}
      <MedicationsList />
      </ScrollView>
      {/* Bottom Navigation */}
      <TopBottomBar navigation={navigation} currentScreen={ScreenEnum.Home} />
    </View>
  );
};

export default Home;