import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import LogoImage from '../../assets/images/Logo.gif';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Products & Services' },
    { to: '/projects', label: 'Projects' },
    { to: '/team', label: 'Team' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'header-solid' : 'header-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container-full py-3 sm:py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 animate-fade-in">
            <img
              src={LogoImage}
              alt="Nimra Jeddah Electric Est. Logo"
              className="h-10 sm:h-12 w-auto "
              loading="lazy"
            />
            <span className="text-white text-lg sm:text-xl font-bold">Nimra Jeddah Trading Est.</span>
          </Link>

          <nav className="hidden md:flex space-x-4 lg:space-x-8" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm lg:text-base text-white hover:text-secondary-500 transition-colors duration-300 ${
                    isActive ? 'text-secondary-500 font-semibold' : ''
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              className="p-2 rounded-md hover:bg-gray-100 transition-colors text-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] shadow-md animate-slide-up">
            <nav
              className="flex flex-col items-center space-y-4 py-6"
              aria-label="Mobile navigation"
            >
              {navLinks.map((navLink) => (
                <NavLink
                  key={navLink.to}
                  to={navLink.to}
                  className={({ isActive }) =>
                    `text-base text-white hover:text-secondary-500 transition-colors duration-300 ${
                      isActive ? 'text-secondary-500 font-semibold' : ''
                    }`
                  }
                  onClick={toggleMenu}
                >
                  {navLink.label}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;