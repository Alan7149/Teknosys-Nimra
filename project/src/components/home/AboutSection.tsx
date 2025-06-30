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
      <div className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24" style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
          <div className="order-2 lg:order-1 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-800 animate-slide-right">
              {title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              {description}
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              With over a decade of expertise, we pride ourselves on delivering innovative solutions tailored to your needs, ensuring quality and reliability in every project.
            </p>
            <ul className="list-disc pl-5 mb-8 text-gray-600 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
              <li className="mb-2">Expert team with industry-leading experience</li>
              <li className="mb-2">Customized electrical solutions for all sectors</li>
              <li className="mb-2">Commitment to sustainability and efficiency</li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
              <Link
                to={ctaLink}
                className="btn btn-primary text-lg px-6 py-3 rounded-full bg-[var(--primary-500)] text-white hover:bg-[var(--primary-600)] hover:shadow-lg hover:scale-105 transition-all duration-300"
                aria-label={ctaText}
              >
                {ctaText}
              </Link>
              <Link
                to="/contact"
                className="btn btn-secondary text-lg px-6 py-3 rounded-full bg-[var(--secondary-500)] text-white hover:bg-[var(--secondary-600)] hover:shadow-lg hover:scale-105 transition-all duration-300"
                aria-label="Contact Us"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative animate-parallax">
            <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] overflow-hidden rounded-xl shadow-2xl">
              <img
                src={image || '/fallback-image.jpg'} // Fallback image if path fails
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/fallback-image.jpg'; // Fallback on error
                }}
              />
            </div>
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-[var(--primary-500)]/20 rounded-full blur-xl opacity-70 animate-pulse-slow"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[var(--secondary-500)]/20 rounded-full blur-xl opacity-70 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-[var(--primary-500)]/5 -z-10 transform rotate-3 skew-y-3 opacity-50"></div>
    </section>
  );
};

export default AboutSection;