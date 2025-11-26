import React from "react";
import "./LoadingScreen.css";

const LoadingScreen = () => {
  return (
    <div className="loader-wrapper">
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>

      <div className="loading-text">
        <span>Loading your dream…</span>
      </div>
    </div>
  );
};

export default LoadingScreen;
