import React, { useEffect, useState } from 'react';
import { Section } from '../../shared';
import { OutlinedText } from '../../typography/outlined-text';
import { ProjectGrid } from './project-grid';

export const Projects = () => {
  const [projectList, setProjectList] = useState([] as Project[]);
  useEffect(() => {
    setProjectList([
      {
        id: 1,
        name: 'University Management',
        description: '',
        imageUrl: 'https://github.com/gothic459/um-client/blob/main/images/messages.png',
        liveUrl: 'https://um.dominiksek.com',
        status: 'Completed',
        technologies: [
          'React',
          'Typescript',
          'ChakraUI',
          'Zustand',
          'i18n',
          'Express.js',
          'Socket.io',
          'PostgreSQL',
          'Prisma',
          'Nginx',
          'Git',
        ],
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
    <Section className="overflow-x-hidden">
      <div className="pb-24 ">
        <OutlinedText className="text-4xl" noHover>
          Projects
        </OutlinedText>
      </div>
      {/* <Blob className={'bg-yellow/30 top-1/2 right-1/2 translate-x-1/2 w-80 h-80 '} /> */}
      {/* <Blob className={'bg-darkBlue top-1/3 left-0'} /> */}
      <ProjectGrid projects={projectList} />
    </Section>
  );
};
