import { Avatar, Button, Card, Stack, Typography } from "@mui/material";
import React from "react";

const UserCard = (email) => {
  return (
    <div>
      <Card
        sx={{
          width: "193px",
          height: "282px",
          marginTop: "16px",
          marginBottom: "16px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Stack>
          <Avatar
            sx={{ width: "104px", height: "104px", marginTop: "12px" }}
          ></Avatar>
          <Typography sx={{ paddingTop: "16px", textAlign: "center" }}>
            {email.email}
          </Typography>
          <Stack display="flex" alignItems="end">
            <Button
              variant="outlined"
              sx={{
                borderRadius: "15px",
                display: "flex",
                alignSelf: "flex-end",
              }}
            >
              Connect
            </Button>
          </Stack>
        </Stack>
      </Card>
    </div>
  );
};

export default UserCard;
