import React from "react";
import ProjectsHeader from "./ProjectsHeader";
import ProjectsImages from "./ProjectsImages";

const Projects = ({
  headerText,
  images,
  smColumns,
  mdColumns,
  lgColumns,
  xlColumns,
  maxHeight, // Pass maxHeight for the image container
  overflow, // Pass overflow property
  imageMaxHeight, // Pass maxHeight for the images
}) => {
  return (
    <>
      <ProjectsHeader headerText={headerText} />
      <ProjectsImages
        images={images}
        smColumns={smColumns}
        mdColumns={mdColumns}
        lgColumns={lgColumns}
        xlColumns={xlColumns}
        maxHeight={maxHeight} // Passing dynamic maxHeight
        overflow={overflow} // Passing dynamic overflow
        imageMaxHeight={imageMaxHeight} // Passing dynamic maxHeight for images
      />
    </>
  );
};

export default Projects;
