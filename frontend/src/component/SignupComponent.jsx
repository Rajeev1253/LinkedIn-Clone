import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import "./Style/signup.css";
import { TextField } from "@mui/material";



const SignupComponent = () => {
    const [username,setUsername]= useState("")
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("")

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
        <TextField className="email" type="text" label="Username" value={username} onChange={(e)=>{setUsername(e.target.value)}} />
      </div>
      <div className="input-box">
        <TextField className="email" type="email" label="Email or phone number" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
      </div>
      <div className="input-box">
        <TextField className="email" type="password" label="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
      </div>
      <div className="para">
        <p>By clicking Agree & Join, you agree to the LinkedIn <span>User Agreement, Privacy Policy,</span> and <span>Cookie Policy. </span></p>
      </div>
      <div className="sign-button">
        <button>Agree & Join</button>
      </div>
      <div className="or">
        <h3>or</h3>
      </div>
      <div className="sign-in">
      <p>Already on LinkedIn? 
      <span>Sign in </span></p>

      </div>


      </div>

      </div>
    </div>
  );
};

export default SignupComponent;
