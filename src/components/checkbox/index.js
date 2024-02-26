import { Image, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import React from "react"


const CheckBox = ({checked, onCheck}) => {
    console.log("check box click")
  return(  <TouchableOpacity activeOpacity={0.6} onPress={() => onCheck(!checked)} style={styles.container}>
        {checked ? (
            <View style = {styles.inneerContainer}>
                <Image style = {styles.checkimage} source={require('../../assets/Check.png')} />
            </View>
        ) : null}

    </TouchableOpacity>
  )
}

export default React.memo(CheckBox);