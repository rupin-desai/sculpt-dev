import React from "react";
import ProjectsHeader from "./ProjectsHeader";
import ProjectsImages from "./ProjectsImages";

const Projects = ({ headerText, images }) => {
  return (
    <>
      <ProjectsHeader headerText={headerText} />
      <ProjectsImages images={images} />
    </>
  );
};

export default Projects;
