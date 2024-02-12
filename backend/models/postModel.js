import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"userModel"
    },
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }
    })
export const postModel = mongoose.model('post',postSchema);