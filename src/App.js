import React, { useState } from "react";
import IntroScreen from "./components/IntroScreen";
import InstructionScreen from "./components/InstructionScreen";
import ActivityScreen from "./components/ActivityScreen";
import FinalRewardsScreen from "./components/FinalScreen";
import Header from "./components/Header";
import Footer from "./components/Footer";
import cardsData from "./components/data/cards.json";
import "./App.css";

function App() {
  const [screen, setScreen] = useState("intro");
  const [cards, setCards] = useState(cardsData);
  const [matches, setMatches] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [bananas, setBananas] = useState(0);

  const updateScreen = (newScreen) => {
    setScreen(newScreen);
  };

  const handleCardSelection = (card) => {
    if (card.matched) return;

    const updatedMatches = [...matches, card.id];
    setMatches(updatedMatches);

    if (updatedMatches.length === 2) {
      const [firstCardId, secondCardId] = updatedMatches;
      const firstCard = cards.find((card) => card.id === firstCardId);
      const secondCard = cards.find((card) => card.id === secondCardId);

      if (firstCard.content === secondCard.content) {
        setBananas((prevBananas) => prevBananas + getBananasForCard(firstCard));
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.id === firstCardId || card.id === secondCardId
              ? { ...card, matched: true }
              : card
          )
        );
        setAttempts((prevAttempts) => prevAttempts + 1);
        setMatches([]);
      } else {
        setAttempts((prevAttempts) => prevAttempts + 1);
        setMatches([]);
      }
    }
  };

  const getBananasForCard = (card) => {
    switch (card.content) {
      case "a":
        return 1;
      case "b":
        return 2;
      case "c":
        return 3;
      case "d":
      case "e":
        return 4;
      case "f":
        return 6;
      default:
        return 0;
    }
  };

  const onAttemptsExceeded = () => {
    setScreen("final");
  };

  return (
    <div className="App">
      <Header />
      <main>
        {screen === "intro" && (
          <IntroScreen onStart={() => updateScreen("instructions")} />
        )}
        {screen === "instructions" && (
          <InstructionScreen onNext={() => updateScreen("activity")} />
        )}
        {screen === "activity" && (
          <ActivityScreen
            cards={cards}
            matches={matches}
            attempts={attempts}
            bananas={bananas}
            onCardSelection={handleCardSelection}
            onMatch={() => {}}
            onAttemptsExceeded={onAttemptsExceeded}
          />
        )}
        {screen === "final" && (
          <FinalRewardsScreen
            bananas={bananas}
            onRestart={() => updateScreen("intro")}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
