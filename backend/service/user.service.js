import { hashPassword, comparePassword } from "../helper/auth.helper.js";
import JWT from "jsonwebtoken";
import { userModel } from "../models/userModel.js";
import { connectionModel } from "../models/connectionModel.js";

const register = async (req) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      throw Object.assign(new Error(), {
        name: "BAD_REQUEST",
        message: "email is required",
      });
    }

    if (!password) {
      throw Object.assign(new Error(), {
        name: "BAD_REQUEST",
        message: "password is required",
      });
    }

    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      throw Object.assign(new Error(), {
        name: "CONFLICT",
        message: "User Already exists",
      });
    }

    const hashed_password = await hashPassword(password);

    const user = await userModel.create({ email, password: hashed_password });

    return { user };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const login = async (payload) => {
  try {
    const { email, password } = payload.body;
    console.log(email, password);
    if (!email || !password) {
      throw Object.assign(new Error(), {
        name: "BAD_REQUEST",
        message: "Email or Password is missing",
      });
    }

    const user = await userModel.findOne({ email });
    // console.log(user);
    if (!user) {
      throw Object.assign(new Error(), {
        name: "BAD_REQUEST",
        message: `Email is not registered`,
      });
    }

    const match = await comparePassword(password, user.password);

    if (!match) {
      throw Object.assign(new Error(), {
        name: "UNAUTHORIZED",
        message: `Password is not correct`,
      });
    }

    const token = JWT.sign({ _id: user._id }, "Zenmonk", {
      expiresIn: "7d",
    });
    console.log(token);
    return { user, token };
  } catch (error) {
    throw error;
  }
};
const getUser = async (req) => {
  const userId = req.user._id;
  console.log("user", userId);
  if (!userId) {
    throw Object.assign(new Error(), {
      name: "BAD_REQUEST",
      message: `User not found`,
    });
  }
  const connection = await connectionModel.find({connectionBy:userId});
  // [{connectionTo}]
  // [connectionTo,connectonTo]
  // CONNECTION -> MAP ->


  const users = await userModel.find({ _id: { $ne: userId } })  
  return users;
};

const updateUser = async (req, res) => {
  const userId = req.user._id;
  const user = await userModel.findById(userId);
  if (user) {
    user.firstName = req.body.firstName || user.firstName;
    user.lastName = req.body.lastName || user.lastName;
    user.additionalName = req.body.additionalName || user.additionalName;
    user.school = req.body.school || user.school
    user.address.country = req.body.country || user.address.country;
    user.address.city = req.body.city || user.address.city;
    user.company.industry = req.body.industry || user.company.industry;
  }
  const updateUser = await user.save();
  return updateUser;
};

export const userService = {
  login,
  register,
  getUser,
  updateUser,
};
