import React, { useState, createContext } from "react";
// import uuid from "react-uuid";

export const ProductContext = createContext();

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  //   const addCart = () => {
  //     console.log(`hello`);
  //   };

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {props.children}
    </CartContext.Provider>
  );
};
