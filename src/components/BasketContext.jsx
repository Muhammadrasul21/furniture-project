import React, { createContext, useContext, useState, useEffect } from 'react';

const BasketContext = createContext();

export const useBasket = () => {
  return useContext(BasketContext);
};

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  // Savatchani localStorage'dan yuklash
  useEffect(() => {
    const savedBasket = localStorage.getItem('basket');
    if (savedBasket) {
      setBasket(JSON.parse(savedBasket));
    }
  }, []);

  // Savatcha holatini localStorage'ga saqlash
  useEffect(() => {
    if (basket.length > 0) {
      localStorage.setItem('basket', JSON.stringify(basket));
    } else {
      localStorage.removeItem('basket');
    }
  }, [basket]);

  // Mahsulotni savatchaga qo'shish yoki o'chirish
  const toggleBasketItem = (item) => {
    const exists = basket.some((i) => i.id === item.id);
    if (exists) {
      setBasket((prevBasket) => prevBasket.filter((i) => i.id !== item.id)); // O'chirish
    } else {
      setBasket((prevBasket) => [...prevBasket, item]); // Qo'shish
    }
  };

  return (
    <BasketContext.Provider value={{ basket, toggleBasketItem }}>
      {children}
    </BasketContext.Provider>
  );
};
