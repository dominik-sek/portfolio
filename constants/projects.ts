export const projects: Project[] = [
  {
    id: 0,
    name: 'See more on GitHub',
    description: 'For more projects, visit my GitHub profile.',
    images: [
      {
        src: '/project-images/github.png',
        alt: 'GitHub',
      },
    ],
    liveUrl: 'https://github.com/dominik-sek',
    status: 'Completed',
    technologies: ['React', 'Typescript', 'TailwindCSS', 'Git'],
    starred: false,
  },
  {
    id: 1,
    name: 'University Management',
    description:
      ''
      + 'A fullstack application that serves as a CMS platform for universities.'
      + ' Provides a way to manage students, courses, grades as well as a way to communicate with students via a chat. '
      + ' The application is fully responsive and supports multiple languages. Integrated with various APIs, hosted on a VPS.',
    images: [
      {
        src: '/project-images/um/1.png',
        alt: 'University Management',
      },
    ],
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
    githubUrl: 'https://www.github.com/dominik-sek/um-client',
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
    images: [
      {
        src: '/project-images/fl/1.png',
        alt: 'Fuel Lang',
      },
    ],
    liveUrl: 'https://dominik-sek.github.io/fuel-lang/',
    status: 'Completed',
    technologies: ['React', 'Typescript', 'ANTLR'],
    githubUrl: 'https://github.com/dominik-sek/fuel-lang',
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
        src: '/project-images/od/1.png',
        alt: 'Ostoya-Dziwnówek',
      },
    ],
    liveUrl: 'https://ostoya-dziwnowek.pl/',
    status: 'Completed',
    technologies: [],
    // githubUrl: 'https://www.github.com',
    starred: false,
  },
];
