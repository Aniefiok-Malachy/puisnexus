import React from "react";
import "./Partners.css";

import p1 from "../Assets/p1.png";
import p2 from "../Assets/p2.png";
import p3 from "../Assets/p3.png";
import p5 from "../Assets/p5.png";
import p6 from "../Assets/p6.png";
import p7 from "../Assets/p7.png";
import p8 from "../Assets/p8.png";
import p9 from "../Assets/p9.png";
import p10 from "../Assets/p10.png";
import p11 from "../Assets/p11.png";
import p12 from "../Assets/p12.png";

import q1 from "../Assets/q1.png";
import q2 from "../Assets/q2.png";
import q3 from "../Assets/q3.png";
import q4 from "../Assets/q4.png";
import q5 from "../Assets/q5.png";
import q6 from "../Assets/q6.png";
import q7 from "../Assets/q7.png";
import q8 from "../Assets/q8.png";
import q9 from "../Assets/q9.png";
import q10 from "../Assets/q10.png";
import q11 from "../Assets/q11.png";

export default function Partners() {
  const row1 = [p1, p2, p3, p5, p6, p7, p8, p9, p10, p11, p12];
  const row2 = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11];

  const row1Loop = [...row1, ...row1];
  const row2Loop = [...row2, ...row2];

  return (
    <section className="partners">
      <h2 className="partners-title">PARTNERS</h2>
      <p className="partners-subtitle">A comprehensive list of our Partners</p>

      <div className="marquee">
        <div className="track track-right">
          {row1Loop.map((src, i) => (
            <div className="logo" key={`r1-${i}`}>
              <img src={src} alt="partner" />
            </div>
          ))}
        </div>
      </div>

      <div className="marquee">
        <div className="track track-left">
          {row2Loop.map((src, i) => (
            <div className="logo" key={`r2-${i}`}>
              <img src={src} alt="partner" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
