import React from 'react';
import { Link } from 'react-router-dom';

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface ServicesSectionProps {
  services: Service[];
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ services }) => {
  return (
    <section className="section relative bg-gradient-to-br from-white to-gray-50" role="region" aria-label="Our Services">
      <div className="container mx-auto px-4 py-16 sm:py-20 lg:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 animate-slide-down">
            Our Services
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mt-2 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Comprehensive electrical solutions tailored to your needs.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="card bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-500 animate-slide-up-delay"
              style={{ animationDelay: `${parseInt(service.id) * 200}ms` }}
            >
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover transform transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800 hover:text-[var(--primary-500)] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-6">{service.description}</p>
                <Link
                  to={service.link}
                  className="btn btn-outline text-sm sm:text-base px-4 py-2 hover:bg-[var(--primary-500)] hover:text-white transition-all duration-300"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-[var(--secondary-500)]/5 -z-10 transform rotate-2 skew-x-3 opacity-30"></div>
    </section>
  );
};

export default ServicesSection;