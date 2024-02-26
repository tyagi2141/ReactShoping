import { StyleSheet } from "react-native";
import { colors } from "../../../util/colors";

export const styles = StyleSheet.create({

    mainContainer :{
        flex:1
      },
       contaainer:{
        padding:4,
        flexDirection:'column',
        marginVertical:20,
        flex:1
    },
    subContainer:{
       
        
    },
    name:{
        fontSize:18,
        fontWeight:'bold',
        marginBottom:10,
        padding:10
    },
    email:{
        fontSize:14,
        color:colors.grey,
        padding:10
    },
    button:{
      marginHorizontal:20
    }
 
});