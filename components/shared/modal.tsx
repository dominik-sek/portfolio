import React, { Dispatch, SetStateAction } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export const Modal = (project: Project, setModalOpen: Dispatch<SetStateAction<boolean>>) => {
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
    <AnimatePresence mode="wait">
      <motion.div
        key="modal"
        className="aspect-video w-full h-full md:w-4/5 md:h-3/4  fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-gray-200 block rounded-md z-[100]"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={variants}
      >
        <h1>Modal</h1>
        <button type="button" onClick={() => setModalOpen(false)}>
          Close
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
