import React from 'react';
import { Alert, FlatList, ScrollView, Text } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Faviroute from '../../../components/faviroute';
import { products } from '../../../data/products';
import Header from '../../../components/header';

const FavoritesScreen = ({ navigation }) => {



    const renderFovrite = ({ item, index }) => {

        const onProductPress = () => {
            navigation.navigate("productScreen", { product: item })
        }

        const onRemove = () => {
            console.log("yes deleteing...")
            //Add Api to remove 
        }
        const onRemoveClick = () => {
            Alert.alert("Are you sure want to remove the item", '', [{ text: "yes" ,onPress:onRemove}, { text: "cancel" }])
            
        }

        return (<Faviroute onRemovePress={onRemoveClick} onPress={onProductPress} title={item.title} price={item.price} image={item.image} />)
    }

    return (
        <SafeAreaView>
            <Header title={"Favroite"} />
            <FlatList data={products} renderItem={renderFovrite} keyExtractor={(item) => String(item.id)} />

        </SafeAreaView>
    )
}

export default React.memo(FavoritesScreen)