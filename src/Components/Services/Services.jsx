import React from "react";
import "./Services.css";

const services = [
  {
    title: "PUIS LABS",
    description:
      "Puis Labs delivers research-backed insights, narrative engineering, and growth strategy that guide execution across all verticals.",
    tags: ["Ecosystem Design & Branding", "Industry-grade Research", "Product Design & Development"],
  },
  {
    title: "PUIS NETWORK",
    description:
      "Puis Network connects protocols to VCs, Liquidity Providers, communities, creators, partners, and ecosystems that accelerate reach and trust.",
    tags: ["Crypto PR", "Venture Capital", "KOLs", "LaunchPads", "CEXs & DEXs", "Market-Makers", "Sales & BD"],
  },
  {
    title: "PUIS GROWTH",
    description:
      "Puis Growth focuses on measurable outcomes users, engagement, and on chain activity not vanity metrics.",
    tags: ["Trading Volume", "Users Acquisition", "Liquidity Solutions"],
  },
  {
    title: "PUIS SOCIAL",
    description:
      "Puis Social builds and manages authentic communities, social presence, and narratives that compound over time.",
    tags: ["Community & Social Media Management", "Narrative Engineering", "Influencer Marketing", "Crypto Content Writing"],
  },
  {
    title: "PUIS REACH",
    description:
      "The expansion arm. Puis Reach helps Web3 projects enter new markets and scale adoption across regions.",
    tags: ["Global Expansion", "Market Entry", "Online & Offline Events Management"],
  },
  {
    title: "PUIS LAUNCH",
    description:
      "Puis Launch focuses on measurable outcomes users, engagement, and on chain activity not vanity metrics.",
    tags: ["ICO Marketing", "IDO Marketing", "IEO Marketing", "Airdrop Campaign", "Web3 Quest"],
  },
];

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="services-header">
        <h2>OUR SUIT OF SERVICES</h2>
        <p>
          We make available the skills and resources you need to scale your
          <span className="drop-word">project</span>
        </p>
      </div>

      <div className="services-grid">
        {services.map((item, index) => (
          <div className="service-card" key={index}>
            <div className="service-body">
              <h3>{item.title}</h3>
              <p className="service-desc">{item.description}</p>

              <div className="service-tags">
                {item.tags.map((tag, i) => (
                  <span key={i} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

              <button 
              onClick={() => window.open("https://t.me/Akwaeno", "_blank")}
              className="service-btn"
              >
              Learn more
              </button>          
            </div>
        ))}
      </div>

      <div className="wave-bg" />
    </section>
  );
}
