  import React, { useState } from 'react';
  import { Link, NavLink } from 'react-router-dom';
  import { Menu, X } from 'lucide-react';
  import LogoImage from '@/assets/images/Logo.gif';

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
    { to: '/team', label: 'Team' },
    { to: '/contact', label: 'Contact' },
  ];

    return (
      <>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <header
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
            isScrolled ? 'bg-gradient-to-r from-[var(--primary-500)] to-[var(--primary-600)] shadow-2xl' : 'bg-gradient-to-r from-[var(--primary-500)/80] to-[var(--primary-600)/80] backdrop-blur-md'
          }`}
          style={{ height: '80px' }}
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="container-full py-1 sm:py-2 flex justify-between items-center h-full">
            <Link to="/" className="flex items-center animate-fade-in">
              <img
                src={LogoImage}
                alt="Company Logo"
                className="h-10 sm:h-12 w-auto transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                loading="lazy"
              />
            </Link>

            <nav className="hidden md:flex space-x-4 lg:space-x-8" aria-label="Primary navigation">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `relative text-lg lg:text-xl text-white font-medium transition-all duration-500 group hover:text-[var(--secondary-500)] ${
                      isActive ? 'text-[var(--secondary-500)] font-bold' : ''
                    }`
                  }
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--secondary-500)] group-hover:w-full transition-all duration-500 ease-in-out"></span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--secondary-500)] opacity-0 group-hover:opacity-100 group-hover:animate-pulse-slow transition-opacity duration-500"></span>
                </NavLink>
              ))}
            </nav>

            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                className="p-1.5 rounded-full bg-[var(--primary-600)]/90 hover:bg-[var(--primary-600)] text-white transition-all duration-300 transform hover:scale-115 hover:shadow-xl hover:animate-bounce"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {isOpen && (
            <div className="md:hidden bg-gradient-to-r from-[var(--primary-500)] to-[var(--primary-600)] backdrop-blur-md shadow-lg animate-slide-down">
              <nav
                className="flex flex-col items-center space-y-5 py-5"
                aria-label="Mobile navigation"
              >
                {navLinks.map((navLink) => (
                  <NavLink
                    key={navLink.to}
                    to={navLink.to}
                    className={({ isActive }) =>
                      `relative text-lg text-white font-medium transition-all duration-500 transform hover:scale-110 hover:text-[var(--secondary-500)] hover:animate-pulse ${
                        isActive ? 'text-[var(--secondary-500)] font-bold' : ''
                      }`
                    }
                    onClick={toggleMenu}
                  >
                    {navLink.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--secondary-500)] hover:w-full transition-all duration-500 ease-in-out"></span>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--secondary-500)] opacity-0 hover:opacity-100 hover:animate-pulse-slow transition-opacity duration-500"></span>
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