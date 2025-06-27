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
    <section className="section bg-gray-50">
      <div className="container">
        <div className="section-title">
          <h2>Our Recent Projects</h2>
          <p>
            Explore our portfolio of completed projects across various industries.
            Each project represents our commitment to excellence and precision.
          </p>
        </div>

        <div className="flex flex-wrap justify-center mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-5 py-2 m-2 rounded-full transition-colors ${
                activeCategory === category.id
                  ? 'bg-primary-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="card group overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary-500 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  <Link 
                    to={project.link} 
                    className="hover:text-secondary-500 transition-colors"
                  >
                    {project.title}
                  </Link>
                </h3>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-sm bg-gray-100 text-primary-500 rounded-full capitalize">
                    {project.category}
                  </span>
                </div>
                <Link 
                  to={project.link} 
                  className="inline-flex items-center text-primary-500 font-medium hover:text-secondary-500 transition-colors"
                >
                  View Project
                  <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/projects" className="btn btn-primary">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;