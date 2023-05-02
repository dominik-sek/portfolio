import React from 'react';
import clsx from 'clsx';
import { ProjectCard } from '../../project-card/ProjectCard';

interface ProjectGridProps {
  projects: Project[];
}

export const ProjectGrid = (props: ProjectGridProps) => {
  const { projects } = props;
  return (
    <div
      className={
        'grid min-h-screen p-2 ' +
        'md:grid-cols-6 md:grid-rows-6 md:grid-flow-col ' +
        'lg:grid-cols-5 lg:!grid-rows-6 lg:grid-flow-col-dense gap-5'
      }
    >
      {projects.slice(0, 6).map((project) => (
        <ProjectCard
          project={project}
          key={project.id}
          className={clsx(
            project.starred
              ? 'md:row-span-3 md:col-span-3 lg:col-span-3 lg:row-span-3 '
              : 'md:row-span-3 md:col-span-3 lg:col-span-2 lg:row-span-3'
          )}
        />
      ))}
    </div>
  );
};
