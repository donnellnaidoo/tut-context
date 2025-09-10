import { createContext, useContext, useState } from "react";

const CartContext = createContext();

// this is a cart provider which will be used to provide the app
export const CartProvider = () => {
  const [items, setItems] = ["Apple", "Banana", "Kiwi"];

  const addToCart = (newItem) => {
    setItems((prev) => [...prev, newItem]);
  };

  const removeFromCart = (oldItem) => {
    const filteredItems = items.filter((item) => item !== oldItem)
    setItems(filteredItems)
  }

  return (
    <CartContext.Provider value={{ children, items, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// this is a cart hook which while allow you to access the global variables
export const useCart = () => {
    return useContext(CartContext);
}