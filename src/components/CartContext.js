import { useContext, useEffect, useState, createContext } from "react";
import React from "react";

const initialState = {
  count: 0,
  addToCart: () => {},
};

const CartContext = React.createContext(initialState);

export default function CartProvider({ children }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    //store the state mode to the local storage
    setCount(localStorage.getItem("count"));
  }, [count]);
  const addToCart = () => {
    setCount(count + 1);
    localStorage.setItem("count", count);
  };

  return (
    <CartContext.Provider value={{ count, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider, CartContext };
