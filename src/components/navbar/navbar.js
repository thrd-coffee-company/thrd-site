import React, { useState } from 'react';
import Transition from '../transition';
import { useStaticQuery, graphql } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';
import tw from 'twin.macro';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import { navigate } from '@reach/router';

export default function Navbar({ data, notHomeRoute }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleNavItemClick(sectionId) {
    if (notHomeRoute) {
      navigate(`/${sectionId}`);
      return;
    }
    scrollTo(sectionId);
  }

  return (
    <div className="relative">
      <div className="relative pt-0 md:pt-6 pb-12 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          <nav className="relative flex items-center justify-between sm:h-10 md:justify-center">
            <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <a href="/" aria-label="Home">
                  <ThrdBrandImg
                    className="w-24 h-auto sm:w-20 md:mr-4 lg:m-0"
                    alt="Logo"
                  />
                </a>
                <div className="-mr-2 flex items-center md:hidden">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                    id="main-menu"
                    aria-label="Main menu"
                    aria-haspopup="true"
                    onClick={handleMenuClick}
                  >
                    <svg
                      className="h-6 w-6"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden md:flex md:space-x-10">
              {/* TODO: too much repitition here */}
              <NavItem onClick={() => handleNavItemClick('#bar-offerings')}>
                Bar Offerings
              </NavItem>
              <NavItem onClick={() => handleNavItemClick('#services')}>
                Services
              </NavItem>
              <NavItem onClick={() => handleNavItemClick('#book-event')}>
                Book Event
              </NavItem>
              <Link
                to="/merch"
                className="focus:outline-none uppercase font-medium text-ocean hover:text-oceanDark transition duration-150 ease-in-out"
              >
                Order Merch
              </Link>
              {/* <NavItem href="#about-us" onClick={() => scrollTo('#about-us')}>
                About Us
              </NavItem> */}
            </div>
          </nav>
        </div>

        {/* Mobile menu, show/hide based on menu open state.

      Entering: "duration-150 ease-out"
        From: "opacity-0 scale-95"
        To: "opacity-100 scale-100"
      Leaving: "duration-100 ease-in"
        From: "opacity-100 scale-100"
        To: "opacity-0 scale-95" */}
        <Transition
          show={isOpen}
          enterFrom="duration-150 ease-out"
          enterTo="opacity-100 scale-100"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-40">
            <div className="rounded-lg shadow-md">
              <div
                className="rounded-lg bg-white shadow-xs"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="main-menu"
              >
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <ThrdBrandImg
                      className="w-24 h-auto sm:w-20 md:mr-4 lg:m-0"
                      alt="Third Logo"
                    />
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                      aria-label="Close menu"
                      onClick={handleMenuClick}
                    >
                      <svg
                        className="h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3">
                  <MobileNavItem
                    role="menuitem"
                    onClick={() => handleNavItemClick('#bar-offerings')}
                  >
                    Bar Offerings
                  </MobileNavItem>
                  <MobileNavItem
                    role="menuitem"
                    onClick={() => handleNavItemClick('#services')}
                  >
                    Services
                  </MobileNavItem>
                  <MobileNavItem
                    role="menuitem"
                    onClick={() => handleNavItemClick('#book-event')}
                  >
                    Book Event
                  </MobileNavItem>
                  <Link
                    to="/merch"
                    className="uppercase block px-3 py-2 rounded-md text-base font-medium text-ocean hover:text-oceanDark hover:bg-gray-50 focus:outline-none focus:text-oceanDark focus:bg-gray-50 transition duration-150 ease-in-out"
                  >
                    Order Merch
                  </Link>
                  {/* <MobileNavItem
                    role="menuitem"
                    onClick={() => scrollTo('#about-us')}
                  >
                    About Us
                  </MobileNavItem> */}
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  );

  function handleMenuClick() {
    setIsOpen(!isOpen);
  }
}

function ThrdBrandImg({ className, ...props }) {
  const data = useStaticQuery(graphql`
    query {
      thrdLogo: file(relativePath: { eq: "thrd_logo_favicon.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Img
      className={className}
      fluid={data.thrdLogo.childImageSharp.fluid}
      {...props}
    />
  );
}

const NavItem = tw.button`
focus:outline-none uppercase font-medium text-ocean hover:text-oceanDark transition duration-150 ease-in-out
`;

const MobileNavItem = tw.button`
uppercase block px-3 py-2 rounded-md text-base font-medium text-ocean hover:text-oceanDark hover:bg-gray-50 focus:outline-none focus:text-oceanDark focus:bg-gray-50 transition duration-150 ease-in-out
`;
