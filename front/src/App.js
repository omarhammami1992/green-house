import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import Home from './features/home/pages/Home.js'
import Questionnaire from './features/questionnaire/pages/Questionnaire';

function App() {
  return (
    <div className="app-container">
      <Router>
        <div className="header">
          <Link to="/"><img src={logo} alt="green_house_logo" /></Link>
          <menu>
            <li>Blog</li>
            <li>Nos partenaires</li>
            <li>En savoir +</li>
          </menu>
        </div>
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