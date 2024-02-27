import React from "react";
import Navbar from "../../component/Navbar";
import MyNetwork from "../../component/MyNetwork";
import { Box } from "@mui/material";
import Invitation from "../../component/Invitation";

const Network = () => {
  return (
    <Box sx={{ bgcolor: "rgb(244,242,238)" }}>
      <MyNetwork />
    </Box>
  );
};

export default Network;
