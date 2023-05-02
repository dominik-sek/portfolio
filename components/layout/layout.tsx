import React, { PropsWithChildren } from 'react';
import { Navbar } from './navbar';
import { Footer } from './footer';

export const Layout = (props: PropsWithChildren) => {
  const { children } = props;
  return (
    <div>
      {/* <Header /> */}
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
