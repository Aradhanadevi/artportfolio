import React, { useEffect } from "react";
import "./Hero.css";
import dustImg from "../images/1.png"; // <- FIXED image import

export default function Hero() {
  useEffect(() => {
    const glow = document.getElementById("cursorGlow");

    const moveGlow = (e) => {
      if (glow) {
        glow.style.left = `${e.clientX}px`;
        glow.style.top = `${e.clientY}px`;
      }
    };

    document.addEventListener("mousemove", moveGlow);

    return () => {
      document.removeEventListener("mousemove", moveGlow);
    };
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="hero-title fade-in">
          come dear, let's go on an adventure.
        </h1>

        <p className="hero-sub fade-in-delay">
          drifting through dreams, chasing forgotten memories ✧
        </p>

        <a href="#projects" className="enter-btn fade-in-delay2">
          Enter My World →
        </a>
      </div>

      {/* floating particles */}
      <div className="dust" style={{ backgroundImage: `url(${dustImg})` }}></div>
      <div className="dust2" style={{ backgroundImage: `url(${dustImg})` }}></div>

      {/* glow cursor */}
      <div className="cursor-glow" id="cursorGlow"></div>
    </section>
  );
}  