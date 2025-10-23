import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdKeyboardArrowDown } from "react-icons/md";
import logo_white_text from "../../assets/ola_logo_whiteText_backBackground.svg";
import ScooterDropdown from "../../pages/navbarPages/VehicleDropdown/Scooters/ScooterDropdown";
import MotorcycleDropdown from "../../pages/navbarPages/VehicleDropdown/Motorcycles/MotorcycleDropdown";

const Navbar = () => {
  // const [menuOpen, setMenuOpen] = useState(false);
  const [showScooter, setShowScooter] = useState(false);
  const [showMotorcycle, setShowMotorcycle] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* === Left Section === */}
        <div className="left-group">
          <div className="logo" onClick={() => navigate("/")}>
            <img src={logo_white_text} alt="OLA" />
          </div>

          <div className="oladropdown">
            {/* ✅ Scooters */}
            <div
              onMouseEnter={() => setShowScooter(true)}
              onMouseLeave={() => setShowScooter(false)}
            >
              <a
                onClick={() => navigate("/scooters")}
                style={{ cursor: "pointer" }}
              >
                Scooters <MdKeyboardArrowDown className="arrow-icon" />
              </a>
              {showScooter && <ScooterDropdown />}
            </div>

            {/* ✅ Motorcycles */}
            <div
              onMouseEnter={() => setShowMotorcycle(true)}
              onMouseLeave={() => setShowMotorcycle(false)}
            >
              <a
                onClick={() => navigate("/motorcycles")}
                style={{ cursor: "pointer" }}
              >
                Motorcycles <MdKeyboardArrowDown className="arrow-icon" />
              </a>
              {showMotorcycle && <MotorcycleDropdown />}
            </div>
          </div>
        </div>

        {/* === Center Section === */}
        <div className="link-group">
          <a
            onClick={() => navigate("/investor-relations")}
            style={{ cursor: "pointer" }}
          >
            Investor Relations
          </a>
          <a
            onClick={() => navigate("/test-ride")}
            style={{ cursor: "pointer" }}
          >
            Test Ride
          </a>
        </div>

        {/* === Right Section === */}
        <div className="action-group">
          <a
            onClick={() => navigate("/order-now")}
            className="order-now"
            style={{ cursor: "pointer" }}
          >
            Order now
          </a>
          <div
            className="hamburger"
            // onClick={() => setMenuOpen(!menuOpen)
            onClick={() => navigate("/menu")}
          >
            <GiHamburgerMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
