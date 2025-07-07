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

const sampleServices: Service[] = [
  {
    id: '1',
    title: 'Electrical Installation',
    description: 'Professional installation of electrical systems for residential and commercial properties.',
    image: 'https://picsum.photos/id/1015/800/600',
    link: '/services/installation',
  },
  {
    id: '2',
    title: 'Lighting Solutions',
    description: 'Custom lighting design and installation to enhance your space.',
    image: 'https://picsum.photos/id/1018/800/600',
    link: '/services/lighting',
  },
  {
    id: '3',
    title: 'Maintenance & Repairs',
    description: 'Reliable maintenance and repair services to keep your systems running smoothly.',
    image: 'https://picsum.photos/id/1025/800/600',
    link: '/services/maintenance',
  },
];

const ServicesSection: React.FC<ServicesSectionProps> = ({ services = sampleServices }) => {
  return (
    <section className="section py-12 px-4 sm:px-6 lg:px-8 bg-gray-50" role="region" aria-label="Our Services">
      <div className="section-title text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 animate-slide-up">Our Services</h2>
        <p className="text-lg text-gray-600 mt-2 animate-slide-up" style={{ animationDelay: '100ms' }}>
          Comprehensive electrical solutions tailored to your needs.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
        {services.map((service) => (
          <div
            key={service.id}
            className="card group bg-white shadow-lg rounded-lg overflow-hidden animate-fade-in hover:shadow-xl transition-shadow duration-300"
            style={{ animationDelay: `${parseInt(service.id) * 100}ms` }}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 sm:h-56 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              decoding="async"
              onError={(e) => {
                console.error(`Failed to load image for ${service.title}: ${service.image}`);
                e.currentTarget.src = 'https://picsum.photos/800/600';
              }}
            />
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4">{service.description}</p>
              <Link
                to={service.link}
                className="btn btn-outline inline-block text-sm sm:text-base text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white py-2 px-4 rounded transition-colors"
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