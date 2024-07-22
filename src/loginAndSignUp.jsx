import React, { useState } from "react";
import "./loginAndSignUp.css";

const LoginAndSignUpPopup = ({ onClose, onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [showLogin, setShowLogin] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    onLogin(email, password);
  };
  const loginPage = () => {
    setShowLogin(true);
  };
  const signUpPage = () => {
    setShowLogin(false);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleUsernameChange = (event) => {
    setUserName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <div className="input-icon">
          <span className="close-button" onClick={onClose}>
            &times;
          </span>
        </div>
        {!showLogin ? (
          <>
            <h4 className="h4-tag">SIGN UP</h4>
            <h5 className="h5-tag">Create an account to continue</h5>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <h5 className="email-password">Email</h5>
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <h5 className="email-password">Username</h5>
                <input
                  type="text"
                  id="email"
                  value={userName}
                  onChange={handleUsernameChange}
                  placeholder="Choose a preferred username"
                />
              </div>
              <div className="form-group">
                <h5 className="email-password">Password</h5>
                <input
                  type="text"
                  id="email"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Choose a strong password"
                />
              </div>
              <button className="submit-button" type="submit" onClick={onClose}>
                Contniue
              </button>
              <div style={{ paddingRight: "50%" }} className="pass-div">
                <h6 className="text-changes">Already have an account? </h6>
                <h6
                  style={{ color: "white", paddingTop: "10px" }}
                  onClick={loginPage}
                >
                  Login {"→"}
                </h6>
              </div>
            </form>
          </>
        ) : (
          <>
            <h5 className="h4-tag">WELCOME BACK</h5>
            <h5 className="h5-tag">Log into your account</h5>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <h5 className="email-password">Email or Username</h5>
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email or username"
                />
              </div>
              <div className="form-group">
                <div className="pass-div">
                  <h5 className="email-password">Password</h5>
                  <h5 className="forget-password">Forgot password?</h5>
                </div>

                <input
                  type="text"
                  id="email"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Enter your password"
                />
              </div>
              <button className="submit-button" type="submit" onClick={onClose}>
                Login Now
              </button>
              <div style={{ paddingRight: "50%" }} className="pass-div">
                <h6 className="text-changes">Not registered yet? </h6>
                <h6
                  style={{ color: "white", paddingTop: "10px" }}
                  onClick={signUpPage}
                >
                  Register {"→"}
                </h6>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginAndSignUpPopup;
