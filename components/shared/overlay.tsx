import React, { Dispatch, SetStateAction } from 'react';
import clsx from 'clsx';

export const Overlay = (setIsOpen: Dispatch<SetStateAction<boolean>>, className?: string) => (
  <div
    role="none"
    onClick={() => setIsOpen(false)}
    className={clsx('fixed top-0 left-0 w-full h-full bg-black/40 z-10', className)}
  />
);
