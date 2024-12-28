'use client';

import { useCart } from "../lib/cart-context";
import Link from "next/link";
import Image from "next/image";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  // Calculate the total price
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
        <h1 className="text-5xl font-bold text-center text-gray-800 py-6">Your Cart</h1>

        {/* If the cart is empty */}
        {cart.length === 0 ? (
          <div className="text-center text-lg text-gray-600 py-6">
            <p>Your cart is empty.</p>
            <Link href="/" className="text-blue-500 hover:underline">
              Go back to shop
            </Link>
          </div>
        ) : (
          <>
            {/* List Cart Items */}
            <div className="space-y-4 px-6 pb-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center py-4 border-b border-gray-200"
                >
                  <div className="flex items-center space-x-4">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={64}
                      height={64}
                      className="object-cover rounded-md"
                    />
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                      <p className="text-gray-500">Rs. {item.price}</p>
                    </div>
                  </div>

                  {/* Remove Item Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Cart Total */}
            <div className="px-6 py-4 bg-gray-100 flex justify-between items-center">
              <span className="text-xl font-semibold text-gray-800">Total Price</span>
              <span className="text-xl font-semibold text-gray-800">Rs. {totalPrice}</span>
            </div>

            {/* Checkout Button */}
            <div className="px-6 py-4 text-center">
              <Link
                href="/checkout"
                className="bg-pink-500 text-white text-lg px-6 py-3 rounded-md hover:bg-pink-600 transition-colors"
              >
                Checkout
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}