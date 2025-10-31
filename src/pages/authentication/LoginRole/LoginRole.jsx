import React from "react";
// import LoginForm from "../components/auth/LoginForm";
import "./LoginRole.css";
import LoginForm from "../LoginForm";

const LoginRole = ({ role = "User" }) => {
  return (
    <div className="login-page">
      <LoginForm role={role} />
    </div>
  );
};

export default LoginRole;
