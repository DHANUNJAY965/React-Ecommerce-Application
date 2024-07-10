import React,{useState} from "react";
import   "../../App.css";
<<<<<<< HEAD
=======


>>>>>>> 97e08fc3832e3392e5f62641c83d58aee48b93ff
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
<<<<<<< HEAD
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
=======
                    <a onClick={() => handleCategoryClick("men's clothing")} class="ml-2 mr-3 md:mr-5 font-medium text-lg md:text-xl text-red-600 hover:text-gray-900 cursor-pointer">
                    Mens 
                    </a>
                    <span class="line">|</span>
                    <a onClick={() => handleCategoryClick("women's clothing")} class="ml-2 md:mr-5 font-medium text-lg md:text-xl text-red-600 hover:text-gray-900 cursor-pointer">
                    Womens
                    </a>
                    <span class="line">|</span>
                    <a onClick={() => handleCategoryClick("jewelery")} class="ml-2 md:mr-5 font-medium text-lg md:text-xl text-red-600 hover:text-gray-900 cursor-pointer">
                    Jewelery
                    </a>
                    <span class="line">|</span>
                    <a onClick={() => handleCategoryClick("electronics")}  class="ml-2 md:mr-9 font-medium text-lg md:text-xl text-red-600 hover:text-gray-900 cursor-pointer">
>>>>>>> 97e08fc3832e3392e5f62641c83d58aee48b93ff
                    Electronics
                    </a>
                  </nav>
                </div>
              </header>

<<<<<<< HEAD
=======
              <div className="container mx-auto flex flex-col items-center justify-end bg-req bg-cover bg-center md:flex-row px-5 py-10 md:py-20 lg:py-32">
  <div className="text-center md:text-left md:w-1/2">
    {/* Use hidden on screens larger than medium */}
    <h1 className="h1tag text-blue hell font-bold text-4xl md:text-5xl lg:text-6xl hidden md:block">
      ECOMM REACT BEST SELLING
    </h1>
    {/* Use hidden on screens larger than medium */}
    <h3 className="uppercase text-base md:text-xl font-semibold mt-4 md:mt-6 lg:mt-8 text-green-500 hidden md:block">
      Unique products by world's top designers
    </h3>
    <button
      type="button"
      id="navi"
      className="text-sm md:text-base mt-6 md:mt-10 text-black bg-yellow-700 p-3 rounded-md hover:bg-green-300"
    >
      Shop Now
    </button>
  </div>
</div>
>>>>>>> 97e08fc3832e3392e5f62641c83d58aee48b93ff


            </section>
      )}
        {!showHeader && (
<<<<<<< HEAD
      
=======
        /* Only this portion will be rendered after click */
>>>>>>> 97e08fc3832e3392e5f62641c83d58aee48b93ff
        <section className="text-gray-600 body-font mt-10">
              <header class="text-gray-600 body-font">
                <div class="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
                  <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
<<<<<<< HEAD
=======
                 
>>>>>>> 97e08fc3832e3392e5f62641c83d58aee48b93ff
                  <a onClick={() => handleCategoryClick(null)} class="mr-3 md:mr-5 font-medium text-lg md:text-xl text-red-600 hover:text-gray-900 cursor-pointer">
                    All 
                    </a>
                    <span class="line">|</span>
<<<<<<< HEAD
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
=======
                    <a onClick={() => handleCategoryClick("men's clothing")} class="ml-2 mr-3 md:mr-5 font-medium text-lg md:text-xl text-red-600 hover:text-gray-900 cursor-pointer">
                    Mens 
                    </a>
                    <span class="line">|</span>
                    <a onClick={() => handleCategoryClick("women's clothing")} class="ml-2 md:mr-5 font-medium text-lg md:text-xl text-red-600 hover:text-gray-900 cursor-pointer">
                    Womens
                    </a>
                    <span class="line">|</span>
                    <a onClick={() => handleCategoryClick("jewelery")} class="ml-2 md:mr-5 font-medium text-lg md:text-xl text-red-600 hover:text-gray-900 cursor-pointer">
                    Jewelery
                    </a>
                    <span class="line">|</span>
                    <a onClick={() => handleCategoryClick("electronics")}  class="ml-2 md:mr-9 font-medium text-lg md:text-xl text-red-600 hover:text-gray-900 cursor-pointer">
>>>>>>> 97e08fc3832e3392e5f62641c83d58aee48b93ff
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
