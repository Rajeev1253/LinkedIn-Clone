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
const UserProfile = () => {
  return (
    <div>
      <Navbar />
      <Box
        sx={{
          bgcolor: "rgb(244,242,238)",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          paddingTop:"20px",    
          alignItems: "center",
        }}
      >
        <Box width="804px">
          <Stack>
            <Stack position="relative">
              <img src={profile}></img>
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
                <Button startIcon={<EditProfile/>}> 
                </Button>
              
              
                
              </Stack>
              <Stack display="flex" justifyContent="flex-end">
                <img sr></img>
              </Stack>
              <Typography fontSize="24px" fontWeight="600" sx={{ pt: 4 }}>
                Rajeev Goyal
              </Typography>
              <Typography>--</Typography>
              <Typography>Bathinda Punjab India</Typography>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </div>
  );
};

export default UserProfile;