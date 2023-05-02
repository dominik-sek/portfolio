import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';
import { AiFillGithub } from 'react-icons/ai';

interface ProjectCardProps extends HTMLAttributes<HTMLDivElement> {
  project: Project;
}

export const ProjectCard = (props: ProjectCardProps) => {
  const { project, className } = props;
  return (
    <div
      key={project.id}
      className={clsx(
        'rounded-md bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-5xl bg-opacity-10 border border-darkBlue/20 shadow-md '
          + '  w-full flex flex-col text-darkBlue ',
        className,
      )}
      aria-label={`${project.name} project`}
      role="presentation"
    >
      <div className="p-4 flex flex-col gap-2 justify-between h-full">
        <div className="flex justify-between items-center">
          <span aria-label="project" role="presentation" className="text-xl lg:text-2xl">
            {project.name}
          </span>
          <div className="flex gap-2" />
        </div>
        <span aria-label="project description" role="presentation" className="text-sm md:text-base">
          {project.description}
        </span>

        <div className="flex flex-col gap-2">
          <div className="flex gap-8 ">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                aria-label={`link to codebase for project ${project.name}`}
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub className="text-2xl" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                aria-label={`link to live deployment for project ${project.name}`}
                target="_blank"
                rel="noreferrer"
              >
                <span className="text-xl">Live</span>
              </a>
            )}
          </div>
          <div aria-label="technologies used in project" className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span className="text-xs text-darkBlue rounded-md " key={tech}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
