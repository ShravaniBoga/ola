import React from "react";
import community1 from "../../assets/our_community1.webp";
import community2 from "../../assets/our_community2.webp";
import community3 from "../../assets/our_community3.webp";
import community4 from "../../assets/our_community4.webp";
import community5 from "../../assets/our_community5.webp";
import "./Community.css";

const Community = () => {
  return (
    <section className="community-container">
      <div className="community-content">
        <h2 className="community-title">Our Community Drives Us</h2>

        <div className="community-images-grid">
          <img src={community1} alt="Community 1" className="community-image" />
          <img src={community2} alt="Community 2" className="community-image" />
          <img src={community3} alt="Community 3" className="community-image" />
          <img src={community4} alt="Community 4" className="community-image" />
          <img src={community5} alt="Community 5" className="community-image" />
        </div>

       
      </div>
    </section>
  );
};

export default Community;
