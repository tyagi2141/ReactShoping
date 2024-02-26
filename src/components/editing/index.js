import {  Text, TextInput, View } from "react-native"
import { styles } from "./styles"
import React from "react"

const EditProfile = ({ title, value ,onChangeText ,editable }) => {



    return (
        <View  style={styles.container}>
                <Text style={styles.title}>{title} </Text>
             <TextInput value={value} onChangeText={onChangeText} editable = {editable} style={styles.subtitle}> </TextInput>
           
        </View>
    )


}

export default React.memo(EditProfile)