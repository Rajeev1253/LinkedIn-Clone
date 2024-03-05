import { chatModel } from "../models/chatModel.js";
import { userModel } from "../models/userModel.js";

export const createChat = async (paylaod) => {
  const { userId } = req.body;
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
export const chatService = {
  createChat,
};
