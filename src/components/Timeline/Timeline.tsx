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
  weblink: string;
  techs: string[];
  className: string;
  contentStyle?: any;
  contentArrowStyle: any;
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
                <h3 className="vertical-timeline-element-title">
                  {project.Name}
                </h3>
                {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
                <div className="thumbnail-container">
                  <div className="thumbnail">
                    <iframe src={project.weblink} frameBorder="0"></iframe>
                  </div>
                </div>
                <p>{project.Desc}</p>
            </VerticalTimelineElement>
          ))}
        <VerticalTimelineElement
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
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={testIcon}
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={testIcon}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Los Angeles, CA
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={testIcon}
        >
          <h3 className="vertical-timeline-element-title">Web Designer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={testIcon}
        >
          <h3 className="vertical-timeline-element-title">
            Content Marketing for Web, Mobile and Social Media
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
          <p>Strategy, Social Media</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={testIcon}
        >
          <h3 className="vertical-timeline-element-title">
            Agile Development Scrum Master
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Certification</h4>
          <p>Creative Direction, User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={testIcon}
        >
          <h3 className="vertical-timeline-element-title">
            Bachelor of Science in Interactive Digital Media Visual Imaging
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor Degree
          </h4>
          <p>Creative Direction, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={testIcon}
        />
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
