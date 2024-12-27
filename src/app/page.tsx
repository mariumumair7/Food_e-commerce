'use client';

import Head from 'next/head';
import Link from 'next/link';
import Herosection from './components/herosection';
import { useCart } from './lib/cart-context'; // Import the cart context
import CommentSection from './components/commentSection';

// Deals data
const deals = [
    {
        id: 1,
        title: '20% off on all pizza',
        description: 'Get 50% off on all burgers this weekend.',
        price: 300,
        image: '/hero-image5.jpeg',
        slug: 'pizza-deal',
    },
    {
        id: 2,
        title: 'Buy 1 Get 1 Free',
        description: 'Buy one large fries / burger and get another free!',
        price: 400,
        image: '/hero-image2.jpeg',
        slug: 'burger-deal',
    },
    {
        id: 3,
        title: 'Free Drink with Meal',
        description: 'Get a free drink with any meal ordered today.',
        price: 1000,
        image: '/hero-image4.png',
        slug: 'drink-deal',
    },
];

export default function Home() {
    const { addToCart, cartCount } = useCart(); // Accessing cart context

    const handleAddToCart = (deal) => {
        // Check if deal is valid before adding to cart
        if (deal) {
            addToCart(deal);
        } else {
            console.error('Invalid deal');
        }
    };

    return (
        <>
            <Head>
                <title>Fast Food Deals</title>
                <meta name="description" content="Special deals for fast food lovers" />
            </Head>

            <Herosection />

            <section className="px-6 py-8 bg-gray-50">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Special Deals</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {deals.map((deal) => (
                        <div
                            key={deal.id}
                            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
                        >
                            <div className="relative">
                                <img
                                    src={deal.image}
                                    alt={deal.title}
                                    className="w-full h-72 object-cover rounded-t-lg"
                                />
                                <div className="absolute top-2 left-2 bg-pink-500 text-white px-4 py-2 rounded-full text-lg">
                                    Rs. {deal.price}
                                </div>
                            </div>

                            <div className="p-6">
                                <h2 className="text-2xl font-semibold text-gray-800">{deal.title}</h2>
                                <p className="text-gray-600 mt-2">{deal.description}</p>
                            </div>

                            <div className="p-4 bg-gray-100 flex justify-between items-center rounded-b-lg">
                                <button
                                    onClick={() => handleAddToCart(deal)}
                                    className="bg-pink-400 text-black text-lg px-4 py-2 rounded-md hover:bg-pink-500 transition-colors"
                                >
                                    Add to Cart
                                </button>
                                <Link href={`/deal/${deal.id}`} className="text-purple-500 text-lg hover:underline">
                                    View Deal
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Cart Link */}
            <div className="text-center mt-6">
                <Link href="/cart" className="bg-pink-400 text-black text-lg px-6 py-3 rounded-md hover:bg-pink-500 transition-colors">
                    Go to Cart
                </Link>
            </div>

            {/* Dynamically pass the slug from the deal */}
            <CommentSection slug={deals[0].slug} />
        </>
    );
}
