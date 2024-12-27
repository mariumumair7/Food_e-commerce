// src/components/CartItem.jsx
import React from 'react';

const CartItem = ({ item, onRemove }) => {
    if (!item) {
        console.error("Error: Item prop is missing in CartItem component");
        return null;
      }

      if (!item.image || !item.name || !item.price || !item.id) {
        console.error("Error: item prop does not have all the required properties", item);
        return null;
      }

  return (
    <article className="bg-white shadow-lg rounded-lg overflow-hidden mb-6">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-72 object-cover rounded-t-lg"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
        <p className="text-gray-600 mt-2">Rs. {item.price}</p>
      </div>
      <div className="p-4 bg-gray-100 flex justify-between items-center rounded-b-lg">
        <button
          onClick={() => onRemove(item.id)}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
        >
          Remove
        </button>
      </div>
    </article>
  );
};

export default CartItem;