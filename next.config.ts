import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true, // Enable React Strict Mode (helps identify potential problems in the app)
  
  // Example of enabling TypeScript support
  typescript: {
    // Set to true to prevent production builds if there are TypeScript errors
    ignoreBuildErrors: false, 
  },

  // Custom headers, such as CORS configuration
  async headers() {
    return [
      {
        // Specify the source where headers should be applied
        source: '/api/comments',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*', // Allow all origins
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: 'Content-Type',
          },
        ],
      },
    ];
  },

  // Comment out the Turbopack feature if not using it:
  // experimental: {
  //   appDir: false, // Disables the new app directory
  // },
};

export default nextConfig;
