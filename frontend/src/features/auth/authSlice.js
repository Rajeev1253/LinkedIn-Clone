import { createSlice } from "@reduxjs/toolkit"
import { registerUser } from "./authAction"
const initalState ={
    loading:false,
    userInfo:{},
    userToken:null,
    error:null,
    success:false 
}

const authSlice = createSlice({
    name:'auth',
    initialState:initalState,
    reducers:{},
    extraReducers:(builder)=>{
        //register user
        builder.addCase(registerUser.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(registerUser.fulfilled,(state,action)=>{
            state.loading=false
            state.userInfo=action.payload.user
        })
        builder.addCase(registerUser.rejected,(state,action)=>{
            state.loading=false
            state.error=action.error.message
        })


    }

})  

export default authSlice.reducer