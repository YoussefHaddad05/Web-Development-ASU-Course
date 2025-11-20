import React, { useState } from "react";
import coursesData from "../data/coursesData";
import CourseCard from "./CourseCard";
import "./Courses.css";

export default function Courses() {
  const visibleCount = 4;
  const step = 4;

  const categories = [...new Set(coursesData.map(course => course.category))];

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [index, setIndex] = useState(0);

  const filteredCourses = coursesData.filter(
    course => course.category === selectedCategory
  );

  const maxIndex = Math.max(filteredCourses.length - visibleCount, 0);

  const next = () => {
    const newIndex = index + step;
    setIndex(newIndex > maxIndex ? maxIndex : newIndex);
  };

  const prev = () => {
    const newIndex = index - step;
    setIndex(newIndex < 0 ? 0 : newIndex);
  };

  const visibleCourses = filteredCourses.slice(index, index + visibleCount);

  const handleTabClick = (category) => {
    setSelectedCategory(category);
    setIndex(0);
  };

  return (
    <section className="courses-section">
      <h2 className="courses-title">Skills to transform your career and life</h2>
      <p className="courses-subtitle">
        From critical skills to technical topics, Udemy supports your professional development.
      </p>

      <ul className="course-tabs">
        {categories.map((category) => (
          <li
            key={category}
            className={category === selectedCategory ? "active" : ""}
            onClick={() => handleTabClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>

      <div className="courses-row">
        <button
          className="courses-arrow left"
          onClick={prev}
          disabled={index === 0}
        >
          ❮
        </button>

        <div className="courses-cards">
          {visibleCourses.map((item) => (
            <CourseCard key={item.id} item={item} />
          ))}
        </div>

        <button
          className="courses-arrow right"
          onClick={next}
          disabled={index === maxIndex}
        >
          ❯
        </button>
      </div>

      <a href="#" className="show-all-link">
        Show all {selectedCategory} courses →
      </a>
    </section>
  );
}
