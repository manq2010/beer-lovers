import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NotFoundPage from './pages/NotFound/NotFoundPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
          // element={<MainPage />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
