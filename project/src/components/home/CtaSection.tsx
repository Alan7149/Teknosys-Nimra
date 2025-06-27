import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

const ContactCTA: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 text-center text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 animate-slide-up">
          Ready to Power Your Next Project?
        </h2>
        <p className="text-sm sm:text-base md:text-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto mb-6 sm:mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
          Contact Nimra Jeddah Electric Est. for innovative electrical solutions tailored to your needs.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <Link
            to="/contact"
            className="btn btn-secondary text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 animate-fade-in"
            style={{ animationDelay: '400ms' }}
            aria-label="Get in touch with us"
          >
            <Mail className="w-4 sm:w-5 h-4 sm:h-5 mr-2" aria-hidden="true" />
            Get in Touch
          </Link>
          <a
            href="tel:+966126697155"
            className="btn btn-outline text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 animate-fade-in"
            style={{ animationDelay: '600ms' }}
            aria-label="Call us at +966 12 669 7155"
          >
            <Phone className="w-4 sm:w-5 h-4 sm:h-5 mr-2" aria-hidden="true" />
            Call Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;