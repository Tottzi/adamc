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

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <About />
        <Timeline />
      </div>
    </Router>
  );
}

export default App;
