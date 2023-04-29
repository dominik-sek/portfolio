import clsx from 'clsx';

interface BlobProps {
  className?: string;
  variant?: 'blue' | 'yellow';
}

export const Blob = (props: BlobProps): JSX.Element => {
  return <div className={'block absolute '} />;
};
