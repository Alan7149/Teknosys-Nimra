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
      <section className="section" role="region" aria-label="Our Services">
        <div className="section-title">
          <h2 className="animate-slide-up">Our Services</h2>
          <p className="animate-slide-up" style={{ animationDelay: '100ms' }}>
            Comprehensive electrical solutions tailored to your needs.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <div key={service.id} className="card group animate-fade-in" style={{ animationDelay: `${parseInt(service.id) * 100}ms` }}>
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 sm:h-56 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-primary-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">{service.description}</p>
                <Link
                  to={service.link}
                  className="btn btn-outline text-sm sm:text-base"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };

  export default ServicesSection;