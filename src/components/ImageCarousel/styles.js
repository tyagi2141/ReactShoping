import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { colors } from "../../util/colors";

const {height ,width} = Dimensions.get('window')
export const styles = StyleSheet.create({

    imageContainer:{
      width:width,
      height: height * 0.45
    },
    list: {

    },
    pagination: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: 50,
        alignSelf: 'center',
    },
    paginationLine: {
        height: 4,
        width: 20,
        borderRadius: 10,
        backgroundColor: colors.white,
        margin: 5,
    },
    activeLine: {
        backgroundColor: colors.black,
        width: 30,
    }
    
})