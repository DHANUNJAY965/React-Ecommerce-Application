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
<<<<<<< HEAD
              const { _id, price, title, category, ImageUrl } = product;
             
              return (
                <>
                  <Link
                    to={`/Singprod/${_id}`}
=======
              const { id, price, title, description, category, image } = product;
              const newpro = () => {
                if (id === 2) {
                  product.image =
                    "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1671671477-alex-mill-recycled-denim-shirt-1671671471.jpg?crop=1xw:1xh;center,top&resize=980:*";
                  product.title = "Abercrombie Relaxed Denim Shirt Jacket";
                  product.price = 890;
                } 
                else if (id === 1) 
                {
                  product.image =
                    "https://m.media-amazon.com/images/I/719TSzzCz2L._AC_UL480_FMwebp_QL65_.jpg";
                  product.title = " Skybags Unisex Flex 22L Backpack Cabret";
                  product.price = 1100;
                }
                 else if (id === 3)
                  {
                  product.image =
                    "https://m.media-amazon.com/images/I/61BlOi2jvaL.SS700.jpg";
                  product.title =
                    "Men's Hooded Winter Vest Jacket Sleeveless Quilted Puffer";
                  product.price = 1400;
                }
                 else if (id === 4) 
                 {
                  product.image =
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfyynyj6HlLqGyIMMJedM-fbg2kHcdWK1Nvg&usqp=CAU";
                  product.title = "Cotton Men Plain Tshirts Without Print, Polo Neck";
                  product.price = 8000;
                }
                 else if (id === 5) 
                 {
                  product.image =
                    "https://cdn-media.glamira.com/media/product/newgeneration/view/1/sku/Karpathosv1/diamond/diamond-Brillant_AA/stone2/diamond-Brillant_AAA/alloycolour/yellow_white.jpg";
                  product.title =
                    "GLAMIRA Ring Karpathos";
                  product.price = 8000;
                } 
                else if (id === 6) 
                {
                  product.image =
                    "https://rukminim2.flixcart.com/image/832/832/xif0q/bangle-bracelet-armlet/f/u/u/2-6-2-6-na-p9002-panjarat-jewels-original-imaghwvwtrtqj9ns.jpeg?q=70";
                  product.title = "Alloy Gold-plated Kada  (Pack of 2)";
                  product.price = 1000;
                } 
                 else if (id === 7)
                  {
                  
                  product.price = 9000;
                } 
               
                 else if (id === 8)
                {
                  
                  product.price = 8500;
                }
                 else if (id === 9)
                {
                  
                  product.price = 4500;
                }
                 else if (id === 11)
                {
                  
                  product.price = 2000;
                }
                 else if (id === 12)
                {
                  
                  product.price = 7000;
                }
                 else if (id === 13)
                {
                  
                  product.price = 7000;
                }
                 else if (id === 14)
                {
                  
                  product.price = 150000;
                }
                 else if (id === 15)
                {
                  
                  product.price = 949;
                }
                
                 else if (id === 16)
                {
                  
                  product.price = 850;
                }
                 else if (id === 17)
                {
                  
                  product.price = 550;
                }
                
                else if (id === 18)
                 {
                  product.image =
                    "https://m.media-amazon.com/images/I/31yA7k8-odL.jpg";
                  product.title =
                    "Women Stylish Ankle Length Long Dress with White Shrug- White";
                  product.price = 850;
                }
                else if (id === 19)
                {
                  
                  product.price = 300;
                }
                else if (id === 20)
                {
                  
                  product.price = 1200;
                }

               else 
                {
                  product.image = image;
                }
              };
              newpro();


              return (
                <>
                  <Link
                    to={`/Singprod/${id}`}
>>>>>>> 97e08fc3832e3392e5f62641c83d58aee48b93ff
                    className="lg:w-1/4 md:w-1/2 p-4 w-full border border-opacity-50 bg-[#f5f5f6] mb-4 cursor-pointer"
                  >
                    <div className="bg-white">
                      <a className="block relative h-48 rounded overflow-hidden">
                        <img
                          alt={title}
                          className="object-contain object-center w-full h-full block bg-white"
<<<<<<< HEAD
                          src={ImageUrl}
=======
                          src={image}
>>>>>>> 97e08fc3832e3392e5f62641c83d58aee48b93ff
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