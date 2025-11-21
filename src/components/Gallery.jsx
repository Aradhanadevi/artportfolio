import React, { useState } from "react";
import "./Gallery.css";
import useReveal from "./useReveal";

// ✅ Replace these imports with your own image or video thumbnails later
import g1 from "../images/1.png";
import g2 from "../images/1.png";
import g3 from "../images/1.png";
import g4 from "../images/1.png";
import g5 from "../images/1.png";
import g6 from "../images/1.png";
import g7 from "../images/1.png";
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
  const [selected, setSelected] = useState(null);

  const galleryItems = [
    { src: g1, title: "Echoes of Light" },
    { src: g2, title: "Dreamwalker" },
    { src: g3, title: "Crimson Bloom" },
    { src: g4, title: "Celestial City" },
    { src: g5, title: "Astral Ruins" },
    { src: g6, title: "Neon Oasis" },
    { src: g7, title: "Echoes of Light" },
    { src: g8, title: "Dreamwalker" },
    { src: g9, title: "Crimson Bloom" },
    { src: g10, title: "Celestial City" },
    { src: g11, title: "Astral Ruins" },
    { src: g12, title: "Neon Oasis" },
    { src: g13, title: "Echoes of Light" },
    { src: g14, title: "Dreamwalker" },
    { src: g15, title: "Crimson Bloom" },
    { src: g16, title: "Celestial City" },
    { src: g17, title: "Astral Ruins" },
    { src: g18, title: "Neon Oasis" },
    { src: g19, title: "Echoes of Light" },
    { src: g20, title: "Dreamwalker" },
    { src: g21, title: "Crimson Bloom" },
    { src: g22, title: "Celestial City" },
    { src: g23, title: "Astral Ruins" },
    { src: g24, title: "Neon Oasis" },
  ];

   return (
    <section className="gallery-section reveal" id="gallery" ref={revealRef}>
      <div className="cosmic-bg"></div>

      <h2 className="gallery-title">Gallery ✧</h2>
      <p className="gallery-sub">Fragments of my dream worlds</p>

      <div className="gallery-grid">
        {galleryItems.map((item, i) => (
          <div
            className="gallery-card"
            key={i}
            onClick={() => setSelected(item)}
          >
            <img src={item.src} alt={item.title} className="gallery-img" />
            <div className="gallery-overlay">
              <span className="gallery-name">{item.title}</span>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div className="lightbox" onClick={() => setSelected(null)}>
          <div className="lightbox-inner">
            <img src={selected.src} alt={selected.title} />
            <span className="lightbox-title">{selected.title}</span>
          </div>
        </div>
      )}
    </section>
  );
}