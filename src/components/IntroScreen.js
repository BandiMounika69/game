// components/IntroScreen.js
import React from "react";
import "./IntroScreen.css";

const IntroScreen = ({ onStart }) => (
  <div className="intro-screen">
    <h1>Welcome to the Card Matching Game</h1>
    <button onClick={onStart}>Start</button>
  </div>
);

export default IntroScreen;
