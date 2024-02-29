import React from "react";
import Navbar from "./Navbar";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import profile from "../assets/profilebg.webp";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import EditProfile from "./EditProfile";
import { useSelector } from "react-redux";
const UserProfile = () => {
  const userInfo = useSelector((state)=>state.auth.userInfo)
  console.log('userInfo: ', userInfo);

  return (
    <div>
      <Navbar />
      <Box
        sx={{
          bgcolor: "rgb(244,242,238)",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          paddingTop: "20px",
          alignItems: "center",
        }}
      >
        <Stack sx={{ display: "flex ", flexDirection: "row" }}>
          <Stack width="804px">
            <Stack position="relative">
              <Stack height="201px">
                <img src={profile}></img>
              </Stack>
              <Avatar
                sx={{
                  width: "120px",
                  height: "120px",
                  position: "absolute",
                  top: "140px",
                  left: "50px",
                }}
              />
            </Stack>
            <Stack
              sx={{
                width: "780 px",
                height: "328px",
                bgcolor: "white",
                pt: 4,
                pl: 3,
              }}
            >
              <Stack display="flex" alignItems="end" paddingRight="30px">
                <Button startIcon={<EditProfile />}></Button>
              </Stack>
              <Stack display="flex" justifyContent="flex-end">
                <img sr></img>
              </Stack>
              <Typography fontSize="24px" fontWeight="600" sx={{ pt: 4 }}>
               {userInfo.firstName} {userInfo.lastName}
              </Typography>
              <Typography>--</Typography>
              <Typography>Bathinda Punjab India</Typography>
            </Stack>
          </Stack>
          <Stack
            width="300px"
            height="160px"
            bgcolor="white"
            sx={{ ml: 2, borderRadius: "10px" }}
          >
            <Typography fontWeight="600" fontSize="18px" padding="15px">
              Profile Languages
            </Typography>
            <Typography fontWeight="600" fontSize="18px" padding="15px">
              Public Profile & URL
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </div>
  );
};

export default UserProfile;
