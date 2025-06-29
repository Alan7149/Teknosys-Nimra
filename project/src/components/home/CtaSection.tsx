import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

const ContactCTA: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-[var(--primary-500)] to-[var(--primary-600)] text-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 animate-slide-down">
          Ready to Power Your Next Project?
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl max-w-md sm:max-w-lg md:max-w-xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          Contact Nimra Jeddah Electric Est. for innovative electrical solutions tailored to your needs.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            to="/contact"
            className="btn btn-secondary text-lg px-6 py-3 rounded-full bg-[var(--secondary-500)] hover:bg-[var(--secondary-600)] hover:shadow-md hover:scale-105 transition-all duration-300 border border-white/20 animate-bounce-in"
            style={{ animationDelay: '400ms' }}
            aria-label="Get in touch with us"
          >
            <Mail className="w-5 h-5 mr-2" aria-hidden="true" />
            Get in Touch
          </Link>
          <a
            href="tel:+966126697155"
            className="btn btn-outline text-lg px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 hover:text-white hover:shadow-md transition-all duration-300 border border-white/20 animate-bounce-in"
            style={{ animationDelay: '600ms' }}
            aria-label="Call us at +966 12 669 7155"
          >
            <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
            Call Us
          </a>
        </div>
      </div>
      <div className="absolute inset-0 bg-[var(--secondary-500)]/10 -z-10 transform skew-y-3 opacity-50"></div>
    </section>
  );
};

export default ContactCTA;