import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const backendURL = "http://localhost:8080"

export const registerUser = createAsyncThunk(
    'auth/register',
    async({email,password},{rejectWithValue})=>{
        try{
            const config={
                headers:{
                    'Content-Type': 'application/json',
                },
            }
            await axios.post(
                `${backendURL}/users/register`,{email,password},config)

        }
        catch(error){
            if(error.response && error.response.data.message){
                return rejectWithValue(error.response.data.message)
            }
            else{
                return rejectWithValue(error.message)
            }

        }
    }
)