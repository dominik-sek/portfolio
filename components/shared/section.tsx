import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';

interface SectionProps extends HTMLAttributes<HTMLDivElement> {}

export const Section = (props: SectionProps) => {
  const { className, children } = props;
  return (
    <section
      className={clsx(
        'w-full flex justify-center items-center bg-gray-200 [&:nth-child(odd)]:bg-darkBlue [&:nth-child(even)]:bg-gray-200 [&:not(:first-child)]:py-12 px-3 md:px-24 relative',
        className,
      )}
    >
      <div className={clsx('w-full h-full max-w-screen-xl text-lightBlue ')}>{children}</div>
    </section>
  );
};
