
import React, { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import PageBanner, { PageBannerProps } from '../components/common/PageBanner';
import { CheckCircle, RefreshCw } from 'lucide-react';

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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';

  // Debounced fetch data function
  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [contentResponse, teamResponse, themeResponse] = await Promise.all([
        fetch(`${apiUrl}/api/content/?page=about`),
        fetch(`${apiUrl}/api/team/`),
        fetch(`${apiUrl}/api/theme/`),
      ]);

      if (!contentResponse.ok || !teamResponse.ok || !themeResponse.ok) {
        throw new Error('Failed to fetch data');
      }

      const [contentData, teamData, themeData] = await Promise.all([
        contentResponse.json(),
        teamResponse.json(),
        themeResponse.json(),
      ]);

      const aboutContent = (contentData.results || contentData) as ContentItem[];
      setContent({
        ourStory: aboutContent.find((item) => item.section === 'ourStory') || { id: 0, page: 'about', section: 'ourStory', content: '', image: '' },
        vision: aboutContent.find((item) => item.section === 'vision') || { id: 0, page: 'about', section: 'vision', content: '' },
        mission: aboutContent.find((item) => item.section === 'mission') || { id: 0, page: 'about', section: 'mission', content: '' },
        teamIntro: aboutContent.find((item) => item.section === 'teamIntro') || { id: 0, page: 'about', section: 'teamIntro', content: '' },
      });

      setTeamMembers((teamData.results || teamData) as TeamMember[]);
      setTheme((themeData.results?.[0] || themeData || theme) as Theme);
    } catch (err) {
      setError('An error occurred while fetching data. Please try again later.');
      console.error('Error fetching data:', err);
    } finally {
      setLoading(false);
    }
  }, [apiUrl]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

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

  // Skeleton loading component
  const Skeleton = () => (
    <div className="animate-pulse">
      <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-5/6"></div>
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

      <section className="section py-12" style={sectionStyle}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title text-2xl md:text-3xl font-bold mb-6">Our Story</h2>
              {loading ? <Skeleton /> : error ? <p className="text-red-500">{error}</p> : <p className="mb-4 text-gray-700" dangerouslySetInnerHTML={{ __html: content.ourStory.content }} />}
            </div>
            <div>
              <img
                src={bannerImage}
                alt="Nimra Electricals Team"
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section py-12 bg-gray-50" style={sectionStyle}>
        <div className="container">
          <h2 className="section-title text-2xl md:text-3xl font-bold text-center mb-8">Our Vision & Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="card p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary-500">Vision</h3>
              {loading ? <Skeleton /> : error ? <p className="text-red-500">{error}</p> : <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: content.vision.content }} />}
            </div>
            <div className="card p-6 bg-white shadow-md rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary-500">Mission</h3>
              {loading ? <Skeleton /> : error ? <p className="text-red-500">{error}</p> : <ul className="space-y-2 text-gray-700" dangerouslySetInnerHTML={{ __html: content.mission.content }} />}
            </div>
          </div>
        </div>
      </section>

      <section className="section py-12" style={sectionStyle}>
        <div className="container">
          <h2 className="section-title text-2xl md:text-3xl font-bold text-center mb-8">Our Team</h2>
          {loading ? <p className="text-center">Loading...</p> : error ? <p className="text-red-500 text-center">{error}</p> : <p className="text-center mb-4 text-gray-700" dangerouslySetInnerHTML={{ __html: content.teamIntro.content }} />}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {loading ? (
              Array(3).fill(0).map((_, index) => (
                <div key={index} className="card p-6 bg-gray-100 animate-pulse rounded-lg h-32"></div>
              ))
            ) : teamMembers.length > 0 ? (
              teamMembers.map((member) => (
                <div key={member.id} className="card p-6 bg-white shadow-md rounded-lg text-center">
                  <h3 className="text-lg font-semibold text-primary-500">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                  <p className="mt-2 text-blue-600 hover:underline"><a href={`tel:${member.contact}`}>{member.contact}</a></p>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-700">No team members available.</p>
            )}
          </div>
          <div className="text-center mt-8">
            <button
              onClick={fetchData}
              className="btn bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-md flex items-center justify-center mx-auto"
              disabled={loading}
              aria-label="Refresh team data"
            >
              <RefreshCw className="w-5 h-5 mr-2" />
              Refresh Data
            </button>
            <Link to="/contact" className="btn bg-secondary-500 hover:bg-secondary-600 text-white px-4 py-2 rounded-md ml-4">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
