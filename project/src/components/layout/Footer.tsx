// src/components/Footer.tsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Youtube, MessageCircle, X } from 'lucide-react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store';
import useContentFetcher from '../../hooks/useContentFetcher';
import LogoImage from '../../assets/images/Logo.gif';
import whatsappQr from '../../assets/images/whatsapp-qr.jpg';
import youtubeQr from '../../assets/images/youtube-qr.jpg';
import instagramQr from '../../assets/images/instagram-qr.jpg';

type Platform = 'whatsapp' | 'youtube' | 'instagram' | null;

const Footer: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState<Platform>(null);
  const lang = useSelector((state: RootState) => state.customization.language);

  const { content, isLoading } = useContentFetcher('home', 'connect');
  const companyInfo = content?.[`content_${lang}` as 'content_en' | 'content_ar'] || content?.content || '';

  const handleQrClick = (platform: Platform) => {
    setIsPopupOpen(platform);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(null);
  };

  return (
    <footer className="bg-primary-500 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-3">
              <img src={LogoImage} alt="Nimra Electricals" className="h-10 w-auto" />
            </Link>
            <p className="mt-4 text-sm">
              Importer & Distributor of Electrical Materials, Power Distribution & Control Panels
            </p>
            <p className="mt-2 text-sm">C.R. No. 4030161136 | VAT No: 300105045800003</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-secondary-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-secondary-500 transition-colors">About</Link></li>
              <li><Link to="/services" className="hover:text-secondary-500 transition-colors">Products & Services</Link></li>
              <li><Link to="/projects" className="hover:text-secondary-500 transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="hover:text-secondary-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 flex-shrink-0 mt-1" />
                <span>
                  P.O. Box 52325, Othman Centre, Jeddah 21563, Kingdom of Saudi Arabia
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
                <a href="tel:+966126697155">+966 12 669 7155</a>,{' '}
                <a href="tel:+966126687733">+966 12 668 7733</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
                <a href="mailto:nimraelectric@gmail.com">nimraelectric@gmail.com</a>
              </li>
              <li className="flex items-center space-x-4 mt-4">
                <button onClick={() => handleQrClick('whatsapp')} className="text-white hover:text-secondary-500">
                  <MessageCircle className="w-6 h-6" />
                </button>
                <button onClick={() => handleQrClick('youtube')} className="text-white hover:text-secondary-500">
                  <Youtube className="w-6 h-6" />
                </button>
                <button onClick={() => handleQrClick('instagram')} className="text-white hover:text-secondary-500">
                  <Instagram className="w-6 h-6" />
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Our Commitment</h3>
            <p className="text-sm">
              {companyInfo || 'Delivering Results, Exceeding Expectations. We provide quality products and continually build skills to meet diverse market needs.'}
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm">
          <p>© {new Date().getFullYear()} Nimra Jeddah Electric Est. All rights reserved.</p>
        </div>
      </div>

      {isPopupOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={handleClosePopup}>
          <div className="bg-white p-6 rounded-lg relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={handleClosePopup} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
              <X className="w-6 h-6" />
            </button>
            <img
              src={
                isPopupOpen === 'whatsapp'
                  ? whatsappQr
                  : isPopupOpen === 'youtube'
                  ? youtubeQr
                  : instagramQr
              }
              alt={`${isPopupOpen} QR Code`}
              className="w-64 h-64 object-contain"
            />
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
