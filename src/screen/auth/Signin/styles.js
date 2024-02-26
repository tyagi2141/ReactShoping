import { StyleSheet } from "react-native";
import { colors } from "../../../util/colors";

export const styles = StyleSheet.create({

    contaainer:{
        padding:24
    },
    agreeRow:{
       flexDirection:'row',
       alignItems:'center',
       marginTop:20

    },
    agreeText:{
        color:colors.blue,
        fontWeight:'500',
        marginStart:30
    },
    signupbtn:{
        marginVertical:20,
        colors:colors.orange
    },
    fottersignin:{
        flexDirection:'row',
        color:colors.blue,
        textAlign:'center',
        marginVertical:20
    },
    fottersubText:{
        color:colors.blue,
        fontWeight:'bold'
    }
});