import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import OtpInput from "react-otp-input";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../../components/firebase/firebase";
import "./SignIn.css";

const SignIn = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  // ✅ Setup Recaptcha
  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "normal",
          callback: (response) => {
            console.log("🧩 Recaptcha verified", response);
          },
          "expired-callback": () => {
            console.log("⚠️ Recaptcha expired, please retry");
          },
        }
      );
      window.recaptchaVerifier.render().then((widgetId) => {
        console.log("✅ Recaptcha rendered with widgetId:", widgetId);
      });
    }
  };

  // ✅ Send OTP
  const sendOtp = async () => {
    if (!phone || phone.length < 10) {
      alert("Enter a valid phone number including country code");
      return;
    }

    setupRecaptcha();
    const appVerifier = window.recaptchaVerifier;
    const phoneNumber = `+${phone}`;

    try {
      const confirmation = await signInWithPhoneNumber(
        auth,
        phoneNumber,
        appVerifier
      );
      setConfirmationResult(confirmation);
      setOtpSent(true);
      console.log("✅ OTP sent to:", phoneNumber);
      alert("OTP sent successfully!");
    } catch (error) {
      console.error("❌ Error sending OTP:", error);
      alert("Failed to send OTP. Check console for details.");
    }
  };

  // ✅ Verify OTP
  const verifyOtp = async () => {
    if (!otp || otp.length < 6) {
      alert("Please enter the 6-digit OTP");
      return;
    }

    try {
      const result = await confirmationResult.confirm(otp);
      console.log("✅ User verified:", result.user);
      setShowSuccess(true);

      // optional: redirect after 2 seconds
      setTimeout(() => {
        setShowSuccess(false);
        window.location.href = "/"; // change route as needed
      }, 2000);
    } catch (error) {
      console.error("❌ Invalid OTP:", error);
      alert("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-card">
        <h2>Phone Number Login</h2>
        <p>Enter your phone number to receive an OTP</p>

        {!otpSent ? (
          <>
            <div className="phone-input-wrapper">
              <PhoneInput
                country={"in"}
                value={phone}
                onChange={setPhone}
                inputStyle={{
                  width: "100%",
                  borderRadius: "6px",
                  padding: "10px 45px 10px 50px",
                  fontSize: "15px",
                  border: "1px solid #ccc",
                }}
                buttonStyle={{
                  border: "1px solid #ccc",
                  borderRight: "none",
                  backgroundColor: "#f9f9f9",
                }}
              />
            </div>

            <div id="recaptcha-container"></div>

            <button className="send-btn" onClick={sendOtp}>
              Send OTP
            </button>
          </>
        ) : (
          <>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              inputType="number"
              renderSeparator={<span>&nbsp;&nbsp;</span>}
              renderInput={(props) => <input {...props} className="otp-box" />}
            />
            <button className="verify-btn" onClick={verifyOtp}>
              Verify OTP
            </button>
          </>
        )}
      </div>

      {/* ✅ Success Popup */}
      {showSuccess && (
        <div className="success-popup">
          <div className="popup-content">
            <h3>🎉 Login Successful!</h3>
            <p>Redirecting...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignIn;
