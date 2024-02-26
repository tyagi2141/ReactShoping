import axios from "axios"
import { userContext } from "../../App";
import { useContext } from "react";


export const base_url = {
    API_BASE_URL : "https://listicle.deegeehub.com/api"

}

export const request = ({url , method ,data}) => {
  return  axios({
        method:method || "get" ,
        url:`${base_url.API_BASE_URL}${url}`,
        data
    })
}


export const addTokenToAxios = (token) => {
    console.log("tokken call....",token)
    axios.defaults.headers.Authorization = token
}