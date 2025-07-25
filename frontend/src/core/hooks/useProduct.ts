import { useQuery } from "@tanstack/react-query";
import { getProductAPI } from "../api/productAPIHandler";

export const useGetAllProducts=()=>{
    return useQuery({
        queryKey:['get-all-products'],
        queryFn:getProductAPI   
    })
}