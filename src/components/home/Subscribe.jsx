import React from "react";
import "./Subscribe.css";

const Subscribe = () => {
  return (
    <section className="subscribe-section">
      {/* Left side text */}
      <div className="subscribe-text">
        <h3>
          <em>Subscribe to learn about our latest news</em>
        </h3>
      </div>

      {/* Right side input */}
      <form className="subscribe-form">
        <input
          type="email"
          placeholder="Enter your email"
          className="subscribe-input"
          required
        />
        <button type="submit" className="subscribe-btn">
          →
        </button>
      </form>
    </section>
  );
};

export default Subscribe;
