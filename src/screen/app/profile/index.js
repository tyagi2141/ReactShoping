import { Text } from "react-native-paper";
import React, { useContext, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import { styles } from "./styles";
import Header from "../../../components/header";
import Listitem from "../../../components/listitem";
import Button from "../../../components/Button";
import SettingScreen from '../../app/setting'
import { getProfile } from "../../../util/backendCode";
import { profileContext } from "../../../../App";

const ProfileScreen = ({ navigation }) => {

const {profile ,setProfile} = useContext(profileContext)

useEffect(() =>{

    (async () => {
        const response = await getProfile();
        setProfile(response)
        console.log("profile screen",response)
    })()

},[])

    const clickLogout = () => {

    }

    const onSettingPress = () => {
        navigation.navigate("SettingScreen")
    }

    const addNewListing = () => {
        navigation.navigate("CreateListing")
    }

    const onMyListingPress = () => {
        navigation.navigate("MyListing")
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header title={"Profile"} showLogout onLogout={clickLogout} />
            <View style={styles.mainContainer}>
                <View style={styles.contaainer}>
                <Text style={styles.name}>{profile?.fullName}</Text>
                    <Text style={styles.email}>{profile?.email}</Text>

                    <View style={styles.subContainer}>
                        <Listitem onPress={onMyListingPress}  title={"MyListing"} subtitle={"subtitle"} showSubtitle showIcon />

                        <Listitem onPress={onSettingPress} title={"Settings"} subtitle={"Account ,FAQ , Contact"} showSubtitle showIcon />
                    </View>
                </View>
                <Button onPress={addNewListing} style={styles.button} title={"Add new listing"} />

            </View>

        </SafeAreaView>

    );
}

export default React.memo(ProfileScreen)