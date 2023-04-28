import { Section } from '../shared/section';
import { OutlinedText } from '../typography/outlined-text';

export const Hero = () => {
  return (
    <Section className={'!h-screen'}>
      <div className={'w-full h-full flex items-center  px-3 md:px-24'}>
        <div className={'flex flex-col gap-2'}>
          <span className={'text-2xl md:text-3xl'}>Hi, I&apos;m</span>
          <div>
            <h1 className={'text-5xl md:text-7xl text-white font-semibold'}>Dominik.</h1>
            <h2 className={'text-[1.75rem] md:text-4xl font-sans '}>
              I&apos;m a <span className={'text-yellow'}>frontend</span> developer.
            </h2>
          </div>

          <div className={'w-4/5'}>
            <span className={'md:text-xl'}>
              Currently focused on expanding my knowledge of <span className={'text-yellow'}>backend</span> development
              and <span className={'text-yellow'}>design</span>.
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
};
