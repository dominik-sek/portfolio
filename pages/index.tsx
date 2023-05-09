import React from 'react';
import type { NextPage } from 'next';
import { Hero, Projects, About } from '../components/sections';

const Home: NextPage = () => (
  <main>
    <Hero />
    <Projects />
    <About />
  </main>
);

export default Home;
