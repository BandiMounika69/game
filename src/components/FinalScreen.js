// components/FinalScreen.js
import React from "react";

const FinalScreen = ({ matches, bananas }) => (
  <div className="final-screen">
    <h1>Game Over!</h1>
    <p>Matches: {matches}</p>
    <p>Bananas Collected: {bananas}</p>
  </div>
);

export default FinalScreen;
