import React from "react";
import "./EMICalculatorSection.css";
import icon from "../../assets/icon.svg";
import Button from "../../components/ui/Button";
const EMICalculatorSection = () => {
  return (
    <div className="emi-section">
      <h2 className="emi-title">Plan Your Ride with Easy EMIs</h2>
      <p className="emi-subtitle">
        Use our EMI Calculator to estimate your monthly payments and find the
        right Ola vehicle for your budget.
      </p>

      <div className="emi-details">
        <div className="emi-detail-box">
          <div>
            <img src={icon} alt="" />
          </div>

          <div>
            <p className="emi-label">Tenure Up To</p>
            <h4 className="emi-value">60 Months</h4>
          </div>
        </div>

        <div className="emi-detail-box">
          <div>
            <img src={icon} alt="" />
          </div>
          <div>
            <p className="emi-label">Lowest Rate of Interest</p>
            <h4 className="emi-value">6.99%</h4>
          </div>
        </div>

        <div className="emi-detail-box">
          <div>
            <img src={icon} alt="" />
          </div>

          <div>
            <p className="emi-label">Downpayment</p>
            <h4 className="emi-value">Starts at ₹0</h4>
          </div>
        </div>

        <div className="emi-detail-box">
          <div>
            <img src={icon} alt="" />
          </div>
          <div>
            {" "}
            <p className="emi-label">Processing Fee</p>
            <h4 className="emi-value">Zero</h4>
          </div>
        </div>
      </div>

      <div className="calculate">
        <Button
          text="Calculate your EMI"
          bgColor="black"
          textColor="white"
          hasArrow={true}
        />
      </div>
    </div>
  );
};

export default EMICalculatorSection;
