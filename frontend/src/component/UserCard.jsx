import { Avatar, Box, Button, Card, Stack, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { sendRequest } from "../features/connection/connectionAction";
import { useSelector } from "react-redux";

const UserCard = ({ item }) => {
  const userId = item._id;
  const token = useSelector((state) => state.auth.userToken);
  const dispatch = useDispatch();

  const handleConnect = async () => {
    // console.log(userId);
    dispatch(sendRequest({ userId, token }));
  };
  return (
    <Card
      sx={{
        width: "193px",
        height: "282px",
        marginTop: "16px",
        marginBottom: "16px",
        display: "flex",
        justifyContent: "center !important",
      }}
    >
      <Stack>
        <Avatar
          sx={{ width: "104px", height: "104px", marginTop: "12px" }}
        ></Avatar>

        <Stack>
          <Typography fontSize="15px" sx={{ paddingTop: "16px" }}>
            {item.email}
          </Typography>
        </Stack>
        <Stack display="flex" alignItems="end">
          <Button
            variant="outlined"
            sx={{
              borderRadius: "15px",
              display: "flex",
              alignSelf: "flex-end",
            }}
            onClick={handleConnect}
          >
            Connect
          </Button>
        </Stack>
      </Stack>
    </Card>
  );
};

export default UserCard;
