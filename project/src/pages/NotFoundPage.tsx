import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, ArrowLeft } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center px-4 py-20 relative overflow-hidden">
      <div className="text-center z-10">
        <h1 className="text-8xl md:text-9xl font-extrabold text-[var(--primary-500)] mb-4 animate-pulse-slow">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 animate-fade-in-up">Oops! Page Not Found</h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          It seems the page you’re looking for has vanished into thin air. Don’t worry, let’s get you back on track!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up" style={{ animationDelay: '400ms' }}>
          <Link to="/" className="btn bg-[var(--primary-500)] text-white px-6 py-3 rounded-full hover:bg-[var(--primary-600)] hover:shadow-lg transition-all duration-300 inline-flex items-center">
            <HomeIcon className="w-5 h-5 mr-2" /> Back to Home
          </Link>
          <button 
            onClick={() => window.history.back()} 
            className="btn bg-white text-[var(--primary-500)] border border-[var(--primary-500)] px-6 py-3 rounded-full hover:bg-gray-100 hover:shadow-md transition-all duration-300 inline-flex items-center"
          >
            <ArrowLeft className="w-5 h-5 mr-2" /> Go Back
          </button>
        </div>
      </div>
      <div className="absolute inset-0 bg-[var(--secondary-500)]/10 -z-10 transform skew-y-3 opacity-50 animate-pulse-slow"></div>
    </div>
  );
};

export default NotFoundPage;