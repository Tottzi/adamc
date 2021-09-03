import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import * as FaIcons from "react-icons/fa";
import sourceData from "./Timeline.json";
import "./Timeline.scss";

interface projectInterface {
  Name: string;
  Desc: string;
  weblink?: string;
  picture?: string;
  github: string;
  techs: string[];
  className: string;
  contentStyle?: any;
  contentArrowStyle?: any;
  iconStyle: any;
  icon: any;
}

const Timeline = () => {
  const projects: projectInterface[] = sourceData.projects;
  // const projectIcon = ({i}) => {
  //   const key = i
  //   const component: any = FaIcons[key]
  //   return component
  // }
  // console.log(projectIcon('FaReact'))
  const testIcon = <FaIcons.FaReact />;

  return (
    <div className="timeline">
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
    </div>
  );
};

export default Timeline;
