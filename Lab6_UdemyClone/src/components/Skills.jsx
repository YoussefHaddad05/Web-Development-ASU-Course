import React, { useState } from "react";
import skillsData from "../data/skillsData";
import SkillCard from "./SkillCard";
import "./Skills.css";

export default function Skills() {
  const visibleCount = 3;   
  const step = 2;           
  const maxIndex = skillsData.length - visibleCount;

  const [index, setIndex] = useState(0);

  const next = () => {
    const newIndex = index + step;
    setIndex(newIndex > maxIndex ? maxIndex : newIndex);
  };

  const prev = () => {
    const newIndex = index - step;
    setIndex(newIndex < 0 ? 0 : newIndex);
  };

  const visibleCards = skillsData.slice(index, index + visibleCount);

  const totalPages = Math.ceil((skillsData.length - visibleCount) / step) + 1;

  return (
    <div className="skills-right">

      {/* Cards */}
      <div className="cards-container">
        {visibleCards.map((item) => (
          <SkillCard
            key={item.id}
            img={item.img}
            title={item.title}
            students={item.students}
          />
        ))}
      </div>

      {/* Footer: arrows + dots */}
      <div className="slider-footer">
        <button className="arrow" onClick={prev} disabled={index === 0}>
          ❮
        </button>

        <div className="dots">
          {[...Array(totalPages)].map((_, pageIndex) => {
            const pageStart = pageIndex * step;

            return (
              <span
                key={pageIndex}
                className={`dot ${index === pageStart ? "active" : ""}`}
                onClick={() => setIndex(pageStart)}
              ></span>
            );
          })}
        </div>

        <button className="arrow" onClick={next} disabled={index === maxIndex}>
          ❯
        </button>
      </div>

    </div>
  );
}
