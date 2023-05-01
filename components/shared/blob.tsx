import clsx from 'clsx';

interface BlobProps {
  className?: string;
}

export const Blob = (props: BlobProps): JSX.Element => {
  return (
    <div
      className={clsx('absolute z-0 bg-opacity-40 rounded-full w-72 h-72 bg-clip-border blur-5xl ', props.className)}
    />
  );
};
