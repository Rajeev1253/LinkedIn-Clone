import { hashPassword, comparePassword } from "../helper/auth.helper.js";
import JWT from "jsonwebtoken";
import { userModel } from "../models/userModel.js";

// export const registerController = async (payload) => {
//   try {
//     const existingUser = await userModel.findOne({ email });
//     if (existingUser) {
//       throw Object.assign(new Error(), {
//         name: "CONFLICT",
//         message: "User Already exists",
//       });
//     }
//     //register user
//     const hashed_password = await hashPassword(password);
//     //save password
//     const user = await new userModel({
//       username,
//       email,
//       password: hashed_password,
//     }).save();
//     return { user };
//   } catch (error) {
//     throw error;
//   }
// };
const registerController = async (payload) => {
  try {
      const { username, email, password } = payload.body      
      if (!username) {
          return res.send({ error: 'Name is required' })
      }
      if (!email) {
          return res.send({ error: 'email is required' })
      }
      if (!password) {
          return res.send({ error: 'password is required' })
      }
     
      const existingUser = await userModel.findOne({ email });

      if (existingUser) {
          throw Object.assign(new Error(), {name:"CONFLICT", message: 'User Already exists'});
      }
      //register user
      const hashed_password = await hashPassword(password);
      //save password
      const user = await userModel.create({username,email,password:hashed_password});
      return {user};
  } catch(error) {
    console.log(error)
      throw error;
  }
}

 const loginController = async (payload) => {
  try {
    const { email, password } = payload.body;

    if (!email || !password) {
      throw Object.assign(new Error(),{
        name: "BAD_REQUEST",
        message: "Email or Password is missing"
      })
     
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      throw Object.assign(new Error(),{
        name: "BAD_REQUEST",
        message:`Email is not registered`

      })
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
    payload.res.status(200).send({
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

export const userService ={
  loginController,
  registerController,
}