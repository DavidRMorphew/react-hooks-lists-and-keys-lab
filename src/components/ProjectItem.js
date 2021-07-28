import React from "react";

function ProjectItem({ name, about, technologies }) {
  
  const renderTechnologies = () => (
    technologies.map((tech, index) => <span key={`${index} ${tech}`}>{tech}</span>)
  )
  
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {renderTechnologies()}
      </div>
    </div>
  );
}

export default ProjectItem;
