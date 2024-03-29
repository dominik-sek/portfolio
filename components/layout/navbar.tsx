'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { createPortal } from 'react-dom';
import { OutlinedText } from '../typography/outlined-text';
import { Overlay } from '../shared/overlay';
import { routes } from '../../constants/routes';

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

export const Navbar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleEscape = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPosition]);

  return (
    <div
      role="presentation"
      onKeyDown={handleEscape}
      className={clsx('flex flex-col fixed items-end w-full z-50 backdrop-blur-md ', scrollPosition > 300 && 'shadow')}
    >
      <button
        id="menu-button"
        aria-label="Menu"
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
        aria-hidden={!isOpen}
      >
        <motion.ul
          className={clsx('flex flex-col gap-6')}
          initial="hidden"
          animate={isOpen ? 'visible' : 'hidden'}
          variants={variants}
        >
          {routes.map((route) => (
            <motion.li key={route.name} variants={listVariants}>
              <a href={route.href} onClick={() => setIsOpen(false)}>
                <OutlinedText>{route.name}</OutlinedText>
              </a>
            </motion.li>
          ))}
        </motion.ul>

        <motion.span
          className="flex justify-end"
          initial="hidden"
          animate={isOpen ? 'visible' : 'hidden'}
          variants={variants}
        >
          <a href="https://github.com/dominik-sek" target="_blank" rel="noreferrer" className="flex items-center gap-2">
            <AiFillGithub className="h-10 w-8 text-darkBlue hover:text-blue-950 cursor-pointer" />
          </a>
        </motion.span>
      </nav>

      {isOpen && createPortal(Overlay(setIsOpen), document.body)}
    </div>
  );
};
