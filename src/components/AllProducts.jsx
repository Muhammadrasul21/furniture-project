import React from "react";
import Layout from "./Layout";
import Product from "./Product";
import { FaAngleRight } from "react-icons/fa";


const AllProducts = () => {
  return (
    <div>
      <Layout>
        <div  className="container max-w-[1332px] mx-auto px-4">
         <div className='flex items-center gap-4  mt-[50px] mb-4'><p className='opacity-35'>Главная</p> <FaAngleRight/></div>
        </div>
        <Product/>
      </Layout>
    </div>
  );
};

export default AllProducts;
