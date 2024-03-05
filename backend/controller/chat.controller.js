import { chatService } from "../service/chat.service.js";
export const createChat = async (req, res) => {
  try {
    const response = await chatService.createChat(req);
    res.status(200).send({
      success: true,
      chat: response,
    });
  } catch (error) {
    console.log(error);
  }
};
