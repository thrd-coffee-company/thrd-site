import React from 'react';
import { MerchForm } from '../components/merch-form';
import tw from 'twin.macro';
import Layout from '../components/layout';
import shirt from '../images/merch-items/shirt-front.jpg';
import sweater from '../images/merch-items/sweaters-front.jpg';
import HoverImage from 'react-hover-image';

const MerchPage = () => (
  <Layout>
    <div className="lg:relative z-0 flex flex-col items-center justify-center h-auto w-auto">
      <h2 className="text-ocean text-4xl tracking-tight leading-10 font-extrabold sm:leading-none lg:text-5xl">
        Order Merch
      </h2>
    </div>
    <section
      id="bar-offerings"
      className="my-10 md:my-16 lg:my-24 text-center "
    >
      <div className="flex justify-self-center  flex-wrap p-10 sm:justify-around">
        <div>
          {/* <CirleImage src={sweater} alt="Sweaters" className="hover:opacity-0 cur" /> */}
          <HoverImage
            src={sweater}
            hoverSrc={shirt}
            className="inline-block h-48 w-48 rounded-full object-cover "
          />
          <Copy>Sweaters</Copy>
        </div>
        <div>
          {/* <CirleImage src={shirt}  alt="Shirt" /> */}
          <HoverImage
            src={shirt}
            hoverSrc={sweater}
            className="inline-block h-48 w-48 rounded-full object-cover "
          />
          <Copy>Shirts</Copy>
        </div>
      </div>
    </section>
    <section>
      <MerchForm />
    </section>
  </Layout>
);

const Copy = tw.p`
mt-3 max-w-md mx-auto text-lg text-gray-600 sm:text-xl md:mt-5 md:max-w-3xl
`;

const CirleImage = tw.img`
inline-block h-48 w-48 rounded-full object-cover
`;

export default MerchPage;
