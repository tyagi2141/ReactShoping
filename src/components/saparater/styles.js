import { StyleSheet } from "react-native";
import { colors } from "../../util/colors";

export const styles = StyleSheet.create({
    container: {
       flexDirection:'row',
       alignItems:'center'

    },
    line:{
        height:1,
        backgroundColor:colors.grey,
        flex:1

    },
    text:{
        color:colors.blue,
        marginHorizontal:5,
        fontWeight:'bold'
    }
   
})

