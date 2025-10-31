

import React from "react";
import { useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import "./HamburgerMenu.css";

import ham1 from "../../../../../assets/ham1.webp";
import ham2 from "../../../../../assets/ham2.webp";
import ham3 from "../../../../../assets/ham3.webp";
import ham4 from "../../../../../assets/ham4.webp";
import ham5 from "../../../../../assets/ham5.webp";

const HamburgerMenu = () => {
  const navigate = useNavigate();

  const vehicles = [
    { img: ham1, name: "Ola S1 Pro+", tag: "Gen3" },
    { img: ham2, name: "Ola S1 Pro", tag: "Gen3" },
    { img: ham3, name: "Ola S1 X", tag: "Gen3" },
    { img: ham4, name: "Roadster X+", tag: "New" },
    { img: ham5, name: "Roadster X", tag: "New" },
  ];

  const sections = [
    {
      heading: "Tech & Design",
      links: ["Software", "Cell Tech", "Manufacturing", "Design"],
    },
    {
      heading: "Ownership",
      links: [
        "Electric Store",
        "Hypercharger",
        "Community",
        "Referrals",
        "Hyperservice",
        "Battery Warranty",
        "EMI Calculator",
        "Accessories",
        "Charger Refund",
      ],
    },
    {
      heading: "Our Company",
      links: [
        "About Us",
        "Investor Relations",
        "News & Events",
        "Blogs",
        "Careers",
        "Partner with us",
      ],
    },
    { heading: "Account", links: ["Sign in", "Support"] },
  ];

  // ✅ Function to handle navigation based on link clicked
  const handleLinkClick = (link) => {
    if (link === "Sign in") {
      navigate("/signin"); // Redirect to sign-in page
    } else if (link === "Support") {
      navigate("/support"); // Example route if you have it
    } else {
      console.log(`Clicked on ${link}`);
      // You can add other navigations later if needed
    }
  };

  return (
    <div className="hamburger-menu-container">
      {/* Close Button — redirects to homepage */}
      <button
        className="hamburger-close-btn"
        onClick={() => navigate("/")}
        aria-label="Close Menu"
      >
        <FaTimes />
      </button>

      <div className="hamburger-content">
        {/* LEFT SIDE — VEHICLES */}
        <div className="hamburger-left">
          {vehicles.map((v, i) => (
            <div className="vehicle-card" key={i}>
              <img src={v.img} alt={v.name} />
              <p className="vehicle-name">{v.name}</p>
              <p className="vehicle-tag">{v.tag}</p>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE — MENU LINKS */}
        <div className="hamburger-right">
          {sections.map((sec, i) => (
            <div className="menu-column" key={i}>
              <h3 className="menu-heading">{sec.heading}</h3>
              {sec.links.map((link, idx) => (
                <li
                  key={idx}
                  className="menu-item"
                  onClick={() => handleLinkClick(link)} // ✅ Clickable navigation
                >
                  {link}
                </li>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
