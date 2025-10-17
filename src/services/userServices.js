import axios from "axios"
import { BASE_URL } from "../utils/urls"
import { getHeader, getToken } from "../utils/storageHandler"

export const registerAPI = async(data)=>{
    const response = await axios.post(`${BASE_URL}/auth/register`,data)
  
    
    return response.data
}

export const profileAPI = async() =>{
    const token = getToken()
    const response = await axios.get(`${BASE_URL}/profile`,getHeader())

    return response.data
} 