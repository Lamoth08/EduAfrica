// src/components/Header.js
import React, { useState } from 'react';
import { FaBook } from 'react-icons/fa'; // Import de l'icône de livre
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${menuOpen ? 'show-menu' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <FaBook className="icon" />
          <h1>EduAfrica</h1>
        </div>
        <nav className="navigation">
          <ul className="nav-list">
            <li><a href="/">Accueil</a></li>
            <li><a href="#cours">Cours</a></li>
            <li><a href="#footer">Contact</a></li>
          </ul>
        </nav>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <div className="slogan">
        <h2>EduAfrica, Apprendre pour grandir, grandir pour changer l'Afrique</h2>
      </div>
    </header>
  );
};

export default Header;
