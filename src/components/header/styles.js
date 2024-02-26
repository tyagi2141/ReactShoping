import { StyleSheet } from "react-native";
import { colors } from "../../util/colors";

export const styles = StyleSheet.create({
    mainContainer:{
        paddingHorizontal:20,
        paddingVertical:10
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        marginHorizontal:15
    }, icon: {
        width: 24,
        height: 24
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.black,
        paddingHorizontal:20
    },
    space:{
        width:24,
        backgroundColor:colors.orange
    }
});