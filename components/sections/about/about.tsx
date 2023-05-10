import React from 'react';
import { Blob, Section } from '../../shared';
import { OutlinedText } from '../../typography/outlined-text';
import { TechnologyCard } from './technology-card';
import { technologies } from '../../../constants/technologies';

export const About = (): JSX.Element => (
  <Section id="about">
    <OutlinedText className="text-4xl text-stroke-lightBlue" noHover>
      About Me
    </OutlinedText>

    <div className="flex pt-12 gap-12 flex-col lg:flex-row">
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
      <span
        role="presentation"
        className="inline-block  text-lg font-light lg:w-1/2 text-justify whitespace-pre-wrap text-gray-200"
      >
        {/* eslint-disable-next-line */}
        I&apos;m a frontend developer based in <span className={'text-yellow'}>Poland</span>.&nbsp;&nbsp;
        {/* eslint-disable-next-line */}
        My passion lies in creating visually appealing and interactive websites,&nbsp;that provide a&nbsp; great user
        experience. &nbsp;
        {/* eslint-disable-next-line */}
        I am a&nbsp;self&nbsp;-&nbsp;taught developer, who is always looking to expand
        his knowledge and learn new things,&nbsp;but I also hold a&nbsp;
        <span className="text-yellow">degree in Computer Science from the Academy of Science in Tarnów, Poland</span>
        .
      </span>

      <Blob className="bg-lightBlue/20 top-1/3 right-0 !w-1/2" />
      <div className="flex gap-4 flex-wrap justify-center w-full ">
        {technologies.map((technology) => (
          // eslint-disable-next-line max-len
          <TechnologyCard
            key={technology.title}
            title={technology.title}
            icon={technology.icon}
            link={technology.link}
          />
        ))}
      </div>
    </div>
  </Section>
);
