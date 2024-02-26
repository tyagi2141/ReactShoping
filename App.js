/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * npm install --legacy-peer-deps    
 * @format
 */

import React, { useEffect, useState } from 'react';
import Signin from './src/screen/auth/Signin';
import Signup from './src/screen/auth/Signup';
import HomeScreen from './src/screen/app/home';

import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Config from "react-native-config";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from './src/util/colors';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Image } from 'react-native';
import Splash from './src/screen/auth/splash';
import FavoritesScreen from './src/screen/app/favorites'
import ProfileScreen from './src/screen/app/profile'
import SettingScreen from './src/screen/app/setting'
import createListing from './src/screen/app/createListing';
import productScreen from './src/screen/app/productScreen';
import myListing from './src/screen/app/myListing';
import Routes from './Routes';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

GOOGLE_IOS_CLIENT_ID ="849236722100-g958e2qi5rifdc48nj8qgv30giearvof.apps.googleusercontent.com"
GOOGLE_WEB_CLIENT_ID = "849236722100-b91em0665rvf6erc3vir43pc73i6pav8.apps.googleusercontent.com"
Android_client_secret = "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"

export const userContext = React.createContext();
export const profileContext = React.createContext();
export const serviceContext = React.createContext();






const App = () => {
  const isSignedIn = false;
  const [user,setUser] = useState();

  const [profile,setProfile] = useState();
  const [service,setService] = useState();





  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: GOOGLE_WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      iosClientId: GOOGLE_IOS_CLIENT_ID, // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
  }, [])

  const theme = {
    colors: {
      background: colors.white,
    }
  }

  return (
    <SafeAreaProvider>
     <userContext.Provider  value={{user ,setUser}}>
      <profileContext.Provider value={{profile ,setProfile}}>
        <serviceContext.Provider  value={{service , setService}}>


     <Routes/>

     </serviceContext.Provider>

     </profileContext.Provider>

      </userContext.Provider>

    </SafeAreaProvider>
  );
};
export default App;


