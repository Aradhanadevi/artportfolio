import "./AboutMe.css";
import useReveal from "./useReveal";

export default function AboutMe() {
  const revealRef = useReveal();

  return (
    <section className="about-cine reveal" id="about" ref={revealRef}>
      <div className="space-dust"></div>

      <div className="about-inner">

        {/* TEXT */}
        <div className="about-content">
          <p className="section-tagline">Creator • Animator • World Builder</p>
          <h2 className="about-heading">
            Crafting worlds that feel alive
          </h2>

          <p className="about-desc">
            I’m Aradhana — a 3D animation artist driven by cinematic mood,
            emotional depth, and dream-like storytelling.  
            I combine stylized visuals, real-world physics, and immersive lighting
            to bring imagination to motion.
          </p>

          <div className="about-tags">
            <span>3D Animation</span>
            <span>Cinematic Lighting</span>
            <span>World-Building</span>
            <span>Camera Moves</span>
          </div>

          <div className="skills-chips">
            <span>Blender</span>
            <span>DaVinci Resolve</span>
            <span>After Effects</span>
            <span>Premiere Pro</span>
            <span>Unreal Engine (learning)</span>
          </div>
        </div>

        {/* IMAGE */}
        <div className="about-photo-wrapper">
          <div className="about-photo">
            <img src="/Aradhana.jpg" alt="profile" />
            <span className="glow-ring"></span>
          </div>
        </div>

      </div>
    </section>
  );
}
