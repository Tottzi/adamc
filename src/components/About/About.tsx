import React, { useState } from "react";
import "./About.scss";
import { FaRegArrowAltCircleDown } from "react-icons/fa";

const About = () => {
  type iconstyle = {
    width: string;
    height: string;
    fill?: string;
    stroke?: string;
    cursor: string;
    margin: string;
    transition: string;
  };
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
          <h2>Adam C</h2>
          <h3>Full Stack JavaScript Developer</h3>
          <h3>Welcome to my site</h3>
        </div>
      </div>
      <div className="about-down">
        <a href="#timeline">
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
