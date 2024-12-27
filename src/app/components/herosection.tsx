'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  // State for active image
  const [activeImage, setActiveImage] = useState('/hero-image4.png'); // Default image

  // List of images
  const images = [
    '/hero-image4.png', // Replace with your image paths
    '/hero-image2.jpeg',
    '/hero-image5.jpeg',
  ];

  return (
    <section className="relative bg-white-200 py-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl font-extrabold text-yellow-800 mb-6 leading-tight">
            Welcome to <span className="text-orange-400">Crisp & Crunch</span>
          </h1>
          <p className="text-lg text-yellow-700 mb-8">
            Your ultimate destination for delicious recipes, fast food insights, and everything crispy and crunchy! Dive into our world of flavors and start your food journey today.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <Link
              href="/recipes"
              className="px-6 py-3 bg-orange-500 text-white text-lg font-bold rounded-lg shadow-lg hover:bg-orange-600 transition-all"
            >
              Explore Recipes
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 bg-yellow-500 text-yellow-800 text-lg font-bold rounded-lg shadow-lg hover:bg-yellow-600 transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Image Content */}
        <div className="mt-12 lg:mt-0 lg:w-1/2 text-center">
          <Image
            src={activeImage}
            alt="Delicious fast food"
            width={700}
            height={500}
            className="rounded-lg shadow-xl cursor-pointer"
            onClick={() => {
              // Change to the next image on click
              const currentIndex = images.indexOf(activeImage);
              const nextIndex = (currentIndex + 1) % images.length;
              setActiveImage(images[nextIndex]);
            }}
          />
          <p className="mt-4 text-sm text-gray-600">Click the image to explore more!</p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-orange-300 rounded-full blur-xl opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-yellow-400 rounded-full blur-2xl opacity-50"></div>
    </section>
  );
};

export default HeroSection;
