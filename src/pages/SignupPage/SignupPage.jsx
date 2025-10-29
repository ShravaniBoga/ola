// src/pages/SignupPage.jsx
import React from "react";
import "./SignupPage.css";

const SignupPage = () => {
  return (
    <div className="signup-page">
      <div className="signup-box">
        <h2>Create a new account</h2>
        <input type="text" placeholder="Full name" />
        <input type="text" placeholder="Phone number" />
        <input type="password" placeholder="Password" />
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default SignupPage;
