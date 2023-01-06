import { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeContext } from './contexts/theme';
import './App.css';

// Components
import ScrollToTop from './features/ScrollToTop/ScrollToTop';
import AppRoutes from './AppRoutes';

function App() {
  const [{ themeName }] = useContext(ThemeContext);

  return (
    <div className={`${themeName} App`}>
      <BrowserRouter>
        <AppRoutes />
        <ScrollToTop />
      </BrowserRouter>
    </div>
  );
}

export default App;
