import React from "react";
import "./projectCard.scss";

import { ProjectTitle } from "../ProjectTitle/projectTitle";

function ProjectCard(props: any) {
  console.log(
    "projects",
    props.projectsData.map((e: any) => e.title)
  );

  const handleProjectLink = (link: any) => {
    window.open(link, "_blank");
  };

  return (
    <div
      className="project w-100 d-flex align-items-start"
      key={props.index}
      style={{
        gap: "5rem",
      }}
    >
      <div
        className="w-100 project-card-padding"
        // style={{ paddingTop: "50vh", paddingBottom: "50vh" }}
      >
        <ul>
          {props.projectsData.map((project: any) => {
            return (
              <li key={project.id}>
                <ProjectTitle
                  id={project.id}
                  handleProjectLink={() => handleProjectLink(project.link)}
                >
                  {project.title}
                </ProjectTitle>
              </li>
            );
          })}
        </ul>
      </div>

      <div
        className="projects__individual position-sticky w-100 vh-100 d-flex align-items-center"
        style={{ top: 0 }}
      >
        <div
          className="projects__image position-relative w-100"
          style={{ aspectRatio: 1 / 1 }}
        >
          {props.projectsData.map((project: any) => {
            return <project.card id={project.id} key={project.id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
