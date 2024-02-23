import { createAsyncThunk } from "@reduxjs/toolkit";
import { ACTION_TYPE } from "./commentActionType";
import { create } from "../../services/comment.service";

export const createComment = createAsyncThunk(
    ACTION_TYPE.ADD_COMMENT,
    async({userId,postId,body},{getState})=>{
        try{
            let state = getState()
            const config={
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":state.auth.token
                },
            };
            const res = await create({userId,postId,body},config)
            return res
            
        }catch(error){
            if (error.response && error.response.data.message) {
                return error.response.data.message;
              } else {
                return error.message;
              }

        }
    }
)
export const fetchComment = createAsyncThunk(
    ACTION_TYPE.FETCH_COMMENT,
    async({userId,postId,body},{getState})=>{
        try{
            let state = getState()
            const config={
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":state.auth.token
                },
            };
            const res = await fetch({userId,postId,body},config)
            return res
            
        }catch(error){
            if (error.response && error.response.data.message) {
                return error.response.data.message;
              } else {
                return error.message;
              }

        }
    }
)
