import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../util/colors";

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    safe: {
       flexDirection:'column',
        borderColor:colors.orange
    },
    footer: {
        padding: 24,
        flexDirection: 'row',
        alignItems: 'center',
    },
    container: {
    },
    image: {
        width: '100%',
        height: height * 0.45,
        backgroundColor: colors.lightGrey,
    },
    content: {
        backgroundColor: colors.white,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        marginTop: -40,
        paddingHorizontal: 24,
    },
    title: {
        marginTop: 40,
        fontSize: 24,
        fontWeight: '500',
    },
    price: {
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 8,
    },
    description: {
        color: colors.textGrey,
        fontWeight: '300',
        marginVertical: 8,
    },
    bookmarkContainer: {
        backgroundColor: colors.lightGrey,
        padding: 18,
        borderRadius: 8,
        marginRight: 16,
    },
    bookmarkIcon: {
        width: 24,
        height: 24,
    },
    backContainer: {
        backgroundColor: colors.white,
        padding: 10,
        margin: 24,
        borderRadius: 8,
        marginRight: 16,
        position: 'absolute',
    },
    backIcon: {
        width: 20,
        height: 20,
    },buttonStyle:{
        flex:1
    }
})
/*
import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../util/colors";
const {height} = Dimensions.get('window')

export const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: height * 0.45,
       
    },
    title: {
        color: colors.black,
        fontWeight:"500",
        padding:5,
        fontSize:24,
        marginVertical:10

    },
    price:{
        color:colors.black,
        fontWeight:'bold',
        paddingHorizontal:5,
        marginVertical:10,
        fontSize:24
    },
    Container :{
        flex:1
    },
    bottomsheet:{
        backgroundColor:colors.white,
        borderTopLeftRadius:15,
        borderTopRightRadius:15,marginTop:-40,
        paddingHorizontal:20
    },
    disciptions:{
        fontSize:14,
        fontWeight:'300',
        color:colors.grey,
        marginVertical:10
    },
    fotter:{
        flexDirection:'row',
        alignItems: 'center',
        padding:24,
    }
}); 

*/