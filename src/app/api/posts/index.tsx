import { NextApiRequest, NextApiResponse } from 'next';

// Define the Post interface with a string id
interface Post {
    id: string;
    title: string;
    body: string;
    slug: string;
}

let posts: Post[] = []; // Use let so we can modify it for demonstration

// Handle GET request to fetch all posts
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        return res.status(200).json(posts);
    }

    if (req.method === 'POST') {
        // Destructure the body and also add type checking.
      const { title, body, slug }: { title: unknown, body: unknown, slug: unknown } = req.body;

      // Input Validation and Error Handling
       if (typeof title !== 'string' || title.trim() === '' ||
        typeof body !== 'string' || body.trim() === '' ||
        typeof slug !== 'string' || slug.trim() === ''
      ) {
            return res.status(400).json({
                message: 'Title, body, and slug are required and must be non-empty strings'
            });
        }

        // ID Generation
      const newPostId = String(Date.now()); // Use a simple timestamp for id
        // Slug generation
      const newPost: Post = {
        id: newPostId,
        title: title,
        body: body,
        slug: slug
      };

        posts.push(newPost); // Create and send new post
        return res.status(201).json(newPost);
    }

     // Handle DELETE request to delete a post
     if (req.method === 'DELETE') {
         const { id } = req.query;

         if (!id || typeof id !== 'string') {
            return res.status(400).json({ message: 'Post ID is required and must be a string' });
         }

           const initialLength = posts.length;
         posts = posts.filter(post => post.id !== id);
         if (posts.length == initialLength) {
             return res.status(404).json({ message: 'Post not found' });
        }
         return res.status(200).json({ message: `Post with ID ${id} has been deleted.` });
     }

    // Handle PUT request to update a post
     if (req.method === 'PUT') {
        const { id } = req.query;

       if (!id || typeof id !== 'string') {
            return res.status(400).json({ message: 'Post ID is required and must be a string' });
        }

        const { title, body, slug }: { title: unknown, body: unknown, slug: unknown } = req.body;

        // Input Validation and Error Handling
         if (typeof title !== 'string' || title.trim() === '' ||
          typeof body !== 'string' || body.trim() === '' ||
          typeof slug !== 'string' || slug.trim() === ''
        ) {
              return res.status(400).json({
                  message: 'Title, body, and slug are required and must be non-empty strings'
              });
          }

          const postIndex = posts.findIndex(post => post.id == id)

         if (postIndex == -1) {
            return res.status(404).json({ message: 'Post not found' });
        }

        posts[postIndex] = {id, title, body, slug};

        return res.status(200).json(posts[postIndex]);
    }


    return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
}