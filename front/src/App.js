import logo from './logo.png';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate, Link, useNavigate } from 'react-router-dom';
import Home from './features/home/pages/Home.js'
import Questionnaire from './features/questionnaire/pages/Questionnaire';
import Result from './features/result/pages/Result';

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
          <Route path="/result" element={<Result />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;