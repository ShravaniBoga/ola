// import React from 'react'
// import Subscribe from '../../../../../components/home/Subscribe';
// import Footer from '../../../../../components/ui/Footer';

// const NewsEvents = () => {
//     return <div>
//         <Subscribe />
//         <Footer/>
//   </div>;
// }

// export default NewsEvents

import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import "./NewsEvents.css";
import olaDark from "../../../../../assets/ola_dark.webp"; // update correct path

const NewsEvents = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Media Articles");

  const tabs = ["Media Articles", "Events", "Press Kit"];

  return (
    <div className="news-events-page">
      {/* ---------- HEADER ---------- */}
      <header className="news-header">
        <img src={olaDark} alt="Ola logo" className="ola-logo" />

        <div
          className="hamburger"
          onClick={() => navigate("/menu")}
          aria-label="Menu"
        >
          <GiHamburgerMenu />
        </div>
      </header>

      {/* ---------- TITLE & SUBTITLE ---------- */}
      <div className="news-title-section">
        <h1 className="news-heading">News And Events</h1>
        <p className="news-subheading">
          Grab the latest news and announcements
        </p>
      </div>

      {/* ---------- TAB BUTTONS ---------- */}
      <div className="news-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`news-tab-btn ${activeTab === tab ? "active-tab" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ---------- BELOW CARDS SECTION (will add next) ---------- */}
      <div className="news-cards-container">
        {/* Later: use <NewsCard image={} year={} title={} link={} /> */}
      </div>
    </div>
  );
};

export default NewsEvents;
