import React, { PropsWithChildren } from 'react';
import clsx from 'clsx';

interface OutlinedTextProps extends PropsWithChildren {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p';
  className?: string;
  noHover?: boolean;
}

export const OutlinedText = (props: OutlinedTextProps): JSX.Element => {
  const { as, className, noHover, children } = props;
  const baseClasses = `text-stroke-blue text-transparent duration-100 font-black text-5xl ${
    noHover ? '' : 'hover:text-darkBlue cursor-pointer'
  }`;
  switch (as) {
    case 'h1':
      return <h1 className={clsx(baseClasses, className)}>{children}</h1>;
    case 'h2':
      return <h2 className={clsx(baseClasses, className)}>{children}</h2>;
    case 'h3':
      return <h3 className={clsx(baseClasses, className)}>{children}</h3>;
    case 'h4':
      return <h4 className={clsx(baseClasses, className)}>{children}</h4>;
    case 'h5':
      return <h5 className={clsx(baseClasses, className)}>{children}</h5>;
    case 'h6':
      return <h6 className={clsx(baseClasses, className)}>{children}</h6>;
    case 'span':
      return <span className={clsx(baseClasses, className)}>{children}</span>;
    case 'p':
      return <p className={clsx(baseClasses, className)}>{children}</p>;
    default:
      return <span className={clsx(baseClasses, className)}>{children}</span>;
  }
};
