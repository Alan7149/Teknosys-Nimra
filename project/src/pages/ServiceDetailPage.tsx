import React, { useState } from 'react';
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
      <p>We distribute enclosures designed for switchgear and control gear to enhance electrical installations in commercial and light industrial premises. Our range includes wall-mounting, floor-standing, and extendable enclosures made of Sheet Steel, Stainless Steel, Aluminum, & many more.</p>
    `,
    image: '/src/assets/images/ProductsNimra/Enclosing_Switchboard_System.jpg',
    link: '/services/enclosures-switchboards',
    features: [
      { name: 'Sheet Steel', info: 'Durable enclosures for general-purpose applications, resistant to corrosion.' },
      { name: 'Enclosures', info: 'Versatile housing solutions for various electrical setups.' },
      { name: 'Stainless Steel Enclosures', info: 'Corrosion-resistant for harsh environments.' },
      { name: 'Floor Standing Enclosures', info: 'Robust, large-scale solutions for industrial use.' },
      { name: 'Modular Enclosures', info: 'Flexible, expandable designs for custom installations.' },
      { name: 'Switchboard Systems', info: 'Integrated systems for efficient power distribution.' },
    ],
    brands: ['sch', 'alfnar', 'ksa_enclosure', 'nvent3'],
  },
  {
    id: 2,
    title: 'Low Voltage Components',
    slug: 'low-voltage-components',
    description: 'Circuit breakers, switches, meters, enclosures, and switchboards for efficient energy management.',
    detailedDescription: `
      <p>Our world-class, time-proven electrical components include circuit breakers, switches, meters, enclosures, and switchboards. All products and solutions are designed to help individuals and organizations make the most of their energy at a cost-effective price. Environmental protection, health & safety, and outstanding services are our top priorities at Nimra Jeddah Electrical Est.</p>
    `,
    image: '/src/assets/images/ProductsNimra/Low_voltage_components.jpg',
    link: '/services/low-voltage-components',
    features: [
      { name: 'Circuit Breakers', info: 'Protect circuits from overloads and short circuits.' },
      { name: 'Contactor & Overload Relays', info: 'Control power circuits with overload protection.' },
      { name: 'Manual Motor Starters', info: 'Start and protect motors manually.' },
      { name: 'VFDs', info: 'Variable frequency drives for motor speed control.' },
      { name: 'Soft Starters', info: 'Reduce mechanical stress during motor startup.' },
      { name: 'Manual Changeover Switches', info: 'Switch between power sources manually.' },
      { name: 'ATS', info: 'Automatic transfer switches for seamless power backup.' },
      { name: 'Safety Switches', info: 'Ensure safe disconnection of electrical loads.' },
      { name: 'Fuse & Fuse Bases', info: 'Protect circuits with replaceable fuses.' },
      { name: 'Weatherproof Isolators', info: 'Outdoor-rated isolation switches.' },
      { name: 'Signaling Devices', info: 'Visual and audible alerts for system status.' },
    ],
    brands: ['sch', 'cselectric', 'himel', 'socomec', 'abb'],
  },
  {
    id: 3,
    title: 'Busbars',
    slug: 'busbars',
    description: 'High-conductivity copper busbars for superior electrical and mechanical performance.',
    detailedDescription: `
      <p>Copper busbars in electrical applications require several key electrical and mechanical properties which include high electrical conductivity, good strength, good formability, and surface flatness. Precision Electricals will continue to play a major role in supplying superior quality products to the industry.</p>
    `,
    image: '/src/assets/images/ProductsNimra/Busbars.jpg',
    link: '/services/busbars',
    features: [
      { name: 'Tinned Copper Busbars', info: 'Corrosion-resistant with enhanced conductivity.' },
      { name: 'Comb Busbars', info: 'Pre-assembled for easy installation.' },
      { name: 'Copper Tapes', info: 'Flexible conductive strips for custom applications.' },
      { name: 'Distribution Blocks', info: 'Efficient power distribution points.' },
      { name: 'Flexible Copper Busbars', info: 'Adaptable for complex wiring setups.' },
    ],
  },
  {
    id: 4,
    title: 'Relays, Timers & Power Supplies',
    slug: 'relays-timers',
    description: 'High-quality measurement, protection, and automation components.',
    detailedDescription: `
      <p>Nimra Electricals provides high-quality electrical measurement, electrical protection, time relays, process control, and automation components.</p>
    `,
    image: '/src/assets/images/ProductsNimra/Relays_Timers_PowerSuppliers.jpg',
    link: '/services/relays-timers',
    features: [
      { name: 'Earth Leakage Relays with CBCT', info: 'Detects leakage currents for safety.' },
      { name: 'Voltage & Current Monitoring Relays', info: 'Monitors electrical parameters.' },
      { name: 'APFC Controllers', info: 'Optimizes power factor correction.' },
      { name: 'Over Current & Earth fault Protection Relays', info: 'Protects against overcurrent and faults.' },
      { name: 'ON-OFF-STARDELTA', info: 'Controls motor starting sequences.' },
      { name: 'CYCLIC TIMERS', info: 'Automates repetitive tasks.' },
      { name: 'HMI/PLS', info: 'Human-machine interface and PLC systems.' },
      { name: 'Water Level Controllers', info: 'Manages water levels automatically.' },
      { name: 'Power Supplies', info: 'Reliable power for electronic systems.' },
      { name: 'Control Transformers', info: 'Steps down voltage for control circuits.' },
      { name: 'UPS', info: 'Uninterruptible power supply for backup.' },
    ],
    brands: ['sch', 'selec', 'himel'],
  },
  {
    id: 5,
    title: 'Isolators, Switching & Protection Devices',
    slug: 'isolators-switching',
    description: 'Certified isolation and changeover switching systems for secured power management.',
    detailedDescription: `
      <p>Nimra Electricals provides world-recognized agency-certified isolation, on-load breaking, manual or automatic changeover switching systems for managed power and secured facilities.</p>
    `,
    image: '/src/assets/images/ProductsNimra/Isolators_switching_protectiondevices.jpg',
    link: '/services/isolators-switching',
    features: [
      { name: 'Weatherproof Isolators', info: 'Outdoor-rated isolation switches.' },
      { name: 'Photovoltaic Isolators', info: 'Designed for solar installations.' },
      { name: 'Door Mounting Loadbreak Switches', info: 'Integrated into enclosure doors.' },
      { name: 'Panel Mounting Loadbreak Switches', info: 'Mounted within panels.' },
      { name: 'Manual Changeover Switches', info: 'Manual power source switching.' },
      { name: 'Bypass Switches', info: 'Alternative path for maintenance.' },
      { name: 'Surge Protection Devices', info: 'Protects against voltage spikes.' },
      { name: 'System 1000/3000 Lightning Protection System', info: 'Advanced lightning safeguarding.' },
    ],
    brands: ['cselectric', 'socomec'],
  },
  {
    id: 6,
    title: 'Test & Measurement Devices',
    slug: 'test-measurement',
    description: 'Devices for metering, protection, and analysis of electrical parameters.',
    detailedDescription: `
      <p>Nimra Electricals provides devices for metering & protection applications, measurement, and analysis of a wide range of electrical parameters. Implementation of test and measurement devices improves the site’s power quality, monitors energy consumption, and alerts occupants about excess power consumption.</p>
    `,
    image: '/src/assets/images/ProductsNimra/Test_measurementdevices.jpg',
    link: '/services/test-measurement',
    features: [
      { name: 'Analog Panel Meters', info: 'Traditional analog readings.' },
      { name: 'Digital Panel Meters', info: 'Precise digital displays.' },
      { name: 'Digital KWH Meters', info: 'Measures energy consumption.' },
      { name: 'Digital Multifunction Meters', info: 'Multi-parameter monitoring.' },
      { name: 'Diris Digiwire Metering', info: 'Advanced metering system.' },
      { name: 'Current Transformers', info: 'Steps down current for measurement.' },
    ],
    brands: ['selec', 'cselectric', 'socomec', 'abb'],
  },
  {
    id: 7,
    title: 'Cable & Wiring Accessories',
    slug: 'cable-wiring',
    description: 'High-temperature, flame-retardant cables and interconnection products for reliable installations.',
    detailedDescription: `
      <p>Nimra Electricals provide high-temperature, flame-retardant cables designed for use in switch control, relay, and instrumentation panels of power switchgear to act as internal connectors in rectifier equipment, motor starters, and controllers. We offer a comprehensive range of electrical interconnection products based on innovative spring pressure termination technology. Only these clamping and connecting systems can guarantee proper functioning and 100% reliability – and that all without any maintenance.</p>
    `,
    image: '/src/assets/images/ProductsNimra/cabel_wiringaccessories.png',
    link: '/services/cable-wiring',
    features: [
      { name: 'Panel Wires', info: 'Wiring for control panels.' },
      { name: 'Multicore Flexible Cables', info: 'Versatile multi-conductor cables.' },
      { name: 'Terminal Blocks', info: 'Secure connection points.' },
      { name: 'Wiring Ducts', info: 'Organizes and protects wires.' },
      { name: 'Wire End Sleeves', info: 'Insulates wire ends.' },
      { name: 'Cable Markers', info: 'Labels for identification.' },
      { name: 'Busbar Sleeves', info: 'Insulation for busbars.' },
      { name: 'Cable Ties', info: 'Secures cable bundles.' },
      { name: 'Earthing Materials', info: 'Grounding solutions.' },
      { name: 'Cable Lugs', info: 'Connects cables to equipment.' },
      { name: 'Cable Glands', info: 'Seals cable entries.' },
      { name: 'Electrical Tape 3M/Scotch', info: 'Insulating tape for repairs.' },
    ],
    brands: ['trinity', 'elmex', 'alfnar', 'cawabel'],
  },
  {
    id: 8,
    title: 'Panel Accessories',
    slug: 'panel-accessories',
    description: 'Solutions for thermal management, access, insulation, and protection.',
    detailedDescription: `
      <p>Nimra Electricals is the leading distributor of international brands in the field of enclosure accessories. Our products provide various solutions to thermal management systems, access solutions, insulation, and protection for the industry.</p>
    `,
    image: '/src/assets/images/ProductsNimra/panel_accessories.png',
    link: '/services/panel-accessories',
    features: [
      { name: 'Fan Filters', info: 'Ensures proper ventilation.' },
      { name: 'Thermostat', info: 'Regulates temperature.' },
      { name: 'Hygrostat', info: 'Controls humidity levels.' },
      { name: 'Heaters', info: 'Prevents condensation.' },
      { name: 'Cooling Units', info: 'Maintains optimal temperatures.' },
      { name: 'Locks', info: 'Secures enclosure access.' },
      { name: 'Hinges', info: 'Facilitates door movement.' },
      { name: 'Insulators', info: 'Prevents electrical leakage.' },
      { name: 'Pillars', info: 'Structural support components.' },
      { name: 'Neutral Links', info: 'Connects neutral circuits.' },
      { name: 'Busbar Supports', info: 'Holds busbars in place.' },
    ],
    brands: ['leipole', 'pce', 'axis', 'furse'],
  },
];

const ServiceDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = services.find((s) => s.slug === id);
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});

  if (!service) {
    return (
      <div className="py-32 text-center bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">Service Not Found</h2>
        <p className="mb-8">The service you are looking for does not exist.</p>
        <Link to="/services" className="btn bg-primary-500 text-white px-6 py-3 rounded-full hover:bg-primary-600">
          Back to Products & Services
        </Link>
      </div>
    );
  }

  const toggleExpand = (feature: string) => {
    setExpanded((prev) => ({ ...prev, [feature]: !prev[feature] }));
  };

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

      <section className="section py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="mb-8 relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-96 object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
                <div className="absolute inset-0 bg-[var(--primary-500)]/20 opacity-0 hover:opacity-30 transition-opacity duration-300 rounded-xl"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Overview</h2>
              <div
                className="prose prose-lg max-w-none mb-8 text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: service.detailedDescription }}
              />
              {service.brands && service.brands.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-[var(--primary-500)]">Brand Partners</h3>
                  <div className="flex flex-wrap gap-4">
                    {service.brands.map((brand) => (
                      <img
                        key={brand}
                        src={`/src/assets/images/brands/${brand}.png`}
                        alt={`${brand} logo`}
                        className="h-16 w-auto object-contain hover:scale-110 transition-transform duration-300"
                      />
                    ))}
                  </div>
                </div>
              )}
              <h3 className="text-2xl font-bold mb-4 text-[var(--primary-500)]">Key Features</h3>
              <ul className="space-y-4 mb-8">
                {service.features.map((feature) => (
                  <li key={feature.name} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-secondary-500 mr-3 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <span className="font-medium text-gray-800">{feature.name}</span>
                      <button
                        onClick={() => toggleExpand(feature.name)}
                        className="ml-2 text-sm text-primary-500 hover:underline"
                      >
                        {expanded[feature.name] ? 'Less' : 'More'}
                      </button>
                      {expanded[feature.name] && (
                        <p className="text-gray-600 mt-2 ml-9">{feature.info}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              <div className="bg-gradient-to-r from-[var(--primary-500)] to-[var(--secondary-500)] text-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Need This Product?</h3>
                <p className="mb-6 text-lg">Contact us to discuss how we can supply the best solutions for your needs.</p>
                <Link to="/contact" className="btn bg-white text-[var(--primary-500)] px-6 py-3 rounded-full hover:bg-white/90 hover:shadow-md">
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4 text-[var(--primary-500)]">Other Products</h3>
                <ul className="space-y-4">
                  {services
                    .filter((s) => s.id !== service.id)
                    .slice(0, 3)
                    .map((related) => (
                      <li key={related.id} className="group">
                        <Link to={related.link} className="block">
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