import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./LoginForm.css";

const LoginForm = ({ role = "User", onClose }) => {
  const [phone, setPhone] = useState("");

  return (
    <div className="login-form">
      <h2 className="login-title">Login as {role}</h2>
      <p className="login-subtitle">
        Enter your registered {role.toLowerCase()} phone number or create a new
        account.
      </p>

      {/* ✅ Country selector + phone input */}
      <div className="phone-input-wrapper">
        <PhoneInput
          country={"in"}
          value={phone}
          onChange={(value) => setPhone(value)}
          inputProps={{
            name: "phone",
            required: true,
          }}
          inputStyle={{
            width: "100%",
            height: "48px",
            borderRadius: "10px",
            border: "1.5px solid #ccc",
            fontSize: "1rem",
            color: "#333",
          }}
          buttonStyle={{
            borderRadius: "10px 0 0 10px",
          }}
          containerStyle={{
            width: "100%",
          }}
        />
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
