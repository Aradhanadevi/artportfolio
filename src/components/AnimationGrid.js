import React from "react";
import "./AnimationGrid.css";
import useReveal from "./useReveal";

// ✅ Import your local video files
import vid1 from "../videos/v1.mp4";
import vid2 from "../videos/v1.mp4";
import vid3 from "../videos/v1.mp4";
import vid4 from "../videos/v1.mp4";

export default function AnimationGrid() {
  const revealRef = useReveal();

  const works = [
    { title: "Forest Spirit Awakens", src: vid1, tag: "3D Animation" },
    { title: "Lost Astronaut Dream", src: vid2, tag: "Cinematic Shot" },
    { title: "Ancient Temple Portal", src: vid3, tag: "Environment Design" },
    { title: "Nebula Wanderer", src: vid4, tag: "VFX + Motion" },
  ];

  return (
    <section className="anim-section reveal" id="projects" ref={revealRef}>
      <h2 className="anim-title">Featured Animations ✧</h2>

      <div className="anim-grid">
        {works.map((w, i) => (
          <div className="anim-card" key={i}>
            <div className="anim-thumb">
              {/* ✅ Replace image with video */}
              <video
                src={w.src}
                muted
                loop
                playsInline
                preload="metadata"
                className="anim-video"
                onMouseEnter={e => e.target.play()}
                onMouseLeave={e => e.target.pause()}
              />
              <div className="overlay">
                <span className="tag">{w.tag}</span>
              </div>
            </div>
            <h3 className="anim-name">{w.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
