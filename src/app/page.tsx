'use client';

import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Herosection from './components/herosection';
import CommentSection from './components/commentSection';
import BlogList from '../app/blog/index';
import { Deal, Post } from './types/product'; 
import React from 'react';

// create client component to handle add to cart
interface ClientComponentProps {
    posts: Post[];
}

import { useCart } from './lib/cart-context';

const ClientComponent: React.FC<ClientComponentProps> = ({ posts }) => {
    const { addToCart } = useCart();
    const handleAddToCart = (deal: Deal) => {
        addToCart(deal);
    };

    const deals: Deal[] = [
        {
            id: '1',
            title: '20% off on all pizza',
            description: 'Get 50% off on all burgers this weekend.',
            price: 300,
            image: '/hero-image5.jpeg',
            slug: 'pizza-deal',
        },
        {
            id: '2',
            title: 'Buy 1 Get 1 Free',
            description: 'Buy one large fries / burger and get another free!',
            price: 400,
            image: '/hero-image2.jpeg',
            slug: 'burger-deal',
        },
        {
            id: '3',
            title: 'Free Drink with Meal',
            description: 'Get a free drink with any meal ordered today.',
            price: 1000,
            image: '/hero-image4.png',
            slug: 'drink-deal',
        },
    ];

    return (
        <>
            <section className="px-6 py-8 bg-gray-50">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
                    Special Deals
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {deals.map((deal) => (
                        <div
                            key={deal.id}
                            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
                        >
                            <div className="relative">
                                <Image
                                    src={deal.image}
                                    alt={deal.title}
                                    width={600}
                                    height={400}
                                    className="w-full h-72 object-cover rounded-t-lg"
                                />
                                <div
                                    className="absolute top-2 left-2 bg-pink-500 text-white px-4 py-2 rounded-full text-lg"
                                >
                                    Rs. {deal.price}
                                </div>
                            </div>
                            <div className="p-6">
                                <h2 className="text-2xl font-semibold text-gray-800">
                                    {deal.title}
                                </h2>
                                <p className="text-gray-600 mt-2">{deal.description}</p>
                            </div>
                            <div className="p-4 bg-gray-100 flex justify-between items-center rounded-b-lg">
                                <button
                                    onClick={() => handleAddToCart(deal)}
                                    className="bg-pink-400 text-black text-lg px-4 py-2 rounded-md hover:bg-pink-500 transition-colors"
                                >
                                    Add to Cart
                                </button>
                                <Link
                                    href={`/deal/${deal.id}`}
                                    className="text-purple-500 text-lg hover:underline"
                                >
                                    View Deal
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <BlogList posts={posts} />
        </>
    );
};

async function getPosts() {
    const apiKey = process.env.MY_API_KEY; // Get API key from env
    const res = await fetch('http://localhost:3000/api/posts', {
        headers: {
            'Authorization': `Bearer ${apiKey}`,
        },
    });
    if (!res.ok) {
        console.error(`Failed to fetch posts with status ${res.status}`);
        return { posts: [] };
    }
    return res.json();
}


async function Home() {
    const posts = await getPosts();
    return (
        <>
            <Head>
                <title>Fast Food Deals</title>
                <meta name="description" content="Special deals for fast food lovers" />
            </Head>
            <Herosection />
             <ClientComponent posts={posts} />
             <CommentSection postId="1" />
        </>
    );
}

export default Home;