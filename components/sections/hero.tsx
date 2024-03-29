import React from 'react';
import { Blob, Section } from '../shared';

export const Hero = () => (
  <Section id="home" className="h-screen backdrop-blur-2xl overflow-hidden cursor-default">
    <Blob className="bg-lightBlue/10 -top-1/4 left-0 !w-1/2" />
    <Blob className="bg-lightBlue/30 bottom-0 right-0 rotate-180 w-52 !overflow-hidden" />

    <div className="w-full h-full flex items-center">
      <div className="flex flex-col gap-2">
        <span className="text-2xl md:text-3xl">Hi, I&apos;m</span>
        <div>
          <h1 className="text-5xl md:text-7xl text-white font-semibold">Dominik.</h1>
          <h2 className="text-[1.75rem] md:text-4xl font-sans ">
            I&apos;m a
            {' '}
            <span className="text-yellow">frontend</span>
            {' '}
            developer.
          </h2>
        </div>

        <div className="w-4/5">
          <span className="md:text-xl">
            Currently focused on expanding my knowledge of
            {' '}
            <span className="text-yellow">backend development</span>
            {' '}
            and
            {' '}
            <span className="text-yellow">design</span>
            .
          </span>
        </div>
      </div>
    </div>
  </Section>
);
