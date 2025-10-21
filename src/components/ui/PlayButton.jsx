import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import "./PlayButton.css";

const PlayButton = ({ size = 26, color = "black", className = "" }) => {
  return (
    <div className={`play-button ${className}`}>
      <BsFillPlayFill size={size} color={color} />
    </div>
  );
};

export default PlayButton;
