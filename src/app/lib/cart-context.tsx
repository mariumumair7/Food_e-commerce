// cart-context.tsx
"use client"; // Ensure this directive is present to mark it as a client-side component

import React, { createContext, useState, useContext, ReactNode } from "react";

// Define Cart Item Type
interface CartItem {
    id: string;
    title: string;
    description: string;
    price: number;
    image: string;
    slug: string;
}

// Define Context Types
interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
}

// Create Context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Create a Provider Component
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Create a custom hook to use the cart context
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
