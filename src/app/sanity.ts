import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'l22a3vrh', // Replace with your actual project ID
  dataset: 'production', // Default dataset
  useCdn: true, // Use CDN for faster data retrieval
  token: process.env.SANITY_API_TOKEN, // Your token from .env
});

export default client;
