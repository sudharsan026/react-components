import React from "react";
import "./Card.css";
const Card = (props) => {
  const { cardData } = props;
  return (
    <div className="card-container">
      {cardData.map((_card) => (
        <div className="card" key={_card.id}>
          <img
            className="card-image"
            src="https://placehold.co/200x200"
            alt="Loading"
          />
          <h2 className="card-title">{_card.name}</h2>
          <p className="card-text">{_card.website}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
