import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Singprod = ({ cartin, setCartin }) => {
    // single product details it  will give the details of single product in object type
    const[product,setProduct] =useState({})
    // we arae using the paramters that we passed through the path in url
    const {id}=useParams()
    console.log("product id is : ", id)
    useEffect(() => 
        {
            const fetchproduct = async () =>
            {   
              if(id<=20)
              {

                const response = await fetch(`https://fakestoreapi.com/products/${id}`)
                const data = await response.json()
                console.log(data)
                setProduct(data)
              }
            }
            fetchproduct()
            // check here
        },[id])
  
        const handleclick=(product)=>{
          console.log(product)
          const cart =JSON.parse(localStorage.getItem('cart')) || []
          const isproduct = cart.find(item=>item.id===product.id)
          if(isproduct){
            const updatedcart=cart.map(item =>{
              if(item.id===product.id){
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
   



        if(id > 20  || id<0) return  <div className='text-lg text-center font-extrabold'>Sorry Product Not Available</div>
        if(id<0) return  <div className='text-lg text-center font-extrabold'>Loading...</div>
        
        
        if(product.id===2)
        {
            product.image="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1671671477-alex-mill-recycled-denim-shirt-1671671471.jpg?crop=1xw:1xh;center,top&resize=980:*" ;
            product.title="Abercrombie Relaxed Denim Shirt Jacket"
            product.price=890;
        }
        else if(product.id===1)
        {
           product.image="https://m.media-amazon.com/images/I/719TSzzCz2L._AC_UL480_FMwebp_QL65_.jpg";
           product.title=" Skybags Unisex Flex 22L Backpack Cabret"
           product.price=1100;
        }
        else if(product.id===3)
        {
           product.image="https://m.media-amazon.com/images/I/61BlOi2jvaL.SS700.jpg";
           product.title="Men's Hooded Winter Vest Jacket Sleeveless Quilted Puffer"
           product.price=1400;
        }
        else if(product.id===4)
        {
           product.image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfyynyj6HlLqGyIMMJedM-fbg2kHcdWK1Nvg&usqp=CAU";
           product.title="GLAMIRA Ring Karpathos"
           product.price=8000;
        }
        else if(product.id===5)
        {
           product.image="https://cdn-media.glamira.com/media/product/newgeneration/view/1/sku/Karpathosv1/diamond/diamond-Brillant_AA/stone2/diamond-Brillant_AAA/alloycolour/yellow_white.jpg";
           product.title="Cotton Men Plain Tshirts Without Print, Polo Neck"
           product.price=8000;
        }
        else if(product.id===6)
        {
           product.image="https://rukminim2.flixcart.com/image/832/832/xif0q/bangle-bracelet-armlet/f/u/u/2-6-2-6-na-p9002-panjarat-jewels-original-imaghwvwtrtqj9ns.jpeg?q=70";
           product.title="Alloy Gold-plated Kada  (Pack of 2)"
           product.price=1000;
        }
        else if (product.id === 7)
                  {
                  
                  product.price = 9000;
                } 
               
                 else if (product.id === 8)
                {
                  
                  product.price = 8500;
                }
                 else if (product.id === 9)
                {
                  
                  product.price = 4500;
                }
                 else if (product.id === 11)
                {
                  
                  product.price = 2000;
                }
                 else if (product.id === 12)
                {
                  
                  product.price = 7000;
                }
                 else if (product.id === 13)
                {
                  
                  product.price = 7000;
                }
                 else if (product.id === 14)
                {
                  
                  product.price = 150000;
                }
                 else if (product.id === 15)
                {
                  
                  product.price = 949;
                }
                
                 else if (product.id === 16)
                {
                  
                  product.price = 850;
                }
                 else if (product.id === 17)
                {
                  
                  product.price = 550;
                }
        else if(product.id===18)
        {
           product.image="https://m.media-amazon.com/images/I/31yA7k8-odL.jpg";
           product.title="Women Stylish Ankle Length Long Dress with White Shrug- White"
           product.price=850;
        }
        else if (product.id === 19)
                {
                  
                  product.price = 300;
                }
                else if (product.id === 20)
                {
                  
                  product.price = 1200;
                }
        else {
            product.image=product.image
        }
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
            src={product.image}
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
