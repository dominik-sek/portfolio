import { AiFillHeart } from 'react-icons/ai';
import React from 'react';

export const Footer = (): JSX.Element => (
  <footer className="text-darkBlue w-full text-sm flex flex-col items-center bg-gray-200">
    <span>
      Made with <AiFillHeart className="inline" /> by Dominik Sęk
    </span>
    <span>Inspired by https://cade.codes/</span>
  </footer>
);
