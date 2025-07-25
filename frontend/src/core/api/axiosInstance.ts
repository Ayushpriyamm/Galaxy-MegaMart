//core/api/axiosInstance.ts
import axios from 'axios'
import { API_BASE_URL } from './apiRoutes'

const axiosInstance=axios.create({
    baseURL:API_BASE_URL,
    withCredentials:true,
    headers:{
        "Content-Type":"application/json",
    },
});

export default axiosInstance