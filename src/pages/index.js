import React from 'react';
import tw from 'twin.macro';
import LogoSvg from '../components/thrd-logo-svg';

const IndexPage = () => (
  <Body>
    <ComingSoon>website coming soon</ComingSoon>
    <LogoSvg className="w-6/12 md:w-5/12 lg:w-4/12 xl:w-3/12 h-auto" />
  </Body>
);

const Body = tw.div`
  bg-peach mx-auto h-screen flex flex-col justify-center items-center content-center font-sans
`;

const ComingSoon = tw.p`
  text-ocean
  uppercase
  font-bold
  text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl
  sm:mb-12 md:mb-20 lg:mb-20 xl:mb-32
`;

export default IndexPage;
