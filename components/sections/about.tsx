import { Section } from '../shared/section';
import { OutlinedText } from '../typography/outlined-text';

export const About = (): JSX.Element => {
  return (
    <Section>
      <div className={'flex flex-col '}>
        <OutlinedText className={'text-4xl'} noHover>
          About Me
        </OutlinedText>
      </div>
    </Section>
  );
};
