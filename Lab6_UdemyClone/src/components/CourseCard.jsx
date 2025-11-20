import React from "react";
import "./CourseCard.css";

export default function CourseCard({ item }) {
  const badgeClass =
    item.badge === "Bestseller"
      ? "badge-bestseller"
      : item.badge === "Premium"
      ? "badge-premium"
      : item.badge === "Hot & New"
      ? "badge-hotnew"
      : "";

  return (
    <a href="#" className="course-link">
      <div className="course-card">
        <img src={item.img} alt={item.title} />

        <h3 className="course-title">{item.title}</h3>
        <p className="course-instructor">{item.instructor}</p>

        <div className="course-rating">
          ⭐ {item.rating} <span>({item.ratingsCount} ratings)</span>
        </div>

        <div className="course-pricing">
          <strong>{item.price}</strong>
          <span className="old-price">{item.oldPrice}</span>
        </div>

        {item.badge && (
          <span className={`course-badge ${badgeClass}`}>{item.badge}</span>
        )}
      </div>
    </a>
  );
}
