import { Section } from '../../shared/section';
import { OutlinedText } from '../../typography/outlined-text';
import { useEffect, useState } from 'react';
import { ProjectGrid } from './project-grid';

export const Projects = () => {
  const [projectList, setProjectList] = useState([] as Project[]);
  useEffect(() => {
    setProjectList([
      {
        id: 1,
        name: 'Project 1',
        description: 'This is a description of project 1',
        imageUrl: 'https://via.placeholder.com/150',
        liveUrl: 'https://www.google.com',
        status: 'In Progress',
        technologies: ['React', 'Typescript', 'TailwindCSS'],
        githubUrl: 'https://www.github.com',
        starred: true,
      },
      {
        id: 2,
        name: 'Project 2',
        description: 'This is a description of project 1',
        imageUrl: 'https://via.placeholder.com/150',
        liveUrl: 'https://www.google.com',
        status: 'In Progress',
        technologies: ['React', 'Typescript', 'TailwindCSS'],
        githubUrl: 'https://www.github.com',
        starred: false,
      },
      {
        id: 3,
        name: 'Project 3',
        description: 'This is a description of project 1',
        imageUrl: 'https://via.placeholder.com/150',
        liveUrl: 'https://www.google.com',
        status: 'In Progress',
        technologies: ['React', 'Typescript', 'TailwindCSS'],
        githubUrl: 'https://www.github.com',
        starred: true,
      },
      {
        id: 4,
        name: 'Project 4',
        description: 'This is a description of project 1',
        imageUrl: 'https://via.placeholder.com/150',
        liveUrl: 'https://www.google.com',
        status: 'In Progress',
        technologies: ['React', 'Typescript', 'TailwindCSS'],
        githubUrl: 'https://www.github.com',
        starred: false,
      },
    ]);
  }, []);

  return (
    <Section className={''}>
      <div className={'flex flex-col pb-12 '}>
        <OutlinedText className={'text-4xl'} noHover>
          Projects
        </OutlinedText>
      </div>
      <ProjectGrid projects={projectList} />
    </Section>
  );
};
