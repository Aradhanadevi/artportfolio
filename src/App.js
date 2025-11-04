import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AnimationGrid from "./components/AnimationGrid";
import AboutMe from "./components/AboutMe";


function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <AnimationGrid />
      <AboutMe />
    </>
  );
}

export default App;
