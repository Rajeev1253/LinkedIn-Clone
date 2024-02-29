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
  Typography,
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
        justifyContent="center"
        flexDirection="row"
        paddingTop="20px"
      >
        <Stack
          sx={{
            mr: 3,
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          <Card
            sx={{
              width: "225px",
              height: "365px",
              bgcolor: "white",
            }}
          >
            <CardContent>
              <Avatar />
            </CardContent>
          </Card>
        </Stack>
        <Stack>
          <Card sx={{ width: "555px", height: "116px" }}>
            <CardContent>
              <Button
                sx={{ textTransform: "capitalize" }}
                startIcon={<Avatar sx={{ width: "48px", height: "48px" }} />}
                endIcon={<CreatePost sx={{ width: "488px", height: "48px" }} />}
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
          <Stack>
            <div className="data-box">
              <div className="data">
                {post?.data?.posts?.map((post) => (
                  <Card2 post={post} />
                ))}
              </div>
            </div>
          </Stack>
        </Stack>
        <Stack sx={{ ml: 3 }}>
          <Card
            sx={{ width: "300px", height: "322px", bgcolor: "white", ml: "3" }}
          >
            <CardContent>
              <Typography fontWeight="600" fontSize="16px">
                Linkedin News
              </Typography>
              <Stack sx={{ ml: 2, mt: 1 }}>
                <ul>
                  <li>
                    <Typography fontWeight="600" fontSize="14px">
                      Skill devlopment a Top Priority{" "}
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      fontWeight="600"
                      fontSize="14px"
                      paddingTop="20px"
                    >
                      Grooming Women CEO Finance{" "}
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      fontWeight="600"
                      fontSize="14px"
                      paddingTop="20px"
                    >
                      Bristol Myers Squid to hire 1500{" "}
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      fontWeight="600"
                      fontSize="14px"
                      paddingTop="20px"
                    >
                      Shadowfax raise $100 million{" "}
                    </Typography>
                  </li>
                  <li>
                    <Typography
                      fontWeight="600"
                      fontSize="14px"
                      paddingTop="20px"
                    >
                      Getting DEI Right{" "}
                    </Typography>
                  </li>
                </ul>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Stack>
    </div>
  );
};

export default HomeComponent;
