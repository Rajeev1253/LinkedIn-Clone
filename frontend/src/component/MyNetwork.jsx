import React, { useState } from "react";
import Navbar from "./Navbar";
import { Box, Stack, Typography, 
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Collapse,
  TextField,} from "@mui/material";
import Invitation from "./Invitation";
import Suggestion from "./Suggestion";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";  

const MyNetwork = () => {
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  return (
    <div>
      <Navbar />
      <Stack flexDirection="row" justifyContent="center" alignItems="center">
      <Stack
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginTop="20px"
      >
          <Stack
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
          </Stack>

      
        <Invitation />
        <Suggestion />
      </Stack>
      </Stack>
    </div>
  );
};

export default MyNetwork;
