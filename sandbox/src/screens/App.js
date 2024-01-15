import './App.css';
import { useState } from 'react';
import Footer from '../components/Footer';
import { Outlet, useNavigate } from 'react-router-dom';


function App() { 
  const navigate = useNavigate();
  return (
    <div className="App m-3">
      <ul className="nav">
        <li className="nav-item">
          <a 
            className={"nav-link"}
            href="#"
            onClick={() => navigate('/home')}
          >
            Accueil
          </a>
        </li>
        <li className="nav-item">
          <a 
            className={"nav-link"}
            href="#"
            onClick={() => navigate('/agenda')}
          >
            Agenda
          </a>
        </li>
        <li className="nav-item">
          <a 
            className={"nav-link"}
            href="#"
            onClick={() => navigate('/counter')}
          >
            Counter
          </a>
        </li>
        <li className="nav-item">
          <a 
            className={"nav-link"}
            href="#"
            onClick={() => navigate('/typer')}
          >
            Typer
          </a>
        </li>
        <li className="nav-item">
          <a 
            className={"nav-link"}
            href="#"
            onClick={() => navigate('/weather')}
          >
            Meteo
          </a>
        </li>

      </ul>

      <Outlet />
      <Footer />
    </div>
  );
}

 

export default App;