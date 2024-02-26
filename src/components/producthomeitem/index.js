import { Image, Pressable, Text, View } from "react-native"
import { styles } from "./styles"
import React from "react";

import API_BASE_URL, { base_url } from '../../util/request';

const loading = require('../../assets/default.png');

/* 

            <Image defaultSource={loading} style = {styles.image} source={{uri :  image}} />

*/

const ProductHomeItem = ({ title,price, image ,onPress }) => {
   return( 
        <Pressable style ={styles.imageContainer} hitSlop={24} onPress={onPress}>
            <Image  style = {styles.image} source={{uri : `${base_url.API_BASE_URL}/${image?.path}`}} /> 
            <Text style = {styles.title}>{title}</Text>
            <Text style = {styles.price}>{price}</Text>
        </Pressable>
   );

}

export default React.memo(ProductHomeItem);