import { Alert, Text, View } from "react-native";
import { styles } from "./styles";
import AuthHeader from "../../../components/authHeader";
import Input from "../../../components/input";
import CheckBox from "../../../components/checkbox";
import { useContext, useState } from "react";
import Button from "../../../components/Button";
import Seperator from "../../../components/saparater";
import Googlelogin from "../../../components/googlelogin";
import { SafeAreaView } from "react-native-safe-area-context";
import { request } from "../../../util/request";
import { SignUp } from "../../../util/backendCode";
import { userContext } from "../../../../App";

const Signup = ({ navigation }) => {
    const [cheked, setCheck] = useState(false)
    const [values, setValues] = useState({})
const {user , setUser} = useContext(userContext)


    const signIn = () => {
        navigation.navigate("SignIn")
    }

    const goBack = () => {
        navigation.goBack()
    }


    const onChangeValue = (key, value) => {
       // setValues(v => ({ ...v, [key]: value }))
        setValues(v => ({...v, [key]: value}))
    }

    const onSubmit = async () => {
        try {
           // console.log("resulr ",values.confirmPassword +" = "+values.email +" = "+values.password +" "+values.fullName )
            if (!values?.fullName || !values?.email || !values?.password || !values?.confirmPassword) {
                Alert.alert('All fields are required');
                return;
            }
    
            if (values?.password !== values?.confirmPassword) {
                Alert.alert('Passwords do not match');
                return;
            }
    
            if (!cheked) {
                Alert.alert('Please agree to the terms');
                return;
            }
    const token = await SignUp(values);

    if(token){
        setUser({token})
    }
           
            console.log('response :>> ', token);
        } catch(error) {
            console.log('error :>> ', error.response.data);
        }
    } 

    return (
        <SafeAreaView>
            <View style={styles.contaainer}>
                <AuthHeader onBackPress={goBack} title={"Sign up"} />
                
                <Input value={values.fullName} onChangeText={(v) => onChangeValue('fullName', v)} label="Name" placeholder="John Doe" />

                <Input value={values.email} onChangeText={(v) => onChangeValue('email', v)} placeholder={"Enter Email"} lable={"Email"} />
                <Input value={values.password} onChangeText={(v) => onChangeValue('password', v)} isPassword={true} placeholder={"Enter Password"} lable={"Password"} />
                <Input value={values.confirmPassword} onChangeText={(v) => onChangeValue('confirmPassword', v)} isPassword={true} placeholder={"Enter confirmpassword"} lable={"confirmPassword"} />

                <View style={styles.agreeRow}>
                    <CheckBox checked={cheked} onCheck={setCheck} />
                    <Text style={styles.agreeText}>I agree with Terms & Privacy </Text>
                </View>

                <Button onPress={onSubmit} style={styles.signupbtn} title={"Sign up"} />
                <Seperator lablel={"sign in"} />
                <Googlelogin />
                <Text style={styles.fottersignin} onPress={signIn}> Already have account <Text style={styles.fottersubText}>Sign In</Text> </Text>
            </View>
        </SafeAreaView>

    );
}

export default Signup