import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import "./projects.scss";

const Projects = () => {
  return (
    <div id="projects" className="section projects">
      <h2 className="title">My Projects</h2>
      <div className="project">
        <div className="project--image">
          <StaticImage src="../../../static/images/benahmedEducation.png" />
        </div>
        <div className="project--content">
          <h3 className="subtitle">benahmed.education</h3>
          <p className="text">Helping teacher manage their students</p>
          <h4 className="text">Tasks:</h4>
          <ul>
            <li>- Designing the website</li>
            <li>- Dashboard for teacher and students</li>
            <li>- lessons for students</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
