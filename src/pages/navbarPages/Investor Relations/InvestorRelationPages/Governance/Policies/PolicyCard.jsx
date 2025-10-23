import React from "react";
import "./PolicyCard.css";

const PolicyCard = ({ image, title }) => {
  return (
    <div className="policy-card">
      <img src={image} alt={title} className="policy-image" />
      <p className="policy-title">{title}</p>
    </div>
  );
};

export default PolicyCard;
