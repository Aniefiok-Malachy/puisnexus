import "./Navbar.css";
import nav_icon from "../Assets/nav_logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const goToSection = (id) => {
    const scroll = () => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    };

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scroll, 150);
    } else {
      scroll();
    }

    // ✅ close mobile menu after click
    setOpen(false);
  };

  return (
    <nav className="site-nav">
      <div className="nav-inner">
        {/* Brand */}
        <button onClick={() => goToSection("home")} className="nav-brand">
          <img src={nav_icon} alt="" className="nav-logo" />
          {/* <span className="nav-name">Puis Nexus</span> */}
        </button>

        {/* Desktop links */}
        <div className="nav-links desktop">
          <button onClick={() => goToSection("services")} className="nav-link">
            Services
          </button>
          <button onClick={() => goToSection("about")} className="nav-link">
            About Us
          </button>
          <button onClick={() => goToSection("resources")} className="nav-link">
            Resources
          </button>
        </div>

        {/* Desktop CTA */}
        <button
          onClick={() => goToSection("contact")}
          className="nav-cta desktop"
        >
          CONTACT US
        </button>

        {/* Mobile hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="mobile-menu">
          <button onClick={() => goToSection("services")}>Services</button>
          <button onClick={() => goToSection("about")}>About Us</button>
          <button onClick={() => goToSection("resources")}>Resources</button>
          <button onClick={() => goToSection("contact")} className="mobile-cta">
            CONTACT US
          </button>
        </div>
      )}
    </nav>
  );
}
