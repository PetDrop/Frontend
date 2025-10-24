type RootStackParamList = {
  Login: {pushToken: string};
  Signup: undefined;
  Profile: undefined;
  Home: {pushToken: string};
  PetInfo: undefined;
  NewPet: undefined;
  Reminders: undefined;
  MedicationsArchive: undefined;
  Instructions: { medName: string; pushToken: string };
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
import NewPet from "./screens/NewPet";
import Reminders from "./screens/Reminders";
import Profile from "./screens/Profile";
import Instructions from "./screens/Instructions";
import Sponsors from "./screens/Sponsors";
import Credits from "./screens/Credits";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signup from "./screens/Signup";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useEffect, useRef, useState } from 'react';
import { Button, Platform, View, Text } from 'react-native';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import Constants from 'expo-constants';
import { AccountProvider } from "./context/AccountContext";
import { PushTokenProvider, usePushToken } from "./context/PushTokenContext";
import { emptyAccount } from "./data/dataTypes";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldSetBadge: true,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

function handleRegistrationError(errorMessage: string) {
  alert(errorMessage);
  throw new Error(errorMessage);
}

async function registerForPushNotificationsAsync() {
  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      handleRegistrationError('Permission not granted to get push token for push notification!');
      return;
    }
    const projectId =
      Constants?.expoConfig?.extra?.eas?.projectId ?? Constants?.easConfig?.projectId;
    if (!projectId) {
      handleRegistrationError('Project ID not found');
    }
    try {
      const pushTokenString = (
        await Notifications.getExpoPushTokenAsync({
          projectId,
        })
      ).data;
      console.log(pushTokenString);
      return pushTokenString;
    } catch (e: unknown) {
      handleRegistrationError(`${e}`);
    }
  } else {
    handleRegistrationError('Must use physical device for push notifications');
  }
}

const AppContent = () => {
  const navigationRef = React.useRef<any>(null);
  const [hideSplashScreen, setHideSplashScreen] = useState(true);
  const [notification, setNotification] = useState<Notifications.Notification | undefined>(undefined);
  const [pendingNavigation, setPendingNavigation] = useState<{medName: string, pushToken: string} | null>(null);
  const { pushToken, setPushToken } = usePushToken();

  // Function to handle navigation after login
  const handleNavigationAfterLogin = () => {
    if (pendingNavigation && navigationRef.current) {
      navigationRef.current.navigate('Instructions', pendingNavigation);
      setPendingNavigation(null); // Clear the pending navigation
    } else {
      console.log('Cannot navigate - missing pendingNavigation or navigationRef');
    }
  };

  const [fontsLoaded, error] = useFonts({
    "Koulen-Regular": require("./assets/fonts/Koulen-Regular.ttf"),
    "Jua-Regular": require("./assets/fonts/Jua-Regular.ttf"),
  });

  useEffect(() => {
    registerForPushNotificationsAsync()
      .then(token => setPushToken(token ?? ''))
      .catch((error: any) => setPushToken(`${error}`));

    const notificationListener = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });


    return () => {
      notificationListener.remove();
    };
  }, [setPushToken]);

  // Set up response listener when pushToken is available
  useEffect(() => {
    if (pushToken) {
      
      // Check for any pending notification responses
      Notifications.getLastNotificationResponseAsync().then(response => {
        if (response) {
          handleNotificationResponse(response);
        }
      });
      
      const responseListener = Notifications.addNotificationResponseReceivedListener(response => {
        handleNotificationResponse(response);
      });

      return () => {
        responseListener.remove();
      };
    }
  }, [pushToken]);

  // Function to handle notification response
  const handleNotificationResponse = (response: any) => {
    const medNameData = response.notification.request.content.data?.medName as any;
    const medName = medNameData?.value || medNameData;
    
    if (medName && navigationRef.current) {
      // Check if user is already logged in by checking if we're passed the login screen
      const currentRoute = navigationRef.current.getCurrentRoute();
      
      if (currentRoute?.name !== 'Login' && currentRoute?.name !== 'Signup') {
        // User is already logged in, navigate directly to Instructions
        navigationRef.current.navigate('Instructions', {
          medName: medName,
          pushToken: pushToken
        });
      } else {
        // User is not logged in, set pending navigation and go to Login
        setPendingNavigation({ medName, pushToken: pushToken });
        navigationRef.current.navigate('Login');
      }
    } else {
      console.log('No medName found in notification data or navigationRef not available');
    }
  };


  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AccountProvider initialAccount={emptyAccount}>
      <NavigationContainer ref={navigationRef}>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {/* first screen listed is the one rendered by default */}
            <Stack.Screen
              name="Login"
              options={{ headerShown: false }}
            >
              {(props) => {
                return <Login {...props} onLoginSuccess={pendingNavigation ? handleNavigationAfterLogin : undefined} />;
              }}
            </Stack.Screen>
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
              name="NewPet"
              component={NewPet}
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
      </AccountProvider>
    </GestureHandlerRootView>
  );
};

const App = () => {
  return (
    <PushTokenProvider>
      <AppContent />
    </PushTokenProvider>
  );
};

export default App;
