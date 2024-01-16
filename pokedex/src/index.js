import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './screens/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PokemonCard from './screens/PokemonCard';
import PokemonDetail from './screens/PokemonDetail';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pokemon" element={<PokemonCard />} />
        <Route path="/pokemon/:name" element={<PokemonDetail />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  root
);

reportWebVitals();
