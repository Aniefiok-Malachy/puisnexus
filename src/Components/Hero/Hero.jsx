import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <header className="hero">
      {/* background decor */}
      <div className="hero-bg">
        <div className="orb orb-left" />
        <div className="orb orb-right" />
        <div className="ring ring-1" />
        <div className="ring ring-2" />
        <div className="star star-1" />
        <div className="star star-2" />
        <div className="star star-3" />
      </div>

      <div className="hero-inner">
        <div className="hero-content">
          <h1>
            The Growth <br />
            Infrastructure for Web3<span className="dot">.</span>
          </h1>

          <p>
            We help Web3 founders realize their ideas, build traction that matters,
            and scale volumes that drive product upside.
          </p>

          <div className="hero-actions">
            <button 
              onClick={() => window.open("https://t.me/Akwaeno", "_blank")}
              className="btn-primary">
              Book a Call <span className="arrow">→</span>
            </button>
          </div>
          <div className="stats">
            <div className="stat">
              <h2>82%</h2>
              <p>client retention rate</p>
            </div>

            <span className="divider"></span>

            <div className="stat">
              <h2>250k+</h2>
              <p>wallets onboarded</p>
            </div>

            <span className="divider"></span>

            <div className="stat">
              <h2>14+ countries</h2>
              <p>Reach across</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
