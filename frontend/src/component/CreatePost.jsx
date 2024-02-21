import React, { useState } from "react";
import star from "../assets/star.png";
import ImageIcon from "@mui/icons-material/Image";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Input,
  Stack,
  Avatar,
  IconButton,
  Typography,
} from "@mui/material";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../features/post/postAction";
const CreatePost = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.userToken); 
  const userId = useSelector((state)=>state.auth.userInfo._id)
  const handleSubmit = ()=>{
    dispatch(createPost(token,userId,title))
    setOpen(false)
  }

  return (
    <>
      <Button
        sx={{
          textTransform: "capitalize",
          border: "1px solid black",
          borderRadius:"15px",
          width: "357px",
        }}
        onClick={() => setOpen(true)}
      >
        <Typography fontSize="14px" color="black">
          Start a post,try writing with AI
        </Typography>
      </Button>
      <Dialog
        PaperProps={{
          sx: {
            width: "100%",
            height: "60%",
          },
        }}
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">
          <Stack>
            <Avatar sx={{ width: "56px", height: "56px" }} />
          </Stack>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">
            <Input
              disableUnderline="true"
              multiline="true"
              value={title}
              onChange={(e)=>{setTitle(e.target.value)}}
              placeholder="What do you want to talk about"
              sx={{ width: "100%", height: "%" }}
            />
          </DialogContentText>
        </DialogContent>
        <Stack
          display="flex"
          justifyContent="flex-start"
          direction="row"
          sx={{ ml: 3 }}
        >
          <IconButton>
            <SentimentSatisfiedAltOutlinedIcon />
          </IconButton>
        </Stack>
        <Stack
          spacing={0}
          sx={{ m: 3 }}
          flexDirection="row"
          alignItems="center"
        >
          <Button
            variant="outlined"
            sx={{
              width: "170px",
              height: "30px",
              paddingtop: "20px",
              fontSize: "12px",
              borderRadius: "15px",
              color: "black",
              border: "1px solid black",
            }}
            startIcon={<img src={star} />}
          >
            Rewrite with AI
          </Button>
          <IconButton>
            <ImageIcon sx={{ ml: 2 }} />
          </IconButton>
          <IconButton>
            <CalendarMonthIcon />
          </IconButton>
          <IconButton>
            <Brightness7Icon />
          </IconButton>
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        </Stack>
        <hr />
        <Stack>
          <DialogActions>
            <Button
              sx={{ color: "black" }}
              startIcon={<AccessTimeRoundedIcon sx={{ color: "black" }} />}
              autoFocus
              variant="filled"
              onClick={handleSubmit}

            >
              Post
            </Button>
          </DialogActions>
        </Stack>
      </Dialog>
    </>
  );
};

export default CreatePost;
