import React from 'react';
import clsx from 'clsx';

interface BlobProps extends React.HTMLAttributes<HTMLDivElement> {}
export const Blob = (props: BlobProps): JSX.Element => {
  const { className } = props;
  return (
    <div className={clsx('absolute z-0 bg-opacity-40 rounded-full w-72 h-72 bg-clip-border blur-5xl ', className)} />
  );
};
