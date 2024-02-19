import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import "./Style/signup.css";
import IconButton from '@mui/material/IconButton';
import { Button, TextField } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import FilledInput from "@mui/material/FilledInput";
const SignupComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false)
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="SignupComponent">
      <div className="main">
        <div className="header">
          <div className="logo">
            <img src={Logo} alt="LinkedIn"></img>
          </div>
        </div>
      </div>
      <div className="signtext">
        <p>Make the most of your professional life </p>
      </div>
      <div className="box">
        <div className="signup-box">
          <div className="input-box">
            <label>Email or phone number</label>
            <div className="text-field">
              <TextField
                className="email"
                size="small"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                sx={{height:"30px"}}  
              />
            </div>
          </div>
          {/* <FormControl
      sx={{
        m: 1,
        width: '25ch',
        '& .MuiFilledInput-underline:after': {
          borderBottom: 'none',
        },
      }}
      variant="filled"
    >
      <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
      <FilledInput
        id="filled-adornment-password"
        type={showPassword ? 'text' : 'password'}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl> */}
    <div className="input-box">
            <label>Password (6+ characters)</label>
            <div className="text-field">
              <TextField
                className="email"
                size="small"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                sx={{height:"30px"}}
              />
            </div>
          </div>
          <div className="para">
            <p>
              By clicking Agree & Join, you agree to the LinkedIn{" "}
              <span>User Agreement, Privacy Policy,</span> and{" "}
              <span>Cookie Policy. </span>
            </p>
          </div>
          <div className="sign-button">
           <Button variant="contained">Agree & join</Button>
          </div>
          <div className="or">
            <p>or</p>
          </div>
          <div className="google-btn">
          <Button variant="outlined" sx={{width:"323px", height:"38px",borderRadius:"15px ",color:"black" ,border:"1px solid black"}}>
          Continue with Google
</Button>
          </div>
          <div className="sign-in">
            <p>
              Already on LinkedIn?
              <span> Sign in </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupComponent;
