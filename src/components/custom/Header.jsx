import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import "./Header.css"
import menu_icon from '../../assets/menu-icon.png'; // Keep the import for the menu icon

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);  // State for toggling mobile menu visibility

  // Scroll effect to make navbar sticky
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <li>
        <Link to="hero" smooth={true} offset={0} duration={500} className="aj-logo">RK</Link>
      </li>
      <ul className={mobileMenu ? 'show-mobile-menu' : ''}>
        <li><Link to="/" smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to="login" smooth={true} offset={-260} duration={500}>Login</Link></li>
        <li><Link to="about" smooth={true} offset={-150} duration={500}>About Us</Link></li>
        <li><Link to="campus" smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to="contact" smooth={true} offset={-260} duration={500} className="btn">Contact us</Link></li>
      </ul>

      {/* Mobile menu icon */}
      <img
        src={menu_icon}
        alt="Menu Icon"
        className="menu-icon"
        onClick={toggleMenu}  // Toggle mobile menu on click
      />
    </nav>
  );
};

export default Navbar;
