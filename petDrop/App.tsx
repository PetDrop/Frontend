const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Home from "./screens/Home";
import PetInfo1 from "./screens/PetInfo1";
import Login from "./screens/Login";
import Login1 from "./screens/Login1";
import Reminders from "./screens/Reminders";
import PetInfo from "./screens/PetInfo";
import LoadingScreen from "./screens/LoadingScreen";
import MedicationsArchive1 from "./screens/MedicationsArchive1";
import MedicationsArchive from "./screens/MedicationsArchive";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import { ScreenEnum } from "./GlobalStyles";

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
    <>
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
              name="Login1"
              component={Login1}
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
              name="MedicationsArchive1"
              component={MedicationsArchive1}
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
    </>
  );
};
export default App;
