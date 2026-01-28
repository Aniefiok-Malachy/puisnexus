import React from "react";
import "./AboutUs.css";
import Aboutimg from "../Assets/aboutus.png"

// import shield from "../../assets/shield.png";
// import lock from "../../assets/lock.png";
// import user from "../../assets/user.png";
// import check from "../../assets/check.png";

export default function AboutUs() {
  return (
    <div className="aboutus">
        <div className="about-head">
            <h2 className="about-head-title">ABOUT US</h2>
            <p className="about-head-sub">
                Know who we are, our mission and our values.
            </p >
            <p className="about-head-text">
              We are a full stack Web3 service provider with a sole aim to offer the best services to blockchain projects and founders. At Puis Nexus, value delivery is guided by a strong business culture that defines how we operate, partner, and grow within the Web3 ecosystem.
            </p>
        </div>
      

      <div className="about-img">
        <img src={Aboutimg} alt=''  />
      </div>

    </div>
  );
}

