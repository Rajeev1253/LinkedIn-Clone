import React from "react";

import {
  Avatar,
  Button,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteRequest,
  updateRequest,
} from "../features/connection/connectionAction";

const Request = (props) => {
  const token = useSelector((state) => state.auth.userToken);
  //   console.log("token: ", token);
  const dispatch = useDispatch();

  const handleIgnore = async () => {
    console.log("deleteToken: ", token);
    const connectionId = props.props._id;
    console.log("connectionId: ", connectionId);
    const data = {
      connectionId,
      token,
    };
    const res = dispatch(deleteRequest(data));
    console.log(res);
    return res;
  };
  const handleAccept = async () => {
    const senderId = props.props._id;
    const data = {
      senderId,
      token,
    };
    const res = dispatch(updateRequest(data));
    console.log(res);
    return res;
  };

  return (
    <div>
      <Card>
        <CardContent>
          <Stack
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Stack display="flex" flexDirection="row">
              <Avatar sx={{ width: "72px", height: "72px" }}></Avatar>
              <Typography>{props?.props?.connectionBy.firstName}</Typography>
            </Stack>
            <Stack
              width="165px"
              display="flex"
              flexDirection="row"
              alignItems="center"
            >
              <Button onClick={handleIgnore}>Ignore</Button>
              <Button
                variant="outlined"
                sx={{
                  width: "81.72px",
                  height: "32px",
                  borderRadius: "15px ",
                }}
                onClick={handleAccept}
              >
                Accept
              </Button>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
};

export default Request;
