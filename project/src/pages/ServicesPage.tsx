import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import PageBanner from '../components/common/PageBanner';
import { Search } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Enclosures & Switchboard Systems',
    slug: 'enclosures-switchboards',
    description: 'Wall-mounting, floor-standing, and modular enclosures for commercial and industrial applications.',
    category: 'enclosures',
    image: 'https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?auto=compress&cs=tinysrgb&w=1600',
    link: '/services/enclosures-switchboards',
  },
  {
    id: 2,
    title: 'Low Voltage Components',
    slug: 'low-voltage-components',
    description: 'Circuit breakers, contactors, VFDs, soft starters, and more for efficient energy management.',
    category: 'components',
    image: 'https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?auto=compress&cs=tinysrgb&w=1600',
    link: '/services/low-voltage-components',
  },
  {
    id: 3,
    title: 'Cable & Wiring Accessories',
    slug: 'cable-wiring',
    description: 'High-temperature, flame-retardant cables, terminal blocks, and wiring ducts for reliable installations.',
    category: 'cables',
    image: 'https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?auto=compress&cs=tinysrgb&w=1600',
    link: '/services/cable-wiring',
  },
  {
    id: 4,
    title: 'Relays, Timers & Power Supplies',
    slug: 'relays-timers',
    description: 'High-quality electrical measurement, protection, and automation components.',
    category: 'relays',
    image: 'https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?auto=compress&cs=tinysrgb&w=1600',
    link: '/services/relays-timers',
  },
  {
    id: 5,
    title: 'Test & Measurement Devices',
    slug: 'test-measurement',
    description: 'Devices for metering, protection, and analysis of electrical parameters.',
    category: 'measurement',
    image: 'https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?auto=compress&cs=tinysrgb&w=1600',
    link: '/services/test-measurement',
  },
  {
    id: 6,
    title: 'Panel Accessories',
    slug: 'panel-accessories',
    description: 'Solutions for thermal management, access, insulation, and protection.',
    category: 'accessories',
    image: 'https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?auto=compress&cs=tinysrgb&w=1600',
    link: '/services/panel-accessories',
  },
];

const ServicesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    ...new Set(services.map((service) => service.category)),
  ];

  const filteredServices = services.filter((service) => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Products & Services - Nimra Jeddah Electric Est.</title>
        <meta
          name="description"
          content="Explore our wide range of electrical products and services, including enclosures, low voltage components, cables, and more."
        />
      </Helmet>

      <PageBanner
        title="Products & Services"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Products & Services' },
        ]}
        backgroundImage="https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <section className="section">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="relative w-full md:w-1/3 mb-4 md:mb-0">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary-500 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.length > 0 ? (
              filteredServices.map((service) => (
                <div key={service.id} className="card group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary-500 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Link
                      to={service.link}
                      className="text-primary-500 font-semibold hover:underline"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-600">
                No products found matching your criteria.
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;