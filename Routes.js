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
import { useContext } from 'react';
import { userContext } from './App';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { addTokenToAxios } from './src/util/request';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

GOOGLE_IOS_CLIENT_ID ="849236722100-g958e2qi5rifdc48nj8qgv30giearvof.apps.googleusercontent.com"
GOOGLE_WEB_CLIENT_ID = "849236722100-b91em0665rvf6erc3vir43pc73i6pav8.apps.googleusercontent.com"
Android_client_secret = "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"



const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SettingScreen" component={SettingScreen} options={{ headerShown: false }} />
      <Stack.Screen name="CreateListing" component={createListing} options={{ headerShown: false }} />
     <Stack.Screen name="MyListings" component={createListing} options={{ headerShown: false }} />
     <Stack.Screen name="MyListing" component={myListing} options={{ headerShown: false }} />

    </Stack.Navigator>
  )
}

const Tabs = () => (
  <Tab.Navigator 
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let icon;

        if (route.name === 'Home') {
          icon = focused
            ? require('./src/assets/home_select.png')
            : require('./src/assets/home.png');
        } else if (route.name === 'ProfileStack') {
          icon = focused
            ? require('./src/assets/person_select.png')
            : require('./src/assets/person.png');
        } else if (route.name === 'Favorites') {
          icon = focused
            ? require('./src/assets/marker_select.png')
            : require('./src/assets/marker.png');
        }

        // You can return any component that you like here!
        return <Image style={{ width: 24, height: 24 }} source={icon} />
      },
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: { borderTopColor: colors.lightGrey }
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Favorites" component={FavoritesScreen} />
    <Tab.Screen name="ProfileStack" component={ProfileStack} />
  </Tab.Navigator>
)

const Routes = () => {
  const isSignedIn = false;
  const [loading, setLoading] = useState(true);
  const {user,setUser}= useContext(userContext);



  useEffect(() => {
    ( async () => {

      const token = await AsyncStorage.getItem('auth_token');
      setUser({token});
      console.log("async storage tokken",user);
      setTimeout(() => {
        setLoading(false);
    }, 5000);
      
    })()

  },[])


useEffect(()  => {

  if(user?.token){
    addTokenToAxios(user?.token);
    console.log("async storage refresh",user.token);

  }

},[user])

  const theme = {
    colors: {
      background: colors.white,
    }
  }

  

  return (
  

      <NavigationContainer theme={theme}>
        <Stack.Navigator>
           
          {user?.token ? (
            <>
              <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
              <Stack.Screen name="productScreen" component={productScreen} options={{ headerShown: false }} />
            </>
          ) : (
            <>
              <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
              <Stack.Screen name="SignIn" component={Signin} options={{ headerShown: false }} />
              <Stack.Screen name="SignUp" component={Signup} options={{ headerShown: false }} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    
  );
};
export default React.memo(Routes);


