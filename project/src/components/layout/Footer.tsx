import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoImage from '../../assets/images/Logo.gif';
import { Phone, Mail, MapPin, Instagram, Youtube, MessageCircle, X } from 'lucide-react';
import whatsappQr from '../../assets/images/whatsapp-qr.jpg';
import youtubeQr from '../../assets/images/youtube-qr.jpg';
import instagramQr from '../../assets/images/instagram-qr.jpg';

const Footer: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState<'whatsapp' | 'youtube' | 'instagram' | null>(null);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleQrClick = (platform: 'whatsapp' | 'youtube' | 'instagram') => {
    setIsPopupOpen(platform);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(null);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000); // Reset after 3 seconds
    }
  };

  return (
    <footer className="bg-gradient-to-b from-primary-600 to-primary-800 text-white py-8 md:py-12" aria-label="Footer section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {/* Logo and Description */}
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center space-x-3" aria-label="Go to homepage">
              <img
                src={LogoImage}
                alt="Nimra Electricals Logo"
                className="h-10 w-auto"
                loading="lazy"
              />
            </Link>
            <p className="mt-4 text-sm leading-relaxed max-w-xs">
              Importer & Distributor of Electrical Materials, Power Distribution & Control Panels
            </p>
            <p className="mt-2 text-sm">C.R. No. 4030161136 | VAT No: 300105045800003</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-secondary-300 transition-colors" aria-label="Home page">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-secondary-300 transition-colors" aria-label="About page">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-secondary-300 transition-colors" aria-label="Products and services page">
                  Products & Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-secondary-300 transition-colors" aria-label="Projects page">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-secondary-300 transition-colors" aria-label="Contact page">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 flex-shrink-0 mt-1" aria-hidden="true" />
                <span>
                  P.O. Box 52325, Othman Centre, Jeddah 21563, Kingdom of Saudi Arabia
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 flex-shrink-0" aria-hidden="true" />
                <a href="tel:+966126697155" className="hover:text-secondary-300">+966 12 669 7155</a>,{' '}
                <a href="tel:+966126687733" className="hover:text-secondary-300">+966 12 668 7733</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 flex-shrink-0" aria-hidden="true" />
                <a href="mailto:nimraelectric@gmail.com" className="hover:text-secondary-300">nimraelectric@gmail.com</a>
              </li>
              <li className="flex items-center space-x-4 mt-4">
                <button
                  onClick={() => handleQrClick('whatsapp')}
                  className="text-white hover:text-secondary-300 focus:outline-none focus:ring-2 focus:ring-secondary-300 rounded-full p-1"
                  aria-label="Open WhatsApp QR code"
                >
                  <MessageCircle className="w-6 h-6" />
                </button>
                <button
                  onClick={() => handleQrClick('youtube')}
                  className="text-white hover:text-secondary-300 focus:outline-none focus:ring-2 focus:ring-secondary-300 rounded-full p-1"
                  aria-label="Open YouTube QR code"
                >
                  <Youtube className="w-6 h-6" />
                </button>
                <button
                  onClick={() => handleQrClick('instagram')}
                  className="text-white hover:text-secondary-300 focus:outline-none focus:ring-2 focus:ring-secondary-300 rounded-full p-1"
                  aria-label="Open Instagram QR code"
                >
                  <Instagram className="w-6 h-6" />
                </button>
              </li>
            </ul>
          </div>

          {/* Commitment and Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Commitment</h3>
            <p className="text-sm leading-relaxed mb-4">
              Delivering Results, Exceeding Expectations. We provide quality products and
              continually build skills to meet diverse market needs.
            </p>
            <h4 className="text-md font-semibold mb-2">Subscribe to Newsletter</h4>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="p-2 rounded-md text-black w-full sm:w-auto"
                required
                aria-label="Email for newsletter subscription"
              />
              <button
                type="submit"
                className="bg-secondary-500 hover:bg-secondary-600 text-white p-2 rounded-md transition-colors"
                aria-label="Subscribe to newsletter"
              >
                Subscribe
              </button>
            </form>
            {isSubscribed && <p className="mt-2 text-sm text-green-300">Thank you for subscribing!</p>}
          </div>
        </div>
        <div className="border-t border-white/20 mt-6 pt-4 text-center text-xs md:text-sm">
          <p>© {new Date().getFullYear()} Nimra Jeddah Electric Est. All rights reserved.</p>
          <p>Powered by <a href="https://www.teknosys.net" className="text-secondary-300">Teknosys</a></p>
        </div>
      </div>

      {isPopupOpen && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={handleClosePopup}
          role="dialog"
          aria-label={`${isPopupOpen} QR Code Popup`}
        >
          <div
            className="bg-white p-6 rounded-lg relative max-w-xs w-full shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClosePopup}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-full p-1"
              aria-label="Close popup"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={isPopupOpen === 'whatsapp' ? whatsappQr : isPopupOpen === 'youtube' ? youtubeQr : instagramQr}
              alt={`${isPopupOpen} QR Code`}
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer; 