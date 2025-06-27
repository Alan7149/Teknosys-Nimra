import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import PageBanner from '../components/common/PageBanner';
import { CheckCircle } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Enclosures & Switchboard Systems',
    slug: 'enclosures-switchboards',
    description: 'Wall-mounting, floor-standing, and modular enclosures for commercial and industrial applications.',
    detailedDescription: `
      <p>We distribute enclosures designed for switchgear and control gear to enhance electrical installations in commercial and light industrial premises. Our range includes wall-mounting, floor-standing, and extendable enclosures made of Sheet Steel, Stainless Steel, Aluminum, and more.</p>
      <p>Subcategories include Sheet Steel Enclosures, Stainless Steel Enclosures, Floor Standing Enclosures, Modular Enclosures, and Switchboard Systems.</p>
    `,
    image: 'https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?auto=compress&cs=tinysrgb&w=1600',
    features: [
      'Sheet Steel Enclosures',
      'Stainless Steel Enclosures',
      'Floor Standing Enclosures',
      'Modular Enclosures',
      'Switchboard Systems',
    ],
  },
  {
    id: 2,
    title: 'Low Voltage Components',
    slug: 'low-voltage-components',
    description: 'Circuit breakers, contactors, VFDs, soft starters, and more for efficient energy management.',
    detailedDescription: `
      <p>Our world-class, time-proven electrical components include circuit breakers, switches, meters, enclosures, and switchboards. All products and solutions are designed to help individuals and organizations make the most of their energy at a cost-effective price.</p>
      <p>Environmental protection, health & safety, and outstanding services are our top priorities at Nimra Jeddah Electrical Est.</p>
    `,
    image: 'https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?auto=compress&cs=tinysrgb&w=1600',
    features: [
      'Circuit Breakers',
      'Contactors & Overload Relays',
      'VFDs and Soft Starters',
      'Manual Changeover Switches',
      'Safety Switches and Fuses',
    ],
  },
  {
    id: 3,
    title: 'Cable & Wiring Accessories',
    slug: 'cable-wiring',
    description: 'High-temperature, flame-retardant cables, terminal blocks, and wiring ducts for reliable installations.',
    detailedDescription: `
      <p>We provide high-temperature, flame-retardant cables designed for use in switch control, relay, and instrumentation panels of power switchgear to act as internal connectors in rectifier equipment, motor starters, and controllers.</p>
      <p>Our comprehensive range of electrical interconnection products is based on innovative spring pressure termination technology, ensuring 100% reliability without maintenance.</p>
    `,
    image: 'https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?auto=compress&cs=tinysrgb&w=1600',
    features: [
      'Panel Wires',
      'Multicore Flexible Cables',
      'Terminal Blocks',
      'Wiring Ducts',
      'Cable Lugs and Glands',
    ],
  },
  {
    id: 4,
    title: 'Relays, Timers & Power Supplies',
    slug: 'relays-timers',
    description: 'High-quality electrical measurement, protection, and automation components.',
    detailedDescription: `
      <p>Nimra Electricals provides high-quality electrical measurement, electrical protection, time relays, process control, and automation components.</p>
      <p>Our products include Earth Leakage Relays with CBCT, Voltage & Current Monitoring Relays, APFC Controllers, Timers, HMI/PLC systems, and more.</p>
    `,
    image: 'https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?auto=compress&cs=tinysrgb&w=1600',
    features: [
      'Earth Leakage Relays',
      'Voltage & Current Monitoring',
      'APFC Controllers',
      'HMI/PLC Systems',
      'Power Supplies and UPS',
    ],
  },
  {
    id: 5,
    title: 'Test & Measurement Devices',
    slug: 'test-measurement',
    description: 'Devices for metering, protection, and analysis of electrical parameters.',
    detailedDescription: `
      <p>We provide devices for metering & protection applications, measurement, and analysis of a wide range of electrical parameters.</p>
      <p>Implementation of test and measurement devices improves the site’s power quality, monitors energy consumption, and alerts occupants about excess power consumption.</p>
    `,
    image: 'https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?auto=compress&cs=tinysrgb&w=1600',
    features: [
      'Analog and Digital Panel Meters',
      'Digital KWH Meters',
      'Multifunction Meters',
      'Diris Digiwire Metering',
      'Current Transformers',
    ],
  },
  {
    id: 6,
    title: 'Panel Accessories',
    slug: 'panel-accessories',
    description: 'Solutions for thermal management, access, insulation, and protection.',
    detailedDescription: `
      <p>Nimra Electricals is the leading distributor of international brands in the field of enclosure accessories.</p>
      <p>Our products provide various solutions to thermal management systems, access solutions, insulation, and protection for the industry.</p>
    `,
    image: 'https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?auto=compress&cs=tinysrgb&w=1600',
    features: [
      'Fan Filters and Thermostats',
      'Heaters and Cooling Units',
      'Locks and Hinges',
      'Insulators and Pillars',
      'Busbar Supports',
    ],
  },
];

const ServiceDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = services.find((s) => s.slug === id);

  if (!service) {
    return (
      <div className="py-32 text-center">
        <h2 className="text-3xl font-bold mb-4">Service Not Found</h2>
        <p className="mb-8">The service you are looking for does not exist.</p>
        <Link to="/services" className="btn btn-primary">
          Back to Products & Services
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{service.title} - Nimra Jeddah Electric Est.</title>
        <meta name="description" content={service.description} />
      </Helmet>

      <PageBanner
        title={service.title}
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Products & Services', path: '/services' },
          { label: service.title },
        ]}
        backgroundImage={service.image}
      />

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <div
                className="prose prose-lg max-w-none mb-8"
                dangerouslySetInnerHTML={{ __html: service.detailedDescription }}
              />
              <h3 className="text-2xl font-bold mb-4">Key Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-secondary-500 mr-3 flex-shrink-0 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-primary-500 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Need This Product?</h3>
                <p className="mb-6">
                  Contact us to discuss how we can supply the best electrical products for your needs.
                </p>
                <Link to="/contact" className="btn bg-white text-primary-500 border-white hover:bg-white/90">
                  Get in Touch
                </Link>
              </div>
            </div>
            <div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Other Products</h3>
                <ul className="space-y-4">
                  {services
                    .filter((s) => s.id !== service.id)
                    .slice(0, 3)
                    .map((related) => (
                      <li key={related.id} className="group">
                        <Link to={`/services/${related.slug}`} className="block">
                          <div className="flex items-center mb-2">
                            <img
                              src={related.image}
                              alt={related.title}
                              className="w-16 h-16 object-cover rounded-lg mr-4"
                            />
                            <h4 className="font-semibold group-hover:text-secondary-500 transition-colors">
                              {related.title}
                            </h4>
                          </div>
                          <p className="text-sm text-gray-600">{related.description.substring(0, 100)}...</p>
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailPage;