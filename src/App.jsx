import React from "react";
import { Routes, Route } from "react-router-dom";
import { BasketProvider } from "./components/BasketContext";
import Home from "./pages/home/Home";
import AboutPage from "./pages/about/AboutPage";
import AllProducts from "./components/AllProducts";
import Detail from "./components/Detail";
import Payment from "./pages/payment/Payment";
import Return from "./pages/return/Return";
import Garant from "./pages/garant/Garant";
import Contacts from "./pages/contacts/Contacts";
import BlogPage from "./pages/blog/BlogPage";
import Basket from "./pages/basket/Basket";
import Favorites from "./pages/favorites/Favorites";

function App() {
  return (
    <BasketProvider> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/productdetail" element={<Detail />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/return" element={<Return />} />
        <Route path="/garant" element={<Garant />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/basket" element={<Basket/>} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BasketProvider>
  );
}

export default App;
