import clsx from 'clsx';
import { OutlinedText } from '../typography/outlined-text';
import { useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';

export const Navbar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={clsx('flex flex-col fixed items-end w-full')}>
      <div className={'flex flex-col gap-y-2 z-10 px-3 py-6 cursor-pointer'} onClick={() => setIsOpen(!isOpen)}>
        <span
          className={clsx(
            'w-12 h-1 rounded-md block bg-lightBlue duration-200',
            isOpen && 'rotate-45 translate-y-2 !bg-darkBlue'
          )}
        ></span>
        <span
          className={clsx(
            'w-12 h-1 rounded-md block bg-lightBlue duration-500 ',
            isOpen && 'translate-x-full opacity-0 scale-0'
          )}
        ></span>
        <span
          className={clsx(
            'w-12 h-1 rounded-md block bg-lightBlue duration-200  ',
            isOpen && '-rotate-45 -translate-y-4 !bg-darkBlue'
          )}
        ></span>
      </div>

      <nav
        className={clsx(
          'flex flex-col absolute gap-6 text-right px-6 pt-20 pb-10 bg-gray-300 w-full -translate-y-full duration-200',
          isOpen && 'translate-y-0'
        )}
      >
        <ul className={clsx('flex flex-col gap-6')}>
          <li>
            <OutlinedText>Home</OutlinedText>
          </li>
          <li>
            <OutlinedText>About</OutlinedText>
          </li>
          <li>
            <OutlinedText>Projects</OutlinedText>
          </li>
          <li>
            <OutlinedText>Contact</OutlinedText>
          </li>
        </ul>

        <span className={'flex justify-end'}>
          <AiFillGithub className={'h-10 w-8'} />
        </span>
      </nav>
    </div>
  );
};
