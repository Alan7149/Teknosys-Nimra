import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import PageBanner from '../components/common/PageBanner';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Advancements in Low Voltage Components',
    slug: 'advancements-low-voltage-components',
    excerpt: 'Discover the latest innovations in low voltage components and their impact on energy efficiency.',
    image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1600',
    author: 'Shoukath Mohammed Ali',
    date: '2025-02-15',
    category: 'Technology',
  },
  {
    id: 2,
    title: 'Benefits of Energy Monitoring Systems',
    slug: 'benefits-energy-monitoring-systems',
    excerpt: 'Learn how energy monitoring systems can reduce costs and improve power quality.',
    image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1600',
    author: 'Mohammed Rasi',
    date: '2025-01-20',
    category: 'Efficiency',
  },
  {
    id: 3,
    title: 'Choosing the Right Enclosure for Your Project',
    slug: 'choosing-right-enclosure',
    excerpt: 'A guide to selecting enclosures for switchgear and control gear applications.',
    image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1600',
    author: 'Rahmath Mirza',
    date: '2024-12-10',
    category: 'Guide',
  },
];

const BlogPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    ...new Set(blogPosts.map((post) => post.category)),
  ];

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Blog - Nimra Jeddah Electric Est.</title>
        <meta
          name="description"
          content="Read our latest insights on electrical products, energy efficiency, and industry trends."
        />
      </Helmet>

      <PageBanner
        title="Our Blog"
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Blog' },
        ]}
        backgroundImage="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1600"
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
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <div key={post.id} className="card group">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <User className="w-4 h-4 mr-2" />
                    {post.author}
                    <Calendar className="w-4 h-4 ml-4 mr-2" />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary-500 font-semibold hover:underline"
                  >
                    Read More <ArrowRight className="ml-2 w-4 h-4" />
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

export default BlogPage;