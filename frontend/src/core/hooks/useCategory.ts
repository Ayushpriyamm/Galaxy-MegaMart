import { useQuery } from "@tanstack/react-query";
import { getAllCategoriesAPI } from "../api/categoryAPIHandler";

export const useGetAllCategories=()=>{
    return useQuery({
        queryKey:['Get-All-Categories'],
        queryFn:getAllCategoriesAPI
    })
}