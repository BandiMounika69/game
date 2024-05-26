import React from "react";
import "./index.css";
const InstructionScreen = ({ onNext }) => {
  return (
    <div className="instruction-screen">
      <button className="back-button">←</button>
      <h1>Selct a card.</h1>
      <div className="card-container">
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index} className="card">
            <div className="heart-icon"></div>
          </div>
        ))}
      </div>
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default InstructionScreen;
