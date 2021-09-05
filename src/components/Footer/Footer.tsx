import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-container">
        <article className="footer-container__header">
          Contact me:
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/adam-csetneki-a7141576/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Tottzi"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="mailto:adam.csetneki@outlook.com?subject=Contact_portfolio_website"
                target="_blank"
                rel="noreferrer"
              >
                Email
              </a>
            </li>
          </ul>
        </article>
      </div>
    </div>
  );
};

export default Footer;
