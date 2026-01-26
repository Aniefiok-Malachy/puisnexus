import React from "react";
import "./Team.css";

// Replace these with your real images (import like you did in Partners)
import t1 from "../Assets/Alden.png";
import t2 from "../Assets/Andy.png";
import t3 from "../Assets/Akwaeno.png";
import t4 from "../Assets/Emanuele.png";
import t5 from "../Assets/Granton.png";
import t6 from "../Assets/Olawale.png";
import t7 from "../Assets/Pascal.png";
import t8 from "../Assets/Olaige.png";
import t9 from "../Assets/Nics.png";
import t10 from "../Assets/Chisom.png";
// import t11 from "../Assets/Chance.png";
import t12 from "../Assets/Happiness.png";
import t13 from "../Assets/Daniella.png";

const team = [
  { name: "ALDEN PAUL", img: t1 },
  { name: "ANDY", img: t2 },
  { name: "AKWAENO", img: t3 },
  { name: "EMANUELE DORNELAS", img: t4 },

  { name: "GRANTON", img: t5 },
  { name: "OLAWALE", img: t6 },
  { name: "PASCAL", img: t7 },
  { name: "OLAIGE", img: t8 },

  { name: "NICE", img: t9 },
  { name: "CHISOM", img: t10 },
  // { name: "CHANCE", img: t11 },
  { name: "HAPPINESS", img: t12 },

  { name: "DANIELLA", img: t13 },
]; 

export default function Team() {
  return (
    <section className="team-section" id="team">
      <div className="team-header">
        <h2>TEAM</h2>
        <p>
          The driving force behind our projects. Meet the <br />
          minds that happen.
        </p>
      </div>

      <div className="team-grid">
        {team.map((member, i) => (
          <div className="team-card" key={i}>
            <img src={member.img} alt={member.name} />
            <span className="team-pill">{member.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
