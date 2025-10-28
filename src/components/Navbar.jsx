import React from "react";

const Navbar = ({ onNavigate }) => {
  return (
    <nav className="navbar">
      <div className="logo">🎬 My Movie</div>
      <div className="nav-links">
        <button onClick={() => onNavigate("home")}>Home</button>
        <button onClick={() => onNavigate("favourites")}>Favourites</button>
      </div>
    </nav>
  );
};

export default Navbar;


