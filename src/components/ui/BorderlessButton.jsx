// components/ui/BorderlessButton.jsx
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import "./BorderlessButton.css";

const BorderlessButton = ({
  text,
  textColor = "#1fad58",
  hasArrow = true,
  onClick,
  className = "",
  style = {},
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`borderless-button ${className}`}
      style={{
        color: textColor,
        ...style,
      }}
    >
      <span className="button-text">{text}</span>
      {hasArrow && <IoIosArrowRoundForward size={20} />}
    </button>
  );
};

export default BorderlessButton;
