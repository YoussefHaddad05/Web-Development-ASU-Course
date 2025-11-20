import React from "react";
import "./SkillCard.css";

export default function SkillCard({ img, title, students, link = "#" }) {
  return (
    <>
    <a href={link} className="arrow-link">
    <div className="skill-card" style={{ backgroundImage: `url(${img})` }}>
      <div className="card-info">
        <span className="students">👥 {students}</span>

        <h3>{title}</h3>

        <span className="sr">→</span>
      </div>
    </div>
    </a>
    </>
  );
}
