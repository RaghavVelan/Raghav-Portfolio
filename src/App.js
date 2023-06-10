import React from 'react';
import logo from './image/rv.png';
import Home from './components/Home';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { about } from './portfolio';
import up from './image/up.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <button className='upArrow'
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'}); }}>
        <img src={up} alt="" />
      </button>
      <header className="App-header">
      <a href='#home' className='logoLink'>
        <img src={logo} alt="Raghav V" className='logo'/>
        </a>
        <nav className="nav">
          <ul>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#skills'>Skills</a></li>
            <li><a href='#contact'>Contact</a></li>
          </ul>
        </nav>
      </header>
      <Home />
      <Projects />
      <Skills />
      <Contact />
      <footer className='footer'>
      <a href={about.social.github}>
        <p>Developed by Raghav Velan</p>
        </a>
      </footer>
    </div>
  );
}

export default App;
