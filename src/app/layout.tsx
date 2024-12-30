import { Inter, Roboto_Mono } from "next/font/google"; // Font imports
import "./globals.css"; // Global styles
import Header from "./components/header"; // Header component
import Footer from "./components/footer"; // Footer component
import { CartProvider } from "./lib/cart-context"; // Cart provider for context

// Import fonts from Google Fonts
const inter = Inter({
  variable: "--font-inter", // Define a CSS variable for the font
  subsets: ["latin"], // Choose the subset for performance
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono", // Define a CSS variable for the font
  subsets: ["latin"], // Choose the subset for performance
});

export const metadata = {
  title: "Food Blog | Fast Food Deals", // Title for the page
  description: "Discover the best fast food deals and share your food journey.", // Description for SEO
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Page Metadata */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={`${inter.variable} ${robotoMono.variable} antialiased bg-gray-100`}>
        {/* Wrap app with CartContext */}
        <CartProvider>
          {/* Header section */}
          <header>
            <Header />
          </header>

          {/* Main content section */}
          <main className="min-h-screen">
            {children}
          </main>

          {/* Footer section */}
          <footer>
            <Footer />
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
