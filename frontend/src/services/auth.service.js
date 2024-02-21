import { axiosApi } from "../config";
const PATHS = {
    signup: '/users/login',
    signin: '/users/register'
  }
  
  export const registerUser= async (payload) => await axiosApi.post(PATHS.signup, payload)
  export const loginUser = async (payload) => await axiosApi.post(PATHS.signin, payload)