import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// Pages
import NotFoundPage from './pages/notFound/NotFoundPage';
import MainPage from './pages/main/MainPage';
import BeerPage from './pages/beer/BeerPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/beer" element={<BeerPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
