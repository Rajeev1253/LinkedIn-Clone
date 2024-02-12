import { userModel } from "../models/userModel.js"
import  JWT  from "jsonwebtoken";
import { hashPassword,comparePassword } from "../helper/auth.helper.js";

export const registerController = async (req, res) => {
  try {
    const userData = req.body;
    const { name,username, email, address, phone, website, company,password } =
      req.body;
    // const { street, suite, city, Zipcode, geo } = address;
    // // const { lat, lng } = geo;
    // const { CompanyName, catchPhrase, bs } = company;
    const existinguser = await userModel.findOne({ email });
    if (existinguser) {
      res.status(500).send({
        success: false,
        message: `Already registered please log in`,
      });
    }
    const hashedPassword = await hashPassword(password);
    const user = new userModel({
      name,
      email,
      password: hashedPassword,
    }).save();

    res.status(201).send({
      success: true,
      message: `user registered sucessfully`,
      user,
    });

   
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      meessage: `error in registeration`,
      error,
    });
  }
};

export const loginController = async (req, res) => {
    try {
      const { email, password } = req.body;
      console.log(req.body);
  
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
      console.log(error);
      res.status(500).send({
        success: false,
        message: `error in Login `,
        error,
      });
    }
  };
