import { Inter, Roboto_Mono } from "next/font/google"; // Replace with your desired fonts
import "./globals.css"; // Ensure global styles are imported
import Header from "./components/header"; // Adjust the path as needed
import Footer from "./components/footer"; // Adjust the path as needed
import { CartProvider } from "./lib/cart-context"; // Adjust the path as needed

// Import fonts
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Food Blog | Fast Food Deals",
  description: "Discover the best fast food deals and share your food journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Metadata: These will complement the exported metadata */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={`${inter.variable} ${robotoMono.variable} antialiased bg-gray-100`}>
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
