import React from "react";
import { Link } from "react-router-dom";
import "./FooterCTA.css";
import telegram from "../Assets/tg.png";
import linkedin from "../Assets/in.png";
import twitter from "../Assets/x.png";
import instagram from "../Assets/ins.png";
import puis_logo from "../Assets/Dashboard.png";

export default function FooterCTA() {
  return (
    <footer className="footer-wrap" id="contact">
      <div className="cta-box">
        <h2>
          Let’s build, launch, and scale your Web3 <br />
          project - the right way
        </h2>

        <p>
          Reach out for collaborations, campaigns or partnerships. Let <br />
          us bring your project’s vision to life
        </p>

        <button 
          onClick={() => window.open("https://t.me/Akwaeno", "_blank")}
          className="cta-btn">
          Book a Call <span className="cta-arrow">→</span>
        </button>

        {/* <button className="cta-btn">
          Book a call <span className="cta-arrow">→</span>
        </button> */}
      </div>

      <div className="footer">
        <div className="footer-inner">
          <div className="footer-col footer-brand">
            <div className="footer-logo">
              <span className="logo-dot">
                <img src={puis_logo} alt="" />
              </span>
              <span className="logo-text">Puis Nexus</span>
            </div>

            <p className="footer-desc">
              Puis Nexus is the parent ecosystem connecting strategy, growth,
              distribution, and adoption for Web3 protocols. Through specialized
              verticals, we help Web3 projects move from idea to traction to
              ecosystem dominance.
            </p>

            <div className="socials">
              <a href="https://x.com/PuisNexus" target="_blank" rel="noreferrer" aria-label="X">
                <img src={twitter} alt="" />
              </a>
              <a href="https://t.me/Puisnexus" target="_blank" rel="noreferrer" aria-label="Telegram">
                <img src={telegram} alt="" />
              </a>
              <a href="https://linkedin.com/company/puisnexus" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <img src={linkedin} alt="" />
              </a>
              <a href="https://www.instagram.com/puisnexus/" target="_blank" rel="noreferrer" aria-label="Instagram">
                <img src={instagram} alt="" />
              </a>
            </div>
          </div>
          {/* Navigation */}
          <div className="footer-col">
            <h4>Navigation</h4>
            <Link to="/services">Services</Link>
            <Link to="/about">About Us</Link>
            <Link to="/resources">Resources</Link>
          </div>
          {/* Licence */}
          <div className="footer-col">
            <h4>Licence</h4>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/copyright">Copyright</Link>
            <Link to="/email-address">Email Address</Link>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <div className="contact-item">
              <span className="icon">📞</span>
              <span>(406) 555-0120</span>
            </div>
            <div className="contact-item">
              <span className="icon">✉️</span>
              <span>hey@boostin.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
