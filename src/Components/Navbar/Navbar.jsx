import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import nav_icon from "../Assets/Dashboard.png"

export default function Navbar() {
 
  return (
    <nav className="site-nav">
      <div className="nav-inner">
        <Link to="/" className="nav-brand">
          <img src={nav_icon} alt="" className="nav-logo" />
          <span className="nav-name">Puis Nexus</span>
        </Link>

        <div className="nav-links">
          <NavLink to="/services" className="nav-link">Services</NavLink>
          <NavLink to="/about" className="nav-link">About Us</NavLink>
          <NavLink to="/resources" className="nav-link">Resources</NavLink>
        </div>

      

        <NavLink to="/contact" className="nav-cta">CONTACT US</NavLink> 
      </div>
    </nav>
  );
}
