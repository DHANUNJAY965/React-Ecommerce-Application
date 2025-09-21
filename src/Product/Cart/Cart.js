import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
const Cart = ({ setCartins }) => {
  const navigate = useNavigate();
  const[Total,setTotal]=useState(0)
  const [arr,setarr]=useState([])
  const carts = JSON.parse(localStorage.getItem("cart")) || [];
  useEffect(() =>{
    const total =carts.reduce((acc,item)=>{
      console.log("the item is : ",item);
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
 
  return (
    <>
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
          <button className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
