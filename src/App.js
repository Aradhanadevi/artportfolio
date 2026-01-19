import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AnimationGrid from "./components/AnimationGrid";
import AboutMe from "./components/AboutMe";
import ToolsSection from "./components/ToolsSection";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import ProjectStory from "./components/ProjectStory";

function App() {
  return (
    <>
      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <AnimationGrid />
              <AboutMe />
              <ToolsSection />
              <Gallery />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* PROJECT STORY */}
        <Route path="/projects/:slug" element={<ProjectStory />} />
      </Routes>
    </>
  );
}

export default App;
