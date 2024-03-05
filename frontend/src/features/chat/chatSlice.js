import { createSlice } from "@reduxjs/toolkit"
import { createChat, fetchChat } from "./chatAction"

const initalState = {
    chats:[],
    loading:true,
    error:null
}

export const chatSlice = createSlice({
    name:"chats",
    initialState:initalState,
    reducers:{},
    extraReducers:(binders)=>{
        binders.addCase(fetchChat.pending,(state)=>{
            state.loading=true;
            
        })
        binders.addCase(fetchChat.fulfilled,(state,action)=>{
            state.loading=false;
            state.chats = action.payload.data.chats;
        })
        binders.addCase(fetchChat.rejected,(state,action)=>{
            state.loading=true;
            state.error = action.error.message;
        })
        binders.addCase(createChat.pending,(state)=>{
            state.loading=true;
            
        })
        binders.addCase(createChat.fulfilled,(state,action)=>{
            state.loading=false;
            state.chats = action.payload.data.chats;
        })
        binders.addCase(createChat.rejected,(state,action)=>{
            state.loading=true;
            state.error = action.error.message;
        })
        
    }

})
export default chatSlice.reducer