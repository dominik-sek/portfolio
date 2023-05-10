import React, { HTMLAttributes, useState } from 'react';
import clsx from 'clsx';
import { AiFillGithub } from 'react-icons/ai';
import { createPortal } from 'react-dom';
import { AnimatePresence } from 'framer-motion';
import { Overlay } from '../shared/overlay';
import { Modal } from '../shared/modal';
import { Button } from '../shared/button';

interface ProjectCardProps extends HTMLAttributes<HTMLDivElement> {
  project: Project;
}

export const ProjectCard = (props: ProjectCardProps) => {
  const { project, className } = props;
  const [modalOpen, setModalOpen] = useState(false);
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
      {/* onClick={() => setModalOpen(!modalOpen)} */}
      {modalOpen && createPortal(Overlay(setModalOpen, 'z-[99]'), document.body)}
      {modalOpen
        && createPortal(<AnimatePresence mode="wait">{Modal(project, setModalOpen)}</AnimatePresence>, document.body)}

      <div className="p-4 flex flex-col gap-2 justify-between h-full">
        <div className="flex justify-between items-center">
          <span aria-label="project" role="presentation" className="text-xl lg:text-2xl">
            {project.name}
          </span>
        </div>
        <div className="py-4">
          <span
            aria-label="project description"
            role="presentation"
            className="text-base text-ellipsis overflow-hidden line-clamp-3"
          >
            {project.description}
          </span>
          {project.description.split('\n').length > 0 && (
            <button
              type="button"
              aria-label="expand project description"
              className="text-sm text-darkBlue underline"
              onClick={() => setModalOpen(!modalOpen)}
            >
              Read More
            </button>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <div aria-label="technologies used in project" className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span className="text-xs text-darkBlue rounded-md " key={tech}>
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {project.githubUrl && (
              <Button
                as="a"
                icon={<AiFillGithub className="text-2xl" />}
                href={project.githubUrl}
                aria-label={`link to codebase for project ${project.name}`}
                target="_blank"
                rel="noreferrer"
                className=""
              >
                Source
              </Button>
            )}
            {project.liveUrl && (
              <Button
                as="a"
                href={project.liveUrl}
                aria-label={`link to live deployment for project ${project.name}`}
                target="_blank"
                rel="noreferrer"
              >
                Live
              </Button>
            )}
            <Button className="h-min" outlined onClick={() => setModalOpen(!modalOpen)}>
              Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
