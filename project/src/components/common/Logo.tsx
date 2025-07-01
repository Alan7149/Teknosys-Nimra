import React from 'react';
import { Link } from 'react-router-dom';
import LogoImage from '@/assets/images/Logo.gif';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center space-x-3">
      <img src={LogoImage} alt="Nimra Electricals" className="h-10 w-auto" />
    </Link>
  );
};

export default Logo;
