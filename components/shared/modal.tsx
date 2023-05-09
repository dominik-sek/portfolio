import React, { Dispatch, SetStateAction } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import { AiFillGithub } from 'react-icons/ai';
import { Button } from './button';

export const Modal = (project: Project, setModalOpen: Dispatch<SetStateAction<boolean>>) => {
  const {
    images, name, description, githubUrl, liveUrl,
  } = project;
  const variants = {
    hidden: {
      opacity: 0,
      scale: 0,
      x: 0,
      y: 0,
      translateX: '-50%',
      translateY: '-50%',
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      translateX: '-50%',
      translateY: '-50%',
    },
  };
  return (
    <motion.div
      key="modal"
      className={
        'w-full h-full overflow-y-auto md:w-3/5 md:h-3/4 fixed top-1/2 left-1/2 '
        + 'bg-gray-200 rounded-md z-[100] shadow-2xl p-6 flex flex-col gap-6 '
        + 'scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 scrollbar-thumb-rounded-full'
      }
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
    >
      <button type="button" className="absolute top-0 right-0 p-2" onClick={() => setModalOpen(false)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-lightBlue hover:text-darkBlue transition-all duration-300"
          fill="none"
          viewBox="0 0 36 36"
          stroke="currentColor"
        >
          <path d="M6 18L18 6M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className="w-full gap-2 flex flex-col">
        <h2 className="text-2xl font-bold text-center text-darkBlue">{name}</h2>
        <p className="text-base text-center text-darkBlue">{description}</p>
      </div>

      <div id="swiper-container" className="w-full">
        <Swiper
          className="h-fit w-full flex items-center justify-center"
          slidesPerView={1}
          spaceBetween={0}
          navigation
          pagination={{ clickable: true }}
        >
          {images
            && images.map((image) => (
              <SwiperSlide key={image.src} className="!flex items-center justify-center">
                <Image src={image.src} alt={image.alt} width={700} height={700} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {githubUrl && (
          <a
            href={githubUrl}
            aria-label={`link to codebase for project ${name}`}
            target="_blank"
            rel="noreferrer"
            className=""
          >
            <Button icon={<AiFillGithub className="text-2xl" />}>Source</Button>
          </a>
        )}
        {liveUrl && (
          <a href={liveUrl} aria-label={`link to live deployment for project ${name}`} target="_blank" rel="noreferrer">
            <Button>Live</Button>
          </a>
        )}
      </div>
    </motion.div>
  );
};
