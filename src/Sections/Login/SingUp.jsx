// import React from 'react'
// import { useState } from 'react';
// import { useNavigate } from "react-router-dom";
// import axios from 'axios';

// const Signup = () => {
//     const navi=useNavigate()
//    const [Email,setEmail]=useState("");
//    const [password,setPassword]=useState("");
//    const [username,setUsername]=useState("");
//    const [showToast, setShowToast] = useState(false);
//    const [Toast, setToastMessage] = useState("");
//    const [Loading,setLoading]=useState(false);
//    const handlesignup = async () => {
//     try {
//       if(Email.length<2 || password.length<2 || username.length<2)
//         {
//           setToastMessage("Please Enter All the details");
//             setShowToast(true);
//             setTimeout(() => {
//               setShowToast(false);
//             }, 3000);
//             setLoading(false);
//             return;
//         }
//       const response = await axios.post(
//         "https://ecomm-react-server.vercel.app/api/v1/Admin/signup",
//         {
//           Email,
//           username,
//           password
//         },
//         {
//           headers: {
//             'Content-Type': 'application/json'
//           }
//         }
//       );
//       console.log("Response: ", response.data);
//       if(response.data.message)
//       {
//         setToastMessage(response.data.message);
//         setShowToast(true);
//         setLoading(false);
//         if (response.data.success) {
//           localStorage.setItem("token", response.data.token);
//           navi("/Adminpanel");
//         }
//         return;
//       }
//       else
//       {
//         setToastMessage("Enter details correctly");
//         setShowToast(true);
//         setTimeout(() => {
//           setShowToast(false);
//         }, 2500);
//         setLoading(false);
//         return;
//       }
     
//     } catch (error) {
//       console.error("Error:", error);
//       setToastMessage("Enter the details correctly ");
//       setShowToast(true);
//       setLoading(false);
//       setTimeout(() => {
//         setShowToast(false);
//       }, 2500);
//       return;
//     }
//   };
  
//   return (
//     <>
//     {
//       Loading ? (<div> <div className="flex justify-center items-center h-screen">
//         <div className="w-16 h-16 border-t-4 border-indigo-500 border-solid rounded-full animate-spin"></div>
//       </div></div>):(<div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl mt-44">
//     <div className="hidden  lg:block lg:w-1/2 bg-contain" style={{ backgroundImage: 'url("https://i.postimg.cc/BZRNJ5tQ/Pngtree-shopping-on-mobile-5354478.png")' }}></div>

//     <div className="w-full px-6 py-8 md:px-8 lg:w-1/2"> 
       

//         <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
//          ADMIN REACT STORE
//         </p>

//         <div className="mt-4">
//             <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="LoggingEmailAddress">UserName</label>
//             <input id="LoggingEmailAddress" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="email" onChange={(e)=>{
//                 setUsername(e.target.value);
//             }} />
//         </div>
//         <div className="mt-4">
//             <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="LoggingEmailAddress">Email Address</label>
//             <input id="LoggingEmailAddress" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="email" onChange={(e)=>{
//                 setEmail(e.target.value);
//             }} />
//         </div>

//         <div className="mt-4">
//             <div className="flex justify-between">
//                 <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" for="loggingPassword">Password</label>
//             </div>

//             <input id="loggingPassword" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="password" onChange={(e)=>{
//                 setPassword(e.target.value);
//             }}/>
//         </div>

//         <div  className="mt-6">
//             <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50" onClick={()=>{
//               setLoading(true);
//               handlesignup()}
//               }>
//                 Signup
//             </button>
//         </div>
//         <div className='flex justify-center text-white underline' onClick={()=>{
//             navi("/AdminLogin");
//         }}>Registred User ? Signin</div>
//         <div className="flex items-center justify-between mt-4">
            
//         </div>
//     </div>
// </div>)
//     }
    
// {showToast && 
//         <div
//           id="toast-success"
//           className="fixed inset-x-0 top-0 mx-auto mt-4 max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
//           role="alert"
//         >
//           <div className="flex items-center">
//             <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
//               <svg
//                 className="w-5 h-5"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//               >
//                 <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
//               </svg>
//               <span className="sr-only">Check icon</span>
//             </div>
//             <div className="ms-3 text-sm font-normal">{Toast}</div>
//             <button
//               type="button"
//               className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
//               data-dismiss-target="#toast-success"
//               aria-label="Close"
//               onClick={() => {
//                 setShowToast(false);
//               }}
//             >
//               <span className="sr-only">Close</span>
//               <svg
//                 className="w-3 h-3"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 14 14"
//               >
//                 <path
//                   stroke="currentColor"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   stroke-width="2"
//                   d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>}
//     </>
//   )
// }

