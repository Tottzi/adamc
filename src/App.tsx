import React from 'react';
import {
  BrowserRouter as Router,
  // Switch,
  // Route,
  // Link
} from "react-router-dom";

import './App.css';
import Timeline from './components/Timeline/Timeline';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <About />
        <Skills />
        <Timeline />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
