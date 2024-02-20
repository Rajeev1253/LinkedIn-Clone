import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import "./Style/signup.css";
import IconButton from "@mui/material/IconButton";
import { Button, TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import { Link,useNavigate } from "react-router-dom";
import google from "../assets/google-icon.png";
import OutlinedInput from "@mui/material/OutlinedInput";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../features/auth/authAction";



const SignupComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const navigate= useNavigate()
  const {loading,userInfo,error,success}=useSelector((state)=>state.auth)
  const dispatch = useDispatch()

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    
    try {

      const response = await axios.post("http://localhost:8080/users/register", {email,password});
      if(response.data.success){
        dispatch(registerUser(response))
        navigate('/login');
     }
     else{
    }
    
  } catch (error) {
    console.log( error)
    
    }
   
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
          <div className="contenet">
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
                  sx={{ height: "30px" }}
                />
              </div>
            </div>
            <div className="label2"><label>Password (6+ characters)</label></div>
            <div className="password">
            

              <FormControl
                sx={{
                  m: 1,
                  width: "25ch",
                  "& .MuiFilledInput-underline:after": {
                    borderBottom: "none",
                  },
                }}
                variant="filled"
              >
                <InputLabel htmlFor="filled-adornment-password">
                  
                </InputLabel>
                <OutlinedInput
                Input
                label="password"
                  id="filled-adornment-password"
                  size="small"
                  sx={{ width: "348px", marginTop:"-10px"}}
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e)=>{setPassword(e.target.value)}}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? (
                          <>
                            <p className="show">Show</p>
                          </>
                        ) : (
                          <>
                            <p className="show">Hide</p>
                          </>
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </div>
            <div className="para">
              <p>
                By clicking Agree & Join, you agree to the LinkedIn{" "}
                <span>User Agreement, Privacy Policy,</span> and{" "}
                <span>Cookie Policy. </span>
              </p>
            </div>
            <div className="sign-button">
              <Button variant="contained" sx={{ textTransform: "capitalize" }} onClick={handleSubmit}>
                Agree & join
              </Button>
            </div>
            <div className="choice_seprator">
              <p className="or"> or </p>
            </div>
            <div className="google-btn">
              <Button
                variant="outlined"
                sx={{
                  width: "323px",
                  height: "38px",
                  borderRadius: "15px ",
                  color: "black",
                  border: "1px solid black",
                  textTransform: "capitalize",
                }}
              >
                <div className="google">
                  <span>
                    <img src={google} alt="google"></img>
                  </span>
                  <p>Continue with Google</p>
                </div>
              </Button>
            </div>
            <div className="sign-in">
              <p>
                Already on LinkedIn?
                <span>
                  <Link to="/Login">Sign in </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-para">
        <p>Looking to create a page for a business? Get help</p>
      </div>
    </div>
  );
};

export default SignupComponent;
