import React, { useState } from "react";
import "./LeadershipGovernance.css";
import led1 from "../../../../../../assets/led1.webp";
import led2 from "../../../../../../assets/led2.webp";
import led3 from "../../../../../../assets/led3.webp";
import led4 from "../../../../../../assets/led4.webp";
import led5 from "../../../../../../assets/led5.webp";
import led6 from "../../../../../../assets/led6.webp";

const LeadershipGovernance = () => {
  const [activeTab, setActiveTab] = useState("board");

  const boardMembers = [
    {
      name: "Bhavish Aggarwal",
      role: "Chairman and Managing Director",
      img: led1,
    },
    {
      name: "Ananth Sankaranarayanan",
      role: "Independent Director",
      img: led2,
    },

    {
      name: "Krishnamurthy Venugopala Tenneti",
      role: "Non-Executive Director",
      img: led3,
    },
    { name: "Manoj Kumar Kohli", role: "Independent Director", img: led4 },
    { name: "Arun Sarin", role: "Non-Executive Director", img: led5 },
    { name: "Shradha Sharma", role: "Independent Director", img: led6 },
  ];

  const committeeMembers = [
    { name: "Name 1", role: "Audit Committee", img: "" },
    { name: "Name 2", role: "Nomination & Remuneration Committee", img: "" },
    { name: "Name 3", role: "Stakeholders Relationship Committee", img: "" },
  ];

  const activeMembers = activeTab === "board" ? boardMembers : committeeMembers;

  return (
    <div className="leadership-container">
      <h2 className="leadership-heading">Leadership & Governance</h2>

      {/* Tabs */}
      <div className="leadership-tabs">
        <button
          className={activeTab === "board" ? "active" : ""}
          onClick={() => setActiveTab("board")}
        >
          Board
        </button>
        <button
          className={activeTab === "committee" ? "active" : ""}
          onClick={() => setActiveTab("committee")}
        >
          Committee Composition
        </button>
      </div>

      {/* Line under active tab */}
      <div className="tab-underline"></div>

      {/* Members Grid */}
      <div className="leadership-grid">
        {activeMembers.map((member, index) => (
          <div className="leader-card" key={index}>
            <div className="leader-image">
              {member.img ? (
                <img src={member.img} alt={member.name} />
              ) : (
                <div className="image-placeholder"></div>
              )}
            </div>
            <h3 className="leader-name">{member.name}</h3>
            <p className="leader-role">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadershipGovernance;
