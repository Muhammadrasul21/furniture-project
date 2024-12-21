import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { productCards } from '../stock';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaRubleSign } from 'react-icons/fa';
import { useBasket } from '../components/BasketContext';

const Product = () => {
  const { basket, toggleBasketItem } = useBasket();

  return (
    <div className="container max-w-[1332px] mx-auto px-4">
      <div className="flex justify-between mb-8 pt-16">
        <h4 className="font-bold text-[40px]">Популярные товары</h4>
        <Link
          to="/allproducts"
          className="hidden sm:flex items-center justify-center mb-[40px] gap-3 p-3 px-12 border border-black rounded-[100px] hover:bg-black hover:text-white transition duration-300 ease-in-out"
        >
          Bce товары
          <FaArrowRight />
        </Link>
      </div>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {productCards.map((card) => (
          <div
            key={card.id}
            className="grid gap-5 p-4 relative hover:shadow-xl transition duration-300 ease-in-out"
          >
            <FaRegHeart className="absolute right-4 top-4" />
            <div className="w-full h-auto flex items-center justify-center">
              <Link to="/productdetail">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-auto h-auto max-w-full"
                />
              </Link>
            </div>
            <div>
              <span className="flex w-[180px]">{card.title}</span>
              <div className="flex items-center justify-between">
                <div className="flex flex-col mt-4">
                  <del className="opacity-55 text-xs flex items-center gap-1">
                    {card.lastprice}
                    <FaRubleSign />
                  </del>
                  <b className="flex items-center gap-1">
                    {card.price}
                    <FaRubleSign />
                  </b>
                </div>
                <button
                  onClick={() => toggleBasketItem(card)}
                  className={`p-2 rounded ${
                    basket.some((basketItem) => basketItem.id === card.id)
                      ? 'bg-black text-white'
                      : 'bg-black text-white rounded-[100px] px-4'
                  }`}
                >
                  {basket.some((basketItem) => basketItem.id === card.id) ? (
                    'Remove'
                  ) : (
                    <MdOutlineShoppingCart />
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="flex sm:hidden items-center justify-center my-[40px] gap-3 w-full p-3 border border-black rounded-[100px] hover:bg-black hover:text-white transition duration-300 ease-in-out">
        Bce товары
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Product;
