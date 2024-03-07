import { Avatar, Box, Button, Divider, Stack, Typography } from "@mui/material";
import React from "react";

const ChatCard = ({ item, currentChat, setCurrentChat }) => {
  console.log("item", item);
  const handleClick = (e, item) => {
    setCurrentChat(item);
  };
  return (
    <Box
      sx={{
        width: "30px",
        height: "91px",
        display: "flex",
        alignItems: "center",
      }}
      onClick={() => {
        setCurrentChat(item);
      }}
    >
      <Stack direction={"row"} alignItems={"center"} sx={{ ml: 2 }}>
        <Stack>
          <Avatar sx={{ width: "52px", height: "52px" }}></Avatar>
        </Stack>
        <Stack sx={{ ml: 1, mb: 1 }}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            width="200px"
          >
            <Typography color={"black"}>
              {item?.user[0]?.firstName || "Linkedin User"}
            </Typography>
            <Typography>time</Typography>
          </Stack>
          <Typography>Profession</Typography>
          <Typography>{item.industry}</Typography>
          <Divider />
        </Stack>
      </Stack>
    </Box>
  );
};

export default ChatCard;
