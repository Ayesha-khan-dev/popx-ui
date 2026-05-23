import { useNavigate } from "react-router-dom";
import React from "react";
import "./Login.css";

function Login() {

const navigate = useNavigate();
  return (
    <div className="container">
      <h1>
        Signin to your <br /> PopX account
      </h1>

      <p>
              Enter your credentials to <br/>access your PopX account
      </p>

      <div className="input-box">
        <label>Email Address</label>
        <input type="email" placeholder="Enter email address" />
      </div>

      <div className="input-box">
        <label>Password</label>
        <input type="password" placeholder="Enter password" />
      </div>

      <button onClick={() => navigate('/profile')}>Login</button>
    </div>
  );
}

export default Login;