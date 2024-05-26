// components/Card.js
import React from "react";

const Card = ({ index, card, isFlipped, onFlip }) => (
  <div
    className={`card ${isFlipped ? "flipped" : ""}`}
    onClick={() => onFlip(index)}
  >
    <div className="card-front">
      <img src={card.image} alt={card.name} />
    </div>
    <div className="card-back">?</div>
  </div>
);

export default Card;
