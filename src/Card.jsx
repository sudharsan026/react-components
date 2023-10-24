import React from "react";
import "./card.css";
const Card = (props) => {
  const { cardTitle, cardDes, key } = props;
  return (
    <div className="card" key={key}>
      <img
        className="card-image"
        src="https://placehold.co/200x200"
        alt="Loading"
      />
      <h2 className="card-title">{cardTitle}</h2>
      <p className="card-text">{cardDes}</p>
    </div>
  );
};

export default Card;
