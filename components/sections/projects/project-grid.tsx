import clsx from 'clsx';
import { ProjectCard } from '../../project-card/ProjectCard';

interface ProjectGridProps {
  projects: Project[];
}

export const ProjectGrid = (props: ProjectGridProps) => {
  return (
    <div className={'flex flex-col  p-2'}>
      <div
        className={
          'grid  ' +
          'md:grid-cols-5 md:grid-rows-6 md:grid-flow-col ' +
          'lg:grid-cols-5 lg:!grid-rows-6 lg:grid-flow-col-dense gap-5'
        }
      >
        {props.projects.slice(0, 6).map((project) => {
          return (
            <ProjectCard
              project={project}
              key={project.id}
              className={clsx(
                project.starred
                  ? 'md:row-span-3 md:col-span-3 lg:!col-span-3 '
                  : 'md:col-span-2 md:row-span-3 lg:col-span-2'
              )}
            />
          );
        })}
      </div>
    </div>
  );
};
