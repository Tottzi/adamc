import React, {useEffect,useState} from 'react';
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
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [skills, setSkills ] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
    if(window.scrollY > 600 && window.scrollY < 1500 ){
      setSkills(true)
    } else {
      setSkills(false)
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])

  return (
    <Router>
      <div className="App">
        <Navbar scrolled={scrolled}/>
        <About />
        <Skills skills={skills}/>
        <Timeline />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
