import React from "react";
import "./FinancialsComponent.css";

const FinancialsComponent = () => {
  const data = [
    {
      year: "FY 26",
      quarter: "Q1",
      earningRelease: "INR",
      shareholdersLetter: "PDF",
      kpiDatabook: "XLS",
      transcript: ["Listen", "PDF"],
      financialResults: "PDF",
      shareholding: "PDF",
    },
    {
      year: "FY 25",
      quarter: "Q4",
      earningRelease: "INR",
      shareholdersLetter: "PDF",
      kpiDatabook: "XLS",
      transcript: ["Listen", "PDF"],
      financialResults: "PDF",
      shareholding: "PDF",
    },
    {
      year: "FY 25",
      quarter: "Q3",
      earningRelease: "INR",
      shareholdersLetter: "PDF",
      kpiDatabook: "XLS",
      transcript: ["Listen", "PDF"],
      financialResults: "PDF",
      shareholding: "PDF",
    },
    {
      year: "FY 25",
      quarter: "Q2",
      earningRelease: "INR",
      shareholdersLetter: "PDF",
      kpiDatabook: "XLS",
      transcript: ["Listen", "PDF"],
      financialResults: "PDF",
      shareholding: "PDF",
    },
    {
      year: "FY 25",
      quarter: "Q1",
      earningRelease: "INR",
      shareholdersLetter: "PDF",
      kpiDatabook: "NA",
      transcript: ["Listen", "PDF"],
      financialResults: "PDF",
      shareholding: "NA",
    },
  ];

  return (
    <div className="financials-container">
      <h2 className="financials-heading">Financials</h2>

      {/* Tabs */}
      <div className="financials-tabs">
        <span className="active">Quarterly Results</span>
        <span>Annual Report</span>
        <span>Archives</span>
      </div>

      {/* Table */}
      <div className="financials-table">
        <div className="financials-header">
          <div>YEAR & QTR</div>
          <div>EARNINGS RELEASE</div>
          <div>SHAREHOLDERS' LETTER</div>
          <div>KPI DATABOOK</div>
          <div>EARNINGS CALL & TRANSCRIPT</div>
          <div>FINANCIAL RESULTS</div>
          <div>SHAREHOLDING PATTERN</div>
        </div>

        {data.map((row, index) => (
          <div className="financials-row" key={index}>
            <div className="fy">
              <span className="fy-label">{row.year}</span>
              <span className="quarter">{row.quarter}</span>
            </div>
            <div>{row.earningRelease}</div>
            <div>{row.shareholdersLetter}</div>
            <div>{row.kpiDatabook}</div>
            <div className="transcript">
              {row.transcript.map((item, i) => (
                <span key={i}>{item}</span>
              ))}
            </div>
            <div>{row.financialResults}</div>
            <div>{row.shareholding}</div>
          </div>
        ))}
      </div>

     
    </div>
  );
};

export default FinancialsComponent;
