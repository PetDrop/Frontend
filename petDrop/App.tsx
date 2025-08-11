type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
  Profile: undefined;
  Home: undefined;
  PetInfo: undefined;
  PetInfo1: undefined;
  Reminders: undefined;
  MedicationsArchive: undefined;
  Instructions: undefined;
  Sponsors: undefined;
  Credits: undefined;
  LoadingScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as React from "react";
import Home from "./screens/Home";
import LoadingScreen from "./screens/LoadingScreen";
import Login from "./screens/Login";
import MedicationsArchive from "./screens/MedicationsArchive";
import PetInfo from "./screens/PetInfo";
import PetInfo1 from "./screens/PetInfo1";
import Reminders from "./screens/Reminders";
import Profile from "./screens/Profile";
import Instructions from "./screens/Instructions";
import Sponsors from "./screens/Sponsors";
import Credits from "./screens/Credits";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import Signup from "./screens/Signup";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = useState(true);

  const [fontsLoaded, error] = useFonts({
    "Koulen-Regular": require("./assets/fonts/Koulen-Regular.ttf"),
    "Jua-Regular": require("./assets/fonts/Jua-Regular.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {/* first screen listed is the one rendered by default */}
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PetInfo"
              component={PetInfo}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PetInfo1"
              component={PetInfo1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Reminders"
              component={Reminders}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MedicationsArchive"
              component={MedicationsArchive}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Instructions"
              component={Instructions}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Sponsors"
              component={Sponsors}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Credits"
              component={Credits}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoadingScreen"
              component={LoadingScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};
export default App;
