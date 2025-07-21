import axiosInstance from "./axiosInstance";
import { AUTH_ROUTES } from "./apiRoutes";

export const signinAPI = (
    payload: { email: string, password: string }
) => {
    return axiosInstance.post(AUTH_ROUTES.SIGNIN, payload)
}

export const signupAPI= (
    payload:{userName:string,email:string,phoneNumber:number,password:string}
)=>{
    return axiosInstance.post(AUTH_ROUTES.SIGNUP,payload);
}

export const signoutAPI=()=>{
    return axiosInstance.post(AUTH_ROUTES.SIGNOUT);
}