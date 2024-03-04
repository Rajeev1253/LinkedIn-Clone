import React from "react";
import {
  Button,
  Divider,
  Input,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Textarea from "@mui/joy/Textarea";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import gif from "../assets/gif.svg";
import smile from "../assets/smile.svg";
import paper from "../assets/paper.svg";
import gallery from "../assets/gallery.svg";

const MessageBox = () => {
  return (
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
          border: "1px solid silver",
          borderRadius: "4px",
          mr: "5px",
        }}
      >
        <Typography fontSize="14px" sx={{ mb: 3, p: 1 }}>
          Username
        </Typography>
        <Stack direction="row" gap="10px" paddingRight="10px" color="gray">
          <MoreHorizIcon />
          <StarBorderOutlinedIcon />
        </Stack>
      </Stack>
      <Stack height={"45vh"} width={"469px"} bgcolor={"white"}></Stack>
      <Stack
        width={"469px"}
        height={"121px"}
        bgcolor={"white"}
        borderTop={"1px solid gray"}
      >
        <Textarea
          placeholder="Write a message"
          minRows={3}
          overflowY="scroll"
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
      <Stack width={"469px"} height={"16vh"} bgcolor={"white"} color={"gray"}>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Stack direction={"row"} gap={"10px"} sx={{ m: 2, color: "gray" }}>
            <img
              src={gallery}
              style={{ width: "30px", height: "24px", color: "gray" }}
            ></img>

            <img src={paper} style={{ width: "30px", height: "24px" }}></img>

            <img src={gif} style={{ width: "30px", height: "24px" }}></img>

            <img src={smile} style={{ width: "30px", height: "24px" }}></img>
          </Stack>
          <Stack direction={"row"} alignItems={"center"}>
            <Button sx={{ color: "gray" }}>Send</Button>
            <MoreHorizIcon />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default MessageBox;
