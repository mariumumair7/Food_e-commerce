import { CartProvider } from '../lib/cart-context'; // Correct the path based on where your CartContext is located

function MyApp({ Component, pageProps }: any) {
    return (
        <CartProvider>
            <Component {...pageProps} />
        </CartProvider>
    );
}

export default MyApp;
