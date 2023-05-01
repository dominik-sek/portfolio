import clsx from 'clsx';
import { HTMLAttributes } from 'react';
import { AiFillGithub } from 'react-icons/ai';

interface ProjectCardProps extends HTMLAttributes<HTMLDivElement> {
  project: Project;
}

export const ProjectCard = (props: ProjectCardProps) => {
  return (
    <div
      key={props.project.id}
      className={clsx(
        'rounded-md bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-5xl bg-opacity-10 border border-darkBlue/20 shadow-md ' +
          '  w-full flex flex-col text-darkBlue ',
        props.className
      )}
    >
      <div className={'p-4 flex flex-col gap-2 justify-between h-full'}>
        <div className={'flex justify-between items-center'}>
          <span className={'text-xl lg:text-2xl'}>{props.project.name}</span>
          <div className={'flex gap-2'}>
            {props.project.githubUrl && (
              <a href={props.project.githubUrl} target={'_blank'} rel={'noreferrer'}>
                <AiFillGithub className={'text-2xl'} />
              </a>
            )}
            {props.project.liveUrl && (
              <a href={props.project.liveUrl} target={'_blank'} rel={'noreferrer'}>
                <span className={'text-xl'}>Visit</span>
              </a>
            )}
          </div>
        </div>
        <span className={'text-sm md:text-base'}>{props.project.description}</span>
        <div className={'flex flex-col gap-2'}>
          <div className={'flex flex-wrap'}>
            {props.project.technologies.map((tech) => {
              return (
                <span className={'text-xs text-darkBlue rounded-md px-2 py-1'} key={tech}>
                  {tech}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
