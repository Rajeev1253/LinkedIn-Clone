// import { userModel } from "../models/userModel.js";
// import JWT from "jsonwebtoken";
// import { hashPassword, comparePassword } from "../helper/auth.helper.js";

const handle_error = (res, error) => {
  if (error.name === "CONFLICT") {
    return res.status(409).send({
      success: false,
      message: error.message,
    });
  }
};
export const registerController = async (req, res) => {
  try {
    const response = await user_service.registerController(req);
    res.status(201).send({
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
    const res = await user_service.loginController(req);
    res.status(200).send({
      success: true,
      message: `Login Sucessfully`,
      user: response.user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `error in Login `,
      error,
    });
  }
};

// export const loginController = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     console.log(req.body);

//     if (!email || !password) {
//       res.status(404).send({
//         success: false,
//         message: `Invalid email or password`,
//       });
//     }
//     const user = await userModel.findOne({ email });
//     if (!user) {
//       res.status(404).send({
//         success: false,
//         message: `Email is not registered`,
//       });
//     }
//     const match = await comparePassword(password, user.password);
//     if (!match) {
//       res.status(200).send({
//         success: false,
//         message: `Invalid password`,
//       });
//     }

//     //token
//     const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
//       expiresIn: "7d",
//     });
//     res.status(200).send({
//       success: true,
//       message: `Login Sucessfully`,
//       user: {
//         name: user.name,
//         email: user.email,
//         role: user.role,
//       },
//       token,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       success: false,
//       message: `error in Login `,
//       error,
//     });
//   }
// };
