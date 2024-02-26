import { StyleSheet } from "react-native";
import { colors } from "../../util/colors";

export const styles = StyleSheet.create({
    container:{},
    lable:{
        color:colors.blue,
        marginVertical:8,
        fontWeight:'500',
        fontSize:15
    },
    inputcontainer:{
        borderWidth:0.5,
        borderRadius:16,
        borderColor:colors.grey,
        flexDirection:'row',
       
        
    },
    input:{
        paddingHorizontal:16,
        paddingVertical:20,
        flex:1,
        alignContent:'center'
       
    },
    eye:{
        width:24,
        height:16,
        marginHorizontal:16,
        marginTop:15,
        alignItems:'center'
    },



    placeholder: {
        paddingHorizontal: 16,
        paddingVertical: 20,
        flex: 1,
        color: colors.lightGrey,
    },
    modalWrapper: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    modalContent: {
        backgroundColor: colors.white,
        borderRadius: 8,
        padding: 16,
        width: '80%',
    },
    headerTitle: {
        marginBottom: 16,
        color: colors.black,
        fontSize: 16,
    },
    optionText: {
        color: colors.black,
        paddingVertical: 4,
        fontSize: 15,
    },
    selectedOption: {
        color: colors.blue,
        fontWeight: 'bold',
    }
})