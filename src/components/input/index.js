import { Image, Modal, Pressable, Text, TextInput, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import { useState } from "react"

const Input = ({ type, options, lable, placeholder, isPassword, value, onChangeText, style, ...props }) => {

    const [isPasswordVisible, setPasswordVisible] = useState(false)
    const [isPickerModalVisible, setPickerModalVisible] = useState(false);


    const onEyePress = () => {
        setPasswordVisible(!isPasswordVisible)
    }

    const onSelect = (opt) => {
        onChangeText(opt);
        setPickerModalVisible(false);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.lable} >{lable}</Text>
            {type === 'picker' ? (
                <Pressable style={styles.inputcontainer}  onPress={() => setPickerModalVisible(true)} >


                    {value ? (
                        <Text style={[styles.input, style]}>{value?.title}</Text>
                    ) : (
                        <Text style={[styles.placeholder, style]}>{placeholder}</Text>
                    )}

                    <Image style={styles.eye} source={require('../../assets/drop_arrow.png')} />


                </Pressable>
            ) : (
                <View style={styles.inputcontainer}>
                    <TextInput value={value} onChangeText={onChangeText} secureTextEntry={isPassword && !isPasswordVisible} placeholder={placeholder} style={[styles.input, style]} {...props} ></TextInput>

                    {isPassword ? (
                        <Pressable onPress={onEyePress}>
                            <Image style={styles.eye} source={require('../../assets/eye.png')} />
                        </Pressable>
                    ) : null}

                </View>
            )}

            <Modal transparent visible={isPickerModalVisible}>
                <TouchableOpacity activeOpacity={1} onPress={() => setPickerModalVisible(false)} style={styles.modalWrapper}>
                    <TouchableOpacity activeOpacity={1} style={styles.modalContent}>
                        <Text style={styles.headerTitle}>Select options</Text>

                        {options?.map(opt => {
                            if (!opt?.id) {
                                return null;
                            }
                            const selected = value?.id === opt?.id;
                            return (
                                <Text onPress={() => onSelect(opt)} style={[styles.optionText, selected ? styles.selectedOption : {}]} key={opt?.title}>{opt?.title}</Text>
                            )
                        })}
                    </TouchableOpacity>
                </TouchableOpacity>
            </Modal>
        </View>
    )
}
export default Input;