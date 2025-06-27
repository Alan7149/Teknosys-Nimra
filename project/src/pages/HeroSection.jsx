import React from 'react';
import useContentFetcher from 'hooks/useContentFetcher';
import { useSelector } from 'react-redux';

const HeroSection = () => {
  const lang = useSelector((state) => state.customization.language); // 'en' or 'ar'
  const { content, isLoading } = useContentFetcher('home', 'hero');

  if (isLoading) return <div>Loading...</div>;

  return (
    <section id="hero">
      <h1>{content?.[`content_${lang}`] || content?.content || 'No Content'}</h1>
    </section>
  );
};

export default HeroSection;
