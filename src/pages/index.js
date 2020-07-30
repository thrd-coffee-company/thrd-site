import React from 'react';
import tw, { styled } from 'twin.macro';
import ThrdBranding from '../components/thrd-img';

const Button = styled.button`
  ${tw`bg-blue-500 hover:bg-blue-800 text-white p-2 rounded`}
`;
const Body = tw.div`
  bg-peach mx-auto h-screen flex flex-col justify-center items-center content-center
`;

// or use the shorthand version
// const Button = tw.button`
//   bg-blue-500 hover:bg-blue-800 text-white p-2 rounded
// `

const IndexPage = () => (
  <Body>
    <ThrdBranding className="w-1/3 inline-block" />
  </Body>
);
export default IndexPage;
