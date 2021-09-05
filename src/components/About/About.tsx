import React, { useState, useEffect } from "react";
import "./About.scss";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { initialHover, iconstyle } from "./types";

const About = () => {
  const initialHover: initialHover = {
    faLinkedin: false,
    faGithub: false,
    fiMail: false,
  };
  const [hover, sethover] = useState(initialHover);
  const [scrolled, setScrolled] = useState(false);
  const iconStyleFa: iconstyle = {
    width: "4rem",
    height: "4rem",
    fill: "whitesmoke",
    stroke: "white",
    cursor: "pointer",
    margin: "0",
    transition: "500ms",
  };
  const iconStyleFaHover: iconstyle = {
    ...iconStyleFa,
    fill: "rgba(0, 228, 239, 1)",
  };
  const aboutDownStyle = scrolled ? { display: "none" } : { display: "block" };
  const handleScroll = () => {
    if (window.scrollY > 150) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled])
  
  return (
    <div className="about" id="about">
      <div className="about-container">
        <div className="about-pic">
          <img
            src="https://res.cloudinary.com/tottzi/image/upload/v1630675426/portolio/Skjermbilde_2021_09_03_kl._15.21.44_uxhndz.png"
            alt="profilepic"
          ></img>
        </div>
        <div className="about-text">
          <h1>Adam C</h1>
          <h2>Full Stack JavaScript Developer</h2>
          <h3>Problem solver, lifelong learner</h3>
          <h3>Welcome to my site</h3>
        </div>
      </div>
      <div className="about-down" style={aboutDownStyle}>
        <a href="#skills">
          <FaRegArrowAltCircleDown
            onMouseEnter={() =>
              sethover({ ...hover, faLinkedin: !hover.faLinkedin })
            }
            onMouseLeave={() =>
              sethover({ ...hover, faLinkedin: !hover.faLinkedin })
            }
            style={!hover.faLinkedin ? iconStyleFa : iconStyleFaHover}
          />
        </a>
      </div>
    </div>
  );
};

export default About;
