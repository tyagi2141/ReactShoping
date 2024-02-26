import { StyleSheet } from "react-native";
import { colors } from "../../util/colors";


export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        padding: 10,
        width: '100%',
        borderWidth: 1,
        borderColor: colors.disableGrey
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        padding: 10
    },
    textContainer: {
        paddingHorizontal: 20,
        paddingVertical: 5,
        flex:1
    },
    titel: { fontWeight: '400', color: colors.lightGrey }, price: { fontWeight: 'bold', color: colors.black },
    crossImage: {
        width: 30,
        height: 30,
       
        alignItems: 'flex-end'

    }
})