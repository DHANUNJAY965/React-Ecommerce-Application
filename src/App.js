<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";
import Header from "./Sections/Header";
import Home from "../src/Product/products/index";
import Footer from "./Sections/Footer";
import { Routes, Route } from "react-router-dom";
import Singprod from "../src/Product/Singprod/index";
import Cart from "../src/Product/Cart/Cart";
import Login from "./Sections/Login/Login";
import AdminPanel from "../src/Admin Panel/AdminPanel";
import Singup from "../src/Sections/Login/SingUp";

function App() {
  const [cartin, setCartin] = useState(0);
  const [searchfil, setSearchfil] = useState('');
  const location = useLocation();

  useEffect(() => {
    console.log("Cart count updated in App.js:", cartin);
  }, [cartin]);

  useEffect(() => {
    console.log("Search filter updated in App.js:", searchfil);
  }, [searchfil]);

  const hideHeaderAndFooterPaths = ["/Adminpanel", "/AdminLogin", "/AdminSingup"];

  const shouldHideHeaderAndFooter = hideHeaderAndFooterPaths.includes(location.pathname);

  return (
    <div>
      {!shouldHideHeaderAndFooter && <Header updatecart={cartin} serachhere={searchfil} setserachhere={setSearchfil} />}
      <Routes>
        <Route path="/" element={<Home changer={searchfil} />} />
        <Route path="/Singprod/:_id" element={<Singprod cartin={cartin} setCartin={setCartin} />} />
        <Route path="Cart" element={<Cart setCartins={setCartin} />} />
        <Route path="/Adminpanel" element={<AdminPanel />} />
        <Route path="/AdminLogin" element={<Login />} />
        <Route path="/AdminSingup" element={<Singup />} />
      </Routes>
      {!shouldHideHeaderAndFooter && <Footer />}
    </div>
=======
import React, { useState ,useEffect} from "react";
import "./App.css";
import Header from "./Sections/Header";
import Home from "./React/products";
import Footer from "./Sections/Footer";
import { Routes, Route } from "react-router-dom";
import Singprod from "./React/Singprod";
import Cart from "./React/Cart/Cart";
import Login from "./Sections/Login/Login";



function App() {
  const[changeme,setChangeme]=useState(false);
  const [cartin, setCartin] = useState(0);
  const[searchfil,setSearchfil]=useState('')
  const handleLoginClick = () => {
    setChangeme(true);
  };
  const handlefromLoginClick = () => {
    setChangeme(false);
  };
  useEffect(() => {
    console.log("Cart count updated in App.js:", cartin);
    // You can perform any necessary actions with the updated cartin value here
  }, [cartin]);
  useEffect(() => {
    console.log("Cart count updated in search:", searchfil);
    // You can perform any necessary actions with the updated cartin value here
  }, [searchfil]);
  return (
    <>
    {!changeme?
    <div>
      <Header onLoginClick={handleLoginClick} updatecart={cartin} serachhere={searchfil} setserachhere={setSearchfil}/>
      <Routes>
        <Route path="/" element={<Home changer={searchfil}/>}/>
        {/* this means here we are passing the paramter when ever we type the path in url starting with 1.so the 1 will be takaen as a paramter  */}
        <Route path="/Singprod/:id" element={<Singprod cartin={cartin} setCartin={setCartin}/>}/>
        <Route path="Cart" element={<Cart  setCartins={setCartin}/>}/>
        
      </Routes>
      <Footer />
    </div>:<Login onclickme={handlefromLoginClick}/>}
    </>
>>>>>>> 97e08fc3832e3392e5f62641c83d58aee48b93ff
  );
}

export default App;
