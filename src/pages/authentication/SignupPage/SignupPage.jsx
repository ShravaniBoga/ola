// src/pages/SignupPage.jsx
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./SignupPage.css";

const SignupPage = () => {
  const [phone, setPhone] = useState("");

  return (
    <div className="signup-page">
      <div className="signup-box">
        <h2>Create a new account</h2>
        <input type="text" placeholder="Full name" />

        {/* ✅ Modern phone input with flags and country code */}
        <div className="phone-input-wrapper">
          <PhoneInput
            country={"in"}
            value={phone}
            onChange={(value) => setPhone(value)}
            inputProps={{
              required: true,
              name: "phone",
            }}
            inputStyle={{
              width: "100%",
              height: "45px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "1rem",
            }}
            buttonStyle={{
              borderRadius: "6px 0 0 6px",
            }}
            containerStyle={{
              width: "100%",
              margin: "0.5rem 0",
            }}
          />
        </div>

        <input type="password" placeholder="Password" />
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default SignupPage;
