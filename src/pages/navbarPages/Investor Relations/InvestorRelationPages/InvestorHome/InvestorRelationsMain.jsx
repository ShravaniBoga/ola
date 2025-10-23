import React from "react";
import "./InvestorRelationsMain.css";
import { FaVideo, FaChartBar, FaFileAlt } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const InvestorRelationsMain = () => {
  return (
    <section className="ir-main">
      {/* === Left Section === */}
      <div className="ir-main-left">
        <h4>Investor Relations</h4>
        <h1>
          Pioneering India's <br /> Electric Revolution
        </h1>
        <button className="ir-main-btn">
          Q1 Earnings Call Invite <FiArrowRight className="arrow-icon" />
        </button>
      </div>

      {/* === Right Section === */}
      <div className="ir-main-right">
        <h4>Investor Relations</h4>

        <div className="ir-card">
          <FaChartBar className="ir-icon" />
          <span>Shareholders' Letter Q1</span>
          <FiArrowRight className="ir-arrow" />
        </div>

        <div className="ir-card">
          <FaVideo className="ir-icon" />
          <span>Earnings Call Replay Q1</span>
          <FiArrowRight className="ir-arrow" />
        </div>

        <div className="ir-card">
          <FaFileAlt className="ir-icon" />
          <span>Earnings Call Transcript Q1</span>
          <FiArrowRight className="ir-arrow" />
        </div>
      </div>
    </section>
  );
};

export default InvestorRelationsMain;
