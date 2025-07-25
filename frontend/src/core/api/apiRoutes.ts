//core/api/apiRoutes.ts

export const API_BASE_URL = "http://localhost:3000";

/* Authentication related routes */
export const AUTH_ROUTES = {
    SIGNUP: "/user/signup",
    SIGNIN: "/user/signin",
    SIGNOUT: "/user/logout",
}

/* Product related routes */
export const PRODUCT_ROUTES = {
    getAllProducts: "/product/all-products",
    createProduct: "/product/create-product",
}