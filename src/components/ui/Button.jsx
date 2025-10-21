// components/common/Button.jsx
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import "./Button.css"; // Import CSS file

const Button = ({
  text,
  bgColor = "black",
  textColor = "white",
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
      className={`custom-button ${className}`}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        ...style,
      }}
    >
      {text}
      {hasArrow && <IoIosArrowRoundForward size={20} />}
    </button>
  );
};

export default Button;
