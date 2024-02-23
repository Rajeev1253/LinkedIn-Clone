import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import SmsRoundedIcon from "@mui/icons-material/SmsRounded";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";
import "./Style/card.css";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
const Card2 = (props) => {
  console.log(props);
  return (
    <div className="card">
      <Box width="471px">
        <Card>
          <CardContent>
          <Stack display="flex" direction="row" >
          <Avatar>R</Avatar>
          <Typography sx={{pl:1}}>Rajeev Goyal</Typography>

          </Stack>
            <Typography gutterBottom variant="h5" component="div" color="grey">
              {props.tittle}
            </Typography>
          </CardContent>

          <CardMedia
            component="img"
            height="200px"
            image={`http://localhost:8080/${props?.image[0]}`} 
          />
         
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              React
            </Typography>
            <Typography gutterBottom variant="body2" component="div">
             {props.body}
            </Typography>
          </CardContent>
          <CardActions sx={{ color: "gray" }}>
            <Button
              sx={{ color: "gray" }}
              startIcon={
                <ThumbUpAltOutlinedIcon sx={{ color: "gray", ml: 4 }} />
              }
            >
              Like
            </Button>
            <Button
              sx={{ color: "gray" }}
              startIcon={<SmsRoundedIcon sx={{ color: "grey", ml: 4 }} />}
            >
              Comment
            </Button>
            <Button
              sx={{ color: "gray" }}
              startIcon={<PostAddOutlinedIcon sx={{ color: "gray", ml: 3 }} />}
            >
              Repost
            </Button>
            <Button
              sx={{ color: "gray" }}
              startIcon={<SendRoundedIcon sx={{ color: "gray", ml: 4 }} />}
            >
              Send
            </Button>
          </CardActions>
        </Card>
      </Box>
    </div>
  );
};

export default Card2;
