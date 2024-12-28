import React from 'react';
import Image from 'next/image';
import { useCart } from '../lib/cart-context';

const Product = ({ item }) => {
    if (!item) {
        console.error("Error: Item prop is missing in Product component")
        return null
    }

   const { image, name, price } = item

    if(typeof image !== "string" || typeof name !== "string" || typeof price !== "number") {
        console.error("Error: item prop does not have all the required properties or the types are incorrect", item);
      return null;
    }

  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(item);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="relative w-full h-64">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-600 mt-2">Rs. {price}</p>
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