import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        <NavLink to="/" className="logo" onClick={closeMenu}>
          Krishnapriya A R
        </NavLink>

        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>

          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>

          <NavLink to="/education" onClick={closeMenu}>
            Education
          </NavLink>

          <NavLink to="/skills" onClick={closeMenu}>
            Skills
          </NavLink>

          <NavLink to="/projects" onClick={closeMenu}>
            Projects
          </NavLink>

          <NavLink to="/internship" onClick={closeMenu}>
            Internship
          </NavLink>

          <NavLink to="/achievements" onClick={closeMenu}>
            Achievements
          </NavLink>

          <NavLink to="/resume" onClick={closeMenu}>
            Resume
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>

        </nav>

      </div>
    </header>
  );
}

export default Navbar;