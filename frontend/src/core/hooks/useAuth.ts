import { useMutation } from "@tanstack/react-query";
import { signinAPI, signoutAPI, signupAPI } from "../api/apiHandler";


export const useSignnin=()=>{
    return useMutation({
        mutationFn:signinAPI,
    });
};

export const useSignup=()=>{
    return useMutation({
        mutationFn:signupAPI
    })
};

export const useSignout=()=>{
    return useMutation({
        mutationFn:signoutAPI
    })
}