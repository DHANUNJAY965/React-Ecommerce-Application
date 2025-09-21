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
  );
}

export default App;