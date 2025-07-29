import axiosInstance from "./axiosInstance";
import { CATEGORY_ROUTES } from "./apiRoutes";

export const getAllCategoriesAPI=()=>{
    return axiosInstance.get(CATEGORY_ROUTES.getAllCategories)
}