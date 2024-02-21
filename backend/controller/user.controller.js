import { userService } from "../service/user.service.js";
import { errorHandler } from "../lib/utils.js";

export const register = async (req, res) => {
  try {
    const response = await userService.register(req);

    return res.status(201).send({
      success: true,
      message: "user Register Successfully",
      user: response.user,
    });
  } catch (error) {
    errorHandler(res, error);
  }
};

export const login = async (req, res) => {
  try {
    const response = await userService.login(req);
    return res.status(200).send({
      success: true,
      message: `Login Sucessfully`,
      user: response.user,
      token: response.token,
    });
  } catch (error) {
    errorHandler(res, error);
  }
};

const userController = {
  register,
  login,
};

export default userController;
