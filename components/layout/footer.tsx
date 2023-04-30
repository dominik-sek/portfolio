import { AiFillHeart } from 'react-icons/ai';

export const Footer = (): JSX.Element => {
  return (
    <footer className={'text-darkBlue w-full text-sm flex flex-col items-center bg-gray-200'}>
      {/*<div className={'flex-1 items-center justify-center flex py-12 px-3'}>*/}
      {/*  site map:*/}
      {/*</div>*/}
      {/*<hr className={'h-4/5 border'} />*/}

      <span>
        Made with <AiFillHeart className={'inline'} /> by Dominik Sęk
      </span>
      <span>Inspired by https://cade.codes/</span>
    </footer>
  );
};
