import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Singprod = ({ cartin, setCartin }) => {
  const [product, setProduct] = useState({});
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const { _id } = useParams();
  
  useEffect(() => {
    const fetchproduct = async () => {
      const response = await fetch(
        `https://ecomm-react-server.vercel.app/api/v1/products/${_id}`
      );
      const data = await response.json();
      // console.log("the data is : ", data);
      setProduct(data.product);
      setSelectedImageIndex(data.product.FuturingImage || 0);
    };
    fetchproduct();
  }, [_id]);

  const handleclick = (product) => {
    // console.log(product);
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const isproduct = cart.find((item) => item._id === product._id);
    if (isproduct) {
      const updatedcart = cart.map((item) => {
        if (item._id === product._id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(updatedcart));
    } else {
      localStorage.setItem(
        "cart",
        JSON.stringify([...cart, { ...product, quantity: 1 }])
      );
    }
    alert("Hey product added to cart");
    // console.log("length : ", cart.length);
    setCartin(cart.length + 1);

    // console.log("this is actual length : " + cartin);
  };

  useEffect(() => {
    // console.log("Updated length after state update: " + cartin);
  }, [cartin, setCartin]);

  const nextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === product.ImageUrl.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? product.ImageUrl.length - 1 : prevIndex - 1
    );
  };

  const slideVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <Link
        to="/"
        type="Button"
        className="text-white m-10 bg-indigo-500 border-10 py-2 px-4 focus:outline-none hover:bg-gray-600 rounded"
      >
        Back
      </Link>
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={selectedImageIndex}
                variants={slideVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.5 }}
                alt={product.title}
                className="mx-autoh-[500px] object-fit rounded-lg shadow-2xl"
                src={product.ImageUrl && product.ImageUrl[selectedImageIndex]?.url}
              />
            </AnimatePresence>
            <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center px-4 transform -translate-y-1/2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevImage}
                className="bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-300"
              >
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextImage}
                className="bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-300"
              >
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>
            <div className="mt-4 flex space-x-2 overflow-x-auto pb-2">
              {product.ImageUrl &&
                product.ImageUrl.map((image, index) => (
                  <motion.img
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    src={image.url}
                   
                    className={`w-20 h-20 object-cover cursor-pointer rounded-md ${
                      index === selectedImageIndex ? 'border-2 border-indigo-500' : ''
                    }`}
                    onClick={() => setSelectedImageIndex(index)}
                  />
                ))}
            </div>
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">
              {product.category}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product.title}
            </h1>

            <p className="leading-relaxed">{product.description}</p>
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
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
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
              <button
                onClick={() => handleclick(product)}
                className="flex-shrink-0 lg:ml-4 text-white bg-indigo-500 border-0 py-2 px-4 focus:outline-none hover:bg-gray-600 rounded mt-4 lg:mt-0 max-w-[8rem] w-full"
              >
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