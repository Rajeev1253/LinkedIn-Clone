import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import SmsRoundedIcon from "@mui/icons-material/SmsRounded";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";
import "./Style/card.css";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
const Card2 = () => {
  return (
    <div className="card">
      <Box width="555px">
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" color="grey">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              quibusdam!
            </Typography>
          </CardContent>

          <CardMedia
            component="img"
            height="200px"
            image="https://source.unsplash.com/random"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              React
            </Typography>
            <Typography gutterBottom variant="body2" component="div">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
              exercitationem nemo iure ab libero, neque vero et iste est esse
              rerum possimus illum ipsam magni aut enim, pariatur consequatur.
              Minus?
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
