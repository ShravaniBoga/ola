import React from "react";
import Button from "../../components/ui/Button";
import grid_card from "../../assets/grid_card1.webp";
import "./GridCards.css";

const GridCards = () => {
  return (
    <div className="grid-cards-container">
      <h2 className="grid-cards-heading">The all-new Gen-3 platform</h2>

      <div className="grid-card-single">
        <img src={grid_card} alt="Gen-3 Platform" className="grid-card-image" />
      </div>

      
    </div>
  );
};

export default GridCards;
