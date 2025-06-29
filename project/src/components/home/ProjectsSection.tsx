import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Industrial Automation System',
    category: 'automation',
    image: 'https://images.pexels.com/photos/3855962/pexels-photo-3855962.jpeg?auto=compress&cs=tinysrgb&w=1600',
    link: '/projects/industrial-automation-system'
  },
  {
    id: 2,
    title: 'Oil & Gas Pipeline Installation',
    category: 'installation',
    image: 'https://images.pexels.com/photos/2581269/pexels-photo-2581269.jpeg?auto=compress&cs=tinysrgb&w=1600',
    link: '/projects/oil-gas-pipeline'
  },
  {
    id: 3,
    title: 'Steel Structure Fabrication',
    category: 'fabrication',
    image: 'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1600',
    link: '/projects/steel-structure-fabrication'
  },
  {
    id: 4,
    title: 'Manufacturing Plant Design',
    category: 'engineering',
    image: 'https://images.pexels.com/photos/2760242/pexels-photo-2760242.jpeg?auto=compress&cs=tinysrgb&w=1600',
    link: '/projects/manufacturing-plant-design'
  },
  {
    id: 5,
    title: 'Control System Integration',
    category: 'automation',
    image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1600',
    link: '/projects/control-system-integration'
  },
  {
    id: 6,
    title: 'Refinery Maintenance Project',
    category: 'maintenance',
    image: 'https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=1600',
    link: '/projects/refinery-maintenance'
  }
];

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'engineering', name: 'Engineering' },
  { id: 'fabrication', name: 'Fabrication' },
  { id: 'installation', name: 'Installation' },
  { id: 'automation', name: 'Automation' },
  { id: 'maintenance', name: 'Maintenance' }
];

const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section className="section bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 sm:py-20 lg:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 animate-slide-down">
            Our Recent Projects
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mt-4 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            Explore our portfolio of completed projects across various industries.
          </p>
        </div>
        <div className="flex flex-wrap justify-center mb-12 gap-3">
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-[var(--primary-500)] text-white shadow-md'
                  : 'bg-white text-gray-700 hover:bg-gray-100 hover:shadow-sm'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="card bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-500 animate-slide-up-delay"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transform transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[var(--secondary-500)]/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-800">
                  <Link to={project.link} className="hover:text-[var(--primary-500)] transition-colors">
                    {project.title}
                  </Link>
                </h3>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-sm bg-gray-100 text-[var(--primary-500)] rounded-full capitalize">
                    {project.category}
                  </span>
                </div>
                <Link
                  to={project.link}
                  className="inline-flex items-center text-[var(--primary-500)] font-medium hover:text-[var(--secondary-500)] transition-colors"
                >
                  View Project
                  <ArrowRight className="ml-2 w-5 h-5 transform hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/projects"
            className="btn btn-primary text-lg px-6 py-3 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 animate-bounce-in"
            style={{ animationDelay: '400ms' }}
          >
            View All Projects
          </Link>
        </div>
      </div>
      <div className="absolute inset-0 bg-[var(--primary-500)]/5 -z-10 transform skew-x-3 opacity-30"></div>
    </section>
  );
};

export default ProjectsSection;