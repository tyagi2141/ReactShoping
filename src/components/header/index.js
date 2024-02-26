import { Image, Pressable, Text, View } from "react-native"
import { styles } from "./styles"
import React, { useState } from "react";
import Input from "../input";

const Header = ({ title, onBackPress, onSearch, onLogout, showLogout, showSearch, showBack ,keyword}) => {

    const [showSearchInput ,setShowSearchInput] = useState(false)
    const onSearchClick = () => {
setShowSearchInput(s => !s)
    }

    return (
  <View>
    <View style = { styles.mainContainer}>
      <View style={styles.container}>
        {showBack ? (<Pressable hitSlop={24} onPress={onBackPress}>
            <Image style={styles.icon} source={require('../../assets/back.png')} />
        </Pressable>) : showSearch ? (<Pressable hitSlop={24} onPress={onSearchClick}>
            <Image style={styles.icon} source={require('../../assets/search.png')} />
        </Pressable>) : <View style={styles.space} />
        }
        <Text style={styles.title}>{title}</Text>
        {showLogout ? (<Pressable hitSlop={24} onPress={onLogout}>
            <Image style={styles.icon} source={require('../../assets/logout.png')} />
        </Pressable>) : <View style={styles.space} />}
    </View>

    {showSearchInput ? (<Input value={keyword} onChangeText={onSearch} placeholder={"search here ...."}></Input>):null}
  </View>
  </View>
    );

}

export default React.memo(Header);