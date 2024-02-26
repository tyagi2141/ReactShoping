import { Image, Pressable, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import React from "react"

const listItem = ({ title, onPress, subtitle ,showSubtitle ,showIcon ,style}) => {



    return (
        <Pressable onPress={onPress} style={[styles.container]}>
            <View style={styles.content} >
                <Text style={styles.title}>{title} </Text>
                {!!showSubtitle ? ( <Text style={[styles.subtitle , style]}>{subtitle} </Text>): null }
            </View>
            {showIcon ? ( <Image style = {styles.image} source={require("../../assets/forware_arrow.png")}/>) : <View/>}
           
        </Pressable>
    )


}

export default React.memo(listItem)