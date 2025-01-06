import React, { createContext, useContext, useState, useEffect } from "react";

const BasketContext = createContext();

export const useBasket = () => useContext(BasketContext);

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const savedBasket = localStorage.getItem("basket");
    if (savedBasket) {
      setBasket(JSON.parse(savedBasket));
    }
  }, []);

  useEffect(() => {
    if (basket.length > 0) {
      localStorage.setItem("basket", JSON.stringify(basket));
    } else {
      localStorage.removeItem("basket");
    }
  }, [basket]);

  const toggleBasketItem = (item) => {
    const exists = basket.some((i) => i.id === item.id);
    if (exists) {
      setBasket((prev) => prev.filter((i) => i.id !== item.id));
    } else {
      setBasket((prev) => [...prev, item]);
    }
  };

  return (
    <BasketContext.Provider value={{ basket, toggleBasketItem }}>
      {children}
    </BasketContext.Provider>
  );
};
