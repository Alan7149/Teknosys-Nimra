import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppContact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  // Replace with your WhatsApp number (international format, no +, no spaces)
  const whatsAppNumber = '919079022480';
  const whatsAppLink = `https://wa.me/${whatsAppNumber}?text=Hello! I'd like to get in touch.`;

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <a
      href={whatsAppLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full bg-green-500 text-white shadow-md transition-opacity duration-300 hover:bg-green-600 focus:outline-none ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-5 h-5" />
    </a>
  );
};

export default WhatsAppContact;