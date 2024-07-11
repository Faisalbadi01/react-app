import React, { useState, useEffect } from 'react';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(() => {
 
    const savedTheme = sessionStorage.getItem('theme');
    return savedTheme ? savedTheme : 'light';
  });

  useEffect(() => {
  
    document.body.style.backgroundColor = theme === 'dark' ? '#333' : '#fff';
    document.body.style.color = theme === 'dark' ? '#fff' : '#000';
   sessionStorage.setItem('theme', theme);
  }, [theme]);



  return (
    <div className=' d'>
      
      <select className='btn btn-success' value={theme} onChange={(e)=>{setTheme(e.target.value)}}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
};

export default ThemeSwitcher;
