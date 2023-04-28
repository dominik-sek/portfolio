import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'blue' | 'yellow';
}
export const Section = (props: SectionProps) => {
  const { variant } = props;

  return (
    <section
      className={clsx(
        'w-full h-fit flex justify-center items-center bg-darkBlue',
        variant === 'blue' && 'bg-darkBlue',
        variant === 'yellow' && 'bg-yellow',
        props.className
      )}
    >
      <div className={clsx('w-full h-full max-w-screen-xl text-lightBlue')}>{props.children}</div>
    </section>
  );
};
