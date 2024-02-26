import { StyleSheet } from "react-native";
import { colors } from "../../util/colors";

export const styles = StyleSheet.create({
    container: {
        width: 27,
        height: 27,
        borderColor: colors.grey,
        borderRadius: 4,
        borderWidth: 2

    },
    inneerContainer: {
        backgroundColor: colors.grey,
        width: '100%',
        height: '100%'
    }
    ,
    checkimage: {
        width: '100%',
        height: '100%'
    }
})

