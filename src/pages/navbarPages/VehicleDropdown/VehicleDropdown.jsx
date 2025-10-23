import React from "react";
import "./VehicleDropdown.css";

const VehicleDropdown = ({ vehicles, moreLinks, title }) => {
  return (
    <div className="vehicle-dropdown">
      <div className="vehicle-list">
        {vehicles.map((vehicle, index) => (
          <div key={index} className="vehicle-card">
            <img
              src={vehicle.image}
              alt={vehicle.name}
              className="vehicle-img"
            />
            <div className="vehicle-info">
              <h3 className="vehicle-name">
                {vehicle.name}
                {vehicle.isNew && <span className="new-badge">NEW</span>}
              </h3>
              <p className="vehicle-price">{vehicle.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="more-section">
        <h4 className="more-title">{title}</h4>
        <ul className="more-links">
          {moreLinks.map((link, i) => (
            <li key={i} className="more-item">
              {link}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VehicleDropdown;
