import React from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}
export const Button = (props: ButtonProps): JSX.Element => {
  const {
    children, className, icon, ...rest
  } = props;
  return (
    <button
      type="button"
      className={clsx(
        'flex justify-center bg-lightBlue text-darkBlue rounded-md py-2 px-4 text-base font-bold shadow-md hover:bg-darkBlue hover:text-lightBlue duration-200 ',
        className,
      )}
      {...rest}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};
