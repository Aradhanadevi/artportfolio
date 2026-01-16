import { useParams, useNavigate } from "react-router-dom";
import "./ProjectStory.css";

const PROJECTS = {
  dreamwalker: {
    title: "Dreamwalker",
    subtitle: "A journey through fragmented realities",
    image: "/images/1.png",
    description: `
Dreamwalker was born from the idea of drifting between dreams.
I wanted the world to feel unstable — floating architecture,
soft lighting, and a sense of quiet loneliness.

This project pushed me to explore mood over realism.
`,
    tools: ["Blender", "Photoshop", "DaVinci Resolve"],
  },
};

export default function ProjectStory() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const project = PROJECTS[slug];

  if (!project) return <div>Project not found</div>;

  return (
    <section className="story-cosmos">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← back to gallery
      </button>

      <div className="story-hero">
        <img src={project.image} alt={project.title} />
      </div>

      <div className="story-content">
        <h1>{project.title}</h1>
        <p className="story-sub">{project.subtitle}</p>

        <p className="story-desc">{project.description}</p>

        <div className="story-tools">
          <h3>Tools Used</h3>
          <ul>
            {project.tools.map((tool, i) => (
              <li key={i}>{tool}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
