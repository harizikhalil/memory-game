import React from "react";
import Shape from "./Shape";
import "./Card.css";
const Card = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <Shape type={card.type} />
        <div className="back" onClick={handleClick} />
      </div>
    </div>
  );
};

export default Card;
