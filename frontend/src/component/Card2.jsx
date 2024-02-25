import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
  Collapse,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import SmsRoundedIcon from "@mui/icons-material/SmsRounded";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import "./Style/card.css";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { useDispatch, useSelector } from "react-redux";
import { createComment, fetchComment } from "../features/comment/commentAction";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(0deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Card2 = ({ post }) => {
  const [expanded, setExpanded] = useState(false);
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  // const post = useSelector((state) => state.post.post);
  // const userId = useSelector((state) => state.auth.userInfo._id);
  // const data = {
  //   userId: userId,
  //   comment: comment,
  // };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleChange = (e) => {
    setComment(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      // console.log("hello", post.data.posts)
      // console.log("post", post._id);

      dispatch(createComment({ postId: post._id, comment: comment }));
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(props);
  return (
    <div className="card">
      <Box width="471px">
        <Card>
          <CardContent>
            <Stack display="flex" direction="row">
              <Avatar>R</Avatar>
              <Typography sx={{ pl: 1 }}>Rajeev Goyal</Typography>
            </Stack>
            <Typography gutterBottom variant="h5" component="div" color="grey">
              {post.tittle}
            </Typography>
          </CardContent>

          <CardMedia
            component="img"
            height="200px"
            image={`http://localhost:8080/${post?.image[0]}`}
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              React
            </Typography>
            <Typography gutterBottom variant="body2" component="div">
              {post.body}
            </Typography>
          </CardContent>
          <CardActions sx={{ color: "gray" }}>
            <Button
              sx={{ color: "gray" }}
              startIcon={
                <ThumbUpAltOutlinedIcon sx={{ color: "gray", ml: 4 }} />
              }
            >
              Like
            </Button>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <Button
                sx={{ color: "gray" }}
                startIcon={<SmsRoundedIcon sx={{ color: "grey", ml: 4 }} />}
              >
                Comment
              </Button>
            </ExpandMore>

            <Button
              sx={{ color: "gray" }}
              startIcon={<PostAddOutlinedIcon sx={{ color: "gray", ml: 3 }} />}
            >
              Repost
            </Button>
            <Button
              sx={{ color: "gray" }}
              startIcon={<SendRoundedIcon sx={{ color: "gray", ml: 4 }} />}
            >
              Send
            </Button>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Stack
                display="flex"
                direction="row"
                alignItems="center"
                justifyContent="center"
              >
                <Box>
                  <Avatar />
                </Box>
                <Box width="396px" height="22px">
                  <TextField
                    sx={{
                      width: "395px",
                      height: "22px",
                      borderRadius: "20px",
                    }}
                    placeholder="Add a comment"
                    value={comment}
                    onChange={handleChange}
                  ></TextField>
                </Box>
              </Stack>
              <Stack display="flex" justifyContent="flex-start">
                <Button onClick={handleSubmit}>Post</Button>
              </Stack>
            </CardContent>
          </Collapse>
        </Card>
      </Box>
    </div>
  );
};

export default Card2;
