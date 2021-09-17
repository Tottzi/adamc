import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import "./About.scss";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { initialHover, iconstyle } from "./types";

import { headShake } from "react-animations";
import Radium from "radium";
import StyleRoot from "radium";

const About = () => {
  const initialHover: initialHover = {
    faLinkedin: false,
    faGithub: false,
    fiMail: false,
    aboutCont: false
  };
  const [hover, sethover] = useState<initialHover>(initialHover);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(window.innerWidth);

  const animationStyles: any = {
    headShake: {
      animation: "x 1s",
      animationName: Radium.keyframes(headShake, "headShake"),
    },
    none: {
      animation: "x 1s",
    },
  };

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
    fill: "rgba(0, 194, 253, 1)",
  };
  const aboutDownStyle = scrolled ? { display: "none" } : { display: "block" };
  const handleScroll = () => {
    if (window.scrollY > 150) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, [scrolled]);

  return (
    <div className="about" id="about">
            {
        <StyleRoot.StyleRoot>
                <div
            className="about-container"
            style={hover.aboutCont ? animationStyles.none : animationStyles.headShake}
            onMouseEnter={() => sethover({...hover, aboutCont: false})}
            onMouseLeave={() => sethover({...hover, aboutCont: true})}
          >
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
      {width > 690 && (
        <div className="about-down" style={aboutDownStyle}>
          <Link to="skills" smooth={true}>
            <FaRegArrowAltCircleDown
              onMouseEnter={() =>
                sethover({ ...hover, faLinkedin: !hover.faLinkedin })
              }
              onMouseLeave={() =>
                sethover({ ...hover, faLinkedin: !hover.faLinkedin })
              }
              style={!hover.faLinkedin ? iconStyleFa : iconStyleFaHover}
            />
          </Link>
        </div>
      )}
      </StyleRoot.StyleRoot>}
    </div>
  );
};

export default About;
