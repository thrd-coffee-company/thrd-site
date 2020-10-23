import React from 'react';
import tw from 'twin.macro';
import Navbar from '../navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Div>
        <Navbar />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </main>
      </Div>
    </>
  );
};

const Div = tw.div`
  bg-peach mx-auto h-screen font-sans
`;

export default Layout;
