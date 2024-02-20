import { userService } from "../service/user.service.js";
import { handle_error } from "../lib/utils.js";
import { response } from "express";

export const registerController = async (req, res) => {
  try {
    const response = await userService.registerController(req);

    console.log(response);

    return res.status(201).send({
      success: true,
      message: "user Register Successfully",
      user: response.user,
    });
  } catch (error) {
    handle_error(res, error);
  }
};

export const loginController = async (req, res) => {
  try {
    console.log("controller", req.body);
    const res = await userService.loginController(req);
    res.status(200).send({
      success: true,
      message: `Login Sucessfully`,
      user: response.user,
      token: response.token,
    });
  } catch (error) {
    handle_error(res, error);
  }
};

const authController = {
  registerController,
  loginController,
};
export default authController;
