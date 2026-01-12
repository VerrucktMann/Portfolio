import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../assets/logo-banner.png';  // <-- Importa tu logo aquí

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <NavLink to="/" onClick={() => setOpen(false)}>
          <img src={logo} alt="Verruckt Games Logo" />
        </NavLink>
      </div>
      <ul className={`${styles.navLinks} ${open ? styles.open : ''}`}>
        <li>
          <NavLink 
            to="/" 
            onClick={() => setOpen(false)} 
            className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/projects" 
            onClick={() => setOpen(false)} 
            className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
          >
            Games
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            onClick={() => setOpen(false)} 
            className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            onClick={() => setOpen(false)} 
            className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
