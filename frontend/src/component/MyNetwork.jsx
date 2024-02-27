import React from "react";
import Navbar from "./Navbar";
import { Box, Stack, Typography } from "@mui/material";
import Invitation from "./Invitation";
import Suggestion from "./Suggestion";

const MyNetwork = () => {
  return (
    <div>
      <Navbar />
      <Stack
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginTop="20px"
      >
        <Box
          sx={{
            width: "804px",
            height: "52px",
            bgcolor: "white",
            borderRadius: "12px ",
          }}
        >
          <Stack
            display="flex"
            flexDirection="row"
            gap="30px"
            sx={{ marginTop: "15px", marginLeft: "47px  " }}
          >
            <Typography>Grow</Typography>
            <Typography>Catch Up</Typography>
          </Stack>
        </Box>
        <Invitation />
        <Suggestion />
      </Stack>
    </div>
  );
};

export default MyNetwork;
