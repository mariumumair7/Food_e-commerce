import { defineConfig } from 'sanity';
import { structureTool } from '@sanity/desk-tool';  // Import the structureTool from @sanity/desk-tool
import { structure } from '../../sanity/structure'; // Path to the structure file you created

export default defineConfig({
  basePath: '/studio',
  projectId: 'your-project-id', // Replace with your actual project ID
  dataset: 'your-dataset', // Replace with your actual dataset name
  plugins: [
    structureTool({ structure }), // Use structure tool with the defined structure
  ],
});
