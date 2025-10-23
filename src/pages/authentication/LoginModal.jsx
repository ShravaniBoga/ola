import React from "react";
import "./LoginModal.css";
import { IoClose } from "react-icons/io5";

const LoginModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="modal-close" onClick={onClose}>
          <IoClose size={22} />
        </button>

        <h2 className="modal-title">Fast forward to the future</h2>
        <p className="modal-subtitle">
          Enter your registered Ola phone number or create a new account
        </p>

        <div className="phone-input">
          <span className="flag">🇮🇳</span>
          <span className="code">+91</span>
          <input type="text" placeholder="Enter phone number" />
        </div>

        <button className="next-btn">Next →</button>
      </div>
    </div>
  );
};

export default LoginModal;
