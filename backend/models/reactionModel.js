import mongoose from "mongoose";

const reactionSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'userModel'
    },
    postId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'postModel'
    },
    reaction:{
        type:String,
        enum: ["like","celeberate","support","love","funny"], 
    }
})