import React, { useState, useEffect } from "react";
import "./activity.css";

const ActivityScreen = ({ onMatch, onAttemptsExceeded, onFinish, onNext }) => {
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [matches, setMatches] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [bananas, setBananas] = useState(0);

  useEffect(() => {
    // Load card data here
    const cardData = [
      { id: 1, image: "banana.jpg", matched: false },
      { id: 2, image: "banana.jpg", matched: false },
      { id: 3, image: "orange.png", matched: false },
      { id: 4, image: "orange.png", matched: false },
      { id: 5, image: "apple.jpg", matched: false },
      { id: 6, image: "apple.jpg", matched: false },
      { id: 7, image: "grape.png", matched: false },
      { id: 8, image: "grape.png", matched: false },
    ];
    setCards(shuffleCards(cardData));
  }, []);

  const shuffleCards = (cards) => {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
  };

  const handleCardSelection = (card) => {
    if (selectedCards.length < 2) {
      setSelectedCards([...selectedCards, card]);
    }

    if (selectedCards.length === 2) {
      setAttempts(attempts + 1);

      if (selectedCards[0].image === selectedCards[1].image) {
        onMatch();
        setMatches([...matches, selectedCards[0].id, selectedCards[1].id]);
        setBananas(bananas + 2);
        setSelectedCards([]);
      } else {
        // Delay for a moment before flipping back the cards
        setTimeout(() => {
          setSelectedCards([]);
        }, 1000);
      }

      if (matches.length === cards.length) {
        onFinish();
      }

      if (attempts >= 5) {
        onAttemptsExceeded();
      }
    }
  };

  return (
    <div className="activity-screen">
      <main>
        <div className="card-grid">
          {cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              matched={matches.includes(card.id)}
              selected={selectedCards.includes(card)}
              onSelect={handleCardSelection}
            />
          ))}
        </div>
        <footer></footer>
      </main>
    </div>
  );
};

const Card = ({ card, matched, selected, onSelect, onNext }) => {
  return (
    <div
      className={`card ${matched ? "matched" : ""} ${
        selected ? "selected" : ""
      }`}
      onClick={() => onSelect(card)}
    >
      {!matched && !selected && <img src={card.image} alt={card.image} />}
      {matched && <img src={card.image} alt={card.image} />}
    </div>
  );
};

export default ActivityScreen;
