import { StyleSheet } from "react-native";
import { colors } from "../../../util/colors";

export const styles = StyleSheet.create({

    mainContainer: {
        flex: 1
    },
    contaainer: {
        padding: 4,
        flexDirection: 'column',
        marginVertical: 10,
        flex: 1
    },
    subContainer: {


    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        padding: 10
    },
    email: {
        fontSize: 14,
        color: colors.grey,
        padding: 10
    },
    button: {
        marginHorizontal: 20
    }, 
    item: {
        padding: 0
    }, 
    userInfo: {
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingHorizontal:10
    }, 
    editImage: {
        width: 22,
        height: 24
    },
    saveButton:{
       marginHorizontal:10
       , marginTop:12
    },


//new

container: {
    padding: 24,
},
item: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginVertical: 8,
},
sectionTitle: {
    fontWeight: '500',
    fontSize: 16,
    color: colors.grey,
    marginBottom: 16,
},
sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
},
icon: {
    width: 24,
    height: 24,
},
button: {
    paddingVertical: 12,
    marginTop: 16,
}



});