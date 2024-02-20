import { createSlice } from "@reduxjs/toolkit";
import { fetchPost } from "./postAction";

const initalList = {
    post:[],
    isLoading:false,
    error:null,
}
const postSlice = createSlice({
    name:'post',
    initialState:initalList,
    reducers:{},
    extraReducers:(builders)=>{
        builders.addCase(fetchPost.pending,(state)=>{
            state.isLoading=true
        })
        builders.addCase(fetchPost.fulfilled,(state,action)=>{
            state.isLoading = false
            state.post = action.payload
        } )
        builders.addCase(fetchPost.rejected,(state,action)=>{
            state.isLoading=false
            state.error=action.error.message

        })
        
    }
})
export default postSlice.reducer