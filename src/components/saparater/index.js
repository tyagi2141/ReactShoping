import { Image, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"


const Seperator = ({lablel}) => {
  return(  <View style ={styles.container}>
    <View style = {styles.line}></View>
    <Text style = {styles.text}>{lablel}</Text>
    <View style = {styles.line}></View>
  </View>
  )
}

export default Seperator;