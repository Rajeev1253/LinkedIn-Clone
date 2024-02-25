import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../features/post/postAction";
import ImageIcon from "@mui/icons-material/Image";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import Card2 from "./Card2";
import "./Style/Home.css";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  Stack,
} from "@mui/material";
import CreatePost from "./CreatePost";
import PostBox from "./PostBox";

const HomeComponent = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.userToken);

  useEffect(() => {
    dispatch(fetchPost(token));
  }, [dispatch]);

  const post = useSelector((state) => state.post.post);
  const isLoading = useSelector((state) => state.post.isLoading);
  const error = useSelector((state) => state.post.error);
  console.log(post);
  if (isLoading) {
    return "..isLoading1";
  }
  if (error) {
    return error;
  }
  console.log("post", post);
  return (
    <div className="homeComponent">
      <Navbar />
      <Stack
        display="flex"
        directiom="row"
        justifyContent="center"
        alignItems="center"
        paddingTop="20px"
      >
        <Card sx={{ width: "471px", height: "116px" }}>
          <CardContent>
            <Button
              sx={{ textTransform: "capitalize" }}
              startIcon={<Avatar sx={{ width: "48px", height: "48px" }} />}
              endIcon={<CreatePost sx={{ width: "439px", height: "24px" }} />}
            ></Button>
            <Stack
              display="flex"
              direction="row"
              justifyContent="space-around"
              spacing={5}
            >
              <IconButton>
                <Button
                  sx={{ textTransform: "capitalize", color: "black" }}
                  startIcon={<ImageIcon sx={{ color: "primary" }} />}
                >
                  Media
                </Button>
              </IconButton>

              <IconButton>
                <Button
                  sx={{ textTransform: "capitalize", color: "black" }}
                  startIcon={<CalendarMonthIcon />}
                >
                  Event
                </Button>
              </IconButton>
              <IconButton>
                {" "}
                <Button
                  sx={{ textTransform: "capitalize", color: "black" }}
                  startIcon={<NewspaperIcon />}
                >
                  Write Article
                </Button>{" "}
              </IconButton>
            </Stack>
          </CardContent>
        </Card>
      </Stack>

      <div className="data-box">
        <div className="data">
          {post?.data?.posts?.map((post) => (
            <Card2 post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
