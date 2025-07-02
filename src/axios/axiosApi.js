import axios from "axios"

export const axiosInstance = axios.create({
    baseURL : "https://axios-firebase-b2ccc-default-rtdb.firebaseio.com/", 
})