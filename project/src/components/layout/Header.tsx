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
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'header-solid shadow-xl' : 'header-transparent'
        }`}
        style={{ height: '60px' }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container-full py-2 sm:py-3 flex justify-between items-center h-full">
          <Link to="/" className="flex items-center animate-slide-up">
            <img
              src={LogoImage}
              alt="Company Logo"
              className="h-8 sm:h-10 w-auto transition-transform duration-300 hover:scale-110 hover:shadow-md"
              loading="lazy"
            />
          </Link>

          <nav className="hidden md:flex space-x-6 lg:space-x-10" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `relative text-xl lg:text-2xl text-white font-semibold transition-all duration-300 group hover:text-[var(--secondary-500)] hover:animate-bounce-slow hover:shadow-[0_0_10px_var(--secondary-500)] ${
                    isActive ? 'text-[var(--secondary-500)] font-bold' : ''
                  }`
                }
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-[var(--secondary-500)] group-hover:w-full transition-all duration-300"></span>
              </NavLink>
            ))}
          </nav>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              className="p-2 rounded-full bg-[var(--primary-600)]/80 hover:bg-[var(--primary-600)] text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:animate-pulse"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-[var(--primary-500)]/95 backdrop-blur-md shadow-2xl animate-slide-up">
            <nav
              className="flex flex-col items-center space-y-6 py-6"
              aria-label="Mobile navigation"
            >
              {navLinks.map((navLink) => (
                <NavLink
                  key={navLink.to}
                  to={navLink.to}
                  className={({ isActive }) =>
                    `relative text-xl text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:text-[var(--secondary-500)] hover:animate-bounce-slow hover:shadow-[0_0_10px_var(--secondary-500)] ${
                      isActive ? 'text-[var(--secondary-500)] font-bold' : ''
                    }`
                  }
                  onClick={toggleMenu}
                >
                  {navLink.label}
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-[var(--secondary-500)] hover:w-full transition-all duration-300"></span>
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