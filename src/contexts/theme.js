import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState('blue');

  useEffect(() => {
    const pinkMediaQuery = window.matchMedia('(prefers-color-scheme: pink)');
    setThemeName(pinkMediaQuery.matches ? 'pink' : 'blue');
    pinkMediaQuery.addEventListener('change', (e) => {
      setThemeName(e.matches ? 'pink' : 'blue');
    });
  }, []);

  const toggleTheme = () => {
    const name = themeName === 'pink' ? 'blue' : 'pink';
    localStorage.setItem('themeName', name);
    setThemeName(name);
  };

  return (
    <ThemeContext.Provider value={[{ themeName, toggleTheme }]}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ThemeProvider, ThemeContext };
