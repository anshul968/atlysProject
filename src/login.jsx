import React, { useState } from "react";
import "./login.css";
import logo from "./items/Logo.svg";
import MainPage from "./mainPage";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mainPage, setMainPage] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setMainPage(true);
  };

  return (
    <>
      <div className="login-container">
        {!mainPage ? (
          <div className="main-div">
            <img src={logo} className="logo-image" alt="logoImage" />

            <div className="login-box">
              <h2 className="welcome-back">WELCOME BACK</h2>
              <h3 className="login-to-account">Log into your account</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <h5 className="email-password">Email or Username</h5>
                  <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Enter your email or username"
                  />
                </div>
                <div className="form-group">
                  <div className="pass-div">
                    <h5 className="email-password">Password</h5>
                    <a className="forget-password">Forgot password?</a>
                  </div>

                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Enter your password"
                  />
                </div>
                <button type="submit">Login now</button>
              </form>
              <p>
                Not registered yet? <a href="#">Register {"→"}</a>
              </p>
            </div>
          </div>
        ) : (
          <MainPage />
        )}
      </div>
    </>
  );
};

export default Login;
