'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import React, { Dispatch, SetStateAction, useState } from 'react';

import { AiFillGithub } from 'react-icons/ai';
import { createPortal } from 'react-dom';
import { OutlinedText } from '../typography/outlined-text';

const routes = [
  {
    name: 'Home',
    href: '#',
  },
  {
    name: 'About',
    href: '#',
  },
  {
    name: 'Projects',
    href: '#',
  },
  {
    name: 'Contact',
    href: '#',
  },
];
const variants = {
  hidden: {
    opacity: 0,
    y: -100,
    transition: {
      staggerChildren: 0,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const listVariants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const Overlay = (setIsOpen: Dispatch<SetStateAction<boolean>>) => (
  <div role="none" onClick={() => setIsOpen(false)} className="fixed top-0 left-0 w-full h-full bg-black/40 z-0" />
);

export const Navbar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const handleEscape = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };
  return (
    <div
      role="none"
      onKeyDown={handleEscape}
      className={clsx('flex flex-col fixed items-end w-full z-50 backdrop-blur-md shadow ')}
    >
      <button
        type="button"
        className="flex flex-col gap-y-2 z-10 px-3 py-6 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={clsx(
            'w-12 h-1 rounded-md block bg-lightBlue duration-200 ',
            isOpen && 'rotate-45 translate-y-2 !bg-darkBlue',
          )}
        />
        <span
          className={clsx(
            'w-12 h-1 rounded-md block bg-lightBlue duration-500 opacity-100 ',
            isOpen && 'translate-x-full opacity-0 scale-0',
          )}
        />
        <span
          className={clsx(
            'w-12 h-1 rounded-md block bg-lightBlue duration-200  ',
            isOpen && '-rotate-45 -translate-y-4 !bg-darkBlue',
          )}
        />
      </button>
      <nav
        className={clsx(
          'flex flex-col absolute gap-6 text-right px-6 pt-20 pb-10 bg-gray-300 w-full -translate-y-full duration-700 transition-all',
          isOpen && 'translate-y-0',
        )}
      >
        <motion.ul
          className={clsx('flex flex-col gap-6')}
          initial="hidden"
          animate={isOpen ? 'visible' : 'hidden'}
          variants={variants}
        >
          {routes.map((route) => (
            <motion.li key={route.name} variants={listVariants}>
              <OutlinedText>{route.name}</OutlinedText>
            </motion.li>
          ))}
        </motion.ul>

        <motion.span
          className="flex justify-end"
          initial="hidden"
          animate={isOpen ? 'visible' : 'hidden'}
          variants={variants}
        >
          <AiFillGithub className="h-10 w-8 text-darkBlue hover:text-blue-950 cursor-pointer" />
        </motion.span>
      </nav>

      {isOpen && createPortal(Overlay(setIsOpen), document.body)}
    </div>
  );
};
