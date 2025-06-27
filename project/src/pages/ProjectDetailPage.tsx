import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import PageBanner from '../components/common/PageBanner';

const projects = [
  {
    id: 1,
    title: 'Power Distribution Panel Installation',
    slug: 'power-distribution-panel-installation',
    category: 'installation',
    description: 'Designed and installed a power distribution panel for a commercial facility in Jeddah.',
    detailedDescription: `
      <p>This project involved the design and installation of a comprehensive power distribution panel for a commercial facility in Jeddah. The system integrated advanced circuit breakers, busbars, and metering solutions to ensure reliable power distribution.</p>
      <p>Our team collaborated closely with the client to customize the solution, ensuring seamless integration with existing infrastructure. The project resulted in improved energy efficiency and reduced operational costs.</p>
    `,
    client: 'Jeddah Commercial Co.',
    location: 'Jeddah, KSA',
    completionDate: '2023-06-15',
    image: 'https://images.pexels.com/photos/3855962/pexels-photo-3855962.jpeg?auto=compress&cs=tinysrgb&w=1600',
    features: [
      'Circuit breaker integration',
      'Busbar system design',
      'Energy metering',
      'Safety compliance',
      'Client training',
    ],
  },
  {
    id: 2,
    title: 'Industrial Automation Upgrade',
    slug: 'industrial-automation-upgrade',
    category: 'automation',
    description: 'Upgraded automation systems with VFDs and soft starters for a manufacturing plant.',
    detailedDescription: `
      <p>We upgraded the automation systems of a manufacturing plant in Jeddah by integrating variable frequency drives (VFDs) and soft starters. This enhanced operational efficiency and reduced energy consumption.</p>
      <p>The project included PLC integration, HMI setup, and operator training to ensure smooth adoption of the new systems.</p>
    `,
    client: 'Saudi Manufacturing Ltd.',
    location: 'Jeddah, KSA',
    completionDate: '2023-12-20',
    image: 'https://images.pexels.com/photos/3855962/pexels-photo-3855962.jpeg?auto=compress&cs=tinysrgb&w=1600',
    features: [
      'VFD and soft starter installation',
      'PLC and HMI integration',
      'Energy efficiency improvements',
      'Operator training',
      'Post-installation support',
    ],
  },
  {
    id: 3,
    title: 'Energy Monitoring System Deployment',
    slug: 'energy-monitoring-system-deployment',
    category: 'monitoring',
    description: 'Implemented energy monitoring with digital meters for a large industrial complex.',
    detailedDescription: `
      <p>We deployed an energy monitoring system for a large industrial complex in Jeddah, utilizing digital multifunction meters and current transformers to track energy consumption in real-time.</p>
      <p>The system helped the client identify areas of excess consumption, leading to significant cost savings and improved power quality.</p>
    `,
    client: 'Industrial Complex Jeddah',
    location: 'Jeddah, KSA',
    completionDate: '2024-03-10',
    image: 'https://images.pexels.com/photos/3855962/pexels-photo-3855962.jpeg?auto=compress&cs=tinysrgb&w=1600',
    features: [
      'Digital multifunction meters',
      'Current transformer installation',
      'Real-time energy monitoring',
      'Power quality analysis',
      'Cost-saving recommendations',
    ],
  },
];

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.slug === id);

  if (!project) {
    return (
      <div className="py-32 text-center">
        <h2 className="text-3xl font-bold mb-4">Project Not Found</h2>
        <p className="mb-8">The project you are looking for does not exist.</p>
        <Link to="/projects" className="btn btn-primary">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{project.title} - Nimra Jeddah Electric Est.</title>
        <meta name="description" content={project.description} />
      </Helmet>

      <PageBanner
        title={project.title}
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Projects', path: '/projects' },
          { label: project.title },
        ]}
        backgroundImage={project.image}
      />

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
              <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
              <div
                className="prose prose-lg max-w-none mb-8"
                dangerouslySetInnerHTML={{ __html: project.detailedDescription }}
              />
              <h3 className="text-2xl font-bold mb-4">Key Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-secondary-500 mr-3 flex-shrink-0 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-4">Project Details</h3>
                <ul className="space-y-2">
                  <li><strong>Client:</strong> {project.client}</li>
                  <li><strong>Location:</strong> {project.location}</li>
                  <li>
                    <strong>Completed:</strong>{' '}
                    {new Date(project.completionDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </li>
                  <li><strong>Category:</strong> {project.category}</li>
                </ul>
              </div>
              <div className="bg-primary-500 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Interested in Similar Projects?</h3>
                <p className="mb-6">
                  Contact us to discuss how we can deliver tailored electrical solutions for your needs.
                </p>
                <Link to="/contact" className="btn bg-white text-primary-500 border-white hover:bg-white/90">
                  Get in Touch
                </Link>
              </div>
            </div>
            <div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Other Projects</h3>
                <ul className="space-y-4">
                  {projects
                    .filter((p) => p.id !== project.id)
                    .slice(0, 3)
                    .map((related) => (
                      <li key={related.id} className="group">
                        <Link to={`/projects/${related.slug}`} className="block">
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

export default ProjectDetailPage;