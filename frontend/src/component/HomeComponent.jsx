import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "../features/post/postAction";
import ImageIcon from "@mui/icons-material/Image";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import Card2 from "./Card2";
import profile from "../assets/profile.webp"


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
import { orange } from "@mui/material/colors";
import { Link } from "react-router-dom";

const HomeComponent = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.userToken);
  const userInfo = useSelector((state)=>state.auth.userInfo)

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
        paddingTop="22px"
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
              display:"flex",
              justifyContent:"center",
              borderRadius:"10px",
              pt:0,
              mt:0

            }}
          >
            <CardContent>
            <Stack textAlign="center" alignItems="center">
            
            <Stack width="225px" position="relative">
              <img src={profile}></img>
              <Avatar sx={{width:"68px", height:"68px", bgcolor:"Orange ", position:"absolute" ,top:"15px" ,left:"75px"}}>{userInfo.firstName[0]}</Avatar>
            </Stack>
        
              <Typography paddingTop="40px">Welcome {userInfo?userInfo.firstName:"username"}</Typography>
             <Link to="/profile"><Typography fontSize="12px" paddingTop="10px">Add a photo</Typography></Link>
           
            </Stack>
            </CardContent>
          </Card>
        </Stack>
        <Stack>
          <Card sx={{ width: "555px", height: "116px" ,borderRadius:"10px", }}>
            <CardContent sx={{marginBottom:"20px"}}>
              <Button
                sx={{ textTransform: "capitalize" }}
                startIcon={<Avatar sx={{ width: "48px", height: "48px" }} />}
                endIcon={<CreatePost sx={{ width: "488px", height: "48px" }} />}
              ></Button>
              <Stack
                display="flex"
                direction="row"
                justifyContent="space-around"
                spacing={10}
                marginBottom="20px"
              >
                <IconButton>
                  <Button
                    sx={{ textTransform: "capitalize", color: "black", width:"87px", height:"48px", paddingBottom:"30px"}}
                    startIcon={<ImageIcon sx={{ color: "#378FE9" }} />}
                  >
                    Media
                  </Button>
                </IconButton>

                <IconButton>
                  <Button
                    sx={{ textTransform: "capitalize", color: "black"  , width:"87px", height:"48px", paddingBottom:"30px"}}
                    startIcon={<CalendarMonthIcon sx={{ color: "#C37D16" }} />}
                  >
                    Event
                  </Button>
                </IconButton>
                <IconButton>
                  {" "}
                  <Button
                    sx={{ textTransform: "capitalize", color: "black" , width:"15 0px", height:"48px", paddingBottom:"30px" }}
                    startIcon={<NewspaperIcon  sx={{ color: "#E06847" }} />}
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
