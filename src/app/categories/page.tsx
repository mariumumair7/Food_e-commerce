
"use client"; 

import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image"; // Importing Next.js Image component
import { useCart } from "../lib/cart-context"; // Importing the cart context

// Define the categories and food items
const categories = ['All', 'Burgers', 'Pizzas', 'Fries', 'Chicken Wings', 'Pasta', 'Garlic Bread'];

const fastFoodItems = [
  { id: 1, name: 'Burger', image: '/burger.jpeg', price: 300, category: 'Burgers' },
  { id: 2, name: 'Pizza', image: '/hero-image5.jpeg', price: 800, category: 'Pizzas' },
  { id: 3, name: 'Fries', image: '/imagefries.jpeg', price: 200, category: 'Sides' },
  { id: 4, name: 'Chicken Wings', image: '/wings.jpeg', price: 600, category: 'Chicken' },
  { id: 5, name: 'Pasta', image: '/pasta.jpeg', price: 700, category: 'Pasta' },
  { id: 6, name: 'Garlic Bread', image: '/garlic.jpeg', price: 350, category: 'Garlic Bread' },
];

export default function FastFoodCategoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const { addToCart } = useCart(); // Get the addToCart function from context

  // Filter items based on selected category
  const filteredItems = selectedCategory === 'All'
    ? fastFoodItems
    : fastFoodItems.filter((item) => item.category === selectedCategory);

  return (
    <>
      <Head>
        <title>Fast Food Categories</title>
        <meta name="description" content="Browse fast food categories and order your favorites" />
      </Head>

      {/* Categories Navigation */}
      <nav className="bg-gray-100 py-4">
        <div className="max-w-6xl mx-auto flex justify-center space-x-8">
          {categories.map((category) => (
            <button
              key={category}
              className={`text-lg font-semibold ${selectedCategory === category ? 'text-pink-500' : 'text-gray-700'}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </nav>

      <section className="px-6 py-8 bg-gray-50">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Fast Food Menu</h1>

        {/* Display Food Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
            >
              <div className="relative">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={500}
                  height={400}
                  className="w-full h-72 object-cover rounded-t-lg"
                />
                <div className="absolute top-2 left-2 bg-pink-500 text-white px-4 py-2 rounded-full text-lg">
                  Rs. {item.price}
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800">{item.name}</h2>
              </div>

              <div className="p-4 bg-gray-100 flex justify-between items-center rounded-b-lg">
                {/* Add to Cart Button */}
                <button
                  onClick={() => addToCart({ ...item, id: String(item.id) })} // Convert id to string
                  className="bg-pink-400 text-white text-lg px-4 py-2 rounded-md hover:bg-pink-500 transition-colors"
                >
                  Add to Cart
                </button>
                <Link href={`/item/${item.id}`} className="text-purple-500 text-lg hover:underline">
                  View Item
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
