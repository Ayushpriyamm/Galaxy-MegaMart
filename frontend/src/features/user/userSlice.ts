import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState{
    currentUser: null | {
        id: string,
        userName: string,
        email: string,
        phoneNumber?: number,
        role?: string
    }
}


const initialState:UserState={
    currentUser:null,
}

export const userSlice=createSlice({
    name:'user',
    initialState,
    reducers: {
    setCurrentUser: (state, action: PayloadAction<UserState['currentUser']>) => {
      state.currentUser = action.payload
    },
    clearUser: (state) => {
      state.currentUser = null
    },
  },
})

export const { setCurrentUser, clearUser } = userSlice.actions
export default userSlice.reducer