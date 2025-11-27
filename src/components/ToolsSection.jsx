import "./ToolsSection.css";
import useReveal from "./useReveal";

export default function ToolsSection() {
  const revealRef = useReveal();

  const tools = [
    "Blender",
    "DaVinci Resolve",
    "After Effects",
    "Premiere Pro",
    "Unreal Engine (Learning)",
    "Photoshop",
  ];

  return (
    <section className="tools-cosmos reveal" ref={revealRef} id="tools">
      <h2 className="tools-title">Tools I Create With</h2>
      <p className="tools-sub">crafting worlds, motion & atmosphere</p>

      <div className="orb-grid">
        {tools.map((tool, i) => (
          <div 
            key={i} 
            className="orb" 
            style={{ animationDelay: `${i * 0.3}s` }}
          >
            <span className="orb-glow"></span>
            <span className="orb-text">{tool}</span>
          </div>
        ))}
      </div>

      <div className="tools-stars"></div>
    </section>
  );
}
