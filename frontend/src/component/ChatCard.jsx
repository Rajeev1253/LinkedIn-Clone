import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const ChatCard = () => {
  return (
    <Box
      sx={{
        width: "30px",
        height: "91px",
        display: "flex",
        alignItems: "center",
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
            <Typography>Username</Typography>
            <Typography>time</Typography>
          </Stack>
          <Typography>Profession</Typography>
          <Typography>Company Name</Typography>
          <Divider />
        </Stack>
      </Stack>
    </Box>
  );
};

export default ChatCard;
