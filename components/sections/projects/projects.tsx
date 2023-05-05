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
        description:
          ''
          + 'A fullstack application that serves as a CMS platform for universities.'
          + ' Provides a way to manage students, courses, grades as well as a way to communicate with students via a chat. '
          + ' The application is fully responsive and supports multiple languages. Integrated with various APIs, hosted on a VPS.',
        images: [{
          src: 'https://github.com/gothic459/um-client/blob/main/images/messages.png',
          alt: 'University Management',
        }],
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
        githubUrl: 'https://www.github.com/gothic459/um-client',
        starred: true,
      },
      {
        id: 2,
        name: '"Fuel Lang" and its Interpreter',
        description:
          'This is a project that I made for one of my university courses.'
          + 'It is a custom Domain Specific Language (DSL) for writing programs that allow to monitor a fuel storage facility.'
          + ' I was responsible for creating the grammar of the language, a custom visitor that traverses the Abstract Syntax Tree (AST) and interprets the program,'
          + ' and a React application that allows to write and run programs written in the language.',
        images: [{
          src: 'https://i.imgur.com/LVvgt5t.png',
          alt: 'Fuel Lang',
        }],
        liveUrl: 'https://gothic459.github.io/fuel-lang/',
        status: 'Completed',
        technologies: ['React', 'Typescript', 'ANTLR'],
        githubUrl: 'https://github.com/gothic459/fuel-lang',
        starred: true,
      },
      {
        id: 3,
        name: 'Ostoya-Dziwnówek',
        description:
          'One of the projects that I was responsible for during my internship at "UPBRAND" company.'
          + ' Given a figma desing, I, alongside my teammate were responsible for creating a website for a seaside apartment complex. '
          + 'The website is fully responsive and was created using React and TailwindCSS.'
          + 'During the development process our code was constantly under code review which ensured the quality of it.',
        images: [
          {
            src: 'https://i.imgur.com/imH03yx.png',
            alt: 'Ostoya-Dziwnówek',
          },
        ],
        liveUrl: 'https://ostoya-dziwnowek.pl/',
        status: 'Completed',
        technologies: ['React', 'Typescript', 'TailwindCSS', 'Git'],
        // githubUrl: 'https://www.github.com',
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
