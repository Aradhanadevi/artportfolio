import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AnimationGrid from "./components/AnimationGrid";
import AboutMe from "./components/AboutMe";
import ToolsSection from "./components/ToolsSection";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AnimationGrid />
      <AboutMe />
      <ToolsSection />
      <Gallery />
      <Contact />
    </>
  );
}

export default App;
