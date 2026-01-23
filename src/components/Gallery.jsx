import React from "react";
import { useNavigate } from "react-router-dom";
import "./Gallery.css";
import useReveal from "./useReveal";


import g1 from "../images/1.png";
import g2 from "../images/2.jpg";
import g3 from "../images/3.png";
import g4 from "../images/4.png";
import g5 from "../images/5.png";
import g6 from "../images/6.jpg";
import g7 from "../images/7.jpg";
import g8 from "../images/1.png";
import g9 from "../images/1.png";
import g10 from "../images/1.png";
import g11 from "../images/1.png";
import g12 from "../images/1.png";
import g13 from "../images/1.png";
import g14 from "../images/1.png";
import g15 from "../images/1.png";
import g16 from "../images/1.png";
import g17 from "../images/1.png";
import g18 from "../images/1.png";
import g19 from "../images/1.png";
import g20 from "../images/1.png";
import g21 from "../images/1.png";
import g22 from "../images/1.png";
import g23 from "../images/1.png";
import g24 from "../images/1.png";

export default function Gallery() {
  const revealRef = useReveal();
  const navigate = useNavigate();

  const galleryItems = [
    { src: g1, title: "Echoes of Light", id: "echoes-of-light" },
    { src: g2, title: "Dreamwalker", id: "dreamwalker" },
    { src: g3, title: "Crimson Bloom", id: "crimson-bloom" },
    { src: g4, title: "Celestial City", id: "celestial-city" },
    { src: g5, title: "Astral Ruins", id: "astral-ruins" },
    { src: g6, title: "Neon Oasis", id: "neon-oasis" },
    { src: g7, title: "Echoes of Light", id: "echoes-of-light-2" },
    { src: g8, title: "Dreamwalker", id: "dreamwalker-2" },
    { src: g9, title: "Crimson Bloom", id: "crimson-bloom-2" },
    { src: g10, title: "Celestial City", id: "celestial-city-2" },
    { src: g11, title: "Astral Ruins", id: "astral-ruins-2" },
    { src: g12, title: "Neon Oasis", id: "neon-oasis-2" },
    { src: g13, title: "Echoes of Light", id: "echoes-of-light-3" },
    { src: g14, title: "Dreamwalker", id: "dreamwalker-3" },
    { src: g15, title: "Crimson Bloom", id: "crimson-bloom-3" },
    { src: g16, title: "Celestial City", id: "celestial-city-3" },
    { src: g17, title: "Astral Ruins", id: "astral-ruins-3" },
    { src: g18, title: "Neon Oasis", id: "neon-oasis-3" },
    { src: g19, title: "Echoes of Light", id: "echoes-of-light-4" },
    { src: g20, title: "Dreamwalker", id: "dreamwalker-4" },
    { src: g21, title: "Crimson Bloom", id: "crimson-bloom-4" },
    { src: g22, title: "Celestial City", id: "celestial-city-4" },
    { src: g23, title: "Astral Ruins", id: "astral-ruins-4" },
    { src: g24, title: "Neon Oasis", id: "neon-oasis-4" },
  ];

  return (
    <section
      className="gallery-section reveal"
      id="gallery"
      ref={revealRef}
    >
      <div className="cosmic-bg"></div>

      <h2 className="gallery-title">Gallery ✧</h2>
      <p className="gallery-sub">Fragments of my dream worlds</p>

      <div className="gallery-grid">
        {galleryItems.map((item, i) => (
          <div
            className="gallery-card"
            key={i}
            onClick={() => navigate(`/projects/${item.id}`)}
          >
            <img
              src={item.src}
              alt={item.title}
              className="gallery-img"
            />
            <div className="gallery-overlay">
              <span className="gallery-name">{item.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
