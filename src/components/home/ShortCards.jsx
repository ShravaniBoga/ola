import React from "react";
import Button from "../../components/ui/Button";
import serviceHeading from "../../assets/Service_cards_heading.webp";
import cardImage from "../../assets/card2_bike1.webp";
import "./ShortCards.css";

const ShortCards = () => {
  return (
    <div className="short-cards-container">
      <h2 className="short-cards-heading">Ola Service Centres Near You</h2>
      <img
        src={serviceHeading}
        alt="Service Heading"
        className="short-cards-heading-image"
      />

      <div className="short-card-single">
        <img src={cardImage} alt="Service Card" className="short-card-image" />
      </div>

      <div className="short-card-button">
        <Button
          text="Explore Service Locations"
          bgColor="black"
          textColor="white"
          hasArrow={true}
        />
      </div>
      <h6 className="subline">
        2X network by Dec. 3rd party mechanics by Dec 2025. Quick Service
        Guarantee rolling out from 10th Oct.
      </h6>
    </div>
  );
};

export default ShortCards;
