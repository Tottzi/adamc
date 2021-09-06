import React, { useState, useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import * as FaIcons from "react-icons/fa";
import sourceData from "./Timeline.json";
import "./Timeline.scss";
import { projectInterface, iconstyle } from "./types";

const Timeline = () => {
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
  const [width, setWidth] = useState<number>(window.innerWidth);

  const projects: projectInterface[] = sourceData.projects;
  const iconStyleFa: iconstyle = {
    width: "2rem",
    height: "2rem",
    fill: "white",
    cursor: "pointer",
    margin: "0.75rem",
    transition: "500ms",
  };
  const iconStyleFaHover: iconstyle = {
    ...iconStyleFa,
    fill: "rgba(0, 228, 239, 1)",
  };
  // const projectIcon = ({i}) => {
  //   const key = i
  //   const component: any = FaIcons[key]
  //   return component
  // }
  // console.log(projectIcon('FaReact'))
  const testIcon = <FaIcons.FaReact />;
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    }
  }, [width])

  return (
    <div className="timeline" id="timeline">
      {width > 870 && <div className='timeline-fakebox'></div>}
      <VerticalTimeline>
        {projects &&
          projects.map((project) => (
            <VerticalTimelineElement
              className={project.className}
              contentStyle={project.contentStyle}
              contentArrowStyle={project.contentArrowStyle}
              iconStyle={project.iconStyle}
              icon={testIcon}
            >
              <h1 className="vertical-timeline-element-title">
                {project.Name}
              </h1>
              <h6 className="vertical-timeline-element-techs__title">Techs:</h6>
              <div className="vertical-timeline-element-techs">
                {project.techs.map((tech) => (
                  <div className="vertical-timeline-element-techs__button">
                    <h5 className="vertical-timeline-element-techs__button--text">
                      {tech}
                    </h5>
                  </div>
                ))}
              </div>
              {project.weblink ? (
                <a target="_blank" rel="noreferrer" href={project.weblink}>
                  <img
                    className="vertical-timeline-element-image"
                    alt={project.Name}
                    src={project.picture}
                  />
                </a>
              ) : (
                <img
                  className="vertical-timeline-element-image"
                  alt={project.Name}
                  src={project.picture}
                />
              )}
              {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
              <p className="vertical-timeline-element-desc">{project.Desc}</p>
              <footer className="vertical-timeline-element-footer">
                <a
                  className="vertical-timeline-element-footer__link"
                  target="_blank"
                  rel="noreferrer"
                  href={project.github}
                >
                  <FaIcons.FaGithub
                    onMouseEnter={() =>
                      sethover({ ...hover, faLinkedin: !hover.faLinkedin })
                    }
                    onMouseLeave={() =>
                      sethover({ ...hover, faLinkedin: !hover.faLinkedin })
                    }
                    style={!hover.faLinkedin ? iconStyleFa : iconStyleFaHover}
                  />
                </a>
              </footer>
            </VerticalTimelineElement>
          ))}
        {/* <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={testIcon}
        >
          <h3 className="vertical-timeline-element-title">Creative Director</h3>
          <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement> */}
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={testIcon}
        />
      </VerticalTimeline>
      <div className='timeline-fakebox'></div>
    </div>
  );
};

export default Timeline;
