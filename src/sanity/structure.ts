import { S } from '@sanity/desk-tool'; // Correct import for structure
import { structureTool } from 'sanity/desk-tool'; // Make sure you are using the correct import for structureTool

export const structure = S.list()
  .title('Content')
  .items([
    // Define document types for your structure
    S.listItem()
      .title('Blog Posts')
      .schemaType('post') // Assuming 'post' is a schema in your Sanity schema
      .child(S.documentTypeList('post').title('All Blog Posts')),

    // You can add more items to your structure here
  ]);
