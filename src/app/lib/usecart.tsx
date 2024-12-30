'use client';

import { useCart } from './cart-context';

interface Product {
    id: string;
    name: string;
    image: string;
    price: number;
    category: string;
}

const ProductCard = ({ product }: { product: Product }) => {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        addToCart({
            id: product.id,
            name: product.name,
            image: product.image,
            price: product.price,
            category: product.category,
        });
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-200">
            <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-56 object-cover rounded-t-lg mb-4" 
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
            <p className="text-lg font-semibold text-gray-600 mb-4">Rs. {product.price}</p>
            <button
                onClick={handleAddToCart}
                className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition-colors duration-200"
            >
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;
