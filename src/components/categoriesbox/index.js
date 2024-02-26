import { Image, Pressable, Text, View } from "react-native"
import { styles } from "./styles"
import { colors } from "../../util/colors";
import React from "react";

const CategoriesBox = ({ title, image,onPress , isFirst ,isSelected }) => {
   
   return( 
        <Pressable style ={[styles.imageContainer, isFirst ? {marginLeft:1}:{}]} hitSlop={24} onPress={onPress}>
             <View style = {[styles.container ,isSelected ? {backgroundColor:colors.black}:{}] } >
            <Image style = {styles.image} source={{uri : image}} />
            </View>
        <Text style = {[styles.title , isSelected?{color:colors.blue}:{}]}>{title}</Text>
        </Pressable>
   
   );

}

export default React.memo(CategoriesBox);