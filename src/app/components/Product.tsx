// src/components/Product.jsx

import React from 'react';
import { useCart } from '../lib/cart-context';

const Product = ({ item }) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart(item);
      };

    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={item.image} alt={item.name} className="w-full h-64 object-cover" />
            <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                <p className="text-gray-600 mt-2">Rs. {item.price}</p>
                 <button
                    onClick={handleAddToCart}
                    className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                 >
                    Add to cart
                 </button>
            </div>
        </div>
    );
};

export default Product;