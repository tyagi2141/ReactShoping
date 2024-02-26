import { StyleSheet } from "react-native";
import { colors } from "../../util/colors";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    }, image: {
        width: 18,
        height: 18
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
        color: colors.blue,
        paddingHorizontal:20


    }
});