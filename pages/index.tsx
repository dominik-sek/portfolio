import type { NextPage } from 'next';
import { Section } from '../components/shared/section';

const Home: NextPage = () => {
  return (
    <main>
      <Section variant={'blue'}>
        <h1 className={'text-5xl font-bold'}>Hello World</h1>
      </Section>
    </main>
  );
};

export default Home;
