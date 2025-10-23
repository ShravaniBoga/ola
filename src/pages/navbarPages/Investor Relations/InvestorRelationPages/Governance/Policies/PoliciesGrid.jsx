import React from "react";
import PolicyCard from "./PolicyCard";
import "./PoliciesGrid.css";

import img1 from "../../../../../../assets/policies1.webp";
import img2 from "../../../../../../assets/policies2.webp";
import img3 from "../../../../../../assets/policies3.webp";

import img4 from "../../../../../../assets/policies4.webp";
import img5 from "../../../../../../assets/policies5.webp";

import img6 from "../../../../../../assets/policies6.webp";
import img7 from "../../../../../../assets/policies7.webp";
import img8 from "../../../../../../assets/policies8.webp";
import img9 from "../../../../../../assets/policies9.webp";
import img10 from "../../../../../../assets/policies10.webp";

import img11 from "../../../../../../assets/policies11.webp";
import img12 from "../../../../../../assets/policies12.webp";
import img13 from "../../../../../../assets/policies13.webp";
import img14 from "../../../../../../assets/policies14.webp";
import img15 from "../../../../../../assets/policies15.webp";
import img16 from "../../../../../../assets/policies16.webp";

const policies = [
  {
    image: img1,
    title: "Code of conduct for all members of the Board and senior management",
  },
  {
    image: img2,
    title: "Policy for evaluation of performance of Board of Directors",
  },
  {
    image: img3,
    title: "Risk management policy",
  },

  {
    image: img4,
    title: "Price Sensitive Info Disclosure",
  },
  {
    image: img5,
    title: "Employee Trading Code",
  },
  {
    image: img6,
    title: "Corporate social responsibility policy",
  },
  {
    image: img7,
    title: "Nomination and remuneration policy",
  },
  {
    image: img8,
    title: "Whistle blower policy",
  },
  {
    image: img9,
    title: "Dividend distribution policy",
  },
  {
    image: img10,
    title: "Policy for archival of website disclosures",
  },
  {
    image: img11,
    title: "Policy on materiality of related party transactions",
  },
  {
    image: img12,
    title: "Familiarization programme for independent directors",
  },
  {
    image: img13,
    title: "Policy for determinin material subsidiaries",
  },
  {
    image: img14,
    title: "Materiality policy.",
  },
  {
    image: img15,
    title: "Anti-corruption and anti-bribery policy",
  },
  {
    image: img16,
    title: "Employees Equity Linked Incentive Plan 2019",
  },
  {
    image: img2,
    title: "Prevention of Sexual Harassment (POSH) Policy",
  },
  {
    image: img1,
    title: "ESG Polic",
  },
];

const PoliciesGrid = () => {
  return (
    <section className="policies-section">
      <div className="policies-container">
        <h2 className="policies-heading">Company Policies</h2>
        <div className="policies-grid">
          {policies.map((policy, index) => (
            <PolicyCard key={index} image={policy.image} title={policy.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PoliciesGrid;
