import React, { useEffect, useState } from 'react'
import Body from '../../Sections/Body'
import Prodsec from '../../Sections/Prodsec'
import WebDescrip from '../../Sections/WebsiDescrip'


const Home = ({changer}) => {
    const [products,setProducts]=useState([])
    const [selectedCategory, setSelectedCategory] = useState(null);
    let filteredProducts = selectedCategory
        ? products.filter((product) => product.category === selectedCategory)
        : products;
        let categoryTitle;
        if(changer.length>0)
        {
            categoryTitle=changer
        }
        else{
            categoryTitle= selectedCategory ? selectedCategory : 'All Products';
        }
   
    useEffect(() => 
        {
            const fetchproducts = async () =>
            {
                const response = await fetch('https://fakestoreapi.com/products')
                const data = await response.json()
                console.log(data)
                setProducts(data)
            }
            fetchproducts()
        },[])
        console.log( "here the products : ",products)

     if(changer.length>0)
     {
      filteredProducts=  products.filter(prod=>prod.title.toLowerCase().includes(changer.toLowerCase())||prod.description.toLowerCase().includes(changer.toLowerCase())||prod.category.toLowerCase().includes(changer.toLowerCase()))
     }

     
  return (
    <>
    <Body setCategory={setSelectedCategory} />
    {
        changer.length>0? (<h1 className='text-4xl text-black font-bold ml-14 mt-20 pb-8 uppercase'>RESULT : {categoryTitle}</h1>):(<h1 className='text-4xl text-black font-bold ml-14 mt-20 pb-8 uppercase'>{categoryTitle}</h1>)
    }
    {
       changer.length<0?( products.length > 0 ? <Prodsec products={filteredProducts} /> : <div className='text-lg text-center font-extrabold'>Loading...</div>):(products.length > 0 ? <Prodsec products={filteredProducts}/>:<div className='text-lg text-center font-extrabold'>Loading...</div>)
    }
    {/* <Prodsec/> */}
    <WebDescrip/>
   
   
    </>
  )
}

export default Home
