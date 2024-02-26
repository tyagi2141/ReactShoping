import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { colors } from "../../util/colors";


export const styles = StyleSheet.create({

    container:{
        backgroundColor: colors.blue,
        paddingVertical: 20,
        paddingHorizontal: 8,
        borderRadius: 8,
        flex: 0,
        
    },
    title:{
        color: colors.white,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        
    }
})