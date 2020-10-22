import React from 'react';
import Layout from '../components/layout';
import ReactPlayer from 'react-player';
import { ContactForm } from '../components/contact-form';
import tw from 'twin.macro';
import cartPopUp from '../images/cart-photography/thrd_popup.jpg';
import lateArt2 from '../images/cart-photography/late-art2.jpg';
import coldbrew from '../images/cart-photography/coldbrew-can.jpg';
import kombucha from '../images/cart-photography/kombucha-closeup.jpg';
import cbd from '../images/cart-photography/vybes-closeup.jpg';

function IndexPage() {
  return (
    <>
      <Layout>
        <div className="lg:relative z-0">
          <div className="flex flex-col items-center justify-center h-auto w-auto">
            <div className="max-w-md mx-auto w-3/4 h-auto sm:h-64 mb-10">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=ZkHu2m0975U"
                playing={true}
                muted={true}
                loop={true}
                width="100%"
                height="100%"
              />
            </div>
            <div className="">
              <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">
                <span className="text-ocean">thrd.</span>
                <br className="" />
                Coffee Company
              </h2>
              <p className="mt-3 max-w-md mx-auto text-lg text-gray-600 sm:text-xl md:mt-5 md:max-w-3xl">
                is a mobile-espresso bar that will bring a forward-thinking café
                experience to your event. Three things happen when you invite
                us: we serve you and your friends, they drink and have a good
                time, and you enjoy the whole experience. With all this, we give
                back quarterly to a place, organization, community in high need.
              </p>
            </div>
          </div>
        </div>
        <div></div>
        <section
          id="bar-offerings"
          className="my-10 md:my-16 lg:my-24 text-center "
        >
          <HeadingPrimary>Bar Offerings</HeadingPrimary>
          <Copy>
            We keep it pretty simple. You get the full package for a standard
            price based off the # of people & for how long we are there for.
            Bring us to your event, and we will offer a killer coffee bar, with
            drinks that include:
          </Copy>
          <div className="flex justify-center sm:justify-between flex-wrap p-10">
            <div>
              <CirleImage src={lateArt2} alt="Latte, Cortado, Espresso" />
              <Copy>Espresso, Cortado, Latte</Copy>
            </div>
            <div>
              <CirleImage src={coldbrew} alt="Nitro Coffee" />
              <Copy>Nitro</Copy>
            </div>
            <div>
              <CirleImage src={kombucha} alt="Kombucha drink" />
              <Copy>Kombucha</Copy>
            </div>
            <div>
              <CirleImage src={cbd} alt="CBD" />
              <Copy>CBD based drinks</Copy>
            </div>
          </div>
        </section>
        <Section id="services">
          <HeadingPrimary>Services</HeadingPrimary>
          <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-screen-xl lg:px-8 mt-4">
            <div className="lg:grid lg:grid-cols-2">
              <div>
                <img
                  src={cartPopUp}
                  className="lg:w-2/4 mb-4 lg:mb-8"
                  alt="open bar program"
                />
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-ocean text-white">
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                      clipRule="evenodd"
                    />
                    <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
                  </svg>
                </div>
                <div className="mt-5">
                  <h5 className="text-lg leading-6 font-medium text-gray-900">
                    Open Bar Program
                  </h5>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    A service where we come to your event. We provide unlimited
                    non-alcoholic drinks to your guests
                  </p>
                </div>
              </div>
              <div className="mt-10 lg:mt-0">
                <img
                  src={cartPopUp}
                  className="lg:w-2/4 mb-4 lg:mb-8"
                  alt="Pop-up program"
                />
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-ocean text-white">
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="mt-5">
                  <h5 className="text-lg leading-6 font-medium text-gray-900">
                    Pop-Up Program
                  </h5>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    A retail service in which the host invited us to their
                    business, and we sell directly to the customer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Section>
        <Section id="book-event" className="py-10">
          <HeadingPrimary className="mb-10">Book an event</HeadingPrimary>
          <ContactForm />
        </Section>
      </Layout>
    </>
  );
}

const Copy = tw.p`
mt-3 max-w-md mx-auto text-lg text-gray-600 sm:text-xl md:mt-5 md:max-w-3xl
`;

const HeadingPrimary = tw.h2`
text-4xl leading-10 font-extrabold text-ocean xl:mb-10 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl uppercase text-center
`;

const CirleImage = tw.img`
inline-block h-48 w-48 rounded-full object-cover
`;

const Section = tw.section`
my-10 md:my-16 lg:my-24
`;

export default IndexPage;
