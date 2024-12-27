// /src/app/about.tsx or /pages/about.tsx
'use client'; // This must be the first line

import Head from 'next/head';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <Head>
        <title>About Crispy & Crunch</title>
        <meta
          name="description"
          content="About Crispy & Crunch - The home of crispy and crunchy fast food"
        />
      </Head>

      <section className="bg-yellow-50 py-16 px-6">
        {/* About Section Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Crispy & Crunch</h1>
          <p className="text-xl text-gray-600">
            Where every bite is crispy, crunchy, and delicious! We are dedicated to serving you the best fast food with unbeatable quality and flavor.
          </p>
        </div>

        {/* Story Section */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-gray-800">Our Story</h2>
            <p className="text-lg text-gray-600">
              At Crispy & Crunch, we have been bringing the most flavorful, crunchy, and crispy fast food dishes to your table for years.
              From crispy fried chicken to our signature fries, we focus on high-quality ingredients and mouth-watering recipes.
            </p>
            <p className="text-lg text-gray-600">
              Our mission is simple: to provide the best fast food experience with great flavor, friendly service, and a cozy environment where you can enjoy a great meal.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/story.webp" // Ensure this image exists in the public directory
              alt="Our Story"
              width={600}
              height={200}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
            <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Quality Ingredients</h3>
              <p className="text-gray-600">
                We only use fresh, high-quality ingredients to ensure every bite is as delicious as it is crispy.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Customer First</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority! We focus on providing excellent service and an unforgettable experience.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to sustainability, using eco-friendly packaging and minimizing food waste.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-4">
            Have any questions or want to place an order? We'd love to hear from you.
          </p>
          <a
            href="mailto:info@crispyandcrunch.com"
            className="bg-yellow-500 text-black py-3 px-6 rounded-lg text-xl hover:bg-yellow-600 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}
