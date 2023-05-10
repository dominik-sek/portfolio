import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  outlined?: boolean;
  as?: 'button' | 'a';
}
type AnchorButtonProps = ButtonProps & AnchorHTMLAttributes<HTMLAnchorElement>;
type ButtonButtonProps = ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: AnchorButtonProps | ButtonButtonProps): JSX.Element => {
  const {
    outlined, children, className, icon, as, ...rest
  } = props;
  if (as === 'a') {
    return (
      <a
        className={clsx(
          'flex justify-center flex-1 bg-lightBlue border border-darkBlue text-darkBlue rounded-md items-center py-2 h-full w-32 max-w-[8rem] px-6 text-base font-bold shadow-md hover:bg-darkBlue hover:text-lightBlue duration-200 ',
          outlined && 'bg-transparent text-darkBlue hover:bg-darkBlue hover:text-lightBlue',
          className,
        )}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {icon}
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={clsx(
        'flex justify-center flex-1 bg-lightBlue border border-darkBlue text-darkBlue rounded-md items-center py-2 h-full w-32 max-w-[8rem] px-6 text-base font-bold shadow-md hover:bg-darkBlue hover:text-lightBlue duration-200 ',
        className,
        outlined && 'bg-transparent text-darkBlue hover:bg-darkBlue hover:text-lightBlue',
      )}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {icon && <span className="pr-2">{icon}</span>}
      {children}
    </button>
  );
};
