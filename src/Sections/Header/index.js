import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Header = ({ updatecart, serachhere, setserachhere }) => {
  const navi = useNavigate();
  const [userInfo, setUserInfo] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("userInfo") || "null");
    
    if (token && user) {
      setIsLoggedIn(true);
      setUserInfo(user);
    } else {
      setIsLoggedIn(false);
      setUserInfo(null);
    }
  }, []);

  const handleclickhere = (e) => {
    setserachhere(e.target.value);
    // console.log("here the searched word : ", serachhere);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    localStorage.removeItem("userInfo");
    setIsLoggedIn(false);
    setUserInfo(null);
    navi("/");
  };
  return (
    <header className="text-gray-600 body-font shadow-lg ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-x flex">
            Ecomm
            <a href="#/">
              <h2 className="font-bold pl-1 text-lg text-red-600"> Trendify</h2>
            </a>
          </span>
        </a>
        <div className="mt-2 md:ml-auto md:mr-auto">
          <div className="relative flex w-full flex-wrap items-stretch">
            <input
              type="search"
              value={serachhere}
              onChange={handleclickhere}
              className="relative block min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding pl-1 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              placeholder="Search here..."
              aria-label="Search"
              aria-describedby="button-addon2"
            />
          </div>
        </div>
        <div className="flex justify-between items-center ">
  <Link to="/" className="mx-8">
    Home
  </Link>
  {isLoggedIn ? (
    <div className="flex items-center mx-8 space-x-4">
      <div className="flex items-center">
        <svg
          className="inline mr-2"
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 448 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
        </svg>
        <div>
          <div className="text-sm font-medium text-gray-900">{userInfo?.username}</div>
          <div className="text-xs text-gray-500 capitalize">{userInfo?.role}</div>
        </div>
      </div>
      <button
        onClick={handleLogout}
        className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
      >
        Logout
      </button>
    </div>
  ) : (
    <div
      onClick={() => {
        navi("/Login");
      }}
      className="user cursor-pointer flex items-center mx-8"
    >
      <svg
        className="inline"
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 448 512"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
      </svg>
      <div className="ml-2">
        <div>Login</div>
      </div>
    </div>
  )}
  <div className=" mx-8">
  <li className="font-sans list-none lg:ml-6 text-black hover:text-gray-700">
    <Link to={"/Cart"} role="button" className="relative flex items-center">
      <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
        <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
      </svg>
      <span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 p-0 m-0 text-white font-mono text-sm leading-tight text-center">
        {updatecart}
      </span>
    </Link>
  </li>
  </div>
</div>

      </div>
    </header>
  );
};

export default Header;
