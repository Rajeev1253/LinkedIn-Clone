import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Stack,
  CardHeader,
  Avatar,
  Button,
} from "@mui/material";

const Invitation = () => {
  return (
    <div>
      <Stack
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginTop="23px"
      >
        <Card
          sx={{
            width: "804px",
            bgcolor: "white",
            borderRadius: "12px ",
            marginTop: "20px",
          }}
        >
          <CardContent>
            <Typography paddingBottom="15px" alignItems="center">
              Invitations
            </Typography>
            <hr />
          </CardContent>
          <CardContent>
            <Stack
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
            >
              <Stack display="flex" flexDirection="row">
                <Avatar sx={{ width: "72px", height: "72px" }}></Avatar>
                <Typography>UserName</Typography>
              </Stack>
              <Stack
                width="165px"
                display="flex"
                flexDirection="row"
                alignItems="center"
              >
                <Button>Ignore</Button>
                <Button
                  variant="outlined"
                  sx={{
                    width: "81.72px",
                    height: "32px",
                    borderRadius: "15px ",
                  }}
                >
                  Accept
                </Button>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
      <Stack></Stack>
    </div>
  );
};

export default Invitation;
