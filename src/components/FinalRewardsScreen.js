import React from "react";
import "./FinalRewardsScreen.css";

const FinalRewardsScreen = ({ bananas = 7, onOkClick }) => {
  return (
    <div className="final-rewards-screen">
      <div className="back-button">
        <img src="back-button.png" alt="Back" />
      </div>
      <div className="progress-bar"></div>
      <div className="reward-container">
        <h2>Earned</h2>
        <div className="banana-count">
          <span>{bananas}</span> Banana's
        </div>
        <div className="monkey-container">
          <img src="monkey.png" alt="Monkey" />
        </div>
        <button className="ok-button" onClick={onOkClick}>
          YAY, OK!
        </button>
      </div>
      <div className="bananas">
        <img src="banana.png" alt="Banana" />
        <img src="banana.png" alt="Banana" />
        <img src="banana.png" alt="Banana" />
        <img src="banana.png" alt="Banana" />
        <img src="banana.png" alt="Banana" />
        <img src="banana.png" alt="Banana" />
      </div>
    </div>
  );
};

export default FinalRewardsScreen;
