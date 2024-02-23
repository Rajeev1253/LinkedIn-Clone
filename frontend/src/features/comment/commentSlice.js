import { createSlice } from "@reduxjs/toolkit"

const initalState={
    comment:{},
    isLoading:true,
    error:null,
}

export const commentSlice = createSlice({
    name:'comment',
    initialState:initalState,
    reducers:{},
    extraReducers:(binders)=>{
        binders.addCase(fetchcomment.pending,(state)=>{
            state.isLoading=true
        })
        binders.addCase(fetchcomment.fulfilled,(state,action)=>{
            state.isLoading=false
            state.comment=action.payload
        })
        binders.addCase(fetchcomment.rejected,(state,action)=>{
            state.isLoading=false
            state.error=action.error.message
        })
    }

})
export default commentSlice.reducer
