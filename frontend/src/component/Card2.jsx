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
import { ReactionBarSelector } from "@charkour/react-reactions";
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
import likeicon from "../assets/Like.svg";
import commenticon from "../assets/Comment.svg";
import reposticon from "../assets/Repost.svg";
import shareicon from "../assets/Share.svg";

import CommentCard from "./CommentCard";
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
  const [showEmojis, setShowEmojis] = useState(false);
  const [page, setPage] = useState(0);

  const dispatch = useDispatch();

  const comments = useSelector((state) => state.comment.comment[post._id]);
  console.log("comments: ", comments);

  // const post = useSelector((state) => state.post.post);
  // const userId = useSelector((state) => state.auth.userInfo._id);
  // const data = {
  //   userId: userId,
  //   comment: comment,
  // };
  console.log("comments: ", comments);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleChange = (e) => {
    setComment(e.target.value);
  };
  const handleEmojis = () => {
    setShowEmojis(true);
    return <ReactionBarSelector />;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      // console.log("hello", post.data.posts)
      // console.log("post", post._id);

      dispatch(createComment({ postId: post._id, comment: comment }));
      dispatch(fetchComment({ postId: post._id }));
    } catch (error) {
      console.log(error);
    }
  };
  const handleComment = (e) => {
    e.preventDefault();
    try {
      dispatch(fetchComment({ postId: post._id }));
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(props);
  return (
    <div className="card">
      <Box width="555px">
        <Card>
          <CardContent>
            <Stack display="flex" direction="row">
              <Avatar>{post ? post.userId.Avatar : "R"}</Avatar>
              <Typography sx={{ pl: 1 }}>
                {post.userId.firstName} {post.userId.lastName}
              </Typography>
              <Typography sx={{ pl: 1 }}> </Typography>
            </Stack>
            <Typography
              gutterBottom
              fontSize="14px"
              paddingTop="12px"
              paddingLeft="5px"
              component="div"
              color="grey"
            >
              {post.title}
            </Typography>
          </CardContent>

          <CardMedia
            component="img"
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
            <Stack direction="row" gap={4} color={"gray"}>
              <Button
                sx={{ color: "gray", textTransform: "capitalize" }}
                startIcon={<img src={likeicon}></img>}
              >
                Like
                {showEmojis}
              </Button>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <Button
                  sx={{
                    color: "gray",
                    width: "130px",
                    height: "28px",
                    textTransform: "capitalize",
                  }}
                  startIcon={<img src={commenticon}></img>}
                  onClick={handleComment}
                >
                  Comment
                </Button>
              </ExpandMore>

              <Button
                sx={{ color: "gray", textTransform: "capitalize" }}
                startIcon={<img src={reposticon}></img>}
              >
                Repost
              </Button>
              <Button
                sx={{ color: "gray", textTransform: "capitalize" }}
                startIcon={<img src={shareicon}></img>}
              >
                Send
              </Button>
            </Stack>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Stack display="flex" direction="row" justifyContent="center">
                <Box>
                  <Avatar />
                </Box>
                <Box width="396px">
                  <Stack
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                  >
                    <Stack>
                      <TextField
                        sx={{
                          width: "395px",
                          borderRadius: "20px",
                        }}
                        placeholder="Add a comment"
                        value={comment}
                        onChange={handleChange}
                      ></TextField>
                      <Stack display="flex" justifyContent="flex-start">
                        <Button onClick={handleSubmit}>Post</Button>
                      </Stack>
                    </Stack>
                  </Stack>
                </Box>
              </Stack>
            </CardContent>
            <Stack>
              {comments?.map((i) => (
                <CommentCard body={i.body} />
              ))}
            </Stack>
          </Collapse>
        </Card>
      </Box>
    </div>
  );
};

export default Card2;
