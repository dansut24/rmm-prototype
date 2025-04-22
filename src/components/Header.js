import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const isActive = (path) => location.pathname === path;

  return (
    <header style={headerStyle}>
      <div style={logoStyle}>Hi5TechRMM</div>

      {/* Desktop nav */}
      <nav style={navDesktopStyle}>
        <NavLink to="/" label="Home" isActive={isActive('/')}/>
        <NavLink to="/about" label="About" isActive={isActive('/about')} />
        <NavLink to="/services" label="Services" isActive={isActive('/services')} />
        <NavLink to="/contact" label="Contact" isActive={isActive('/contact')} />
      </nav>

      {/* Hamburger */}
      <button onClick={toggleMenu} style={hamburgerStyle}>
        {menuOpen ? '×' : '☰'}
      </button>

      {/* Overlay menu */}
      {menuOpen && (
        <div style={overlayStyle}>
          <nav style={overlayNavStyle}>
            <NavLink to="/" label="Home" onClick={closeMenu} isActive={isActive('/')}/>
            <NavLink to="/about" label="About" onClick={closeMenu} isActive={isActive('/about')} />
            <NavLink to="/services" label="Services" onClick={closeMenu} isActive={isActive('/services')} />
            <NavLink to="/contact" label="Contact" onClick={closeMenu} isActive={isActive('/contact')} />
          </nav>
        </div>
      )}
    </header>
  );
};

// Reusable link component
const NavLink = ({ to, label, onClick, isActive }) => (
  <Link
    to={to}
    onClick={onClick}
    style={{
      textDecoration: 'none',
      color: isActive ? '#0bf' : '#fff',
      fontWeight: isActive ? 'bold' : 'normal',
      fontSize: '1.1rem',
      transition: 'color 0.2s',
      margin: '0 1rem',
    }}
  >
    {label}
  </Link>
);

// --- Styles ---
const headerStyle = {
  padding: '1rem',
  background: '#222',
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  zIndex: 999
};

const logoStyle = {
  fontSize: '1.6rem',
  fontWeight: 'bold'
};

const navDesktopStyle = {
  display: 'none',
};

// Hamburger (always visible on small screens)
const hamburgerStyle = {
  fontSize: '1.8rem',
  background: 'none',
  border: 'none',
  color: '#fff',
  cursor: 'pointer'
};

// Fullscreen overlay
const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  background: 'rgba(0, 0, 0, 0.95)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  animation: 'fadeIn 0.3s ease',
  zIndex: 1000
};

// Navigation inside overlay
const overlayNavStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2rem',
  fontSize: '1.5rem'
};

export default Header;
