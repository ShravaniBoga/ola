import React from "react";
import BorderlessButton from "../ui/BorderlessButton";
import hub1 from "../../assets/hub1.webp";
import hub2 from "../../assets/hub2.webp";
import hub3 from "../../assets/hub3.webp";
import "./Hub.css";

const Hub = () => {
  return (
    <section className="hub-section">
      <div className="hub-text">
        <h2 className="hub-heading">
          Making India the <br /> Global EV hub of the world
        </h2>
        <p className="hub-description">
          A hub for manufacturing quality EVs and to build a robust EV supply
          chain ecosystem.
        </p>

        <BorderlessButton
          text="Learn more"
          textColor="#1fad58"
          hasArrow={true}
          className="hub-learn-btn"
        />
      </div>

      <div className="hub-images">
        <div className="hub-image-main">
          <img src={hub1} alt="EV Hub Main" />
        </div>

        <div className="hub-image-grid">
          <div className="hub-image-item">
            <img src={hub2} alt="Futurefactory" />
            <h3>Futurefactory</h3>
            <p>
              Largest integrated and automated E2W manufacturing plant in India.
            </p>
            <BorderlessButton
              text="Learn more"
              textColor="#1fad58"
              hasArrow={true}
            />
          </div>

          <div className="hub-image-item">
            <img src={hub3} alt="Gigafactory" />
            <h3>Gigafactory</h3>
            <p>India's big leap in building the future of energy.</p>
            <BorderlessButton
              text="Learn more"
              textColor="#1fad58"
              hasArrow={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hub;
