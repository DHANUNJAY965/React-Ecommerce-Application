import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Singprod = ({ cartin, setCartin }) => {
    const[product,setProduct] =useState({})

    const {_id}=useParams()
    console.log("product id is : ", _id)
    useEffect(() => 
        {
            const fetchproduct = async () =>
            {   
                const response = await fetch(`https://ecomm-react-server.vercel.app/api/v1/products/${_id}`)
                const data = await response.json()
                console.log("the data is : ",data)
                setProduct(data.product)
              
            }
            fetchproduct()
            // check here
        },[_id])
  
        const handleclick=(product)=>{
          console.log(product)
          const cart =JSON.parse(localStorage.getItem('cart')) || []
          const isproduct = cart.find(item=>item._id===product._id)
          if(isproduct){
            const updatedcart=cart.map(item =>{
              if(item._id===product._id){
                return{
                  ...item,
                  quantity: item.quantity+1
                }
              }
              return item
            });
            localStorage.setItem('cart', JSON.stringify(updatedcart))
          }
          else{
            localStorage.setItem('cart', JSON.stringify([...cart,{...product,quantity:1}]))
          }
          alert("Hey product added to cart")
          console.log("length : ",cart.length)
          setCartin(cart.length+1)

          console.log("this is actual length : " +cartin)
        }
       

        useEffect(() => {
          console.log("Updated length after state update: " + cartin);
        }, [cartin,setCartin]);
   



        
        
      
  return (
    
    <section className="text-gray-600 body-font overflow-hidden">
        <Link to="/" 
        type="Button"
         className=" text-white m-10 bg-indigo-500 border-10 py-2 px-4 focus:outline-none hover:bg-gray-600 rounded">Back</Link>
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt={product.title}
            className="lg:w-1/2 w-full lg:h-auto max-h-[550px] h-64 object-contain border  object-center rounded"
            src={product.ImageUrl}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">
              {product.category}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product.title}
            </h1>
            
            <p className="leading-relaxed">
              {product.description}
            </p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              
              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                    <option>S</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-6 lg:flex-row lg:items-center lg:justify-between">
              <span className="title-font font-medium text-2xl text-gray-900 mb-2 lg:mb-0">
              ₹ {product.price}
              </span>
              <button onClick={()=> handleclick(product)}  className="flex-shrink-0 lg:ml-4 text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-gray-600 rounded mt-4 lg:mt-0 max-w-[8rem] w-full">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Singprod;
