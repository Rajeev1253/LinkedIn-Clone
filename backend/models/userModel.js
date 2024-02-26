import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
  },
  avatar: {
    public_id: String,
    url: String,
  },
  username: {
    type: String,
    default: "ABCD",
    required: true
  },
  followers: [
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      status: {
        type: String,
        enum: ["pending", "accepted", "rejected"],
        default:"pending"
      }
    },
  ],
  following: [
    {
      userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      status: {
        type: String,
        enum: ["pending", "accepted", "rejected"]
      }
    },
  ],

  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    street: {
      type: String,
      default: "ABC",
      // required:true
    },
    suite: {
      type: String,
      default: "ABC",
      // required:true
    },
    city: {
      type: String,
      default: "ABC",
      // required:true
    },
    zipcode: {
      type: String,
      default: "ABC",
      // required:true
    },
    geo: {
      lat: {
        type: String,
        default: "ABC",
        // required:true
      },
      lng: {
        type: String,
        default: "ABC",
        // requried:true
      },
    },
  },
  phone: {
    type: String,
    default: "ABC",
    // required:true,
  },
  website: {
    type: String,
    default: "ABC",
    // required:true,
  },
  company: {
    CompanyName: {
      type: String,
      default: "ABC",
      // required:true
    },
    catchPhrase: {
      type: String,
      default: "ABC",
      // required:true,
    },
    bs: {
      type: String,
      default: "ABC",
      // required:true,
    },
  },
  password: {
    type: String,
    required: true,
  },
});
export const userModel = mongoose.model("user", userSchema);
