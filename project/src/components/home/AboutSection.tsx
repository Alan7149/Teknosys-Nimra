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
    <section className="section" role="region" aria-label="About Us">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 animate-slide-up">{title}</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 animate-fade-in">
            {description}
          </p>
          <Link
            to={ctaLink}
            className="btn btn-primary text-sm sm:text-base"
            aria-label={ctaText}
          >
            {ctaText}
          </Link>
        </div>
        <div className="order-1 lg:order-2">
          <img
            src={image}
            alt={title}
            className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg shadow-lg animate-fade-in"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;