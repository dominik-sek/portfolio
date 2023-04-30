import type { NextPage } from 'next';
import { Hero, Projects } from '../components/sections';

const Home: NextPage = () => {
  return (
    <main>
      <Hero />
      {/*<About />*/}
      <Projects />
      {/*<Contact />*/}
    </main>
  );
};

export default Home;
