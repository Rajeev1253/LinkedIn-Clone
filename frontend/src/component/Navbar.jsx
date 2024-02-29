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
  backgroundColor: alpha(theme.palette.common.black, 0.1),
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
      <AppBar position="static" sx={{ bgcolor: "white" }}>
        <Toolbar>
          <Box
            component="div"
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              ml: 10,
            }}
          >
            <Stack
              component="div"
              display="flex"
              width="480px"
              height="32px"
              flexDirection="row"
              alignItems="center"
              justifyContent="center"
            >
              <Stack sx={{ pb: 4, pr: 1 }}>
                <img className="logo" src={logo} alt=""></img>
              </Stack>

              <Search size="small">
                <SearchIconWrapper>
                  <SearchIcon sx={{ color: "black" }} />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  size="small"
                  inputProps={{ "aria-label": "search" }}
                  sx={{
                    width: "280px",
                    height: "32px",
                    "&:hover": {
                      width: "382px",
                      height: "32px",
                    },
                  }}
                />
              </Search>
            </Stack>
            <Box
              component="div"
              display="flex"
              fontSize="large"
              sx={{ color: "grey", width: "40px", height: "24px" }}
              gap="32px"
              alignItems="center"
            >
              <Stack display="flex" alignItems="center" paddingTop="2px">
                <Link to="/home">
                  <img src={homeicon}></img>
                  <Typography fontSize="12px">Home</Typography>
                </Link>
              </Stack>
              <Stack
                display="flex"
                alignItems="center"
                alignContent="center"
                width="50px"
              >
                <Link to="/network">
                  <img src={networkicon}></img>
                </Link>
                <Typography fontSize="12px" lineHeight="16px">
                  Network
                </Typography>
              </Stack>
              <Stack
                display="flex"
                alignItems="center"
                alignContent="center"
                width="50px"
              >
                <Link>
                  <img src={jobicon}></img>
                  <Typography fontSize="12px" lineHeight="16px">
                    Jobs
                  </Typography>
                </Link>
              </Stack>
              <Stack display="flex" alignItems="center">
                <Link to="/messaging">
                  <img src={messageicon}></img>
                </Link>
                <Typography fontSize="12px">Messaging</Typography>
              </Stack>
              <Stack display="flex" alignItems="center">
                <Link>
                  <img src={notification}></img>
                </Link>
                <Typography fontSize="12px">Notification</Typography>
              </Stack>
              <Stack>
                <Link to="/profile">
                  <Avatar sx={{ width: "24px", height: "24px" }} />
                </Link>
              </Stack>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
