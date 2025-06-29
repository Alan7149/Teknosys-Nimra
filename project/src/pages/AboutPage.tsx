import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import PageBanner, { PageBannerProps } from '../components/common/PageBanner';

// Define interfaces based on Django models
interface ContentItem {
  id: number;
  page: string;
  section: string;
  content: string;
  image?: string;
}

interface TeamMember {
  id: number;
  name: string;
  role: string;
  contact: string;
}

interface Theme {
  id?: number;
  primaryColor: string;
  secondaryColor: string;
  fontFamily: string;
}

const AboutPage: React.FC = () => {
  const content = {
    ourStory: { id: 0, page: 'about', section: 'ourStory', content: 'Founded in 2009, Nimra Jeddah Electric Est. has grown into a trusted leader in electrical solutions, delivering excellence across Jeddah, KSA.', image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600' },
    vision: { id: 0, page: 'about', section: 'vision', content: 'To be a global leader in innovative electrical solutions by 2030, setting industry standards with cutting-edge technology.' },
    mission: { id: 0, page: 'about', section: 'mission', content: '<li>Deliver high-quality electrical products and services.</li><li>Ensure unparalleled customer satisfaction.</li><li>Drive continuous innovation and sustainability.</li>' },
    teamIntro: { id: 0, page: 'about', section: 'teamIntro', content: 'Meet our dedicated team of experts, committed to driving excellence and innovation in every project we undertake.' },
  };

  const teamMembers = [
    { id: 1, name: 'John Doe', role: 'CEO', contact: '+966 12 669 7155' },
    { id: 2, name: 'Jane Smith', role: 'CTO', contact: '+966 12 669 7156' },
    { id: 3, name: 'Ahmed Al-Faisal', role: 'Operations Manager', contact: '+966 12 669 7157' },
  ];

  const theme = { primaryColor: '#1E3A8A', secondaryColor: '#DC2626', fontFamily: 'Inter, sans-serif' };

  const bannerStyle: React.CSSProperties = {
    backgroundColor: theme.primaryColor,
    color: '#fff',
  };
  const sectionStyle = {
    '--primary-500': theme.primaryColor,
    '--secondary-500': theme.secondaryColor,
    fontFamily: theme.fontFamily,
  } as React.CSSProperties & { '--primary-500': string; '--secondary-500': string };

  const bannerImage = content.ourStory.image;

  const Skeleton = () => (
    <div className="space-y-4 animate-pulse">
      <div className="h-10 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-6 bg-gray-300 rounded w-full"></div>
      <div className="h-6 bg-gray-300 rounded w-5/6"></div>
    </div>
  );

  return (
    <>
      <Helmet>
        <title>About Us - Nimra Jeddah Electric Est.</title>
        <meta
          name="description"
          content="Learn more about Nimra Jeddah Electric Est., a leading electrical materials distributor in Jeddah, KSA, founded in 2009."
        />
        <style>{`:root { --primary-500: ${theme.primaryColor}; --secondary-500: ${theme.secondaryColor}; }`}</style>
      </Helmet>

      <PageBanner
        title="About Nimra Electricals"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'About' },
        ]}
        backgroundImage={bannerImage}
        style={bannerStyle}
      />

      <section className="section py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden" style={sectionStyle}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center animate-fade-in-up">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-8 animate-slide-right">Our Story</h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }} dangerouslySetInnerHTML={{ __html: content.ourStory.content }} />
            </div>
            <div className="order-1 lg:order-2 animate-parallax">
              <img
                src={bannerImage}
                alt="Nimra Electricals Team"
                className="w-full h-72 sm:h-96 md:h-112 object-cover rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-[var(--primary-500)]/5 -z-10 transform skew-y-3 opacity-50"></div>
      </section>

      <section className="section py-20 bg-gray-50 relative" style={sectionStyle}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-gray-800 mb-14 animate-slide-down">Our Vision & Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="card p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500">
              <h3 className="text-2xl font-semibold mb-6 text-[var(--primary-500)]">Vision</h3>
              <p className="text-gray-700 text-lg leading-relaxed animate-fade-in-up" style={{ animationDelay: '300ms' }} dangerouslySetInnerHTML={{ __html: content.vision.content }} />
            </div>
            <div className="card p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500">
              <h3 className="text-2xl font-semibold mb-6 text-[var(--primary-500)]">Mission</h3>
              <ul className="space-y-4 text-gray-700 list-disc pl-6 text-lg animate-fade-in-up" style={{ animationDelay: '300ms' }} dangerouslySetInnerHTML={{ __html: content.mission.content }} />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-[var(--secondary-500)]/10 -z-10 transform rotate-2 skew-x-3 opacity-30"></div>
      </section>

      <section className="section py-20 bg-gradient-to-br from-white to-gray-50 relative" style={sectionStyle}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-gray-800 mb-14 animate-slide-down">Our Team</h2>
          <p className="text-center text-xl text-gray-700 mb-10 animate-fade-in-up" style={{ animationDelay: '200ms' }} dangerouslySetInnerHTML={{ __html: content.teamIntro.content }} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className="card p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 animate-slide-up-delay"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <h3 className="text-xl font-semibold text-[var(--primary-500)] mb-3">{member.name}</h3>
                <p className="text-gray-600 mb-2">{member.role}</p>
                <p className="text-blue-600 hover:underline"><a href={`tel:${member.contact}`}>{member.contact}</a></p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/contact" className="btn bg-[var(--secondary-500)] hover:bg-[var(--secondary-600)] text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 animate-bounce-in" style={{ animationDelay: '600ms' }}>
              Contact Our Team
            </Link>
          </div>
        </div>
        <div className="absolute inset-0 bg-[var(--primary-500)]/5 -z-10 transform skew-y-3 opacity-50"></div>
      </section>
    </>
  );
};

export default AboutPage;