import React from 'react';
import Image from 'next/image';
import { useCart } from '../lib/cart-context';
import { ProductType } from '../types/product'


interface Props {
  item: ProductType | null;
}


const Product: React.FC<Props> = ({ item }) => {
    const { addToCart } = useCart(); // Call useCart at the top level
   if(!item) {
         console.error("Error: item prop missing in Product component")
       return null
   }
  const { image, name, price } = item;

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