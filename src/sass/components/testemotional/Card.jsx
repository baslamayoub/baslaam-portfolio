import React from "react";

const Card = ({ emotion }) => {
  return (
    <div className="testemotional-card">
      <img alt={emotion.name} src={emotion.image} className="testemotional-img" />
      <div className="testemotional-card-content">
        <h3 className="testemotional-name">{emotion.name}</h3>
        <p className="testemotional-role">{emotion.role}</p>
        <p className="testemotional-desc">{emotion.testemotional}</p>
      </div>
    </div>
  );
};

export default Card;
