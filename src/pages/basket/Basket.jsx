import React from 'react';
import Layout from '../../components/Layout';
import { useBasket } from '../../components/BasketContext';
import { FaAngleRight } from 'react-icons/fa';

const Basket = () => {
  const { basket, toggleBasketItem } = useBasket();

  return (
    <div>
      <Layout>
        <div className="container max-w-[1332px] mx-auto px-4">
          <div className="flex items-center gap-4 mt-[50px] mb-4">
            <p className="opacity-35">Главная</p> <FaAngleRight /> <p>Корзина</p>
          </div>
          <h2 className="font-bold text-[40px] my-8">Корзина</h2>

          {basket.length === 0 ? (
            <p className="flex items-center justify-center mb-10 text-4xl">Basket bo'sh.</p>
          ) : (
            <div>
              {basket.map((item) => (
                <div key={item.id} className="flex justify-between items-center mb-4 border p-4">
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.price} <span>₽</span></p>
                  </div>
                  <button
                    onClick={() => toggleBasketItem(item)}
                    className="bg-red-500 text-white p-2 rounded"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </Layout>
    </div>
  );
};

export default Basket;
