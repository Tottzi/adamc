import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.scss";
import { FaLinkedin, FaGithub, FaHome, FaBriefcase, FaTools } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import logo from "../../images/logo.png";
import {
  iconStyleFa,
  iconStyleFaHover,
  iconStyleFi,
  iconStyleFiHover,
} from "./iconestyles";

const Navbar = () => {
  const navEffect = useRef(null);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(window.innerWidth);

  const initialHover: {
    faLinkedin: boolean;
    faGithub: boolean;
    fiMail: boolean;
  } = {
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

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, [scrolled]);

  return width > 690 ? (
    <div
      ref={navEffect}
      className={scrolled ? "navbar navbar--scrolled" : "navbar"}
    >
      <nav className="navbar navbar--scrolled">
        <div className="navbar-left">
          <img className="navbar__logo" alt="logo" src={logo} />
        </div>
        <div className="navbar-middle">
          <Link to="about">About</Link>
          <Link to="skills">Skills</Link>
          <Link to="timeline">Work</Link>
          <Link to="footer">Contact</Link>
        </div>
        {width > 870 && (
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
            <a
              href="https://github.com/Tottzi"
              target="_blank"
              rel="noreferrer"
            >
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
                onMouseEnter={() =>
                  sethover({ ...hover, fiMail: !hover.fiMail })
                }
                onMouseLeave={() =>
                  sethover({ ...hover, fiMail: !hover.fiMail })
                }
                style={!hover.fiMail ? iconStyleFi : iconStyleFiHover}
              />
            </a>
          </div>
        )}
      </nav>
    </div>
  ) : (
    <div className="navbar-mobile">
      <div className="navbar-mobile__icon"><Link to="about"><FaHome /></Link></div>
      <div className="navbar-mobile__icon"><Link to="skills"><FaTools /></Link></div>
      <div className="navbar-mobile__icon"><Link to="timeline"><FaBriefcase /></Link></div>
      <div className="navbar-mobile__icon"><Link to="footer"><FiMail /></Link></div>
    </div>
  );
};

export default Navbar;
