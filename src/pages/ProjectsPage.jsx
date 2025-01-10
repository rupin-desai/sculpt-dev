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
};

const ProjectsPage = () => {
  return (
    <div className="px-40 pb-16">
      <Projects
        headerText={projectProps.headerText}
        images={projectProps.images}
      />
    </div>
  );
};

export default ProjectsPage;
