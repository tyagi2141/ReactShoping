import { StyleSheet } from "react-native";
import { colors } from "../../util/colors";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center',
      padding:10
       

    }, image: {
        width: 32,
        height: 32
    },
    title: {
 
        color: colors.grey,

    },
    imageContainer :{
        backgroundColor:colors.disableGrey,
        padding:8,
        borderRadius:8,
        marginBottom:8
    }
});