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
        'w-full h-screen flex justify-center items-center bg-primary',
        variant === 'blue' && 'bg-primary',
        variant === 'yellow' && 'bg-secondary'
      )}
    >
      <div className={clsx('w-full h-full max-w-screen-xl text-accents')}>{props.children}</div>
    </section>
  );
};
