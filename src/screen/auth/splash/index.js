import React, { useContext } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import Button from "../../../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import { userContext } from "../../../../App";
import { colors } from "../../../util/colors";

const image = require('../../../assets/splash_image.png');


const Splash = ({navigation}) => {
    console.log("navigatio",navigation)



    const onSignIn = () => {
        navigation.navigate("SignIn")
    }

    const onSignUp = () => {
        navigation.navigate("SignUp")
    }
    return (


        <View style= {styles.container}>
            <Image style={styles.image} source={image} />

            <View style={styles.titleContainer}>
            <Text style = {styles.title}>You'll find </Text>
            <Text style ={styles.innertitle}> All you need</Text>
            <Text style = {styles.title}> Here ! </Text>
            </View>
           
           
                <Button style={styles.buttonCont} onPress={onSignIn} title="Sign In" />
            
            <Pressable style = {{marginTop:10}} onPress={onSignUp}  hitSlop={0}>
                <Text style = {styles.footerText} >Sign up</Text>
            </Pressable>
        </View>


    );
};

export default Splash