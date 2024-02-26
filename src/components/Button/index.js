import { Pressable, Text, TouchableOpacity } from "react-native"
import { styles } from "./styles"
import React from "react"

const Button = ({ title ,onPress ,style}) => {
   
    

    return (   /* you can click even out side of the element 
        <Pressable hitSlop={20} onPress={handelPress} style={styles.container}> 
            <Text>{title} </Text>
        </Pressable> */

        <TouchableOpacity activeOpacity={0.6} onPress={onPress} style={[styles.container,style]}>
             <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default React.memo(Button)