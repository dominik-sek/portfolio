import React from 'react';
import { Section } from '../../shared';
import { OutlinedText } from '../../typography/outlined-text';
import { ProjectGrid } from './project-grid';
import { projects } from '../../../constants/projects';

export const Projects = () => (
  <Section className="overflow-x-hidden" id="projects">
    <div className="pb-24 ">
      <OutlinedText className="text-4xl" noHover>
        Projects
      </OutlinedText>
    </div>
    {/* <Blob className={'bg-yellow/30 top-1/2 right-1/2 translate-x-1/2 w-80 h-80 '} /> */}
    {/* <Blob className={'bg-darkBlue top-1/3 left-0'} /> */}
    <ProjectGrid projects={projects} />
  </Section>
);
