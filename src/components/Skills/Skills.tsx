// import React, { useState, useEffect } from "react";
// import { Link } from "react-scroll";
import "./Skills.scss";


const Skills = () => {

  return (
    <div className="skills" id="skills">
      <header className="skills__title">
        <h3>Full-Stack Javascript Developer</h3>
      </header>
      <div className="skills-container">
        <div className="skills-container__frontend">
          <header>Front-end:</header>
          <ul>
            <li>
              <img
                alt="NodeJS"
                width="20px"
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"
              />
              -NodeJS
            </li>
            <li>
              {" "}
              <img
                alt="Express"
                width="20px"
                src="https://ih1.redbubble.net/image.438908244.6144/st,small,507x507-pad,600x600,f8f8f8.u2.jpg"
              />
              -ExpressJS
            </li>
            <li>
              {" "}
              <img
                alt="NodeJS"
                width="20px"
                src="https://d12m9erqbesehq.cloudfront.net/wp-content/uploads/2016/04/30152042/event-smart-rest-api.png"
              />
              -REST
            </li>
            <li>
              {" "}
              <img
                alt="NodeJS"
                width="20px"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png"
              />
              -GraphQL
            </li>
            <li>
              {" "}
              <img
                alt="NodeJS"
                width="20px"
                src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-mongodb/events/mon.png"
              />
              -MongoDB
            </li>
            <li>
              {" "}
              <img
                alt="NodeJS"
                width="20px"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png"
              />
              -PostgreSQL
            </li>
          </ul>
        </div>
        <div className="skills-container__backend">
          <header>Back-end:</header>
          <ul>
            <li>
              {" "}
              <img
                alt="NodeJS"
                width="20px"
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
              />
              -React
            </li>
            <li>
              {" "}
              <img
                alt="NodeJS"
                width="20px"
                src="https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png"
              />
              -Redux
            </li>
            <li>
              {" "}
              <img
                alt="NodeJS"
                width="20px"
                src="https://avatars.githubusercontent.com/u/25012217?v=4"
              />
             -Webpack
            </li>
            <li>
              {" "}
              <img
                alt="NodeJS"
                width="20px"
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"
              />
              -HTML
            </li>
            <li>
              {" "}
              <img
                alt="NodeJS"
                width="20px"
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"
              />
              -CSS
            </li>
            <li>
              {" "}
              <img
                alt="NodeJS"
                width="20px"
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png"
              />
              -SASS
            </li>
          </ul>
        </div>
        <div className="skills-container__techs">
          <header>Technologies:</header>
          <ul>
            <li>
              {" "}
              <img
                alt="NodeJS"
                width="20px"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1024px-Visual_Studio_Code_1.35_icon.svg.png"
              />
              -Visual Studio Code
            </li>
            <li>
              {" "}
              <img
                alt="NodeJS"
                width="20px"
                src="http://www.newthinktank.com/wp-content/uploads/2015/10/Handlebars-Tutorial.png"
              />
              -Handlebars/Mustache
            </li>
            <li>
              {" "}
              <img
                alt="NodeJS"
                width="20px"
                src="https://testdeck.org/assets/img/logo-mocha.svg"
              />
              -Mocha/Jest
            </li>
            <li>
              {" "}
              <img
                alt="NodeJS"
                width="20px"
                src="https://www.docker.com/sites/default/files/d8/styles/role_icon/public/2019-07/Docker-Logo-White-RGB_Vertical-BG_0.png?itok=8Tuac9I3"
              />
              -Docker
            </li>
            <li>
              {" "}
              <img
                alt="NodeJS"
                width="20px"
                src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
              />
               -Git+GitHub/GithHub Actions
            </li>
            <li>
              {" "}
              <img
                alt="NodeJS"
                width="20px"
                src="https://dailysmarty-production.s3.amazonaws.com/uploads/post/img/509/feature_thumb_heroku-logo.jpg"
              />
               -Cloud Platforms
            </li>
            <li>
              {" "}
              <img
                alt="NodeJS"
                width="20px"
                src="https://cdn.dribbble.com/users/68879/screenshots/637757/screen_shot_2012-07-09_at_18.15.00.png?compress=1&resize=400x300"
              />
               -TDD
            </li>
            <li>
              {" "}
              <img
                alt="NodeJS"
                width="20px"
                src="https://e7.pngegg.com/pngimages/270/546/png-clipart-agile-software-development-computer-icons-social-media-malwarebytes-kanban-social-media-blue-trademark.png"
              />
               -Agile work methods
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
