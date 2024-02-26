import React from 'react';
import { FlatList, ScrollView, Text } from 'react-native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import Faviroute from '../../../components/faviroute';
import { products } from '../../../data/products';
import Header from '../../../components/header';

const MyListing = ({navigation}) => {


    const onBack = () => {
        navigation.goBack()
    }

    const renderFovrite = ({ item, index }) => {

        const onProductPress = () => {
            navigation.navigate("productScreen", {product : item})
        }

        return (<Faviroute style={styles.iconStyle} icon={require('../../../assets/delet.png')} onPress={onProductPress} title={item.title} price={item.price} image={item.image} />)
    }

    return (
        <SafeAreaView>
            <Header title={"MyListing"} showBack onBackPress={onBack}/>
            <FlatList data={products} renderItem={renderFovrite} keyExtractor={(item) => String(item.id)} />

        </SafeAreaView>
    )
}

export default React.memo(MyListing)