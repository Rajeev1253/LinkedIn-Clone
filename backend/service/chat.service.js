import { chatModel } from "../models/chatModel.js";
import { userModel } from "../models/userModel.js";

export const createChat = async (req) => {
  const { userId } = req.body;
  console.log(userId)
  if (!userId) {
    throw Object.assign(new Error(), {
      name: "BAD_REQUEST",
      message: "userId is required",
    });
  }
  var isChat = await chatModel
    .find({
      isGroupChat: false,
      $and: [
        { users: { $elemMatch: { $eq: req.user } } },
        { users: { $elemMatch: { $eq: userId } } },
      ],
    })
    .populate("users", "-password")
    .populate("latestMessage");

  isChat = await userModel.populate(isChat, {
    path: "latestMessage.sender",
    select: "firstName Avatar email",
  });
  if (isChat.length > 0) {
    return isChat[0];
  } else {
    var ChatData = {
      chatName: "sender",
      isGroupChat: false,
      users: [req.user._id, userId],
    };
    try {
      const createdChat = await chatModel.create(ChatData);
      const fullChat = await chatModel
        .findOne({ _id: createdChat._id })
        .populate("users", "-password");
      return fullChat;
    } catch (error) {
      throw Object.assign(new Error(), {
        name: "SERVER_ERROR",
        message: "failed to acess chat",
      });
    }
  }
};
export const fetchChat = async(req)=>{
    const result = await chatModel.find({users:{$elemMatch:{$eq: req.user}}})
    .populate("users","-password")
    .populate("groupAdmin","-password")
    .populate("latestMessage")
    .sort({updatedAt:-1 })
    .then(async(results)=>{
      results = await userModel.populate(results,{
        path:"latestMessages.sender",
        select:"firstname avatar email"
      });
      console.log("results",results)
      return results  
    });
    console.log('res', result)
    return result;
   
}
export const createGroupChat = async(req)=>{
  if(!req.body.users || !req.body.name){
    throw Object.assign(new Error(), {
      name: "BAD_REQUEST",
      message: "Group Name and users is requires is required",
    });
    
  }
  var users =JSON.parse(req.body.users);

  if(users.length<2){
    throw Object.assign(new Error(), {
      name: "BAD_REQUEST",
      message: "More than 2 user required to create a group",
    });
  
   
  }
  users.push(req.user )
  try{
    const groupChat = await chatModel.create({
      chatName:req.body.name,
      users:users, 
      isGroupChat:true,
      groupAdmin:req.user
    })
    const fullGroupChat = await chatModel.findOne({_id:groupChat._id})
    .populate("users","-password").populate("groupAdmin","-password");
    return fullGroupChat
  }
  catch(error){
    console.log(error)
  }
  
}
export const chatService = {
  createChat,
  fetchChat,
  createGroupChat
};
