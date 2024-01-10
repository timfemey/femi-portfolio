import { projectData } from "@/data/data";

interface IProjectsProps {}

const Projects: React.FunctionComponent<IProjectsProps> = (props) => {
  return (
    <>
      <div className="projects-container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projectData &&
            projectData.map((project) => (
              <div className="project-card" key={project.id}>
                <div className="project-header">
                  <i className="fa-regular fa-folder-open folder-icon"></i>
                  <div className="small-icons">
                    <a href={project.gitHubLink} target="_blank">
                      <i className="fa-brands fa-github"></i>
                    </a>
                  </div>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
