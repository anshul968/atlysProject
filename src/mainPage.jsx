import React, { useState } from "react";
import "./mainPage.css";
import avatar1 from "./items/avatar1.svg";
import chatBubble from "./items/chatBubble.svg";
import dotShape from "./items/dotShape.svg";
import avatar2 from "./items/avatar2.svg";
import LoginAndSignUpPopup from "./loginAndSignUp";
const MainPage = () => {
  const [showPopup, setShowPopup] = useState(false);

  const showModal = () => {
    setShowPopup(true);
  };
  const handleLogin = (email, password) => {
    setShowPopup(false);
  };

  const handlePopupClose = () => {
    console.log("Popup closed");
    setShowPopup(false);
  };

  return (
    <>
      <div className="container">
        <div className="header">
          <h1>Hello Jane</h1>
          <h3>
            How are you doing today? Would you like to share something with the
            community 🤗
          </h3>
        </div>
        <div className="create-post">
          <div className="input-box">
            <h2>Create post</h2>
            <div className="input-area">
              <div className="input-icon">
                <span role="img" aria-label="Speech Balloon">
                  💬
                </span>
              </div>

              <textarea placeholder="How are you feeling today?"></textarea>
            </div>
            <button onClick={showModal}>Post</button>
          </div>
        </div>
        <div className="post-card" onClick={showModal}>
          <div className="input-box">
            <div className="user-info">
              <img src={avatar1} alt="User Avatar" className="user-info-img" />
              <div>
                <h4 className="h4-info">Theresa Webb</h4>
                <h5 className="h5-info">5mins ago</h5>
              </div>
              <div className="image-div">
                <img src={dotShape} className="dot-images" alt="Dot" />
              </div>
            </div>
            <div className="post-content">
              <div className="input-icon">
                <span role="img" aria-label="Hand Wave">
                  👋
                </span>
              </div>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
            <div className="comment-section">
              <img src={chatBubble} alt="chat Bubble" />
              <h6>24 comments</h6>
            </div>
          </div>
        </div>
        <div className="post-card" onClick={showModal}>
          <div className="input-box">
            <div className="user-info">
              <img src={avatar2} alt="User Avatar" className="user-info-img" />
              <div>
                <h4 className="h4-info1">Marvin McKinney</h4>
                <h5 className="h5-info1">8mins ago • Edited </h5>
              </div>
              <div className="images-div">
                <img src={dotShape} className="dot-images" alt="Dot" />
              </div>
            </div>
            <div className="post-content">
              <div className="input-icon">
                <span role="img" aria-label="Sad Face">
                  😞
                </span>
              </div>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        </div>
      </div>
      {showPopup && (
        <LoginAndSignUpPopup onClose={handlePopupClose} onLogin={handleLogin} />
      )}
    </>
  );
};

export default MainPage;
