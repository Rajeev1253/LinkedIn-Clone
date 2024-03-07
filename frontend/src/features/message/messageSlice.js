import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    messages: [],
    error: null,
  };
  
  export const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
      saveSocket(state, action) {
        console.log("socket ", action.payload);
        state.socket = action.payload;
      },
    },
    extraReducers: (builder) => {
      builder.addCase(fetchMessage.pending, (state, action) => {
        state.isLoading = true;
      });
      builder.addCase(fetchMessage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.messages = action.payload;
      });
      builder.addCase(fetchMessage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
    },
  });
  
  export const { addMessage } = messageSlice.actions;
  export default messageSlice.reducer;
  