import "./Navbar.css";
import nav_icon from "../Assets/Dashboard.png"
import {useLocation, useNavigate } from "react-router-dom";



export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const goToSection = (id) => {
    const scroll =()=>{
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    };

    if(location.pathname !== "/"){
      navigate("/");
      setTimeout(scroll, 100);
    }
    else{
      scroll();
    }
  };

  return (
    <nav className="site-nav">
      <div className="nav-inner">
        <button onClick={() => goToSection("home")} className="nav-brand">
          <img src={nav_icon} alt="" className="nav-logo"/>
          <span className="nav-name">Puis Nexus</span> 
        </button>

        <div className="nav-links">
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

        <button onClick={() => goToSection("contact")} className="nav-cta">
          CONTACT US
        </button>
      </div>
    </nav>
  );
}