// export default Signup;
import React, { useState, useCallback, useMemo } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: ""
  });
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success" // success, error, warning
  });
  const [loading, setLoading] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});

  // Memoized validation
  const isFormValid = useMemo(() => {
    return formData.email.length >= 2 && 
           formData.password.length >= 2 && 
           formData.username.length >= 2;
  }, [formData]);

  // Optimized input handler
  const handleInputChange = useCallback((field) => (e) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear field error when user starts typing
    if (fieldErrors[field]) {
      setFieldErrors(prev => ({ ...prev, [field]: null }));
    }
  }, [fieldErrors]);

  // Enhanced toast function
  const showToast = useCallback((message, type = "success", duration = 3000) => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast(prev => ({ ...prev, show: false }));
    }, duration);
  }, []);

  // Enhanced signup handler
  const handleSignup = useCallback(async () => {
    if (!isFormValid) {
      setFieldErrors({
        email: formData.email.length < 2 ? "Email is required" : null,
        username: formData.username.length < 2 ? "Username is required" : null,
        password: formData.password.length < 2 ? "Password is required" : null
      });
      showToast("Please fill in all fields correctly", "error");
      return;
    }

    setLoading(true);
    setFieldErrors({});

    try {
      const response = await axios.post(
        "https://ecomm-react-server.vercel.app/api/v1/Admin/signup",
        {
          Email: formData.email,
          username: formData.username,
          password: formData.password
        },
        {
          headers: { 'Content-Type': 'application/json' },
          timeout: 10000
        }
      );

      if (response.data.success) {
        showToast(response.data.message || "Registration successful!", "success");
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          setTimeout(() => navigate("/Adminpanel"), 1500);
        }
      } else {
        showToast(response.data.message || "Registration failed", "error");
      }
    } catch (error) {
      console.error("Signup error:", error);
      
      let errorMessage = "Something went wrong. Please try again.";
      
      if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      } else if (error.response?.status === 400) {
        errorMessage = "Invalid input data. Please check your details.";
      } else if (error.response?.status >= 500) {
        errorMessage = "Server error. Please try again later.";
      } else if (error.code === 'ECONNABORTED') {
        errorMessage = "Request timeout. Please check your connection.";
      }
      
      showToast(errorMessage, "error");
      
      if (error.response?.data?.errors) {
        const backendErrors = {};
        error.response.data.errors.forEach(err => {
          if (err.path[0]) {
            backendErrors[err.path[0]] = err.message;
          }
        });
        setFieldErrors(backendErrors);
      }
    } finally {
      setLoading(false);
    }
  }, [formData, isFormValid, navigate, showToast]);

  // Handle Enter key press
  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Enter' && !loading && isFormValid) {
      handleSignup();
    }
  }, [handleSignup, loading, isFormValid]);

  const navigateToLogin = useCallback(() => {
    navigate("/AdminLogin"); // Make sure this matches your routing setup
  }, [navigate]);

  // Loading component
  const LoadingSpinner = () => (
    <div className="flex justify-center items-center h-screen bg-gray-50 dark:bg-gray-900">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-indigo-200 border-solid rounded-full animate-spin"></div>
        <div className="w-16 h-16 border-t-4 border-indigo-600 border-solid rounded-full animate-spin absolute top-0 left-0"></div>
      </div>
      <span className="ml-4 text-lg font-medium text-gray-700 dark:text-gray-300">
        Creating your account...
      </span>
    </div>
  );

  // Toast component with different types
  const Toast = ({ show, message, type, onClose }) => {
    if (!show) return null;

    const typeConfig = {
      success: {
        bgColor: "bg-green-100 dark:bg-green-800",
        textColor: "text-green-500 dark:text-green-200",
        iconColor: "text-green-500 dark:text-green-200",
        icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
        )
      },
      error: {
        bgColor: "bg-red-100 dark:bg-red-800",
        textColor: "text-red-500 dark:text-red-200",
        iconColor: "text-red-500 dark:text-red-200",
        icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414-1.414L10 12.586l1.707-1.293a1 1 0 0 1 1.414 1.414L11.414 14l1.293 1.707a1 1 0 0 1-1.414 1.414L10 15.414l-1.293 1.707a1 1 0 1 1-1.414-1.414L8.586 14l-1.293-1.707a1 1 0 0 1 1.414-1.414L10 12.586l1.707 1.293Z" />
          </svg>
        )
      },
      warning: {
        bgColor: "bg-yellow-100 dark:bg-yellow-800",
        textColor: "text-yellow-500 dark:text-yellow-200",
        iconColor: "text-yellow-500 dark:text-yellow-200",
        icon: (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" />
          </svg>
        )
      }
    };

    const config = typeConfig[type] || typeConfig.success;

    return (
      <div className="fixed inset-x-0 top-0 mx-auto mt-4 max-w-sm z-50 animate-in slide-in-from-top-full duration-300">
        <div className={`p-4 text-gray-500 bg-white rounded-lg shadow-lg dark:text-gray-400 dark:bg-gray-800 border-l-4 ${type === 'success' ? 'border-green-500' : type === 'error' ? 'border-red-500' : 'border-yellow-500'}`}>
          <div className="flex items-center">
            <div className={`inline-flex items-center justify-center flex-shrink-0 w-8 h-8 ${config.bgColor} rounded-lg`}>
              <div className={config.iconColor}>
                {config.icon}
              </div>
            </div>
            <div className="ml-3 text-sm font-medium flex-1">{message}</div>
            <button
              type="button"
              className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
              onClick={onClose}
              aria-label="Close"
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 14 14">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
        <div className="flex w-full max-w-4xl bg-white rounded-2xl shadow-xl dark:bg-gray-800 overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
          {/* Left side - Image */}
          <div 
            className="hidden lg:block lg:w-1/2 bg-gradient-to-br from-indigo-500 to-purple-600 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat opacity-80"
              style={{ 
                backgroundImage: 'url("https://i.postimg.cc/BZRNJ5tQ/Pngtree-shopping-on-mobile-5354478.png")',
                backgroundBlendMode: 'overlay'
              }}
            />
            <div className="absolute bottom-8 left-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Welcome to Admin Store</h2>
              <p className="text-lg opacity-90">Manage your e-commerce platform with ease</p>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="w-full px-8 py-12 lg:w-1/2 lg:px-12">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                Create Admin Account
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Join our admin panel to manage your store
              </p>
            </div>

            <div onSubmit={(e) => e.preventDefault()} className="space-y-6">
              {/* Username Field */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
                  Username
                </label>
                <input
                  type="text"
                  value={formData.username}
                  onChange={handleInputChange('username')}
                  onKeyPress={handleKeyPress}
                  className={`w-full px-4 py-3 text-gray-700 bg-gray-50 border-2 rounded-xl dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 focus:outline-none transition-all duration-200 ${
                    fieldErrors.username ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : ''
                  }`}
                  placeholder="Enter your username"
                />
                {fieldErrors.username && (
                  <p className="text-red-500 text-sm mt-1">{fieldErrors.username}</p>
                )}
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange('email')}
                  onKeyPress={handleKeyPress}
                  className={`w-full px-4 py-3 text-gray-700 bg-gray-50 border-2 rounded-xl dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 focus:outline-none transition-all duration-200 ${
                    fieldErrors.email || fieldErrors.Email ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : ''
                  }`}
                  placeholder="Enter your email"
                />
                {(fieldErrors.email || fieldErrors.Email) && (
                  <p className="text-red-500 text-sm mt-1">{fieldErrors.email || fieldErrors.Email}</p>
                )}
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
                  Password
                </label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange('password')}
                  onKeyPress={handleKeyPress}
                  className={`w-full px-4 py-3 text-gray-700 bg-gray-50 border-2 rounded-xl dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200 focus:outline-none transition-all duration-200 ${
                    fieldErrors.password ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : ''
                  }`}
                  placeholder="Enter your password"
                />
                {fieldErrors.password && (
                  <p className="text-red-500 text-sm mt-1">{fieldErrors.password}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="button"
                onClick={handleSignup}
                disabled={!isFormValid || loading}
                className={`w-full py-4 text-white font-semibold rounded-xl transition-all duration-200 transform ${
                  isFormValid && !loading
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 hover:scale-105 shadow-lg hover:shadow-xl'
                    : 'bg-gray-400 cursor-not-allowed'
                } focus:outline-none focus:ring-4 focus:ring-indigo-200`}
              >
                {loading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Creating Account...</span>
                  </div>
                ) : (
                  'Create Account'
                )}
              </button>
            </div>

            {/* Login Link */}
            <div className="text-center mt-8">
              <button
                onClick={navigateToLogin}
                className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium transition-colors duration-200 hover:underline"
              >
                Already have an account? Sign in
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      <Toast 
        show={toast.show} 
        message={toast.message} 
        type={toast.type}
        onClose={() => setToast(prev => ({ ...prev, show: false }))} 
      />
    </>
  );
};

export default Signup;