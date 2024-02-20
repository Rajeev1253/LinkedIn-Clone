import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const backendURL = "http://localhost:8080";

export const fetchPost = createAsyncThunk(
  "post/fetch",
  async (token) => {

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization:token
        },
      };
      const res = await axios.get(
        `${backendURL}/posts`,
        config
      );
      console.log(res);
      return res;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return (error.response.data.message);
      } else {
        return (error.message);
      }
    }
  }
);
