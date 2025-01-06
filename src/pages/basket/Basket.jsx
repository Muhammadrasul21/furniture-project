import React, { useState } from 'react'; 
import Layout from '../../components/Layout';
import { useBasket } from '../../components/BasketContext';
import { FaAngleRight } from 'react-icons/fa';
import { RiDeleteBinLine } from "react-icons/ri";
import korzinka from "../../assets/korzinka.png";

const Basket = () => {
  const { basket, toggleBasketItem } = useBasket();
  
  const DetailInfo = ({ item }) => { 
    const [count, setCount] = useState(1);
  
    return (
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="border hover:border-black px-6 py-4 rounded-xl flex items-center justify-center gap-2">
          <button onClick={() => setCount(count - 1)} disabled={count === 1}>-</button>
          <span style={{ margin: "0 10px" }}>{count}</span>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Layout>
        <div className="container max-w-[1332px] mx-auto px-4">
          <div className="flex items-center gap-4 mt-[50px] mb-4">
            <p className="opacity-35">Главная</p> <FaAngleRight /> <p>Корзина</p>
          </div>
          <h2 className="font-bold text-[40px] my-8">Корзина</h2>

          {basket.length === 0 ? (
            <p className="flex items-center justify-center mb-20 text-5xl">Корзина пуста</p>
          ) : (
            <div className="bg-white sm:bg-[#F2F2F2] rounded-3xl">
              <div className='hidden sm:flex flex-col sm:flex-row justify-between items-center px-12 py-8 border-b'>
                <p>Фото</p>
                <p>Товары</p>
                <p>Описание</p>
                <p>Артикул</p>
                <p>Количество</p>
              </div>
              {basket.map((item) => (
                <div key={item.id} className="flex flex-col gap-4 rounded-2xl  bg-[#F2F2F2] sm:flex-row justify-between items-center mb-4 border-b px-12 py-4">
                  <div className="w-20 h-20 bg-white rounded-2xl flex justify-center items-center border border-red-5000">
                    <img src={korzinka} alt="product" />
                  </div>
                  <div className="sm:w-[174px] text-start">
                    <h4>{item.title}</h4>
                    <p>{item.price} <span>₽</span></p>
                  </div>
                  <div className="w-[254px]">
                    <p>Светильник RADUGA COMBO XS Промышленное освещение; 50Вт; 230В; S4; XS;</p>
                  </div>
                  <div className="w-[266px]">
                    <p>RAD-COMBO-50/XXX/230/XXX/XXX/S4/XS</p>
                  </div>
                  <RiDeleteBinLine
                    onClick={() => toggleBasketItem(item)}
                    className="h-8 w-6 cursor-pointer"
                  />
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
