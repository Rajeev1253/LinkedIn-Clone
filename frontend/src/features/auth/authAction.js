import { createAsyncThunk } from "@reduxjs/toolkit";
import { registerUser,loginUser } from "../../services/auth.service";
import { ACTION_TYPE } from "./authActionType";
export const registerUser = createAsyncThunk(
ACTION_TYPE.ADD_USER,
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await registerUser({email,password})
      return res
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      console.log("action", email, password);
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const res = await axios.post(
        `http://localhost:8080/users/login`,
        { email, password },
        config
      );
      console.log("action res", res);
      return res;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
