import React from "react";
import "./SignIn.css";
import { IoClose } from "react-icons/io5";
import indiaFlag from "../../assets/indiaFlag.png"; // ✅ use your own flag image path
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/"); // ✅ go back to homepage on close
  };

  return (
    <div className="signin-overlay">
      <div className="signin-modal">
        <button className="close-btn" onClick={handleClose}>
          <IoClose size={22} />
        </button>

        <h2 className="signin-title">Fast forward to the future</h2>
        <p className="signin-subtitle">
          Enter your registered Ola phone number or create a new account
        </p>

        <div className="input-container">
          <div className="flag-section">
            <img src={indiaFlag} alt="India Flag" className="flag-img" />
            <span className="country-code">+91</span>
          </div>
          <input
            type="text"
            placeholder="Enter phone number"
            className="phone-input"
          />
        </div>

        <button className="next-btn">Next →</button>
      </div>
    </div>
  );
};

export default SignIn;
