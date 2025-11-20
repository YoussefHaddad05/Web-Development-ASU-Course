import React from "react";
import "./Bblack.css";
import heroImg from "../../public/black.webp";

export default function Bblack() {
  return (
    <section className="bblack-section">

      <div className="bblack-left">
        <h1>Reimagine your career in the AI era</h1>
        <p>
          Future-proof your skills with Personal Plan. Get access to a variety 
          of fresh content from real-world experts.
        </p>

        <ul className="bblack-features">
          <li>⭐ <span>Learn</span> AI and more</li>
          <li>🏆 <span>Prep</span> for a certification</li>
          <li>💬 <span>Practice</span> with AI coaching</li>
          <li>🚀 <span>Advance</span> your career</li>
        </ul>

        <button className="bblack-btn">Learn more</button>

        <span className="price">Starting at £204.00/month</span>
      </div>

      {/* RIGHT SIDE */}
      <div className="bblack-right">
        <img src={heroImg} alt="bblack visuals" />
      </div>

    </section>
  );
}
