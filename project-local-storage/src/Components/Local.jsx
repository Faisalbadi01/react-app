// LanguageSelector.js
import React, { useState, useEffect } from 'react';

const LanguageSelector = () => {
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'French' },
    { code: 'es', name: 'Spanish' },
    // Add more languages as needed
  ];

  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('selectedLanguage') || 'en');

  useEffect(() => {
    localStorage.setItem('selectedLanguage', selectedLanguage);
  }, [selectedLanguage]);

 

  return (
    <div className='s'>
     <br /><br /><br /><br /><br />
      <select id="language" className='btn btn-danger' value={selectedLanguage} onChange={(e)=>{ setSelectedLanguage(e.target.value)}}>
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
