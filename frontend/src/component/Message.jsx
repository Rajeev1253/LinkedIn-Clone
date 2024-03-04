import React, { useState } from "react";
import Navbar from "./Navbar";
import "../component/Style/message.css";
import {
  Box,
  Card,
  CardContent,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import newmsg from "../assets/newmsg.svg";
import MessageBox from "./MessageBox";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import ChatCard from "./ChatCard";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#edf3f8",
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

const Message = () => {
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Stack sx={{ border: "1px thin grey" }}>
      <Navbar />
      <Stack
        justifyContent="center"
        flexDirection="row"
        sx={{
          mt: 8,
          bgcolor: "#f4f2ee",
          height: "90vh",
          border: "1px solid grey",
        }}
      >
        <Stack>
          <Stack
            width="312px"
            height="47px"
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            sx={{
              bgcolor: "white",
              borderRadius: "10",
              border: "1px solid grey",
            }}
          >
            <Typography fontWeight="600" sx={{ mt: 1, pl: 1 }}>
              Messaging
            </Typography>
            <Stack
              display="flex"
              flexDirection="row"
              alignItems="center"
              gap="10px"
              paddingRight="10px"
              sx={{}}
            >
              <MoreHorizIcon />
              <img className="newmsg" src={newmsg}></img>
            </Stack>
          </Stack>
          <Stack
            width={"312px"}
            height={"84px"}
            bgcolor={"white"}
            alignItems={"center"}
            sx={{ pt: 1 }}
            border="1px solid grey"
          >
            <Search size="small">
              <SearchIconWrapper>
                <SearchIcon
                  sx={{ color: "black", width: "20px", height: "20px" }}
                />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search"
                size="small"
                inputProps={{ "aria-label": "search" }}
                sx={{
                  width: "280px",
                  height: "34px",
                  color: "black !important",
                  fontSize: "15px",
                }}
              />
            </Search>
            <Box>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList onChange={handleChange}>
                    <Tab label="Focused" value="1" />

                    <Tab label="Others" value="2" />
                  </TabList>
                </Box>
                <TabPanel value="1" sx={{ m: 0, p: 0 }}>
                  <Stack
                    sx={{
                      width: "311px",
                      height: "66vh",
                      overflowY: "scroll",
                      bgcolor: "white",
                      pt: 0,
                      p: 0,
                    }}
                  >
                    <Stack sx={{ mt: 0 }}>
                      <ChatCard />
                      <ChatCard />
                      <ChatCard />
                      <ChatCard />
                      <ChatCard />
                    </Stack>
                  </Stack>
                </TabPanel>
                <TabPanel value="2" sx={{ m: 0, p: 0 }}>
                  <Card>
                    <CardContent
                      sx={{
                        width: "280px",
                        minHeight: "60vh",
                        overflow: "auto",
                      }}
                    ></CardContent>
                  </Card>
                </TabPanel>
              </TabContext>
            </Box>
          </Stack>
        </Stack>

        <Stack>
          <MessageBox />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Message;
