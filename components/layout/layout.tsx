import { PropsWithChildren } from 'react';
import { Navbar } from './navbar';
import { Footer } from './footer';

export const Layout = (props: PropsWithChildren) => {
  return (
    <div>
      {/*<Header />*/}
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};
