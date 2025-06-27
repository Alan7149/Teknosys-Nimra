import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import PageBanner, { PageBannerProps } from '../components/common/PageBanner'; // Import PageBannerProps
import { CheckCircle } from 'lucide-react';

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
  const [content, setContent] = useState<{
    ourStory: ContentItem;
    vision: ContentItem;
    mission: ContentItem;
    teamIntro: ContentItem;
  }>({
    ourStory: { id: 0, page: 'about', section: 'ourStory', content: '', image: '' },
    vision: { id: 0, page: 'about', section: 'vision', content: '' },
    mission: { id: 0, page: 'about', section: 'mission', content: '' },
    teamIntro: { id: 0, page: 'about', section: 'teamIntro', content: '' },
  });
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [theme, setTheme] = useState<Theme>({ primaryColor: '#1E3A8A', secondaryColor: '#DC2626', fontFamily: 'Inter, sans-serif' });
  const [loading, setLoading] = useState(true); // Add loading state
  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';

  // Fetch content, team, and theme data
  const fetchData = async () => {
    setLoading(true);
    try {
      // Fetch content
      const contentResponse = await fetch(`${apiUrl}/api/content/?page=about`);
      const contentData = await contentResponse.json();
      const aboutContent = (contentData.results || contentData) as ContentItem[];
      setContent({
        ourStory: aboutContent.find((item) => item.section === 'ourStory') || { id: 0, page: 'about', section: 'ourStory', content: '', image: '' },
        vision: aboutContent.find((item) => item.section === 'vision') || { id: 0, page: 'about', section: 'vision', content: '' },
        mission: aboutContent.find((item) => item.section === 'mission') || { id: 0, page: 'about', section: 'mission', content: '' },
        teamIntro: aboutContent.find((item) => item.section === 'teamIntro') || { id: 0, page: 'about', section: 'teamIntro', content: '' },
      });

      // Fetch team members
      const teamResponse = await fetch(`${apiUrl}/api/team/`);
      const teamData = await teamResponse.json();
      console.log(teamData);
      setTeamMembers((teamData.results || teamData) as TeamMember[]);

      // Fetch theme
      const themeResponse = await fetch(`${apiUrl}/api/theme/`);
      const themeData = await themeResponse.json();
      setTheme((themeData.results?.[0] || themeData || theme) as Theme);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [apiUrl]);

  // Dynamically set inline styles based on theme
  const bannerStyle: React.CSSProperties = {
    backgroundColor: theme.primaryColor,
    color: '#fff',
  };
  const sectionStyle = {
    '--primary-500': theme.primaryColor,
    '--secondary-500': theme.secondaryColor,
    fontFamily: theme.fontFamily,
  } as React.CSSProperties & { '--primary-500': string; '--secondary-500': string };

  const bannerImage = content.ourStory.image ? `${apiUrl}${content.ourStory.image}` : 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600';

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
        style={bannerStyle} // Now type-safe with updated PageBannerProps
      />

      <section className="section" style={sectionStyle}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title">Our Story</h2>
              {loading ? <p>Loading...</p> : <p className="mb-4" dangerouslySetInnerHTML={{ __html: content.ourStory.content }} />}
            </div>
            <div>
              <img
                src={bannerImage}
                alt="Nimra Electricals Team"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50" style={sectionStyle}>
        <div className="container">
          <h2 className="section-title text-center">Our Vision & Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4">Vision</h3>
              {loading ? <p>Loading...</p> : <p dangerouslySetInnerHTML={{ __html: content.vision.content }} />}
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4">Mission</h3>
              {loading ? <p>Loading...</p> : <ul className="space-y-2" dangerouslySetInnerHTML={{ __html: content.mission.content }} />}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={sectionStyle}>
        <div className="container">
          <h2 className="section-title text-center">Our Team</h2>
          {loading ? <p>Loading...</p> : <p className="text-center mb-4" dangerouslySetInnerHTML={{ __html: content.teamIntro.content }} />}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {loading ? (
              <p>Loading team members...</p>
            ) : teamMembers.length > 0 ? (
              teamMembers.map((member) => (
                <div key={member.id} className="card text-center p-6">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                  <p className="mt-2"><a href={`tel:${member.contact}`}>{member.contact}</a></p>
                </div>
              ))
            ) : (
              <p>No team members available.</p>
            )}
          </div>
          <div className="text-center mt-8">
            <button
              onClick={fetchData}
              className="btn btn-primary mr-4"
              disabled={loading}
            >
              Refresh Data
            </button>
            <Link to="/contact" className="btn btn-primary">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;