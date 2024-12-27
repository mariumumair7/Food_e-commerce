'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="bg-peach text-black py-4" style={{ backgroundColor: '#FFDAB9' }}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.webp" // Replace with the correct path to your logo
            alt="Crisp & Crunch Logo"
            width={100} // Adjust width as needed
            height={100} // Adjust height as needed
            className="rounded-full" // Optional styling for the image
          />
          <h1 className="text-4xl font-serif font-bold">Crisp & Crunch</h1>
        </div>
        <nav className="flex gap-6 text-xl font-sans">
          <Link
            href="/"
            className={pathname === '/' ? 'font-bold underline' : 'hover:underline'}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={pathname === '/about' ? 'font-bold underline' : 'hover:underline'}
          >
            About
          </Link>
          <Link
            href="/categories"
            className={pathname === '/categories' ? 'font-bold underline' : 'hover:underline'}
          >
            Categories
          </Link>
          <Link
            href="/cart"
            className={pathname === '/cart' ? 'font-bold underline' : 'hover:underline'}
          >
            Cart
          </Link>
          <Link
            href="/contact-us"
            className={pathname === '/contact-us' ? 'font-bold underline' : 'hover:underline'}
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
