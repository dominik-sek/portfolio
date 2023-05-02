import React from 'react';
import { Section } from '../shared';
import { OutlinedText } from '../typography/outlined-text';

export const About = (): JSX.Element => (
  <Section>
    <div className="flex flex-col ">
      <OutlinedText className="text-4xl" noHover>
        About Me
      </OutlinedText>
    </div>
  </Section>
);
