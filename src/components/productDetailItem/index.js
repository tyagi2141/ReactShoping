import { Image, Pressable, ScrollView, Text, View ,onBookmark,onContact,onBackPress} from "react-native"
import { styles } from "./styles"
import React from "react";
import Button from "../Button";
import { SafeAreaView } from "react-native-safe-area-context";

const ProductDetailItem = ({ title,price, image,discription ,onPress }) => {

   return( 
    <SafeAreaView style ={styles.safe}>
        <ScrollView style = {styles.container} >
            <View>

          
            <Image style = {styles.image} source={{uri : image}} />
            <View style = {styles.content}>
            <Text style = {styles.title}>{title}</Text>
            <Text style = {styles.price}>{price}</Text>
            <Text style = {styles.description}>{discription}</Text>
           
            </View>
            </View>
            <Pressable onPress={onBackPress} style={styles.backContainer}>
                    <Image style={styles.backIcon} source={require('../../assets/back.png')} />
                </Pressable>
        </ScrollView>
        <View style={styles.footer}>
                <Pressable onPress={onBookmark} style={styles.bookmarkContainer}>
                    <Image style={styles.bookmarkIcon} source={!title ? require('../../assets/person.png') : require('../../assets/person_select.png')} />
                </Pressable>
                <Button style={styles.buttonStyle} onPress={onContact} title="Contact Seller" />
            </View>

        </SafeAreaView>
   );

}

export default React.memo(ProductDetailItem);