import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { colors } from "../../util/colors";


export const styles = StyleSheet.create({

    container: {
        backgroundColor: colors.white,
       padding:8,
       marginVertical: 12,
        borderRadius: 5,
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent:'space-between',
        shadowColor: "#000",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,

    },
    content: {
        flexDirection: 'column',
        flex: 1,
        padding: 5,
    },
    title: {
        color: colors.blue,
        fontSize: 18,
        paddingHorizontal: 10,
        fontWeight: '700'

    }, subtitle: {
        color: colors.grey,
        fontSize: 15,
        marginTop:6,
        paddingHorizontal: 10,

    },
    image: {
        width: 24,
        height: 24,
        
    },
    hideElement:{
        width:0,
        height:0,
        backgroundColor:colors.black
    }
})