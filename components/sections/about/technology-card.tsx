import React from 'react';
import Image from 'next/image';

interface TechnologyCardProps {
  title: string;
  icon: string;
  link: string;
}
export const TechnologyCard = (props: TechnologyCardProps): JSX.Element => {
  const { title, icon, link } = props;

  return (
    <a
      href={link}
      target="_blank"
      className="bg-gray-200 aspect-square w-32 h-32 rounded-md p-2 shadow-md border border-lightBlue flex flex-col
     items-center cursor-pointer relative transition duration-200 hover:scale-105"
      rel="noreferrer"
    >
      <div className="w-full h-full flex items-center justify-center relative">
        <Image src={icon} alt={title} aria-hidden fill className="object-contain" />
      </div>
      <span className="text-darkBlue">{title}</span>
    </a>
  );
};
