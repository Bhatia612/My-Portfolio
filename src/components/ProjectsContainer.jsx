import { useState } from "react";
import { projects } from "../data/projects";
import { RiLinkM, RiCodeSSlashLine } from "@remixicon/react";

export default function ProjectsContainer() {
  return (
    <>
      <h1>
        Projects<sup>({projects.length})</sup>
      </h1>
      <div className="projects">
        <div className="projects__accordion">
          {projects.map((project, index) => (

            <ProjectAccordion key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </>
  );
}

function ProjectAccordion({ project, index }) {
  const [open, setOpen] = useState(index === 1);

  return (
    <div className={`projects__item ${open ? "active" : ""}`}>
      <div
        className="projects__header"
        role="button"
        tabIndex={0}
        onClick={() => setOpen(!open)}
        onKeyDown={(e) => e.key === "Enter" && setOpen(!open)}
      >
        <div className="projects__left">
          <RiCodeSSlashLine className="projects__icon-left" />
          <div className="project-t-d">
            <h3>{project.title}</h3>
            <p className="projects__date">{project.date}</p>
          </div>
        </div>

        <div className="projects__right">
          {project.link && (
            <div className="projects__tooltip-wrapper">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="projects__link"
                onClick={(e) => e.stopPropagation()}
              >
                <RiLinkM />
              </a>
              <span className="projects__tooltip">Open project link</span>
            </div>
          )}
          <span className="projects__icon">{open ? "−" : "+"}</span>
        </div>
      </div>

      <div className={`projects__content ${open ? "open" : ""}`}>
        <p className="projects__description">{project.description}</p>

        <ul>
          {project.features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>

        <div className="projects__tags">
          {project.tags.map((tag) => (
            <span key={tag} className="projects__tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}