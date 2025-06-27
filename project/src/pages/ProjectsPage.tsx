import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import PageBanner from '../components/common/PageBanner';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Power Distribution Panel Installation',
    slug: 'power-distribution-panel-installation',
    category: 'installation',
    description: 'Designed and installed a power distribution panel for a commercial facility in Jeddah.',
    image: 'https://images.pexels.com/photos/3855962/pexels-photo-3855962.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 2,
    title: 'Industrial Automation Upgrade',
    slug: 'industrial-automation-upgrade',
    category: 'automation',
    description: 'Upgraded automation systems with VFDs and soft starters for a manufacturing plant.',
    image: 'https://images.pexels.com/photos/3855962/pexels-photo-3855962.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
  {
    id: 3,
    title: 'Energy Monitoring System Deployment',
    slug: 'energy-monitoring-system-deployment',
    category: 'monitoring',
    description: 'Implemented energy monitoring with digital meters for a large industrial complex.',
    image: 'https://images.pexels.com/photos/3855962/pexels-photo-3855962.jpeg?auto=compress&cs=tinysrgb&w=1600',
  },
];

const ProjectPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    ...new Set(projects.map((project) => project.category)),
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((project) => project.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Projects - Nimra Jeddah Electric Est.</title>
        <meta
          name="description"
          content="Explore our completed projects in electrical installations, automation, and energy monitoring across Jeddah, KSA."
        />
      </Helmet>

      <PageBanner
        title="Our Projects"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Projects' },
        ]}
        backgroundImage="https://images.pexels.com/photos/3855962/pexels-photo-3855962.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />

      <section className="section">
        <div className="container">
          <div className="mb-8 flex justify-center space-x-2 overflow-x-auto pb-2">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div key={project.id} className="card group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Link
                    to={`/projects/${project.slug}`}
                    className="inline-flex items-center text-primary-500 font-semibold hover:underline"
                  >
                    View Project <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectPage;