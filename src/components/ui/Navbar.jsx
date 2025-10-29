import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaCircleUser } from "react-icons/fa6";
import logo_white_text from "../../assets/ola_logo_whiteText_backBackground.svg";
import ScooterDropdown from "../../pages/navbarPages/VehicleDropdown/Scooters/ScooterDropdown";
import MotorcycleDropdown from "../../pages/navbarPages/VehicleDropdown/Motorcycles/MotorcycleDropdown";

const Navbar = () => {
  const [showScooter, setShowScooter] = useState(false);
  const [showMotorcycle, setShowMotorcycle] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const navigate = useNavigate();
  const profileRef = useRef();

  // ✅ Hide profile dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
              <a style={{ cursor: "pointer" }}>
                Scooters <MdKeyboardArrowDown className="arrow-icon" />
              </a>
              {showScooter && <ScooterDropdown />}
            </div>

            {/* ✅ Motorcycles */}
            <div
              onMouseEnter={() => setShowMotorcycle(true)}
              onMouseLeave={() => setShowMotorcycle(false)}
            >
              <a style={{ cursor: "pointer" }}>
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
        <div className="action-group" ref={profileRef}>
          <a
            onClick={() => navigate("/order-now")}
            className="order-now"
            style={{ cursor: "pointer" }}
          >
            Order now
          </a>

          {/* ✅ Profile Icon with dropdown */}
          <div
            className="user-icon"
            onClick={() => setShowProfileMenu((prev) => !prev)}
            style={{
              cursor: "pointer",
              fontSize: "1.8rem",
              color: "white",
              position: "relative",
            }}
          >
            <FaCircleUser />

            {/* Dropdown Menu */}
            {showProfileMenu && (
              <div className="profile-menu">
                <p onClick={() => navigate("/login")}>Login as User</p>
                <p onClick={() => navigate("/login/corporate")}>
                  Login as Corporate
                </p>
                <p onClick={() => navigate("/login/admin")}>Login as Admin</p>
                <hr className="profile-divider" />
                <p onClick={() => navigate("/signup")}>Sign Up</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
