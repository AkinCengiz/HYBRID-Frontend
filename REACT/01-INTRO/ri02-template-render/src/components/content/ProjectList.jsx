//import { useState } from "react"
import { PROJECTS } from "../../../data";
import ProjectListHeader from "./ProjectListHeader";
import SingleProject from "./SingleProject";

function ProjectList() {
  //const [projects,setProjects] = useState(PROJECTS)
  const projects = PROJECTS;
  console.log(projects);
  return (
    <>
      <ProjectListHeader/>
      <div className="w3-row-padding">
        {projects.map((project) => <SingleProject key={project.id} project={project}/>)}
      </div>

      {/* <div className="w3-row-padding">
        <div className="w3-col l3 m6 w3-margin-bottom">
          <div className="w3-display-container">
            <div className="w3-display-topleft w3-black w3-padding">
              Summer House
            </div>
            <img
              src="https://picsum.photos/363/242?random=5"
              alt="House"
              style={{ width: "99%" }}
            />
          </div>
        </div>
        <div className="w3-col l3 m6 w3-margin-bottom">
          <div className="w3-display-container">
            <div className="w3-display-topleft w3-black w3-padding">
              Brick House
            </div>
            <img
              src="https://picsum.photos/363/242?random=6"
              alt="House"
              style={{ width: "99%" }}
            />
          </div>
        </div>
        <div className="w3-col l3 m6 w3-margin-bottom">
          <div className="w3-display-container">
            <div className="w3-display-topleft w3-black w3-padding">
              Renovated
            </div>
            <img
              src="https://picsum.photos/363/242?random=7"
              alt="House"
              style={{ width: "99%" }}
            />
          </div>
        </div>
        <div className="w3-col l3 m6 w3-margin-bottom">
          <div className="w3-display-container">
            <div className="w3-display-topleft w3-black w3-padding">
              Barn House
            </div>
            <img
              src="https://picsum.photos/363/242?random=8"
              alt="House"
              style={{ width: "99%" }}
            />
          </div>
        </div>
      </div> */}
    </>
  );
}

export default ProjectList;
