// Import React and components
import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
// import ScrollToTop from '../common/ScrollToTop';
import WhatsAppContact from '../common/WhatsAppContact';
const Layout: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false); // State to track scroll position

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Show header after 50px scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup event listener
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header isScrolled={isScrolled} /> 
      <main className="flex-grow">
        <Outlet /> 
      </main>
      <Footer /> 
      {/* <ScrollToTop />  */}
      <WhatsAppContact />
    </div>
  );
};

export default Layout;