import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Input,
} from "@mui/material";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
const CreatePost = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <Dialog
        PaperProps={{
          sx: {
            width: "80%",
            height: "90%",
          },
        }}
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <DialogTitle id="dialog-title">Submit the test</DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">
            <Input
              disableUnderline="true"
              multiline="true"
              placeholder="What do you want to talk about"
              sx={{ width: "100%", height: "%" }}
            />
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpen(false)} sx={{ color: "black" }}>
            Cancel
          </Button>
          <Button
            sx={{ color: "black" }}
            startIcon={<AccessTimeRoundedIcon sx={{ color: "black" }} />}
            autoFocus
            onClick={() => setOpen(false)}
          >
            Post
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CreatePost;
