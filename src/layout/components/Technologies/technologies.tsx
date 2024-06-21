import React from "react";
import "./technologies.scss";
import Technology from "./Technology/technology";

function Technologies() {
  const techData = [
    {
      tech_id: 0,
      tech_name: "React.js",
    },
    {
      tech_id: 1,
      tech_name: "Node.js",
    },
    {
      tech_id: 2,
      tech_name: "Angular",
    },
    {
      tech_id: 3,
      tech_name: "MongoDB",
    },
    {
      tech_id: 4,
      tech_name: "Mongoose",
    },
    {
      tech_id: 5,
      tech_name: "Typescript",
    },
    {
      tech_id: 6,
      tech_name: "Express",
    },
    {
      tech_id: 7,
      tech_name: "Javascript",
    },
    {
      tech_id: 8,
      tech_name: "AWS EC2",
    },
    {
      tech_id: 9,
      tech_name: "AWS S3",
    },
    {
      tech_id: 10,
      tech_name: "AWS Amplify",
    },
    {
      tech_id: 11,
      tech_name: "Github",
    },
    {
      tech_id: 12,
      tech_name: "Bitbucket",
    },
    {
      tech_id: 13,
      tech_name: "JIRA",
    },
    {
      tech_id: 14,
      tech_name: "studio3T",
    },
    {
      tech_id: 15,
      tech_name: "Material UI",
    },
    {
      tech_id: 16,
      tech_name: "Bootstrap",
    },
    {
      tech_id: 17,
      tech_name: "HTML",
    },
    {
      tech_id: 18,
      tech_name: "CSS",
    },
  ];

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };
  return (
    <section className="technologies">
      <div className="technologies__header wrapper">
        <h2>TECHNOLOGIES</h2>
      </div>
      <div className="technologies__container wrapper">
        {techData.map((tech, index) => {
          return (
            <Technology
              variants={fadeInAnimationVariants}
              tech={tech}
              index={index}
              initial="initial"
              animate="animate"
            />
          );
        })}
      </div>
    </section>
  );
}

export default Technologies;
