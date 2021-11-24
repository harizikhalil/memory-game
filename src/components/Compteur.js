import React, { useState, useEffect } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import MessageCard from "./MessageCard";
import "./Compteur.css";
const Compteur = ({ startCounter, finish, onClose, turns }) => {
  const [time, setTime] = useState(0); // counteur
  const [timerId, setTimerId] = useState(0); // time used to clear the interval
  useEffect(() => {
    if (startCounter === false) {
      setTime(0);
    }
    let intervalId = null;
    if (startCounter && finish !== 3) {
      intervalId = setInterval(() => {
        setTime((prev) => (prev += 1));
      }, 1000);
      setTimerId(intervalId);
    } else {
      clearInterval(timerId);
      setTimerId(time);
      setTime(0);
    }
  }, [startCounter && finish !== 3]); //check that is only work when the user didnt find all the pair

  return (
    <div className="compteur_container">
      <div className="moves">
        <h2>moves : {turns}</h2>
      </div>
      <div className="timer">
        <h2>time : {time}</h2>
      </div>
      <Modal open={finish === 3} onClose={onClose} center>
        <MessageCard turns={turns} timerId={timerId} />
      </Modal>
    </div>
  );
};

export default Compteur;
