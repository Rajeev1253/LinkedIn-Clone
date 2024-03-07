import { createAsyncThunk } from "@reduxjs/toolkit";
import { ACTION_TYPE } from "./messageType";

export const fetchMessage = createAsyncThunk(
  ACTION_TYPE.FETCH_MESSAGE,
  async ({ chatId, token }) => {
    try {
      const config = {
        headers: {
          Authorization: token,
        },
      };

      const response = await axios();
    } catch (error) {
      console.log(error);
    }
  }
);
