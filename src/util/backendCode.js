import AsyncStorage from "@react-native-async-storage/async-storage";
import { request } from "./request";

export const login = async (values) => {
    try {

        const response = await request({
            url: '/user/login',
            method: 'post',
            data: values,
        });
        if (response.data.token) {
            console.log("login data",response.data.token)
            await AsyncStorage.setItem('auth_token', response.data.token)
            return response.data.token

        }
    } catch (e) {
        console.log("error in Sign in ",  e.response)
    }
}

    export const SignUp = async (values) => {
    try {
        const response = await request({
            url: '/user/register',
            method: 'post',
            data: values,
        });
        if (response) {
            const {email ,password} = values ;
            console.log("email password ", email + " "+password)
           const loginResponse = await login({email, password})

           return loginResponse
        }
    } catch (e) {
        console.log("error sign up  ", e.response)

    }
} 


export const getProfile = async () => {
    try {
        const response = await request({
            url: '/user/profile',
            method: 'get',
            
        });
        if (response) {

           // console.log("profile response ", response )

           return response.data
        }
    } catch (e) {
        console.log("error profile  ", e.response)

    }
} 

export const updategetProfile = async (values) => {
    try {
        const response = await request({
            url: '/user/profile',
            method: 'patch',
            data:values
            
        });
        if (response) {

            const updateValue = getProfile()
            console.log("update profile response ", response )

           return updateValue;
        }
    } catch (e) {
        console.log("error profile  ", e.response)

    }
} 


export const getServices= async () => {
    try {
        const response = await request({
            url: '/services',
            method: 'get',
            
        });
        if (response) {

            console.log("SERVICE_response ", response )

           return response.data
        }
    } catch (e) {
        console.log("error service Backend ", e.response)

    }
} 


export const addServices= async (values) => {
    try {

        const formData = new FormData();
        const obj = Object.keys(values);

        console.log("objectKeyValue : ",obj)


        obj.forEach(key => {
            formData.append(key ,values[key])
        });


        const response = await request({
            url: '/services',
            method: 'post',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            data:formData
            
        });
        if (response) {

           
            console.log("SERVICE_ADD-response ", response )

            const getservive_value =  getServices();

           return getservive_value;
        }
    } catch (e) {
        console.log("error service ADD Backend ", e)

    }
} 


