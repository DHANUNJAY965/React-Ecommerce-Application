import React from "react";

const Footer = () => {
  return (
    <footer className="text-brown-500 body-font ">
      <div className=" bg-gray-300">
        <div className="container px-5 py-8 flex flex-wrap mx-auto items-center">
          <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
            <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
              <h2
                for="footer-field"
                className="leading-7 text-lg text-black"
              >
                <label for="footer-field" class="leading-7 text-sm text-gray-600">Signup for</label> newsletter
                <input
                type="text"
                id="footer-field"
                name="footer-field"
                placeholder="Enter E-mail Address"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-purple-200 focus:border-purple-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              </h2>
              
            </div>
            <button className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded">
              SUBSCRIBE
            </button>
          </div>
          <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
            <a className="text-black">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-black">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-3 text-black">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a className="ml-3 text-black">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
      <div className="container px-5 py-14 mx-auto">
        <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4 justify-center">
          
          <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-m mb-3 uppercase underline">
              QuickShop
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">MEN</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Women</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Kids</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Electronics</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 underline">
              INFORMATION
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">About Us</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Privacy</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Terms & conditions</a>
              </li>
              
            </nav>
          </div>
          <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 underline">
             SERVICE
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">FAQ'S</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Orders and returns</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Refund policy</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Personal data</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/6 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 underline">
              CONTACT US
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-600 hover:text-gray-800">Phone: +1 986543210</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">24/7 assistance</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Email : xyzabcd@gmail.com </a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-gray-800">Adress : LONDON,Usa</a>
              </li>
            </nav>
          </div>
        </div>
      </div> 
    </footer>
  );
};

export default Footer;
