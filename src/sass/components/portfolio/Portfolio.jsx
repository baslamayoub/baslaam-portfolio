import React, { useState } from "react";
import projects from "../../../assets/data";


const categories = ["All", "UI/UX", "Web Apps", "E-commerce"];

const ProjectSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="projects" id="projects">
      <div className="container">
        <div className="title">
          <h2 className="section__title">My Projects</h2>
          <p className="section__subtitle">
            Explore some of the work I’ve done for clients and personal growth.
          </p>
        </div>

        <div className="projects__filters">
          {categories.map((category) => (
            <button
              key={category}
              className={category === activeCategory ? "active" : ""}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="projects__grid--card">
              <img src={project.image} alt={project.title} />
              <div className="card-body">
                <h3>{project.title}</h3>
                <p>Category: {project.category}</p>
                <div className="tags">
                  {project.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>
                <div className="links">
                  <a href="#">View Live</a>
                  <a href="#">Source Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
