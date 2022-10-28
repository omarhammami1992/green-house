import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './features/home/pages/Home.js'
import Questionnaire from './features/questionnaire/pages/Questionnaire';

function App() {
  return (
    <div className="app-container">
      <div className="header">
        <img src={ logo } alt="green_house_logo" />
        <menu>
          <li>Blog</li>
          <li>Nos partenaires</li>
          <li>En savoir +</li>
        </menu>
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/questionnaire" element={<Questionnaire />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;