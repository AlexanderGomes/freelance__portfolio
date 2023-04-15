import React, { useEffect, useRef } from "react";
import { Plan } from "..";
import { projects } from "../../constans/constans";

import "./Projects.css";

const Projects = () => {
  return (
    <div className="project__main">
      <h1 className="top__text">Projects</h1>
      <Plan />
      <div className="horizontal_slider">
        <div className="slider_container">
          {projects.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Card = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} />
      </div>
      <div className="project-details">
        <h2>{project.title}</h2>
        <p>{project.desc}</p>

        <div className="links__card">
          <a rel="noreferrer" target="_blank" href={project.live}>
            Live
          </a>
          <a rel="noreferrer" target="_blank" href={project.github}>
            Github Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
