import React from "react";
import "./projects.scss";

import ProjectCard from "./ProjectCard/projectCard";
import {
  AcceronCard,
  CloudAdminCard,
  FavhikerCard,
  MalayaliCard,
} from "./ProjectCard/ImageCard/imageCard";

//linear-gradient(to bottom right, #F7F0FF, #A78AFE)
//linear-gradient(to bottom right, #F5FBFF, #ADDEFF)
//linear-gradient(to bottom right, #F5FFF7, #ADDEFF)
//linear-gradient(to bottom right, #F7FFF5, #ADFFD8)
//linear-gradient(to bottom right, #FFF7F5, #FFD8AD)
//linear-gradient(to bottom right, #F7F0FF, #A78AFE)
//linear-gradient(to bottom right, #FEF5FF, #FFADE1)

function Projects() {
  const projectsData = [
    {
      id: 1,
      title: "Malayali Beer",
      description: "This is a description of project 1",
      image: "Malayali",
      card: MalayaliCard,
      link: "https://www.malayali.rocks/",
    },
    {
      id: 2,
      title: "Acceron",
      description: "This is a description of project 2",
      image: "Acceron",
      link: "https://www.acceron.co/",
      card: AcceronCard,
    },
    {
      id: 3,
      title: "CloudAdmin",
      description: "This is a description of project 3",
      image: "CloudAdmin",
      link: "#",
      card: CloudAdminCard,
    },
    {
      id: 4,
      title: "Favhiker",
      description: "This is a description of project 3",
      image: "Favhiker",
      link: "https://www.favhiker.com/",
      card: FavhikerCard,
    },
  ];

  return (
    <section className="projects">
      <div className="projects__header wrapper">
        <h2>HIGHLIGHTING MY SKILLS</h2>
        <p>
          Navigate my portfolio to witness firsthand the unique blend of
          projects, each a testament to the depth and versatility of my skill
          set.
        </p>
      </div>
      <div className="projects__container wrapper">
        <ProjectCard projectsData={projectsData} />
      </div>
    </section>
  );
}

export default Projects;
