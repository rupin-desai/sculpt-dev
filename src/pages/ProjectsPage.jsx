import Projects from "../components/Projects";

const projectProps = {
  headerText: <span>Our Projects</span>,
  images: [
    "/sculpt-dev/projects-1.png",
    "/sculpt-dev/projects-9.png",
    "/sculpt-dev/projects-2.png",
    "/sculpt-dev/projects-3.png",
    "/sculpt-dev/projects-8.png",
    "/sculpt-dev/projects-4.png",
    "/sculpt-dev/projects-7.png",
    "/sculpt-dev/projects-5.png",
    "/sculpt-dev/projects-6.png",
  ],
  smColumns: 2,
  mdColumns: 2,
  lgColumns: 2,
  xlColumns: 2,
  maxHeight: "fit", // Max height for the container
  overflow: "auto", // Overflow behavior
  imageMaxHeight: "fit", // Max height for each image
};

const ProjectsPage = () => {
  return (
    <>
    <div className="px-40 pb-16">
    <Projects
      headerText={projectProps.headerText}
      images={projectProps.images}
      smColumns={projectProps.smColumns}
      mdColumns={projectProps.mdColumns}
      lgColumns={projectProps.lgColumns}
      xlColumns={projectProps.xlColumns}
      maxHeight={projectProps.maxHeight}
      overflow={projectProps.overflow}
      imageMaxHeight={projectProps.imageMaxHeight}
    />
    </div>
    
    </>
    
  );
};

export default ProjectsPage;
