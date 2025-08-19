'use client';

import React from 'react';

import type { ProjectSection as ProjectSectionType } from '@/data/projects';

interface ProjectSectionProps {
  data: ProjectSectionType;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ data }) => (
  <div className="project-section">
    <h3 className="section-title">{data.title}</h3>
    <ul className="project-list">
      {data.projects.map((project) => (
        <li key={project.title} className="project-item">
          <div className="project-header">
            <h4 className="project-title">
              {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              ) : (
                project.title
              )}
            </h4>
          </div>
          <p className="project-desc">{project.desc}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default ProjectSection;
