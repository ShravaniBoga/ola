import React from "react";
import "./AboutUs.css"; // Importing CSS file
import three_bikes from "../../assets/three_bikes.webp";

const AboutUs = () => {
  return (
    <section className="about-container">
      {/* Left Section */}
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          At Ola Electric, we're redefining mobility with our vision of
          <span className="highlight"> "India Inside" </span>
          by building a powertrain (4680 Bharat Cell & ferrite motor) and
          technology (MoveOS) in-house. Powered by our cutting-edge MoveOS
          platform, we deliver smarter, connected, and constantly evolving
          experiences. With a community of nearly 1 million riders, we’re
          driving India towards a sustainable, electric future.
        </p>

        <blockquote>
          Making India the global epicentre of EV revolution
        </blockquote>

        <a href="#" className="learn-more">
          Learn more →
        </a>
      </div>

      {/* Right Section - Image */}
      <div className="about-image">
        <img src={three_bikes} alt="Electric Scooters" />
      </div>
    </section>
  );
};

export default AboutUs;
