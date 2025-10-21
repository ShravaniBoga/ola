import React from "react";
import "./MeetUsSection.css";
import storeImage from "../../assets/ola_store.png"; // make sure this file exists in your assets folder

const MeetUsSection = () => {
  return (
    <div className="meet-container">
      <div className="meet-left">
        <h2 className="meet-title">
          Come on over. Meet us in{" "}
          <span className="meet-select">
            Select City <span className="down-arrow">▼</span>
          </span>
        </h2>

        <p className="meet-description">
          Ola Electric Stores. Because nothing beats a one on one with the S1.
        </p>

        <a href="#" className="meet-link">
          More about Ola Electric Stores <span className="right-arrow">→</span>
        </a>
      </div>

      <div className="meet-right">
        <img src={storeImage} alt="Ola Store" className="meet-image" />
      </div>
    </div>
  );
};

export default MeetUsSection;
