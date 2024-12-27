// schemas/schema.js
import { postType } from '../schemaTypes/postType'; // Import the post schema

export const schemaTypes = [
  postType, // Add the post schema to the schemaTypes array
  // other schemas (e.g., author, category) here...
];

export default schemaTypes;
