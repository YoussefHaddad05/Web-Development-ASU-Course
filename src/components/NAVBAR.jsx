import "./Navbar.css";

export default function NAVBAR() {
  return (
    <nav className="navbar">

      <div className="nav-left">
        <div className="logo">Udemy</div>
        <button className="nav-link">Explore</button>
      </div>

      <div className="nav-center">
        <div className="search-wrapper">
            <span className="material-symbols-outlined search-icon">search</span>
            <input
            type="text"
            className="search-input"
            placeholder="Search for anything"
            />
        </div>
       </div>


      <div className="nav-right">
        <button className="nav-link">Plans & Pricing</button>
        <button className="nav-link">Udemy Business</button>
        <button className="nav-link">Teach on Udemy</button>

        <span className="material-symbols-outlined cart">shopping_cart</span>

        <button className="login-btn">Log in</button>
        <button className="signup-btn">Sign up</button>
        <button className="lang-btn"><span className="material-symbols-outlined">language</span></button>
      </div>
    </nav>
  );
}
