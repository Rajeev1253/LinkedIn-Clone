import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./UserCard";
import { useSelector } from "react-redux";

const Suggestion = () => {
  const token = useSelector((state) => state.auth.userToken);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(
          "http://localhost:8080/users",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: token,
            },
          }
        );
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);
  return (
    <div>
      {loading && <div>Loading</div>}
      {!loading && (
        <div>
          <h2>Doing stuff with data</h2>
        </div>
      )}

      <Box
        sx={{
          width: "804px",
          bgcolor: "white",
          borderRadius: "12px ",
          marginTop: "30px",
          paddingLeft: "16px",
          paddingTop: "27px",
        }}
      >
        <Typography>People you may know </Typography>
        <Stack display="flex" flexDirection="column"></Stack>
        {data.users?.map((item) => (
          <UserCard email={item.email} />
        ))}
      </Box>
    </div>
  );
};

export default Suggestion;
