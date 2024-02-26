import { Text } from "react-native-paper";
import  React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Alert, Image, Linking, Pressable, ScrollView, TextInput, View } from "react-native";
import { styles } from "./styles";
import Header from "../../../components/header";
import Listitem from "../../../components/listitem";
import Button from "../../../components/Button";
import EditProfile from '../../../components/editing'
import { profileContext } from "../../../../App";
import { updategetProfile } from "../../../util/backendCode";
import EditableBox from "../../../components/EditBox";

const SettingScreen = ({ navigation }) => {

    const onBackPress = () => {
        navigation.goBack()
    }

    const [editing, setEditing] = useState(false);

    const {profile ,setProfile} = useContext(profileContext)

    const [values, setValues] = useState({_id:profile?._id , fullName: profile?.fullName, email: profile?.email})



    const onChange = (key, value) => {
        setValues(v => ({...v, [key]: value}))
    }

    const onEditingPress = () => {
        setEditing(true)
    }
    
    const onSaveress = () => {
        setEditing(false)
       
    }
    const onItemPress = () => {
        Linking.openURL("https://google.com")
    }


    const onSubmitUpdate = async () => {
        if(!values?.fullName || !values.email){
            Alert.alert("field cannot be empty")
        }

        const response = await updategetProfile(values);

        if(response){
            setEditing(false)
            setProfile(response)
        }

        console.log("setting secreen update " , response);


    }

    return (
       

            <SafeAreaView>
            <Header showBack onBackPress={onBackPress} title="Settings" />
            <ScrollView style={styles.container}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Personal Information</Text>
                    <Pressable onPress={onEditingPress}>
                        <Image style={styles.icon} source={require('../../../assets/edit.png')} />
                    </Pressable>
                </View>
                <EditableBox label="Name" onChangeText={(v) => onChange('fullName', v)} value={values.fullName} editable={editing} />
                <EditableBox label="Email" onChangeText={(v) => onChange('email', v)} value={values.email} editable={editing} />
                {editing ? (
                    <Button style={styles.button} onPress={onSubmitUpdate} title="Save" />
                ) : null}

                <Text style={[styles.sectionTitle, {marginTop: 40}]}>Help Center</Text>
                <Listitem onPress={onItemPress} style={styles.item} title="FAQ" />
                <Listitem onPress={onItemPress} style={styles.item} title="Contact Us" />
                <Listitem onPress={onItemPress} style={styles.item} title="Privacy & Terms" />
            </ScrollView>
        </SafeAreaView>

    

    );
}

export default React.memo(SettingScreen)


/*
<View style={styles.mainContainer}>

<View style={styles.userInfo}>
    <Text>Personal information</Text>
    <Pressable onPress={onEditingPress}>
    <Image style={styles.editImage} source={require('../../../assets/edit.png')}  />
    </Pressable>
</View>

<EditProfile title={"Name"} onChangeText= {(v) => onChange('fullName', v)} value={values.fullName} editable={editing} />
<EditProfile title={"Email"} onChangeValues= {(v) => onChange('email',v)} value={values.email} editable={editing}  />

{editing ? (<Button  style={styles.saveButton} onPress={onSubmitUpdate} title={"save"}/>):null}


<View style={styles.contaainer}>

    <Text style={styles.email}>Help Center</Text>

    <View style={styles.subContainer}>
        <Listitem onPress={onItemPress} style={styles.item} title={"FAQ"} showSubtitle showIcon />
        <Listitem onPress={onItemPress} style={styles.item} title={"Contact Us"} showSubtitle showIcon />
        <Listitem onPress={onItemPress} style={styles.item} title={"Privacy & Term"} showSubtitle showIcon />

    </View>
</View>

</View>

*/
