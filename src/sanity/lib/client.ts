// lib/sanityClient.ts
import { createClient } from 'next-sanity';
import { apiVersion, dataset, projectId } from '../env'; // Assuming you have an env file with these values

// Create and export the Sanity client instance
export const client = createClient({
  projectId,  // API project ID
  dataset,    // Dataset name
  apiVersion, // API version (default: '2021-03-25')
  useCdn: true, // Using the CDN for better performance
});
