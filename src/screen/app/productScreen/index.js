import React from "react"
import { Image, Pressable, ScrollView, View } from "react-native"
import { styles } from "./styles"
import { Text } from "react-native-paper"
import { SafeAreaView } from "react-native-safe-area-context"
import Button from "../../../components/Button"
import ImageCarousel from "../../../components/ImageCarousel"
import { base_url } from "../../../util/request"

const productScreen = ({ navigation, route, onBookmark, onContact }) => {

   

    const product = route.params.product;

   console.log("images...",product)
   if(product.image['filename']){
    urlType = 1
   }else{
    urlType = 0
   }

   console.log("bhjbhhjbjhb",urlType )
    const onBackPress = () => {
        navigation.goBack()
    }

    return (
        <SafeAreaView style={styles.safe}>
            <ScrollView style={styles.container} >
                <View>
                    { product?.images?.length ? 
                    ( <ImageCarousel images={  product.images} />) : ( <Image style={styles.image} source={{ uri: urlType ? (`${base_url.API_BASE_URL}/${product.image.path}`):(product.image)}} /> )}
                    <View style={styles.content}>
                        <Text style={styles.title}>{product.title}</Text>
                        <Text style={styles.price}>{product.price}</Text>
                        <Text style={styles.description}>{product.description}</Text>

                    </View>
                </View>
                <Pressable onPress={onBackPress} style={styles.backContainer}>
                    <Image style={styles.backIcon} source={require('../../../assets/back.png')} />
                </Pressable>
            </ScrollView>
            <View style={styles.footer}>
                <Pressable onPress={onBookmark} style={styles.bookmarkContainer}>
                    <Image style={styles.bookmarkIcon} source={product.title ? require('../../../assets/person.png') : require('../../../assets/person_select.png')} />
                </Pressable>
                <Button style={styles.buttonStyle} onPress={onContact} title="Contact Seller" />
            </View>

        </SafeAreaView>
    );
}

export default React.memo(productScreen)