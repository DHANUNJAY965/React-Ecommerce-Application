import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Signup = () => {
    const navi=useNavigate()
   const [Email,setEmail]=useState("");
   const [password,setPassword]=useState("");
   const [username,setUsername]=useState("");
   const [showToast, setShowToast] = useState(false);
   const [Toast, setToastMessage] = useState("");
   const [Loading,setLoading]=useState(false);
   const handlesignup = async () => {
    try {
      if(Email.length<2 || password.length<2 || username.length<2)
        {
          setToastMessage("Please Enter All the details");
            setShowToast(true);
            setTimeout(() => {
              setShowToast(false);
            }, 3000);
            setLoading(false);
            return;
        }
      const response = await axios.post(
        "https://ecomm-react-server.vercel.app/api/v1/Admin/signup",
        {
          Email,
          username,
          password
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      console.log("Response: ", response.data);
      if(response.data.message)
      {
        setToastMessage(response.data.message);
        setShowToast(true);
        setLoading(false);
        if (response.data.success) {
          localStorage.setItem("token", response.data.token);
          navi("/Adminpanel");
        }
        return;
      }
      else
      {
        setToastMessage("Enter details correctly");
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
        }, 2500);
        setLoading(false);
        return;
      }
     
    } catch (error) {
      console.error("Error:", error);
      setToastMessage("Enter the details correctly ");
      setShowToast(true);
      setLoading(false);
      setTimeout(() => {
        setShowToast(false);
      }, 2500);
      return;
    }
  };
  
  return (
    <>
    {
      Loading ? (<div> <div className="flex justify-center items-center h-screen">
        <div className="w-16 h-16 border-t-4 border-indigo-500 border-solid rounded-full animate-spin"></div>
      </div></div>):(<div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl mt-44">
    <div className="hidden  lg:block lg:w-1/2 bg-contain" style={{ backgroundImage: 'url("https://i.postimg.cc/BZRNJ5tQ/Pngtree-shopping-on-mobile-5354478.png")' }}></div>

    <div className="w-full px-6 py-8 md:px-8 lg:w-1/2"> 
       

        <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
         ADMIN REACT STORE
        </p>

        <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="LoggingEmailAddress">UserName</label>
            <input id="LoggingEmailAddress" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="email" onChange={(e)=>{
                setUsername(e.target.value);
            }} />
        </div>
        <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="LoggingEmailAddress">Email Address</label>
            <input id="LoggingEmailAddress" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="email" onChange={(e)=>{
                setEmail(e.target.value);
            }} />
        </div>

        <div className="mt-4">
            <div className="flex justify-between">
                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="loggingPassword">Password</label>
            </div>

            <input id="loggingPassword" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="password" onChange={(e)=>{
                setPassword(e.target.value);
            }}/>
        </div>

        <div  className="mt-6">
            <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50" onClick={()=>{
              setLoading(true);
              handlesignup()}
              }>
                Signup
            </button>
        </div>
        <div className='flex justify-center text-white underline' onClick={()=>{
            navi("/AdminLogin");
        }}>Registred User ? Signin</div>
        <div className="flex items-center justify-between mt-4">
            
        </div>
    </div>
</div>)
    }
    
{showToast && 
        <div
          id="toast-success"
          className="fixed inset-x-0 top-0 mx-auto mt-4 max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
          role="alert"
        >
          <div className="flex items-center">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="sr-only">Check icon</span>
            </div>
            <div className="ms-3 text-sm font-normal">{Toast}</div>
            <button
              type="button"
              className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
              data-dismiss-target="#toast-success"
              aria-label="Close"
              onClick={() => {
                setShowToast(false);
              }}
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
        </div>}
    </>
  )
}

export default Signup;
