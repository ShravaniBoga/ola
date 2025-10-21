import React from "react";
import "./Footer.css";
import {
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import ola_logo from "../../assets/ola_logo_whiteText_backBackground.svg";
import { IoCall } from "react-icons/io5"; // ✅ replaced FaPhone with IoCall

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-main">
        {/* Left section - Logo + Links */}
        <div className="footer-left">
          {/* Logo */}
          <div className="footer-logo">
            <img src={ola_logo} alt="Ola Logo" />
          </div>

          {/* Footer Links */}
          <div className="footer-columns">
            <div className="footer-col">
              <h4>Products</h4>
              <ul>
                <li>Ola S1 Pro+</li>
                <li>Ola S1 Pro</li>
                <li>Ola S1 X+</li>
                <li>Ola S1 X</li>
                <li>Roadster X+</li>
                <li>Roadster X</li>
                <li>Roadster</li>
                <li>Roadster Pro</li>
                <li>Diamondhead</li>
                <li>Ola Shakti</li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Tech & Design</h4>
              <ul>
                <li>Software</li>
                <li>Cell Tech</li>
                <li>Manufacturing</li>
                <li>Design</li>
                <li>Gigafactory</li>
                <li>Future Factory</li>
                <li>Ferrite Motor</li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Ownership</h4>
              <ul>
                <li>Ola Electric Store</li>
                <li>Hypercharger</li>
                <li>Accessories</li>
                <li>Community</li>
                <li>Referrals</li>
                <li>Hyperservice</li>
                <li>Battery Warranty</li>
                <li>India Inside</li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li>About Us</li>
                <li>Investor</li>
                <li>Newsroom</li>
                <li>Blogs</li>
                <li>Careers</li>
                <li>Krutrim</li>
                <li>Dealership</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right section - Social & Contact */}
        <div className="footer-social">
          <div className="social-icons">
            <FaInstagram />
            <FaYoutube />
            <FaTwitter />
            <FaFacebookF />
            <FaLinkedinIn />
          </div>
          <p className="footer-contact">
            <IoCall /> Call : <span>080 6896 4050</span>
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2024 Ola Electric Mobility Ltd. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
