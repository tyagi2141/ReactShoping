import { StyleSheet } from "react-native";
import { colors } from "../../../util/colors";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    padding:10,

  },
  imagePickContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap:'wrap',
  },
  imageadd: {
    width: 100,
    height: 100,
    borderRadius: 10,
    padding:10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.black,
    borderWidth: 1, borderStyle: 'dotted',
    alignContent: 'center',
    flexDirection:'row',
    margin:5,


  }, addImageButton: {
    fontSize: 24,
    color: colors.disableGrey,
   
    

  },
  previewImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
   margin:5,
    flexDirection:'row'
  

  },
  circledot: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: colors.lightGrey,
     borderRadius: 20

  },imageContainer:{
    flexDirection:'row'
  },
  delete:{
    width:30,height:30,
    marginLeft:-20,
    marginTop:-10
  } , submit :{
    marginVertical:20,
    marginBottom:60

  },dropDown:{
    color:colors.lightGrey
  }

});