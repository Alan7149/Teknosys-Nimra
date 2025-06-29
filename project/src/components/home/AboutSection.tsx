import React from 'react';
import { Link } from 'react-router-dom';

interface AboutSectionProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  image: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ title, description, ctaText, ctaLink, image }) => {
  return (
    <section
      className="section relative overflow-hidden bg-gradient-to-br from-gray-50 to-white"
      role="region"
      aria-label="About Us"
    >
      <div className="container mx-auto px-4 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
          <div className="order-2 lg:order-1 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-800 animate-slide-right">
              {title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              {description}
            </p>
            <Link
              to={ctaLink}
              className="btn btn-primary text-lg px-6 py-3 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 animate-bounce-in"
              style={{ animationDelay: '400ms' }}
              aria-label={ctaText}
            >
              {ctaText}
            </Link>
          </div>
          <div className="order-1 lg:order-2 relative animate-parallax">
            <div className="w-full h-64 sm:h-80 md:h-96 overflow-hidden rounded-xl shadow-2xl">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-[var(--primary-500)]/5 -z-10 transform rotate-3 skew-y-3 opacity-50"></div>
    </section>
  );
};

export default AboutSection;