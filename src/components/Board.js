import React, { useState, useEffect } from "react";
import Card from "./Card";
import Compteur from "./Compteur";

const shapesCard = [
  { type: "cercle", matched: false },
  { type: "square", matched: false },
  { type: "triangle", matched: false },
];
const Board = () => {
  const [cards, setCards] = useState([]);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [finish, setFinish] = useState(0); //to test if user has finish the game or not
  const [showModal, setShowModal] = useState(false);
  const [startCounter, setStartCounter] = useState(false); // to start the counter
  const [turns, setTurns] = useState(0); // number of mouves
  const [disabled, setDisabled] = useState(false);

  // shuffle cards for new game
  const shuffleCards = () => {
    const shuffledCards = [...shapesCard, ...shapesCard]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(shuffledCards);
  };

  //initial value for new game
  useEffect(() => {
    shuffleCards();
  }, []);

  // compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.type === choiceTwo.type && choiceOne.id !== choiceTwo.id) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.type === choiceOne.type) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        setFinish((prevFinsih) => prevFinsih + 1);
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  // select card
  const handleChoice = (card) => {
    setStartCounter(true);
    if (choiceOne === null) {
      setChoiceOne(card);
    } else if (choiceTwo === null) {
      setChoiceTwo(card);
    }
  };

  // reset choices & increase turn(mouves)
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
    console.log(finish);
  };

  // close the model && reset the game
  const onCloseModal = () => {
    setFinish(0);
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(0);
    setDisabled(false);
    setShowModal(false);
    setStartCounter(false);
    shuffleCards();
  };

  return (
    <>
      <Compteur
        startCounter={startCounter}
        finish={finish}
        onClose={onCloseModal}
        turns={turns}
      />
      <div className="compteur_container ">
        <button onClick={onCloseModal}>
          <i class="fas fa-sync-alt"></i> Reset
        </button>
      </div>
      <div className="container">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
    </>
  );
};

export default Board;
