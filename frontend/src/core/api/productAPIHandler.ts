//core/api/productapi/productAPIHandle.ts

import axiosInstance from "./axiosInstance";
import { PRODUCT_ROUTES } from "./apiRoutes";

export const getProductAPI=()=>{
    return axiosInstance.get(PRODUCT_ROUTES.getAllProducts)
}
 export const getFeaturedProduct=()=>{
    return axiosInstance.get(PRODUCT_ROUTES.getFeaturedProducts)
 }