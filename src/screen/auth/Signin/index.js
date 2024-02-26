import { Text, View } from "react-native";
import { styles } from "./styles";
import AuthHeader from "../../../components/authHeader";
import Input from "../../../components/input";
import CheckBox from "../../../components/checkbox";
import { useState } from "react";
import Button from "../../../components/Button";
import Seperator from "../../../components/saparater";
import Googlelogin from "../../../components/googlelogin";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { login } from "../../../util/backendCode";
import { useContext } from "react";
import { userContext } from "../../../../App";

const SignIn = ({ navigation }) => {

    const [values, setValues] = useState({})
    const {user , setUser} = useContext(userContext)


    const signUp = () => {
        navigation.navigate("SignUp")
    }

    const goBack = () => {
        navigation.goBack()
    }


    const onChnageValue = (key ,value) => {
        setValues(v => ({...v, [key]: value}))
    }

    const onSubmit = async () => {
        try {
           // console.log("resulr ",values.confirmPassword +" = "+values.email +" = "+values.password +" "+values.fullName )
            console.log(values)
            if ( !values?.email || !values?.password) {
                Alert.alert('All fields are required');
                return;
            }
    
            
    const token = await login(values);

   // if(tokken){
        setUser({ token })
    //}
           
            console.log('response sign screen :>> ', user);
        } catch(error) {
            console.log('error sign screen:>> ', error);
        }
    } 


    return (
        <SafeAreaView>
            <View style={styles.contaainer}>
                <AuthHeader onBackPress={goBack} title={"Sign In"} />
                <Input value={values.email} onChangeText={(v) => onChnageValue('email', v)} placeholder={"Enter Email"} lable={"Email"} />
                <Input value={values.password} onChangeText={(v) => onChnageValue('password', v)} isPassword={true} placeholder={"Enter Password"} lable={"Password"} />

                <Button onPress={onSubmit} style={styles.signupbtn} title={"Sign in"} />
                <Seperator lablel={"sign In"} />
                <Googlelogin />
                <Text style={styles.fottersignin} onPress={signUp}> don't have account <Text style={styles.fottersubText}>Sign Up</Text> </Text>
            </View>
        </SafeAreaView>

    );
}

export default React.memo(SignIn)