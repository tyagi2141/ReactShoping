import { StyleSheet } from "react-native";
import { colors } from "../../../util/colors";

export const styles = StyleSheet.create({
    container:{
        padding:20,
        alignItems:'center',
        flexDirection:'column',
        justifyContent:'center',
        alignContent:'center',
        marginLeft:20,
        height:'100%'
        
    }
    ,
    image: {
       width: '100%',
       height: 200,
       resizeMode:'contain',
       
    },
    title:{
        fontSize:30,
        fontWeight:'bold',
        textAlign:'center'
    },
    innertitle:{
        fontSize:30,
        fontWeight:'bold',
        color:colors.orange,
        textAlign:'center',
        textDecorationLine:'underline'
    },
    footerText:{
        color:'#4763AC',
        textAlign:'center',
        fontWeight:'bold',
        marginTop:18,
        fontSize:18
    },
    titleContainer:{
        marginVertical:54
    },
    buttonCont: { width: '100%', flexDirection: 'column',alignItems:'center'},
  })

