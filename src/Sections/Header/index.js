import React, { useEffect, useState } from "react";
import { Link ,} from "react-router-dom";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
const Header = ({updatecart,serachhere,setserachhere}) => {
  const navi=useNavigate()
=======

const Header = ({onLoginClick,updatecart,serachhere,setserachhere}) => {

>>>>>>> 97e08fc3832e3392e5f62641c83d58aee48b93ff
 const handleclickhere=(e)=>
 {
  setserachhere(e.target.value)
  console.log("here the searched word : ",serachhere)
 }
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
    <div className="userandcart grid grid-cols-3 items-center">
    <Link to="/" className="mr-4">Home</Link>
<<<<<<< HEAD
      <div onClick={()=>
        {
            navi("/AdminLogin");
        }} className="user cursor-pointer">
=======
      <div onClick={onLoginClick} className="user cursor-pointer">
>>>>>>> 97e08fc3832e3392e5f62641c83d58aee48b93ff
        
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
          </svg>{" "}
          Login
        
      </div>
      <li className="font-sans block mt-4 pt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-700">
        <Link to={"/Cart"} role="button" className="relative flex mb-3">
          <svg className="flex-1 w-8 h-8 fill-current" viewBox="0 0 24 24">
            <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
          </svg>
          <span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm leading-tight text-center">
            {updatecart}
          </span>
        </Link>
      </li>
    </div>
  </div>
</header>

  );
};

export default Header;
