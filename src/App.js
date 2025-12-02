import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AnimationGrid from "./components/AnimationGrid";
import AboutMe from "./components/AboutMe";
import ToolsSection from "./components/ToolsSection";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="fade-in cosmic-wrapper">
          <div className="global-stars"></div>
          <div className="global-stars2"></div>
          <Navbar />
          <Hero />
          <AnimationGrid />
          <AboutMe />
          <ToolsSection />
          <Gallery />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
