import React, { useState } from 'react';
import { navigate } from 'gatsby-link';

function ContactForm() {
  const [state, setState] = useState({});

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error));
  };

  return (
    <div className="max-w-xl mx-auto">
      <div className="text-center">
        <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          Contact sales
        </h2>
        <p className="mt-4 text-lg leading-6 text-gray-500">
          We are now accepting bookings! <br /> Fill out the form below to find
          out more.
        </p>
      </div>
      <div className="mt-12">
        <form
          name="contact-us"
          action="/thanks/"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
        >
          <input type="hidden" name="form-name" value="contact" />
          <label className="hidden">
            Don’t fill this out:{' '}
            <input name="bot-field" onChange={handleChange} />
          </label>
          <div>
            <label
              htmlFor="first_name"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              First name
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                id="first_name"
                className="form-input py-3 px-4 block w-full transition ease-in-out duration-150"
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Last name
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                id="last_name"
                className="form-input py-3 px-4 block w-full transition ease-in-out duration-150"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Company
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                id="company"
                className="form-input py-3 px-4 block w-full transition ease-in-out duration-150"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Email
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                id="email"
                type="email"
                className="form-input py-3 px-4 block w-full transition ease-in-out duration-150"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone_number"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Phone Number
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <select
                  aria-label="Country"
                  className="form-select h-full py-0 pl-4 pr-8 border-transparent bg-transparent text-gray-500 transition ease-in-out duration-150"
                >
                  <option>US</option>
                  <option>CA</option>
                  <option>EU</option>
                </select>
              </div>
              <input
                id="phone_number"
                className="form-input py-3 px-4 block w-full pl-20 transition ease-in-out duration-150"
                placeholder="+1 (555) 987-6543"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Message
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <textarea
                id="message"
                rows="4"
                className="form-textarea py-3 px-4 block w-full transition ease-in-out duration-150"
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <div className="sm:col-span-2">
            <span className="w-full inline-flex rounded-md shadow-sm">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
              >
                Let's talk
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export default ContactForm;
