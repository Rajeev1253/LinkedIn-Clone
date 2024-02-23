import { createAsyncThunk } from "@reduxjs/toolkit";
import { ACTION_TYPE } from "./commentActionType";
import { create } from "../../services/comment.service";

export const createComment = createAsyncThunk(
    ACTION_TYPE.ADD_COMMENT,
    async({userId,postId,body},{rejectWithValue})=>{
        try{
            const config={
                headers:{
                    "Content-Type":"application/json",
                },
            };
            const res = await create({userId,postId,body})
            return res
            
        }catch(error){
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
              } else {
                return rejectWithValue(error.message);
              }

        }
    }
)
export const fetchComment = createAsyncThunk(
    ACTION_TYPE.FETCH_COMMENT,
    async({userId,postId,body},{rejectWithValue})=>{
        try{
            const config={
                headers:{
                    "Content-Type":"application/json",
                },
            };
            const res = await create({userId,postId,body})
            return res
            
        }catch(error){
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
              } else {
                return rejectWithValue(error.message);
              }

        }
    }
)
