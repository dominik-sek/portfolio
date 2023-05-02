import React from 'react';
import { Section } from '../shared';
import { OutlinedText } from '../typography/outlined-text';

export const Contact = () => (
  <Section>
    <div className="flex flex-col ">
      <OutlinedText className="text-4xl" noHover>
        Contact
      </OutlinedText>
    </div>
  </Section>
);
