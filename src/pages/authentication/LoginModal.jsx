import React from "react";
import { IoClose } from "react-icons/io5";
import LoginForm from "./LoginForm";
import "./LoginModal.css";

const LoginModal = ({ role = "User", onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="modal-close" onClick={onClose}>
          <IoClose size={22} />
        </button>
        <LoginForm role={role} />
      </div>
    </div>
  );
};

export default LoginModal;
