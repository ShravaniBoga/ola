import React from "react";
import "./TestRidePage.css";
import storeImg from "../../../assets/storeImg.png"; // Update this image path

const TestRidePage = () => {
  return (
    <div className="test-ride-container">
      {/* === LEFT: Image === */}
      <div className="test-ride-left">
        <img src={storeImg} alt="Ola Electric Store" />
      </div>

      {/* === RIGHT: Form === */}
      <div className="test-ride-right">
        <div className="test-ride-form-wrapper">
          <h1>OLA ELECTRIC STORE</h1>
          <p>
            Your go-to for test rides, details on finance options, service and
            more.
          </p>

          <form className="test-ride-form">
            {/* Phone input */}
            <div className="input phone-input">
              <span className="flag">🇮🇳 +91</span>
              <input type="tel" placeholder="Phone Number" />
            </div>

            {/* Name */}
            <div className="input">
              <input type="text" placeholder="Name" />
            </div>

            {/* Date and Pincode */}
            <div className="input-row">
              <input type="date" />
              <input type="text" placeholder="Pincode" />
            </div>

            {/* Select Variant */}
            <div className="input">
              <select>
                <option>Select variant</option>
                <option>Ola S1 Air</option>
                <option>Ola S1 Pro</option>
                <option>Ola S1 X</option>
              </select>
            </div>

            {/* Button */}
            <button disabled>Confirm Booking</button>

            {/* Disclaimer */}
            <p className="disclaimer">
              By choosing to confirm, you consent to share your Ola TR &
              Purchase status with our Brand Champion and to receive calls with
              regard to your booked Ola Electric Store Visit.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TestRidePage;
