import React from 'react';
import { MerchForm } from '../components/merch-form';
import tw from 'twin.macro';
import Layout from '../components/layout';
import shirt from '../images/merch-items/shirt-front.jpg';
import sweater from '../images/merch-items/sweaters-front.jpg';
import HoverImage from 'react-hover-image';

// When Click on nav link
// Determine if we're on home screen
// 1. Navigate to the home page
// 2. Scroll to whatever section was clicked

const MerchPage = () => (
  <Layout notHomeRoute>
    <div className="lg:relative z-0 flex flex-col items-center justify-center h-auto w-auto">
      <h2 className="text-ocean text-4xl tracking-tight leading-10 font-extrabold sm:leading-none lg:text-5xl">
        Order Merch
      </h2>
    </div>
    <section id="merch" className="my-10 md:my-16 lg:my-24 text-center">
      <div className="flex justify-center flex-wrap p-10 sm:justify-around">
        <div className="p-2">
          <HoverImage
            src={sweater}
            hoverSrc={shirt}
            className="inline-block h-48 w-48 rounded-full object-cover "
          />
          <Copy2>$40</Copy2>
          <Copy>Sweaters</Copy>
        </div>
        <div className="p-2">
          <HoverImage
            src={shirt}
            hoverSrc={sweater}
            className="inline-block h-48 w-48 rounded-full object-cover "
          />
          <Copy2>$40</Copy2>
          <Copy>Shirts</Copy>
        </div>
      </div>
    </section>
    <section className="pb-15">
      <MerchForm />
    </section>
  </Layout>
);

const Copy = tw.p`
mt-3 max-w-md mx-auto text-lg text-gray-600 sm:text-xl md:mt-2 md:max-w-3xl
`;

const Copy2 = tw.p`
mt-2 max-w-md mx-auto text-lg text-ocean sm:text-xl md:mt-2 md:max-w-3xl
`;

export default MerchPage;
