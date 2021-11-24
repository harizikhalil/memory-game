import React from "react";
import "./MessageCard.css";

const MessageCard = ({ turns, timerId }) => {
  return (
    <div className="message_container">
      <img src="/img/winner.jpg" alt="winner" />
      <h1>
        you finished the game in{" "}
        {timerId < 60
          ? timerId + "seconde"
          : Math.floor(timerId / 60) + "minute"}
        {"  "}
        with {turns} moves
      </h1>
    </div>
  );
};

export default MessageCard;
