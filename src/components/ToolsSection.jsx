import "./ToolsSection.css";
import useReveal from "./useReveal";

export default function ToolsSection() {
  const revealRef = useReveal();

  const tools = [
    "Blender",
    "DaVinci Resolve",
    "After Effects",
    "Premiere Pro",
    "Unreal Engine",
    "Photoshop",
  ];

  return (
    <section className="tools-cosmos reveal" ref={revealRef} id="tools">
      <h2 className="tools-title">Tools I Create With</h2>
      <p className="tools-sub">crafting worlds, motion & atmosphere</p>

      <div className="crystal-grid">
        {tools.map((tool, i) => (
          <div 
            key={i} 
            className="crystal"
            style={{ animationDelay: `${i * 0.3}s` }}
          >
            <div className="rune-ring"></div>

            {/* Plain floating tool name */}
            <div className="tool-text">{tool}</div>

            <div className="lightning"></div>
          </div>
        ))}
      </div>

      <div className="nebula-bg"></div>
    </section>
  );
}
