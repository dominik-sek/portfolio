import { PropsWithChildren } from 'react';

export const OutlinedText = (props: PropsWithChildren): JSX.Element => {
  return (
    <span
      className={
        'text-stroke-blue text-transparent hover:text-darkBlue duration-100 font-black text-4xl md:text-5xl cursor-pointer'
      }
    >
      {props.children}
    </span>
  );
};
