import React, { useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, View } from "react-native";
import { styles } from "./styles";
import Header from "../../../components/header";
import { categories } from "../../../data/categories";
import CategoriesBox from "../../../components/categoriesbox";
import ProductHomeItem from "../../../components/producthomeitem";
import { products } from "../../../data/products";
import { serviceContext, userContext } from "../../../../App";
import { getServices } from "../../../util/backendCode";
import {client} from '../../../util/request'


const HomeScreen = ({ navigation }) => {

    const {service ,setService} = useContext(serviceContext);

    const [selectedCategory, setSelecteCategory] = useState();
    const [filterProduct, setFilterProduct] = useState(service); //product
   //const [filterProduct, setFilterProduct] = useState(products); //product

    const [keyword, setKeyword] = useState()

    const {user} = useContext(userContext)


    useEffect(() => {
        (async () => {
const data = await getServices();

//const request = client(user);

//c//onst response = await request.get('/services');
  console.log("get all service" , data)

setService(data)

        })()
    },[])

   useEffect(() => {
        if (selectedCategory && !keyword) {
            const updateProduct = service?.filter((product) => String(product?.category) === String(selectedCategory));
            setFilterProduct(updateProduct);
        } else if (selectedCategory && keyword) {
            console.log("jhbjhbhjb", keyword)
            const updateProduct = service?.filter((product) => String(product.category) === String(selectedCategory) && product?.title?.toLowerCase().includes(keyword.toLowerCase()));
            setFilterProduct(updateProduct);
        } else if (!selectedCategory && keyword) {
            console.log("lkjklkjlk", keyword)
            const updateProduct = service?.filter((product) => product?.title?.toLowerCase().includes(keyword.toLowerCase()));
            setFilterProduct(updateProduct);
        }
        else if (!selectedCategory && !keyword) {
            setFilterProduct(service) //product
        }
    }, [selectedCategory, keyword,service])

    

   /* useEffect(() => {
        if (selectedCategory && !keyword) {
            const updateProduct = products?.filter((product) => product?.category === selectedCategory);
            setFilterProduct(updateProduct);
        } else if (selectedCategory && keyword) {
            console.log("jhbjhbhjb", keyword)
            const updateProduct = products?.filter((product) => product.category === selectedCategory && product?.title?.toLowerCase().includes(keyword.toLowerCase()));
            setFilterProduct(updateProduct);
        } else if (!selectedCategory && keyword) {
            console.log("lkjklkjlk", keyword)
            const updateProduct = products?.filter((product) => product?.title?.toLowerCase().includes(keyword.toLowerCase()));
            setFilterProduct(updateProduct);
        }
        else if (!selectedCategory && !keyword) {
            setFilterProduct(products) //product
        }
    }, [selectedCategory, keyword,products])

*/



    const renderCategories = ({ item, index }) => {
        return (
            <CategoriesBox onPress={() => setSelecteCategory(item?.id)}
                isSelected={item?.id === selectedCategory}
                isFirst={index === 0}
                title={item?.title}
                image={item?.image} />)
    }


    const renderProductItem = ({ item, index }) => {
        const productClick = (product) => {
            navigation.navigate("productScreen", {product})
        }

        return (<ProductHomeItem onPress={() => productClick(item)} title={item.title} price={item.price} image={item.image}  />)

       // return ( <ProductHomeItem onPress={() => productClick(item)} {...item} />)
        // return (<ProductHomeItem {...item} />)
    }




    return (
        <SafeAreaView>
            <Header keyword={keyword} onSearch={setKeyword} showSearch title="All item search" />
            <FlatList
                showsHorizontalScrollIndicator={false}
                style={styles.list}
                horizontal
                data={categories}
                renderItem={renderCategories}
                keyExtractor={(item, index) => String(index)}
            />

            <FlatList ListFooterComponent={<View style={{ height: 200 }} />}
                style={styles.prodctFlatContainer} showsVerticalScrollIndicator={false}
                numColumns={2} data={filterProduct} renderItem={renderProductItem}
                keyExtractor={(item, index) => String(index)} />
        </SafeAreaView>

    );
}

export default React.memo(HomeScreen)