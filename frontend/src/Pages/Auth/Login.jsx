import React, { useState } from "react";

import "./Login.css";
import LoginHeader from "./LoginHeader";

function Login() {

  //redux


  // LOGIN

  // REGISTER

  return (
    <div>
        <LoginHeader/>
    <div className="login">
    

      {/* Log in Form */}
      <form>
        <input
         
          placeholder="Full Name (required if registering)"
          type="text"
        />

        <input
        
          
          placeholder="Profile Pic URL (optional)"
          type="text"
        />

        <input
          
         
          placeholder="Email"
          type="email"
        />

        <input
         
         
          placeholder="Password"
          type="password"
        />

        <button type="submit" >
          Sign In
        </button>
      </form>

      <p>
        Not a member ? {"  "}
        <span className="login__register" >
          Register Now
        </span>
      </p>

      {/* <span style={{ color: "green" }}>
        **Please use email 'test@test.com' and password 'linkedin' for demo
        purposes**
      </span> */}
    </div>
    </div>
  );
}

export default Login;
