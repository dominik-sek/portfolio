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
        name: 'Project 1',
        description:
          'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum quas. Quisquam, voluptatum quas lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum quas. Quisquam, voluptatum quas lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum quas. Quisquam, voluptatum quas  ',
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
    <Section className="overflow-x-hidden">
      <div className="flex flex-col pb-12 ">
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
