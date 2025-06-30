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
    image: '/src/assets/images/ProductsNimra/Enclosing_Switchboard_System.jpg',
    link: '/services/enclosures-switchboards',
    brands: ['sch', 'alfnar', 'ksa_enclosure', 'nvent3'],
    subcategories: ['Sheet Steel', 'Enclosures', 'Stainless Steel Enclosures', 'Floor Standing Enclosures', 'Modular Enclosures', 'Switchboard Systems'],
  },
  {
    id: 2,
    title: 'Low Voltage Components',
    slug: 'low-voltage-components',
    description: 'Circuit breakers, switches, meters, enclosures, and switchboards for efficient energy management.',
    category: 'components',
    image: '/src/assets/images/ProductsNimra/Low_voltage_components.jpg',
    link: '/services/low-voltage-components',
    brands: ['sch', 'cselectric', 'himel', 'socomec', 'abb'],
    subcategories: ['Circuit Breakers', 'Contactor & Overload Relays', 'Manual Motor Starters', 'VFDs', 'Soft Starters', 'Manual Changeover Switches', 'ATS', 'Safety Switches', 'Fuse & Fuse Bases', 'Weatherproof Isolators', 'Signaling Devices'],
  },
  {
    id: 3,
    title: 'Busbars',
    slug: 'busbars',
    description: 'High-conductivity copper busbars for superior electrical and mechanical performance.',
    category: 'busbars',
    image: '/src/assets/images/ProductsNimra/Busbars.jpg',
    link: '/services/busbars',
    subcategories: ['Tinned Copper Busbars', 'Comb Busbars', 'Copper Tapes', 'Distribution Blocks', 'Flexible Copper Busbars'],
  },
  {
    id: 4,
    title: 'Relays, Timers & Power Supplies',
    slug: 'relays-timers',
    description: 'High-quality measurement, protection, and automation components.',
    category: 'relays',
    image: '/src/assets/images/ProductsNimra/Relays_Timers_PowerSuppliers.jpg',
    link: '/services/relays-timers',
    brands: ['sch', 'selec', 'himel'],
    subcategories: ['Earth Leakage Relays with CBCT', 'Voltage & Current Monitoring Relays', 'APFC Controllers', 'Over Current & Earth fault Protection Relays', 'ON-OFF-STARDELTA', 'CYCLIC TIMERS', 'HMI/PLS', 'Water Level Controllers', 'Power Supplies', 'Control Transformers', 'UPS'],
  },
  {
    id: 5,
    title: 'Isolators, Switching & Protection Devices',
    slug: 'isolators-switching',
    description: 'Certified isolation and changeover switching systems for secured power management.',
    category: 'isolators',
    image: '/src/assets/images/ProductsNimra/Isolators_switching_protectiondevices.jpg',
    link: '/services/isolators-switching',
    brands: ['cselectric', 'socomec'],
    subcategories: ['Weatherproof Isolators', 'Photovoltaic Isolators', 'Door Mounting Loadbreak Switches', 'Panel Mounting Loadbreak Switches', 'Manual Changeover Switches', 'Bypass Switches', 'Surge Protection Devices', 'System 1000/3000 Lightning Protection System'],
  },
  {
    id: 6,
    title: 'Test & Measurement Devices',
    slug: 'test-measurement',
    description: 'Devices for metering, protection, and analysis of electrical parameters.',
    category: 'measurement',
    image: '/src/assets/images/ProductsNimra/Test_measurementdevices.jpg',
    link: '/services/test-measurement',
    brands: ['selec', 'cselectric', 'socomec', 'abb'],
    subcategories: ['Analog Panel Meters', 'Digital Panel Meters', 'Digital KWH Meters', 'Digital Multifunction Meters', 'Diris Digiwire Metering', 'Current Transformers'],
  },
  {
    id: 7,
    title: 'Cable & Wiring Accessories',
    slug: 'cable-wiring',
    description: 'High-temperature, flame-retardant cables and interconnection products for reliable installations.',
    category: 'cables',
    image: '/src/assets/images/ProductsNimra/cabel_wiringaccessories.png',
    link: '/services/cable-wiring',
    brands: ['trinity', 'elmex', 'alfnar', 'cawabel'],
    subcategories: ['Panel Wires', 'Multicore Flexible Cables', 'Terminal Blocks', 'Wiring Ducts', 'Wire End Sleeves', 'Cable Markers', 'Busbar Sleeves', 'Cable Ties', 'Earthing Materials', 'Cable Lugs', 'Cable Glands', 'Electrical Tape 3M/Scotch'],
  },
  {
    id: 8,
    title: 'Panel Accessories',
    slug: 'panel-accessories',
    description: 'Solutions for thermal management, access, insulation, and protection.',
    category: 'accessories',
    image: '/src/assets/images/ProductsNimra/panel_accessories.png',
    link: '/services/panel-accessories',
    brands: ['leipole', 'pce', 'axis', 'furse'],
    subcategories: ['Fan Filters', 'Thermostat', 'Hygrostat', 'Heaters', 'Cooling Units', 'Locks', 'Hinges', 'Insulators', 'Pillars', 'Neutral Links', 'Busbar Supports'],
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
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Products & Services - Nimra Jeddah Electric Est.</title>
        <meta
          name="description"
          content="Explore our wide range of electrical switchgear and control gear solutions, including enclosures, low voltage components, cables, and more."
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

      <section className="section py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-12 animate-slide-down">
            Nimra Electricals: Electrical Switchgear & Control Gear Solutions
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="relative w-full md:w-1/3 mb-4 md:mb-0">
              <input
                type="text"
                placeholder="Search products or services..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
            {/* <div className="flex space-x-2 overflow-x-auto pb-2 md:ml-6">
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
            </div> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
            {filteredServices.length > 0 ? (
              filteredServices.map((service) => (
                <div key={service.id} className="card bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-56 object-cover rounded-t-xl"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-gray-800 hover:text-primary-500 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{service.description}</p>
                    <Link
                      to={service.link}
                      className="text-primary-500 font-medium hover:underline"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p className="col-span-full text-center text-gray-600 text-lg">
                No products or services found matching your criteria.
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;