import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const LanguageSwitcher = () => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.customization.language);

  return (
    <button onClick={() => dispatch({ type: 'SET_LANGUAGE', payload: lang === 'en' ? 'ar' : 'en' })}>
      {lang === 'en' ? 'العربية' : 'English'}
    </button>
  );
};

export default LanguageSwitcher;
