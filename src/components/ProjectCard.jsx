import React from 'react';
import SkillPill from './SkillPill';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold text-primary mb-2">{project.title}</h3>
      <p className="text-secondary mb-4">{project.description}</p>
      <div className="flex flex-wrap mb-4">
        {project.tech.map((tech, index) => (
          <SkillPill key={index} skill={tech} />
        ))}
      </div>
      <div className="flex gap-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent/80 flex items-center gap-1"
          >
            GitHub <ArrowTopRightOnSquareIcon className="w-4 h-4" />
          </a>
        )}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent/80 flex items-center gap-1"
          >
            Live Demo <ArrowTopRightOnSquareIcon className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard; 