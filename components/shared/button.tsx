import React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  outlined?: boolean;
}
export const Button = (props: ButtonProps): JSX.Element => {
  const {
    outlined, children, className, icon, ...rest
  } = props;
  return (
    <button
      type="button"
      className={clsx(
        'flex justify-center bg-lightBlue text-darkBlue rounded-md items-center py-2 w-full h-full px-6 text-base font-bold shadow-md hover:bg-darkBlue hover:text-lightBlue duration-200 ',
        className,
        outlined && 'bg-transparent border border-darkBlue text-darkBlue hover:bg-darkBlue hover:text-lightBlue',
      )}
      {...rest}
    >
      {icon && <span className="pr-2">{icon}</span>}
      {children}
    </button>
  );
};
