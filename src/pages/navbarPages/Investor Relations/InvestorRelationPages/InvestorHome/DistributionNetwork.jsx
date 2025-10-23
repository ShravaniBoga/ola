import React from "react";
import "./DistributionNetwork.css";

import storeImg from "../../../../../assets/storeImg.png";
import thrivingCommunity from "../../../../../assets/Thriving_community.webp";
import irService from "../../../../../assets/ir_service.webp";
import go from "../../../../../assets/go.webp";

const DistributionNetwork = () => {
  return (
    <section className="distribution-section">
      <div className="distribution-container">
        <h2 className="distribution-heading">
          Our D2C Omnichannel distribution network
        </h2>
        <p className="distribution-subheading">
          An integrated company-owned Sales, Service and charging network.
        </p>

        <div className="distribution-grid">
          {/* Card 1 */}
          <div className="distribution-card">
            <img src={storeImg} alt="Pan India retail network" />
            <h3>Pan India retail network</h3>
            <p>
              India’s largest automotive distribution network with 870 Ola
              Electric Stores.
            </p>
            <a href="#" className="learn-link">
              Learn more →
            </a>
          </div>

          {/* Card 2 */}
          <div className="distribution-card">
            <img src={thrivingCommunity} alt="Thriving Community" />
            <h3>Thriving Community</h3>
            <p>A large thriving community of Ola Scooter owners.</p>
            <a href="#" className="learn-link">
              Learn more →
            </a>
          </div>

          {/* Card 3 */}
          <div className="distribution-card">
            <img src={irService} alt="Always at your service" />
            <h3>Always at your service</h3>
            <p>
              Extensive network of 431 Ola Service centers across 23 states.
            </p>
            <a href="#" className="learn-link">
              Learn more →
            </a>
          </div>

          {/* Card 4 */}
          <div className="distribution-card">
            <img src={go} alt="Go anywhere. Go everywhere" />
            <h3>Go anywhere. Go everywhere</h3>
            <p>Charge up with 248 hypercharging and 764 standard points.</p>
            <a href="#" className="learn-link">
              Learn more →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DistributionNetwork;
