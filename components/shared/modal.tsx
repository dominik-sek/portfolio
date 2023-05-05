import React, { Dispatch, SetStateAction } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

export const Modal = (project: Project, setModalOpen: Dispatch<SetStateAction<boolean>>) => {
  const { images } = project;
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
      className="aspect-video w-full h-full md:w-4/5 md:h-3/4 fixed top-1/2 left-1/2 bg-gray-200 rounded-md z-[100] shadow-2xl p-6 flex flex-col"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={variants}
    >
      <div className="w-full bg-red-700 ">
        Header
      </div>
      <div className="w-full bg-lime-300">
        <Swiper
          className="h-full"
          slidesPerView={1}
          spaceBetween={0}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {images && images.map((image) => (
            <SwiperSlide key={image.src} className="flex items-center">
              <img src={image.src} alt={image.alt} className="object-fill w-full" />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
      <div className="w-full bg-darkBlue">
        Footer
      </div>
    </motion.div>
  );
};
