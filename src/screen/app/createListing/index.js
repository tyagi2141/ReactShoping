import { ActivityIndicator, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicatorComponent, Image, KeyboardAvoidingView, Pressable, ScrollView, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Header from "../../../components/header";
import React, { useState } from "react";
import { colors } from "../../../util/colors";

import { launchImageLibrary } from 'react-native-image-picker';
import EditProfile from "../../../components/editing";
import Input from "../../../components/input";
import Button from "../../../components/Button";
import { categories } from "../../../data/categories";
import { products } from "../../../data/products";
import { addServices } from "../../../util/backendCode";
import { useContext } from "react";
import { serviceContext } from "../../../../App";


const CreateListing = ({ navigation }) => {


    const [imagePath, setImagePath] = useState([])
    const [loading, setloading] = useState(false)
    const [values, setValues] = useState({})
const {service ,setService} = useContext(serviceContext)

    console.log("values",values)

    const onDelete = (image) => {
        setImagePath((list) => {

            const value = list.filter(img => image.fileName !== img.fileName)
            return value

        })
    }

    const uploadNewImage = async () => {
        setloading(true);
        const result = await launchImageLibrary();

        if (result.assets.length) {
            setImagePath(list => ([...list, ...result.assets]))
            setloading(false)
        }

        // console.log("yes....",result.assets[0].uri +" "+ imagePath);
    }


    const handleChangePhoto = () => {
        launchImageLibrary({ noData: true }, (response) => {
            console.log(response);
            // if (response) {
            //   setPhoto(response);
            // }
        });
    };

    const onBackPress = () => {
        navigation.goBack()
    }


    const onChange = (value, key) => {
        setValues((val) => ({ ...val, [key]: value }));
    }

    const onSubmit = async () => {

const img = imagePath?.length ? imagePath[0] : null
const data = {...values ,category: values.category.id }
if (img) {
    data['image'] = {
        uri: img?.uri,
        name: img?.fileName,
        type: img?.type,
    }
}

        console.log("addingToService",data)
      const response = await addServices(data)

      console.log("responseFromeAdddService" , response)

      setService(response)

    }


    return (
        <SafeAreaView >
            <Header title={"Create New Listing"} showBack onBackPress={onBackPress} />
            <KeyboardAvoidingView behavior="height">

                <ScrollView>
                    <Text style={{ color: colors.blue, paddingHorizontal: 20 }}>Upload photos</Text>
                    <View style={styles.mainContainer}>
                        <View style={styles.imagePickContainer}>


                            <TouchableOpacity disabled={loading} onPress={uploadNewImage} style={styles.imageadd}>
                                <View style={styles.circledot} >

                                    <Text style={styles.addImageButton} >+</Text>
                                </View>

                            </TouchableOpacity>


                            {imagePath.map(image => (
                                <View key={image?.fileName} style={styles.imageContainer}>
                                    <Image style={styles.previewImage} source={{ uri: image?.uri }} />
                                    <Pressable hitSlop={20} onPress={() => onDelete(image)}>
                                        <Image style={styles.delete} source={require('../../../assets/cross.png')} />

                                    </Pressable>

                                </View>


                            ))}
                            {loading ? (<ActivityIndicator />) : null}



                        </View>

                        <Input lable={"Title"} placeholder={"Listing title"} value={values.title} onChangeText={(v) => onChange(v, "title")} />
                        <Input style={styles.dropDown} value={values.category} onChangeText={(v) => onChange(v, 'category')}  lable={"Catogory"} type={"picker"} placeholder={"Select the category"} options={categories} />

                        <Input lable={"Price"} placeholder={"Enter price in USD"} value={String(values.price)} onChangeText={(v) => onChange(v, "price")} keyboardType = "numeric" />
                        <Input style={{ minHeight: 150, padding: 10, }} lable={"description"} placeholder={"Tell us more..."} multiline value={values.description} onChangeText={(v) => onChange(v, "description")} />

                        <Button onPress={onSubmit} style={styles.submit} title={"Submit"} />
                    </View>


                </ScrollView>

            </KeyboardAvoidingView>

        </SafeAreaView>

    );
}

export default React.memo(CreateListing)