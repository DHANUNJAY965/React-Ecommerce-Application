import React,{useState} from "react";
import   "../../App.css";
const Body = ({ setCategory }) => {
  const [showHeader, setShowHeader] = useState(true);
  const handleCategoryClick = (category) => {
    setCategory(category);
    setShowHeader(false) // Pass the selected category to the parent component
  };

  return (
    <>
      {showHeader && (
            <section className="text-gray-600 body-font mt-8">
              <header class="text-gray-600 body-font mb-3">
                <div class="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
                  <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                  
                  <a onClick={() => handleCategoryClick(null)} class="mr-3 md:mr-5 font-medium text-lg md:text-xl text-red-600 hover:text-gray-900 cursor-pointer">
                    All 
                    </a>
                    <span class="line">|</span>
                    <a onClick={() => handleCategoryClick("MEN'S CLOTHING")} class="ml-2 mr-3 md:mr-5 font-medium text-lg md:text-xl text-red-600 hover:text-gray-900 cursor-pointer">
                    Mens 
                    </a>
                    <span class="line">|</span>
                    <a onClick={() => handleCategoryClick("WOMEN'S CLOTHING")} class="ml-2 md:mr-5 font-medium text-lg md:text-xl text-red-600 hover:text-gray-900 cursor-pointer">
                    Womens
                    </a>
                    <span class="line">|</span>
                    <a onClick={() => handleCategoryClick("JEWELERY")} class="ml-2 md:mr-5 font-medium text-lg md:text-xl text-red-600 hover:text-gray-900 cursor-pointer">
                    Jewelery
                    </a>
                    <span class="line">|</span>
                    <a onClick={() => handleCategoryClick("ELECTRONICS")}  class="ml-2 md:mr-9 font-medium text-lg md:text-xl text-red-600 hover:text-gray-900 cursor-pointer">
                    Electronics
                    </a>
                  </nav>
                </div>
              </header>



            </section>
      )}
        {!showHeader && (
      
        <section className="text-gray-600 body-font mt-10">
              <header class="text-gray-600 body-font">
                <div class="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
                  <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                  <a onClick={() => handleCategoryClick(null)} class="mr-3 md:mr-5 font-medium text-lg md:text-xl text-red-600 hover:text-gray-900 cursor-pointer">
                    All 
                    </a>
                    <span class="line">|</span>
                    <a onClick={() => handleCategoryClick("MEN'S CLOTHING")} class="ml-2 mr-3 md:mr-5 font-medium text-lg md:text-xl text-red-600 hover:text-gray-900 cursor-pointer">
                    Mens 
                    </a>
                    <span class="line">|</span>
                    <a onClick={() => handleCategoryClick("WOMEN'S CLOTHING")} class="ml-2 md:mr-5 font-medium text-lg md:text-xl text-red-600 hover:text-gray-900 cursor-pointer">
                    Womens
                    </a>
                    <span class="line">|</span>
                    <a onClick={() => handleCategoryClick("JEWELERY")} class="ml-2 md:mr-5 font-medium text-lg md:text-xl text-red-600 hover:text-gray-900 cursor-pointer">
                    Jewelery
                    </a>
                    <span class="line">|</span>
                    <a onClick={() => handleCategoryClick("ELECTRONICS")}  class="ml-2 md:mr-9 font-medium text-lg md:text-xl text-red-600 hover:text-gray-900 cursor-pointer">
                    Electronics
                    </a>
                  </nav>
                </div>
              </header>
              </section>
      )}
    
    </>
  );
};

export default Body;
