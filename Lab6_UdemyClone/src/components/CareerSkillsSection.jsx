import React from "react";
import LeftText from "./LeftText";
import Skills from "./Skills";
import "./CareerSkillsSection.css";

export default function CareerSkillsSection() {
  return (
    <div className="skills-section">
      <LeftText />
      <Skills />
    </div>
  );
}
