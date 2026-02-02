import React from "react";
import "./AboutUs.css";
import Aboutimg from "../Assets/aboutus.png";
import mobile_img from "../Assets/mobile.png";

export default function AboutUs() {
  return (
    <div className="aboutus">
      <div className="about-head">
        <h2 className="about-head-title">ABOUT US</h2>
        <p className="about-head-sub">Know who we are, our mission and our values.</p>
        <p className="about-head-text">
          We are a full stack Web3 service provider with a sole aim to offer the best services to
          blockchain projects and founders. At Puis Nexus, value delivery is guided by a strong
          business culture that defines how we operate, partner, and grow within the Web3 ecosystem.
        </p>
      </div>

      {/* ✅ Desktop: text around image */}
      <div className="about-around">
        {/* Left text */}
        <div className="about-card about-left">
          <h3 className="about-card-title">Professionalism & Credibility</h3>
          <p className="about-card-text">
            Every engagement is handled with clarity, accountability, and respect for all stakeholders.
            Long term business relationships are acted on in the best interests of partners, ensuring
            credibility in both strategy and delivery.
          </p>
        </div>

        {/* Center image */}
        <div className="about-center">
          <picture>
            <source srcSet={mobile_img} media="(max-width:768px)" />
            <img src={Aboutimg} alt="About Puis Nexus" />
          </picture>
        </div>

        {/* Right text */}
        <div className="about-card about-right">
          <h3 className="about-card-title">Trust & Transparency</h3>
          <p className="about-card-text">
            Full transparency is operated in communication, expectations, and outcomes. Partners have
            clear visibility into processes, performance, and decision making, fostering alignment and
            confidence at every stage.
          </p>
        </div>

        {/* Bottom text */}
        <div className="about-card about-bottom">
          <h3 className="about-card-title">Security & Confidentiality</h3>
          <p className="about-card-text">
            All data, strategies, and internal communications are treated with strict confidentiality.
            Secure operational practices are implemented to protect partner information, intellectual
            property, and strategic insights at all times.
          </p>
        </div>

        <div className="about-mobile-points">
  <div className="about-point">
    <span className="about-num">1</span>
    <div>
      <h3>Professionalism & Credibility</h3>
      <p>
        Every engagement is handled with clarity, accountability, and respect for all stakeholders.
        We prioritize long-term business relationships and act in the best interests of our partners,
        ensuring credibility in both strategy and delivery.
      </p>
    </div>
  </div>

  <div className="about-point">
    <span className="about-num">2</span>
    <div>
      <h3>Trust & Transparency</h3>
      <p>
        We operate with full transparency in communication, expectations, and outcomes.
        Our partners have clear co-visibility into processes, performance, and decision-making,
        fostering alignment and confidence at every stage.
      </p>
    </div>
  </div>

  <div className="about-point">
    <span className="about-num">3</span>
    <div>
      <h3>Security & Confidentiality</h3>
      <p>
        All data, strategies, and internal communications are treated with strict confidentiality.
        We implement secure operational practices to protect partner information, intellectual property,
        and strategic insights at all times.
      </p>
    </div>
  </div>
</div>

      </div>
    </div>
  );
}
