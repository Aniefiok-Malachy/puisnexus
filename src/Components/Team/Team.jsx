import React from "react";
import "./Team.css";

// Replace these with your real images (import like you did in Partners)
import t1 from "../Assets/Alden.png";
import t2 from "../Assets/Andy.png";
import t3 from "../Assets/Akwaeno.png";
// import t4 from "../Assets/Emanuele.png";
import t5 from "../Assets/Granton.png";
import t6 from "../Assets/Olawale.png";
import t7 from "../Assets/Pascal.png";
// import t8 from "../Assets/Olaige.png";
import t9 from "../Assets/Janica.png";
import t10 from "../Assets/Chisom.png";
import t11 from "../Assets/Changi.png";
import t12 from "../Assets/Happiness.png";
import t13 from "../Assets/Daniella.png";
import t14 from "../Assets/Temitayo.png";

const team = [
  { name: "ALDEN PAUL", img: t1, linkedin: "https://www.linkedin.com/in/aldenyburan/" },
  { name: "ANDY MAKKARASENG", img: t2, linkedin: "https://www.linkedin.com/in/andy-makkaraseng/" },
  { name: "AKWAENO ISONG", img: t3, linkedin: "https://www.linkedin.com/in/akwaeno-isong-49176b26b/" },
  // { name: "EMANUELE DORNELAS", img: t4, linkedin: "https://www.linkedin.com/in/emanuele-dornelas-444619227/" },

  { name: "GRANTON NYANGE", img: t5, linkedin: "https://www.linkedin.com/in/granton-mburu/" },
  { name: "OLAWALE OLAWEPO", img: t6, linkedin: "https://www.linkedin.com/in/olawepo-olawale/" },
  { name: "PASCAL ABAMS", img: t7, linkedin: "https://www.linkedin.com/in/pascalabams/" },
  // { name: "ABDULLAH OLUWATOBILOBA", img: t8, linkedin: "https://www.linkedin.com/in/ige-abdullah/" },

  { name: "JANICA CABIDOY", img: t9, linkedin: "https://www.linkedin.com/in/janicacabidoynicseuu/" },
  { name: "CHISOM NWANI", img: t10, linkedin: "https://www.linkedin.com/in/chisomnwani/" },
  { name: "CHANGI LE", img: t11, linkedin: "https://www.linkedin.com/in/changchyle/" },
  { name: "HAPPINESS CHUKWUMA", img: t12, linkedin: "https://www.linkedin.com/in/happiness-chukwuma-385979209/" },

  { name: "DANIELLA JAMES", img: t13, linkedin: "https://www.linkedin.com/in/imabasi-james-440332211/" },
  { name: "TEMITAYO OLOWOOKERE", img: t14, linkedin: "https://www.linkedin.com/in/temmykel/" }
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
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={member.img} alt={member.name} />
            </a>
            <span className="team-pill">{member.name}</span>
          </div>
        ))}
      </div>

    </section>
  );
}
