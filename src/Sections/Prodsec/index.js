import React, { useEffect,useState } from "react";
import { Link } from "react-router-dom";
// import id1 from "./Sections/Prodsec/id1.jpg";

const Prodsec = ({ products = []}) => {
  ;
  
 
  return (
    <section className="text-gray-600 body-font">
      <div className="flex flex-wrap m-10   ">
        {
            products.map((product) => {
              const { _id, price, title, category, ImageUrl } = product;
             
              return (
                <>
                  <Link
                    to={`/Singprod/${_id}`}
                    className="lg:w-1/4 md:w-1/2 p-4 w-full border border-opacity-50 bg-[#f5f5f6] mb-4 cursor-pointer"
                  >
                    <div className="bg-white">
                      <a className="block relative h-48 rounded overflow-hidden">
                        <img
                          alt={title}
                          className="object-contain object-center w-full h-full block bg-white"
                          src={ImageUrl}
                        />
                      </a>
                      <div className="mt-4 bg-white">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
                          {category}
                        </h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">
                          {title}
                        </h2>
                        <p className="mt-1 text-md font-semibold">₹ {price}</p>
                      </div>
                    </div>
                  </Link>
                  

                 
                  
                </>
              );
            })
          
      }
      </div>
    </section>
  );
};

export default Prodsec;