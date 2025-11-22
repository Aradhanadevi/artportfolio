import React from "react";
import "./Footer.css";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-orb"></div>

      <h3>Aradhana</h3>
      <p>Crafting dreamy worlds & cosmic stories ✧</p>

      <div className="social-icons">
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>

        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>

        <a href="mailto:youremail@example.com">
          <FaEnvelope />
        </a>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Aradhana • All dreamy vibes reserved ✦
      </div>
    </footer>
  );
}
