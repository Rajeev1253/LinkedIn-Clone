import React from "react";

import {
  Avatar,
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";

const CommentCard = (props) => {
  return (
    <Box width="471px">
      <Card>
        <CardContent>
          <Stack display="flex" flexDirection="row">
            <Avatar></Avatar>
            <Stack>
              <Typography>Linkedin User</Typography>
              <Box width="400px" height="50px" sx={{ bgcolor: "#f2f2f2" }}>
                <Typography>{props.body}</Typography>
              </Box>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CommentCard;
