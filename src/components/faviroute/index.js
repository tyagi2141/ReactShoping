import { Image, Pressable, View } from "react-native"
import { Text } from "react-native-paper"
import { styles } from "./styles"
import React from "react"




const FavoriteItem = ({title ,price ,image ,onPress ,icon ,style ,onRemovePress}) => {
    return (
<Pressable onPress={onPress} style = {styles.container}>
    <Image style = {styles.image} source={{uri : image}} />
    <View style = {styles.textContainer}>
        <Text style = {styles.title}>{title}</Text>
        <Text style = {styles.price}>{price}</Text>
    </View>
    <Pressable onPress = {onRemovePress} >
    <Image  style = {[styles.crossImage,style]} source={ icon || require('../../assets/cross.png')}/>

    </Pressable>
</Pressable>
    )
}

export default React.memo(FavoriteItem)