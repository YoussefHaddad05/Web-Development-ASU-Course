import "./BF.css";
import Bfimg from "../assets/BFIMG.jpg";


export default function Hero() {
  return (
    <div
      className="hero-bg"
      style={{ backgroundImage: `url(${Bfimg})` }}
    >
      <div className="hero-content">
        <h1>Learn more, spend less — Black Friday Sale from £279.99</h1>
        <p>Sitewide savings on thousands of courses. Ends Nov 28.</p>
      </div>
    </div>
  );
}
