import { useQuery } from "@tanstack/react-query";
import { getFeaturedProduct, getProductAPI } from "../api/productAPIHandler";

export const useGetAllProducts=()=>{
    return useQuery({
        queryKey:['get-all-products'],
        queryFn:getProductAPI   
    })
}

export const useGetFeaturedProduct=()=>{
    return useQuery({
        queryKey:['get-featured-products'],
        queryFn:getFeaturedProduct
    })
}