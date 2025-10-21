import React from "react";
import "./VehicleDropdown.css";

const VehicleDropdown = ({ vehicles, moreLinks, title }) => {
  return (
    <div className="dropdown-content">
      <div className="vehicle-grid">
        {vehicles.map((item, index) => (
          <div key={index} className="vehicle-card">
            <img src={item.image} alt={item.name} />
            <h3>
              {item.name} {item.isNew && <span className="new-badge">NEW</span>}
            </h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>

      <div className="more-links">
        <h4>{title}</h4>
        {moreLinks.map((link, index) => (
          <a key={index} href="#">
            {link}
          </a>
        ))}
      </div>
    </div>
  );
};

export default VehicleDropdown;
