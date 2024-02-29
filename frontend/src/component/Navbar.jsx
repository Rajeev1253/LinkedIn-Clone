import React from "react";
import logo from "../assets/Linkedin.svg";
import "./Style/navbar.css";
import {
  AppBar,
  IconButton,
  Toolbar,
  Box,
  Avatar,
  Typography,
  Stack,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import homeicon from "../assets/homeicon.svg";
import networkicon from "../assets/network.svg";
import jobicon from "../assets/jobs.svg";
import messageicon from "../assets/message.svg";
import notification from "../assets/notification.svg";
import { Link } from "react-router-dom";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor:  "#edf3f8",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(0),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
 
  
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
const Navbar = () => {
  return (
    <div className="navbar">
      <AppBar position="static" elevation={0} sx={{ bgcolor: "white", height:"52px" }}>
        <Toolbar >


          <Stack flexDirection="row" justifyContent="space-between" alignItems="center" width={"75rem"} height="52px" m={"auto"} pb={1}>

            <Stack justifyContent="center" alignItems="center" flexDirection="row"  paddingBottom="5px">
              <Stack sx={{ mb: 4, mr: 1, }}>
                <img className="logo" src={logo} alt=""></img>
              </Stack>
              <Search size="small">
                <SearchIconWrapper>
                  <SearchIcon  sx={{ color: "black", width:"20px", height:"20px"}} />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search"
                
                  size="small"
                  inputProps={{ "aria-label": "search"  }}
                  sx={{
                    width: "280px",
                    height: "32px",
                    color:"black !important ",
                    fontSize:"15px"
                    

                  }}
                />
              </Search>
            </Stack>

            <Stack flexDirection="row"  alignItems={"center"} width={"46rem"}>

              <Stack alignItems="center" textAlign="center" width={"80px"} height={"52px"}  paddingTop="3px">
                <Link to="/home">
                  <img src={homeicon}></img>
                  <Typography fontSize="12px">Home</Typography>
                </Link>
              </Stack>
              <Stack alignItems="center" textAlign="center" paddingTop="3px"  width={"80px"} height={"52px"} >
                <Link to="/network">
                  <img src={networkicon}></img>
                  <Typography fontSize="12px" >Network</Typography>
                </Link>
              </Stack>  
              <Stack alignItems="center" textAlign="center" paddingTop="3px"  width={"80px"} height={"52px"} >
                <Link to="/jobs">
                  <img src={jobicon}></img>
                  <Typography fontSize="12px">Jobs</Typography>
                </Link>
              </Stack>
              <Stack alignItems="center" textAlign="center" paddingTop="3px"  width={"80px"} height={"52px"} >
                <Link to="/message" >
                  <img src={messageicon}></img>
                  <Typography fontSize="12px">Message</Typography>
                </Link>
              </Stack>
              <Stack alignItems="center" textAlign="center" paddingTop="3px"  width={"80px"} height={"52px"} >
                <Link to="/notfication">
                  <img src={notification}></img>
                  <Typography fontSize="12px" textSty>Notfications</Typography> 
                </Link>
              </Stack>
           
              <Stack alignItems="center" textAlign="center" paddingTop="3px"  width={"80px"} height={"52px"}>
                <Link to="/profile">
                  <Avatar sx={{ width: "24px", height: "24px" }} />
                </Link>
              </Stack>
            </Stack>


          </Stack>




        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
