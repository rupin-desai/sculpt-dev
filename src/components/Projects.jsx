import React from "react";
import ProjectsHeader from "./ProjectsHeader";
import ProjectsImages from "./ProjectsImages";

const headerText = <span>Recent Projects</span>;
const images = [
  "/sculpt-dev/projects-1.png",
  "/sculpt-dev/projects-9.png",
  "/sculpt-dev/projects-2.png",
  "/sculpt-dev/projects-3.png",
  "/sculpt-dev/projects-8.png",
  "/sculpt-dev/projects-4.png",
  "/sculpt-dev/projects-7.png",
  "/sculpt-dev/projects-5.png",
  "/sculpt-dev/projects-6.png",
];

const Projects = () => {
  return (
    <>
      <ProjectsHeader headerText={headerText} />
      <ProjectsImages images={images} />
    </>
  );
};

export default Projects;
