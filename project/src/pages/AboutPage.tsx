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

interface Theme {
  id?: number;
  primaryColor: string;
  secondaryColor: string;
  fontFamily: string;
}

const AboutPage: React.FC = () => {
  const content = {
    ourStory: { 
      id: 0, 
      page: 'about', 
      section: 'ourStory', 
      content: `
        <p>Founded in 2009, Nimra Jeddah Electric Est. emerged as a visionary leader in the electrical solutions industry, rooted in Jeddah, KSA. Our journey began with a commitment to delivering excellence, transforming challenges into opportunities through innovative distribution of electrical materials.</p>
        <p>Over the years, we’ve grown into a trusted name, serving a wide array of industries with cutting-edge products and unparalleled service. Our state-of-the-art facility in Jeddah stands as a testament to our dedication, housing advanced logistics and a team passionate about powering progress.</p>
      `, 
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600' 
    },
    vision: { 
      id: 0, 
      page: 'about', 
      section: 'vision', 
      content: `
        <p>Our vision is to become a global pioneer in innovative electrical solutions by 2030, setting new benchmarks with cutting-edge technology and sustainable practices. We aim to lead the industry by integrating smart systems that enhance efficiency and reliability across all sectors.</p>
        <p>At Nimra, we envision a future where every project benefits from our expertise, driving a greener, smarter world through continuous innovation and strategic partnerships with top-tier manufacturers.</p>
      ` 
    },
    mission: { 
      id: 0, 
      page: 'about', 
      section: 'mission', 
      content: `
        <li>Deliver premium electrical products and services that exceed industry standards.</li>
        <li>Ensure exceptional customer satisfaction through personalized support and timely delivery.</li>
        <li>Champion sustainability by adopting eco-friendly technologies and reducing carbon footprints.</li>
        <li>Foster innovation through research and development, staying ahead of market trends.</li>
      ` 
    },
  };

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

      <section className="section py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden" style={sectionStyle}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center animate-fade-in-up">
            <div className="order-2 lg:order-1">
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-800 mb-10 animate-slide-right">Our Inspiring Story</h2>
              <div className="space-y-6 text-xl text-gray-700 leading-relaxed animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <p dangerouslySetInnerHTML={{ __html: content.ourStory.content.split('\n')[0] }} />
                <p dangerouslySetInnerHTML={{ __html: content.ourStory.content.split('\n')[1] }} />
              </div>
            </div>
            <div className="order-1 lg:order-2 animate-parallax">
              <div className="relative">
                <img
                  src={bannerImage}
                  alt="Nimra Electricals Journey"
                  className="w-full h-80 sm:h-96 md:h-128 object-cover rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500"
                />
                <div className="absolute inset-0 bg-[var(--primary-500)]/20 opacity-0 hover:opacity-30 transition-opacity duration-300 rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-[var(--primary-500)]/5 -z-10 transform skew-y-3 opacity-50"></div>
      </section>

      <section className="section py-24 bg-gray-50 relative" style={sectionStyle}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-center text-gray-800 mb-16 animate-slide-down">Our Vision & Mission</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="card p-10 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500">
              <h3 className="text-3xl font-semibold mb-8 text-[var(--primary-500)] animate-slide-right">Our Vision</h3>
              <div className="space-y-5 text-lg text-gray-700 leading-relaxed animate-fade-in-up" style={{ animationDelay: '300ms' }}>
                <p dangerouslySetInnerHTML={{ __html: content.vision.content.split('\n')[0] }} />
                <p dangerouslySetInnerHTML={{ __html: content.vision.content.split('\n')[1] }} />
              </div>
            </div>
            <div className="card p-10 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500">
              <h3 className="text-3xl font-semibold mb-8 text-[var(--primary-500)] animate-slide-right">Our Mission</h3>
              <ul className="space-y-5 text-lg text-gray-700 list-disc pl-6 animate-fade-in-up" style={{ animationDelay: '300ms' }} dangerouslySetInnerHTML={{ __html: content.mission.content }} />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-[var(--secondary-500)]/10 -z-10 transform rotate-2 skew-x-3 opacity-30"></div>
      </section>
    </>
  );
};

export default AboutPage;