import React, { useState, useCallback, useMemo } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
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
    return formData.email.length >= 2 && formData.password.length >= 2;
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

  // Enhanced login handler
  const handleLogin = useCallback(async () => {
    if (!isFormValid) {
      setFieldErrors({
        email: formData.email.length < 2 ? "Email is required" : null,
        password: formData.password.length < 2 ? "Password is required" : null
      });
      showToast("Please fill in all fields correctly", "error");
      return;
    }

    setLoading(true);
    setFieldErrors({});

    try {
      const response = await axios.post(
        "https://ecomm-react-server.vercel.app/api/v1/Admin/signin",
        {
          data: {
            Email: formData.email,
            password: formData.password
          }
        },
        {
          headers: { 'Content-Type': 'application/json' },
          timeout: 10000
        }
      );

      showToast(
        response.data.message || "Login successful!", 
        response.data.success ? "success" : "error"
      );

      if (response.data.success && response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userRole", response.data.user.role);
        localStorage.setItem("userInfo", JSON.stringify(response.data.user));
        // Route based on user role
        const redirectPath = response.data.user.role === 'admin' ? "/Adminpanel" : "/";
        setTimeout(() => navigate(redirectPath), 1500);
      }

    } catch (error) {
      console.error("Login error:", error);
      
      let errorMessage = "Something went wrong. Please try again.";
      
      if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      } else if (error.response?.status === 400) {
        errorMessage = "Invalid credentials. Please check your details.";
      } else if (error.response?.status >= 500) {
        errorMessage = "Server error. Please try again later.";
      } else if (error.code === 'ECONNABORTED') {
        errorMessage = "Request timeout. Please check your connection.";
      }
      
      showToast(errorMessage, "error");
    } finally {
      setLoading(false);
    }
  }, [formData, isFormValid, navigate, showToast]);

  // Handle Enter key press
  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Enter' && !loading && isFormValid) {
      handleLogin();
    }
  }, [handleLogin, loading, isFormValid]);

  const navigateToSignup = useCallback(() => {
    navigate("/Signup");
  }, [navigate]);

  // Loading component
  const LoadingSpinner = () => (
    <div className="flex justify-center items-center h-screen bg-gray-50 dark:bg-gray-900">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-indigo-200 border-solid rounded-full animate-spin"></div>
        <div className="w-16 h-16 border-t-4 border-indigo-600 border-solid rounded-full animate-spin absolute top-0 left-0"></div>
      </div>
      <span className="ml-4 text-lg font-medium text-gray-700 dark:text-gray-300">
        Signing you in...
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
        borderColor: "border-green-500",
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
        borderColor: "border-red-500",
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
        borderColor: "border-yellow-500",
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
        <div className={`p-4 text-gray-500 bg-white rounded-lg shadow-lg dark:text-gray-400 dark:bg-gray-800 border-l-4 ${config.borderColor}`}>
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
              <h2 className="text-3xl font-bold mb-2">Welcome Back!</h2>
              <p className="text-lg opacity-90">Sign in to access your admin dashboard</p>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="w-full px-8 py-12 lg:w-1/2 lg:px-12">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                Sign In
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Access your account
              </p>
            </div>

            <div className="space-y-6">
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
                    fieldErrors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : ''
                  }`}
                  placeholder="Enter your email"
                />
                {fieldErrors.email && (
                  <p className="text-red-500 text-sm mt-1">{fieldErrors.email}</p>
                )}
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200">
                    Password
                  </label>
                  <button 
                    type="button"
                    className="text-sm text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium transition-colors duration-200"
                  >
                    Forgot Password?
                  </button>
                </div>
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

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input 
                    type="checkbox" 
                    className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">Remember me</span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="button"
                onClick={handleLogin}
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
                    <span>Signing In...</span>
                  </div>
                ) : (
                  'Sign In'
                )}
              </button>
            </div>

            {/* Signup Link */}
            <div className="text-center mt-8">
              <button
                onClick={navigateToSignup}
                className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium transition-colors duration-200 hover:underline"
              >
                New User? Create Account
              </button>
            </div>

            {/* Divider */}
            <div className="relative mt-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                  Secure Admin Access
                </span>
              </div>
            </div>

            {/* Security Notice */}
            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                🔒 Your login is secured with industry-standard encryption
              </p>
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

export default Login;