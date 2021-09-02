import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import logo from "../../images/logo.png";

const Navbar = () => {
  const navEffect = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const initialHover = {
    faLinkedin: false,
    faGithub: false,
    fiMail: false,
  };
  const [hover, sethover] = useState(initialHover);
  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  const iconStyleFa = {
    width: "2rem",
    height: "2rem",
    fill: "white",
    cursor: "pointer",
    margin: "0.75rem",
    transition: "500ms",
  };
  const iconStyleFaHover = { ...iconStyleFa, fill: "blue" };
  const iconStyleFi = {
    width: "2rem",
    height: "2rem",
    stroke: "white",
    cursor: "pointer",
    margin: "0.75rem",
    transition: "500ms",
  };
  const iconStyleFiHover = { ...iconStyleFi, stroke: "blue" };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <div
      ref={navEffect}
      className={scrolled ? "navbar navbar--scrolled" : "navbar"}
    >
      <nav className="navbar navbar--scrolled">
        <div className="navbar-left">
          <img className="navbar__logo" alt="logo" src={logo} />
        </div>
        <div className="navbar-middle">
          <Link to="#timeline">About</Link>
          <Link to="#timeline">Skills</Link>
          <Link to="#timeline">Work</Link>
          <Link to="#timeline">Contact</Link>
        </div>
        <div className="navbar-right">
          <a
            href="https://www.linkedin.com/in/adam-csetneki-a7141576/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin
              onMouseEnter={() =>
                sethover({ ...hover, faLinkedin: !hover.faLinkedin })
              }
              onMouseLeave={() =>
                sethover({ ...hover, faLinkedin: !hover.faLinkedin })
              }
              style={!hover.faLinkedin ? iconStyleFa : iconStyleFaHover}
            />
          </a>
          <a href="https://github.com/Tottzi" target="_blank" rel="noreferrer">
            <FaGithub
              onMouseEnter={() =>
                sethover({ ...hover, faGithub: !hover.faGithub })
              }
              onMouseLeave={() =>
                sethover({ ...hover, faGithub: !hover.faGithub })
              }
              style={!hover.faGithub ? iconStyleFa : iconStyleFaHover}
            />
          </a>
          <a
            href="mailto:adam.csetneki@outlook.com?subject=Contact_portfolio_website"
            target="_blank"
            rel="noreferrer"
          >
            <FiMail
              onMouseEnter={() => sethover({ ...hover, fiMail: !hover.fiMail })}
              onMouseLeave={() => sethover({ ...hover, fiMail: !hover.fiMail })}
              style={!hover.fiMail ? iconStyleFi : iconStyleFiHover}
            />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
