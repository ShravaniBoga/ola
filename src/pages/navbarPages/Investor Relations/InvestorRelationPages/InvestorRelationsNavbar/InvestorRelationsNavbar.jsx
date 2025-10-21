// import React, { useState } from "react";
// import "./InvestorRelationsNavbar.css";
// import { MdKeyboardArrowDown } from "react-icons/md";
// import ola_logo from "../../../../assets/ola_logo_whiteText_backBackground.svg";
// import { useNavigate } from "react-router-dom";

// const InvestorRelationsNavbar = () => {
//   const navigate = useNavigate();

//   const [activeDropdown, setActiveDropdown] = useState(null);

//   const handleMouseEnter = (dropdown) => setActiveDropdown(dropdown);
//   const handleMouseLeave = (dropdown) => {
//     setTimeout(() => {
//       if (activeDropdown === dropdown) setActiveDropdown(null);
//     }, 150);
//   };

//   return (
//     <nav className="ir-navbar">
//       <div className="ir-navbar-container">
//         {/* === Left Logo === */}
//         <div className="ir-logo">
//           <img src={ola_logo} alt="" />
//         </div>

//         {/* === Menu Items === */}
//         <div className="ir-links">
//           <span onClick={() => navigate("/investor-relations")}>Home</span>
//           <span onClick={() => navigate("/financials")}>Financials</span>

//           {/* Governance Dropdown */}
//           <div
//             className="ir-dropdown-container"
//             onMouseEnter={() => handleMouseEnter("governance")}
//             onMouseLeave={() => handleMouseLeave("governance")}
//           >
//             <span>
//               Governance <MdKeyboardArrowDown className="arrow-icon" />
//             </span>
//             {activeDropdown === "governance" && (
//               <div
//                 className="ir-dropdown-content"
//                 onMouseEnter={() => handleMouseEnter("governance")}
//                 onMouseLeave={() => handleMouseLeave("governance")}
//               >
//                 <span onClick={() => navigate("/policies")}>Policies</span>
//                 <span onClick={() => navigate("/board")}>Board</span>
//               </div>
//             )}
//           </div>

//           {/* Shareholder Info Dropdown */}
//           <div
//             className="ir-dropdown-container"
//             onMouseEnter={() => handleMouseEnter("shareholder")}
//             onMouseLeave={() => handleMouseLeave("shareholder")}
//           >
//             <span>
//               Shareholder Info <MdKeyboardArrowDown className="arrow-icon" />
//             </span>
//             {activeDropdown === "shareholder" && (
//               <div
//                 className="ir-dropdown-content"
//                 onMouseEnter={() => handleMouseEnter("shareholder")}
//                 onMouseLeave={() => handleMouseLeave("shareholder")}
//               >
//                 <span onClick={() => navigate("/disclosures")}>
//                   Disclosures under Regulation 46 of LODR
//                 </span>
//               </div>
//             )}
//           </div>

//           <span onClick={() => navigate("/announcements")}>Announcements</span>
//           <span onClick={() => navigate("/news-events")}>News & Events</span>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default InvestorRelationsNavbar;
import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import ola_logo from "../../../../../assets/ola_logo_whiteText_backBackground.svg";
import { useNavigate, Outlet } from "react-router-dom";
import "./InvestorRelationsNavbar.css";

const InvestorRelationsNavbar = () => {
  const navigate = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (dropdown) => setActiveDropdown(dropdown);
  const handleMouseLeave = (dropdown) => {
    setTimeout(() => {
      if (activeDropdown === dropdown) setActiveDropdown(null);
    }, 150);
  };

  return (
    <>
      <nav className="ir-navbar">
        <div className="ir-navbar-container">
          {/* === Left Logo === */}
          <div
            className="ir-logo"
            onClick={() => navigate("/investor-relations")}
          >
            <img src={ola_logo} alt="OLA" />
          </div>

          {/* === Menu Items === */}
          <div className="ir-links">
            <span onClick={() => navigate("/investor-relations")}>Home</span>
            <span onClick={() => navigate("/investor-relations/financials")}>
              Financials
            </span>

            {/* Governance Dropdown */}
            <div
              className="ir-dropdown-container"
              onMouseEnter={() => handleMouseEnter("governance")}
              onMouseLeave={() => handleMouseLeave("governance")}
            >
              <span>
                Governance <MdKeyboardArrowDown className="arrow-icon" />
              </span>
              {activeDropdown === "governance" && (
                <div className="ir-dropdown-content">
                  <span
                    onClick={() => navigate("/investor-relations/policies")}
                  >
                    Policies
                  </span>
                  <span onClick={() => navigate("/investor-relations/board")}>
                    Board
                  </span>
                </div>
              )}
            </div>

            {/* Shareholder Info Dropdown */}
            <div
              className="ir-dropdown-container"
              onMouseEnter={() => handleMouseEnter("shareholder")}
              onMouseLeave={() => handleMouseLeave("shareholder")}
            >
              <span>
                Shareholder Info <MdKeyboardArrowDown className="arrow-icon" />
              </span>
              {activeDropdown === "shareholder" && (
                <div className="ir-dropdown-content">
                  <span
                    onClick={() => navigate("/investor-relations/disclosures")}
                  >
                    Disclosures under Regulation 46 of LODR
                  </span>
                </div>
              )}
            </div>

            <span onClick={() => navigate("/investor-relations/announcements")}>
              Announcements
            </span>
            <span onClick={() => navigate("/investor-relations/news-events")}>
              News & Events
            </span>
          </div>
        </div>
      </nav>

      {/* 👇 Child pages will render here */}
      <Outlet />
    </>
  );
};

export default InvestorRelationsNavbar;
