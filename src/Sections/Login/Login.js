import React from 'react'

const Login = ({onclickme}) => {
  return (
    <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl mt-44">
    <div className="hidden  lg:block lg:w-1/2 bg-contain" style={{ backgroundImage: 'url("https://i.postimg.cc/BZRNJ5tQ/Pngtree-shopping-on-mobile-5354478.png")' }}></div>

    <div className="w-full px-6 py-8 md:px-8 lg:w-1/2"> 
       

        <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
           REACT STORE
        </p>

        

        <div className="flex items-center justify-between mt-4">
            
        </div>

        <div className="mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="LoggingEmailAddress">Email Address</label>
            <input id="LoggingEmailAddress" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="email" />
        </div>

        <div className="mt-4">
            <div className="flex justify-between">
                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="loggingPassword">Password</label>
                
            </div>

            <input id="loggingPassword" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="password" />
        </div>

        <div onClick={onclickme} className="mt-6">
            <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                Sign In / Sing Up
            </button>
        </div>

        <div className="flex items-center justify-between mt-4">
            
        </div>
    </div>
</div>
  )
}

export default Login
