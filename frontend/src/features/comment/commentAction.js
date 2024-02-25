import { createAsyncThunk } from "@reduxjs/toolkit";
import { ACTION_TYPE } from "./commentActionType";
import { create } from "../../services/comment.service";

export const createComment = createAsyncThunk(
  ACTION_TYPE.ADD_COMMENT,
  async ({ postId, comment }, { getState }) => {
    console.log("{ postId, comment }: ", { postId, comment });
    try {
      let state = getState();
      console.log("state: ", state.auth.userToken);
      const config = {
        headers: {
          Authorization: state.auth.userToken,
        },
      };
      const res = await create({ postId, comment }, config);
      return res;
    } catch (error) {
      console.log("error: ", error);
      if (error.response && error.response.data.message) {
        return error.response.data.message;
      } else {
        return error.message;
      }
    }
  }
);
export const fetchComment = createAsyncThunk(
  ACTION_TYPE.FETCH_COMMENT,
  async ({ userId, postId, body }, { getState }) => {
    try {
      let state = getState();
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: state.auth.token,
        },
      };
      const res = await fetch({ userId, postId, body }, config);
      return res;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return error.response.data.message;
      } else {
        return error.message;
      }
    }
  }
);
