import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import PageBanner from '../components/common/PageBanner';

// Dynamically import all team member images (png, jpg, jpeg)
const teamImages = import.meta.glob('/src/assets/images/team/*.{png,jpg,jpeg}', {
  eager: true,
  import: 'default',
});

const teamMembers = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Chief Executive Officer',
    description: 'John leads our team with over 20 years of experience in electrical engineering, driving innovation and excellence.',
    image: '/src/assets/images/team/john_doe.jpg',
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Chief Technical Officer',
    description: 'Jane oversees technical operations, ensuring our products meet the highest industry standards.',
    image: '/src/assets/images/team/jane_smith.jpg',
  },
  {
    id: 3,
    name: 'Ahmed Khan',
    role: 'Project Manager',
    description: 'Ahmed manages our projects with precision, delivering solutions for commercial and industrial clients.',
    image: '/src/assets/images/team/ahmed_khan.jpg',
  },
  {
    id: 4,
    name: 'Sarah Ali',
    role: 'Sales Director',
    description: 'Sarah drives our sales strategy, building strong relationships with clients across the region.',
    image: '/src/assets/images/team/sarah_ali.jpg',
  },
];

const TeamMemberPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Our Team - Nimra Jeddah Electric Est.</title>
        <meta
          name="description"
          content="Meet the dedicated team at Nimra Jeddah Electric Est., committed to delivering innovative electrical solutions."
        />
      </Helmet>

      <PageBanner
        title="Our Team"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Our Team' },
        ]}
        backgroundImage="https://picsum.photos/id/1018/1920/1080" // Placeholder background
      />

      <section className="section py-20 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="section-title">
            <h2>Meet Our Experts</h2>
            <p>Our team of professionals is dedicated to providing top-quality electrical solutions.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => {
              const possibleExtensions = ['png', 'jpg', 'jpeg'];
              const imageSrc = (
                possibleExtensions
                  .map((ext) => teamImages[`/src/assets/images/team/${member.name.toLowerCase().replace(' ', '_')}.${ext}`])
                  .find(Boolean) || 'https://picsum.photos/200/200'
              ) as string;

              return (
                <div key={member.id} className="card flex flex-col items-center text-center">
                  <img
                    src={imageSrc}
                    alt={`${member.name}`}
                    className="h-48 w-48 object-cover rounded-full mb-4 shadow-md hover:shadow-lg transition-shadow duration-300"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      console.error(`Failed to load team member image: ${member.name}`);
                      e.currentTarget.src = 'https://picsum.photos/200/200';
                    }}
                  />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-[var(--primary-500)] font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.description}</p>
                  <Link
                    to="/contact"
                    className="btn btn-outline mt-auto"
                    aria-label={`Contact ${member.name}`}
                  >
                    Get in Touch
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamMemberPage;