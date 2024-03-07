import React from "react";
import { io } from "socket.io-client";
import { Avatar, Button, Divider, Stack, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Textarea from "@mui/joy/Textarea";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import gif from "../assets/gif.svg";
import smile from "../assets/smile.svg";
import paper from "../assets/paper.svg";
import gallery from "../assets/gallery.svg";
import Chat from "./Chat";
import Advertisement from "./Advertisement";
import Footer from "./Footer";

const MessageBox = ({ currentChat }) => {
  const socket = io.connect("http://localhost:8080");
  const chat = currentChat;

  return (
    <Stack direction={"row"}>
      <Stack>
        <Stack
          width="469px"
          direction="row"
          justifyContent="space-between"
          alignItems={"center"}
          height="47px"
          sx={{
            bgcolor: "white",
            borderWidth: "thin",
            borderRadius: "4px",
            mr: "5px",
          }}
        >
          <Typography fontSize="14px" sx={{ mb: 3, p: 1 }}>
            {}
          </Typography>
          <Stack direction="row" gap="10px" paddingRight="10px" color="gray">
            <MoreHorizIcon />
            <StarBorderOutlinedIcon />
          </Stack>
        </Stack>
        <Stack
          height={"62.5vh"}
          width={"469px"}
          bgcolor={"white"}
          overflow="auto"
        >
          <Avatar sx={{ width: "72px", height: "72px", ml: 1, mt: 2 }}></Avatar>
          <Typography sx={{ pl: 3, pt: 1 }}>
            {currentChat && currentChat.user[0].firstName}
          </Typography>
          <Typography fontSize={"14px"} sx={{ pl: 3, pt: 1 }}>
            Skills
          </Typography>
          <Divider />
          <Chat />
        </Stack>
        <Stack
          width={"469px"}
          height={"121px"}
          bgcolor={"white"}
          borderTop={"1px solid gray"}
        >
          <Textarea
            placeholder="Write a message"
            minRows={3}
            sx={{
              width: "400px",
              height: "100px",
              bgcolor: "#f4f2ee",
              mt: 1,
              ml: 1,
              mr: 3,
            }}
          ></Textarea>
        </Stack>
        <Divider />
        <Stack width={"469px"} height={"12vh"} bgcolor={"white"} color={"gray"}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Stack direction={"row"} gap={"10px"} sx={{ m: 2, color: "gray" }}>
              <img
                src={gallery}
                alt="gallery"
                style={{ width: "30px", height: "24px", color: "gray" }}
              ></img>

              <img
                src={paper}
                alt="paper"
                style={{ width: "30px", height: "24px" }}
              ></img>

              <img
                src={gif}
                alt="gif"
                style={{ width: "30px", height: "24px" }}
              ></img>

              <img
                src={smile}
                alt="smile"
                style={{ width: "30px", height: "24px" }}
              ></img>
            </Stack>
            <Stack direction={"row"} alignItems={"center"}>
              <Button sx={{ color: "gray" }}>Send</Button>
              <MoreHorizIcon />
            </Stack>
          </Stack>
        </Stack>
        <Stack></Stack>
      </Stack>
      <Stack sx={{ ml: 1 }}>
        <Advertisement />
        <Stack sx={{ mt: 3 }}>
          <Footer />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MessageBox;
