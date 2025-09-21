import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Cart = ({ setCartins }) => {
  const navigate = useNavigate();
  const[Total,setTotal]=useState(0)
  const [arr,setarr]=useState([])
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");
  const carts = JSON.parse(localStorage.getItem("cart")) || [];
  useEffect(() =>{
    const total =carts.reduce((acc,item)=>{
      // console.log("the item is : ",item);
      return acc + (item.price)
    },0)
    setTotal(total)
  },[Total])

  const removeprod=(_id)=>
  {
    
    const updatedcart = carts.filter(item=>item._id !== _id)
    localStorage.setItem('cart', JSON.stringify(updatedcart));
    navigate('/Cart');
    setCartins(carts.length-1)
    
    const deleteandupdate=carts.filter(item=>console.log("this is the price : ",arr.push(item.price)))
    
    setTotal(Total-arr[0])
  }

  const showToastMessage = (message, type = "success") => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const handleCheckout = async () => {
    // Check if user is logged in
    const token = localStorage.getItem("token");
    const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
    
    if (!token || !userInfo.username) {
      showToastMessage("Please login to place an order", "error");
      setTimeout(() => {
        navigate("/Login");
      }, 1500);
      return;
    }

    if (carts.length === 0) {
      showToastMessage("Your cart is empty", "error");
      return;
    }

    try {
      // Prepare order data
      const orderData = {
        products: carts.map(item => ({
          productId: item._id,
          title: item.title,
          price: item.price,
          quantity: 1
        })),
        totalAmount: Total,
        userInfo: {
          username: userInfo.username,
          email: userInfo.email
        }
      };

      // Send order to backend
      const response = await axios.post(
        "https://ecomm-react-server.vercel.app/api/v1/orders",
        orderData,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );

      if (response.data.success) {
        showToastMessage("Order placed successfully!", "success");
        // Clear cart
        localStorage.removeItem("cart");
        setCartins(0);
        setTotal(0);
        // Redirect to home after successful order
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        showToastMessage("Failed to place order. Please try again.", "error");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      showToastMessage("Failed to place order. Please try again.", "error");
    }
  };
 
  return (
    <>
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed inset-x-0 top-0 mx-auto mt-4 max-w-sm z-50 animate-in slide-in-from-top-full duration-300">
          <div className={`p-4 text-gray-500 bg-white rounded-lg shadow-lg dark:text-gray-400 dark:bg-gray-800 border-l-4 ${
            toastType === 'success' ? 'border-green-500' : 'border-red-500'
          }`}>
            <div className="flex items-center">
              <div className={`inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg ${
                toastType === 'success' ? 'bg-green-100 dark:bg-green-800' : 'bg-red-100 dark:bg-red-800'
              }`}>
                <div className={toastType === 'success' ? 'text-green-500 dark:text-green-200' : 'text-red-500 dark:text-red-200'}>
                  {toastType === 'success' ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414-1.414L10 12.586l1.707-1.293a1 1 0 0 1 1.414 1.414L11.414 14l1.293 1.707a1 1 0 0 1-1.414 1.414L10 15.414l-1.293 1.707a1 1 0 1 1-1.414-1.414L8.586 14l-1.293-1.707a1 1 0 0 1 1.414-1.414L10 12.586l1.707 1.293Z" />
                    </svg>
                  )}
                </div>
              </div>
              <div className="ml-3 text-sm font-medium flex-1">{toastMessage}</div>
              <button
                type="button"
                className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
                onClick={() => setShowToast(false)}
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
      )}

      <div className="max-w-md mx-auto mt-10 bg-white rounded-lg overflow-hidden md:max-w-lg border border-gray-400 mb-6">
        <div className="px-4 py-2 border-b border-gray-200">
          <h2 className="font-semibold text-gray-800">Shopping Cart</h2>
        </div>
        {!carts.length ? (
          <div className="my-24 ml-44 text-lg font-bold text-gray-800">CART IS EMPTY</div>
        ) : (
          carts.map((cart) => {
            console.log("the product is in teh cart: ",cart.ImageUrl);
            return (
              <>
                <div className="flex flex-col divide-y divide-gray-200">
                  <div className="flex items-center py-4 px-6">
                    <img
                      className="w-16 h-16  object-contain rounded"
                      src={cart.ImageUrl[cart.FuturingImage].url}
                      alt="Product Image"
                    />
                    <div className="ml-3">
                      <h3 className="text-gray-900 font-semibold">
                        {cart.title}
                      </h3>
                      <p className="text-gray-700 mt-1">₹ {cart.price}</p>
                    </div>
                    <button onClick={()=>removeprod(cart?._id)} className="ml-auto py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
                      Remove
                    </button>
                  </div>
                  <div className="flex items-center py-4 px-6"></div>
                </div>
              </>
            );
          })
        )}
        <div className="flex items-center justify-between px-6 py-3 bg-gray-100">
          
          <h3 className="text-gray-900 font-semibold">Total: ₹ {Total}</h3>
          <button 
            onClick={handleCheckout}
            className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
