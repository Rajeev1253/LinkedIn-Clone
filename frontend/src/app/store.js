import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import postReducer from "../features/post/postSlice";
import commentReducer from "../features/comment/commentSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import connectionReducer from "../features/connection/connectionSlice.js";
import thunk from "redux-thunk"
const persistConfig = {
  key: "root",
  storage,
};
const rootreducer = combineReducers({
  auth: authReducer,
  post: postReducer,
  comment: commentReducer,
  connection:connectionReducer,

});
const persistedReducer = persistReducer(persistConfig, rootreducer);
export const store = configureStore({
  reducer: persistedReducer,
});
export const persistor = persistStore(store);
