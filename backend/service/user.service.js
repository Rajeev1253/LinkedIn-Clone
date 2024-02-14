import { hashPassword, comparePassword } from "../helper/auth.helper";
import JWT from "jsonwebtoken";
import { userModel } from "../models/userModel";
export const registerController = async (payload) => {
  try {
    const { username, email, password } = payload.body;
    if (!username) {
      return res.send({ error: "Name is required" });
    }
    if (!email) {
      return res.send({ error: "email is required" });
    }
    if (!password) {
      return res.send({ error: "password is required" });
    }
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      throw Object.assign(new Error(), {
        name: "CONFLICT",
        message: "User Already exists",
      });
    }
    //register user
    const hashed_password = await hashPassword(password);
    //save password
    const user = await new userModel({
      username,
      email,
      password: hashed_password,
    }).save();
    return { user };
  } catch (error) {
    throw error;
  }
};

export const loginController = async (payload) => {
  try {
    const { email, password } = payload.body;

    if (!email || !password) {
      res.status(404).send({
        success: false,
        message: `Invalid email or password`,
      });
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      res.status(404).send({
        success: false,
        message: `Email is not registered`,
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      res.status(200).send({
        success: false,
        message: `Invalid password`,
      });
    }

    //token
    const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: `Login Sucessfully`,
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    throw error;
  }
};
