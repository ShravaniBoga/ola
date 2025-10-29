import React from "react";
// import LoginForm from "../components/auth/LoginForm";
import "./LoginPage.css";
import LoginForm from "../authentication/LoginForm";

const LoginPage = ({ role = "User" }) => {
  return (
    <div className="login-page">
      <LoginForm role={role} />
    </div>
  );
};

export default LoginPage;
