import React from "react";
import "./LoginForm.css";

const LoginForm = ({ role = "User", onClose }) => {
  return (
    <div className="login-form">
      <h2 className="login-title">Login as {role}</h2>
      <p className="login-subtitle">
        Enter your registered {role.toLowerCase()} phone number or create a new
        account.
      </p>

      <div className="phone-input">
        <span className="flag">🇮🇳</span>
        <span className="code">+91</span>
        <input type="text" placeholder="Enter phone number" />
      </div>

      <button className="next-btn">Next →</button>

      <p className="signup-text">
        Don't have an account?{" "}
        <a href="/signup" className="signup-link">
          Sign up
        </a>
      </p>
    </div>
  );
};

export default LoginForm;
