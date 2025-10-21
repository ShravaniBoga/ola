import React from "react";
import "./CitySelectionSection.css";

import bangalore from "../../assets/city_bangalore.webp";
import chennai from "../../assets/city_chennai.webp";
import delhi from "../../assets/city_delhi.webp";
import hyderabad from "../../assets/city_hyderabad.webp";
import kolkata from "../../assets/city_kolkata.webp";
import mumbai from "../../assets/city_mumbai.webp";
import pune from "../../assets/city_pune.webp";
import jaipur from "../../assets/city_jaipur.webp";

const cities = [
  { name: "Bangalore", image: bangalore },
  { name: "Chennai", image: chennai },
  { name: "Delhi NCR", image: delhi },
  { name: "Hyderabad", image: hyderabad },
  { name: "Kolkata", image: kolkata },
  { name: "Mumbai", image: mumbai },
  { name: "Pune", image: pune },
  { name: "Jaipur", image: jaipur },
];

const CitySelectionSection = () => {
  return (
    <div className="city-container">
      <div className="city-grid">
        {cities.map((city, index) => (
          <div className="city-card" key={index}>
            <img src={city.image} alt={city.name} className="city-image" />
            <div className="city-overlay">
              <h3 className="city-name">{city.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CitySelectionSection;
