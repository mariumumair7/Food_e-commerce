import { NextApiRequest, NextApiResponse } from 'next';

interface Post {
  id: number;
  title: string;
  body: string;
  slug: string;
}

let posts: Post[] = []; // In-memory mock data for demonstration

// Handle requests for specific post by slug
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;

  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }

  if (req.method === 'GET') {
    return res.status(200).json(post);
  }

  if (req.method === 'PUT') {
    const { title, body }: { title: string; body: string } = req.body;
    if (!title || !body) {
      return res.status(400).json({ message: 'Title and body are required' });
    }
    
    // Update post logic
    post.title = title;
    post.body = body;

    return res.status(200).json(post);
  }

  return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
}
