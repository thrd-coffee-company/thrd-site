import React, { useState } from 'react';
import { navigate } from 'gatsby-link';
import sweater from '../../images/merch-items/sweaters-front.jpg';
import tw from 'twin.macro';
function MerchForm() {
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
          Place Order Here
        </h2>
      </div>
      <div className="mt-12">
        <form
          name="Order-Merch"
          action="/thanks/"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
        >
          <input type="hidden" name="form-name" value="merch" />
          <label className="hidden">
            Don’t fill this out:{' '}
            <input name="bot-field" onChange={handleChange} />
          </label>
          <div>
            <label
              htmlFor="first_name"
              className="block text-sm front-medium leading-5 text-gray-700"
            >
              First Name
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                id="first_name"
                required=""
                name="first_name"
                className="form-input py-3 px-4 block w-full transition ease-in-out duration-150"
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="block text-sm front-medium leading-5 text-gray-700"
            >
              Last Name
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                id="last_name"
                required=""
                name="last_name"
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
                  name="country code"
                  required=""
                  aria-label="Country"
                  className="form-select h-full py-0 pl-4 pr-8 border-transparent bg-transparent text-gray-500 transition ease-in-out duration-150"
                >
                  <option name="US">US</option>
                  <option name="CA">CA</option>
                  <option name="EU">EU</option>
                </select>
              </div>
              <input
                id="phone_number"
                name="phone_number"
                className="form-input py-3 px-4 block w-full pl-20 transition ease-in-out duration-150"
                placeholder="+1 (555) 987-6543"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-5 text-gray-700 "
            >
              Email
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                id="email"
                type="email"
                required=""
                name="email"
                className="form-input py-3 px-4 block w-full transition ease-in-out duration-150"
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="address"
              className="block text-sm font-medium leading-5 text-gray-700 "
            >
              Address
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <input
                id="address"
                required=""
                type="address"
                name="address"
                className="form-input py-3 px-4 block w-full transition ease-in-out duration-150"
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <div className=" sm:col-span-2 flex space-x-4">
            <div className="flex-1 ">
              <label
                htmlFor="select_merch"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Select Merch
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="inset-y-0 left-0 flex items-center">
                  <select
                    name="which merch"
                    aria-label="Select-Merch"
                    className="form-select h-full py-3 px-4 w-full block border-transparent bg-white text-gray-500 transition ease-in-out duration-150"
                    onChange={handleChange}
                  >
                    <option value="Sweater" name="Sweater">
                      Sweater
                    </option>
                    <option value="Shirt" name="Shirt">
                      Shirt
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex-1 ">
              <label
                htmlFor="select_size"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Size
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="inset-y-0 left-0 flex items-center">
                  <select
                    name="which size"
                    aria-label="Select-Size"
                    className="form-select h-full py-3 px-4 w-full block border-transparent bg-white text-gray-500 transition ease-in-out duration-150"
                    onChange={handleChange}
                  >
                    <option value="Small" name="Small">
                      Small
                    </option>
                    <option value="Medium" name="Medium">
                      Medium
                    </option>
                    <option value="Large" name="Large">
                      Large
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <label
                htmlFor="select_amount"
                className="block text-sm font-medium leading-5 text-gray-700"
              >
                Amount
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="inset-y-0 left-0 flex items-center">
                  <select
                    name="which amount"
                    aria-label="Select-amount"
                    className="form-select h-full py-3 px-4 w-full block border-transparent bg-white text-gray-500 transition ease-in-out duration-150"
                    onChange={handleChange}
                  >
                    <option value="1" name="1">
                      1
                    </option>
                    <option value="2" name="2">
                      2
                    </option>
                    <option value="3" name="3">
                      3
                    </option>
                    <option value="4" name="4">
                      4
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:col-span-2">
            <span className="w-full inline-flex rounded-md shadow-sm">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
              >
                Place Order
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

const CirleImage = tw.img`
inline-block h-24 w-24 rounded-full object-cover
`;

export default MerchForm;
