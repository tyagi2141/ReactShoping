import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../util/colors";
const {width} = Dimensions.get('window')

export const styles = StyleSheet.create({
    image: {
        width: (width - 64) / 2,
        height: 235,
        borderRadius:10,
        borderWidth:0.5,borderColor:colors.lightGrey,
        backgroundColor:colors.disableGrey
       
    },
    title: {
        color: colors.grey,
        fontWeight:"500",
        padding:5
    },
    price:{
        color:colors.black,
        fontWeight:'700',
        paddingHorizontal:5
    },
    imageContainer :{
  padding:10
      
    }
});