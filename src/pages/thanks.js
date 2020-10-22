import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const ThankYouPage = () => (
  <Layout>
    <div className="mx-auto text-center">
      <h1 className="text-4xl tracking-tight leading-10 font-extrabold text-ocean sm:text-5xl sm:leading-none md:text-6xl">
        Thanks!
      </h1>
      <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl mb-15">
        We should get back to you withing 1-2 business days
      </p>
      <Link
        to="/"
        className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl mb-15"
      >
        Go back to the home screen?
      </Link>
    </div>
  </Layout>
);

export default ThankYouPage;
