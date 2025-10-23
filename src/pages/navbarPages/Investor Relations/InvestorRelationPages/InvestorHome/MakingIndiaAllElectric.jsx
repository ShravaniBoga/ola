import React from "react";
import "./MakingIndiaAllElectric.css";
import es1 from "../../../../../assets/es1.webp";
import em1 from "../../../../../assets/em1.webp";
import c1 from "../../../../../assets/c1.webp";

const MakingIndiaAllElectric = () => {
  return (
    <section className="electric-section">
      <div className="electric-container">
        <h2 className="electric-heading">
          Making India <br /> all electric.
        </h2>

        <div className="electric-grid">
          {/* 1️⃣ Scooters */}
          <div className="electric-card image-card">
            <img src={es1} alt="Electric Scooters" />
          </div>
          <div className="electric-card text-card">
            <h3>Electric Scooters</h3>
            <p>
              With our diverse range of electric scooters, we're setting the
              stage for a sustainable and electrifying future of mobility in
              India.
            </p>
            <a href="#" className="learn-link">
              Learn more →
            </a>
          </div>

          {/* 2️⃣ Motorcycles */}
          <div className="electric-card text-card">
            <h3>Electric Motorcycles</h3>
            <p>
              Marking a significant stride in defining the future of
              motorcycling.
            </p>
            <a href="#" className="learn-link">
              Learn more →
            </a>
          </div>
          <div className="electric-card image-card">
            <img src={em1} alt="Electric Motorcycles" />
          </div>

          {/* 3️⃣ Battery Cell */}
          <div className="electric-card image-card">
            <img src={c1} alt="4680 Cell" />
          </div>
          <div className="electric-card text-card">
            <h3>Indigenously developed 4680 Cell</h3>
            <p>
              Transforming the global energy landscape through core cell
              technology development, right here in India.
            </p>
            <a href="#" className="learn-link">
              Learn more →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakingIndiaAllElectric;
