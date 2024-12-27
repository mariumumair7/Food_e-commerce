import { NextApiRequest, NextApiResponse } from 'next';

interface Post {
  id: number;
  title: string;
  body: string;
  slug: string;
}

const posts: Post[] = []; // In-memory mock data for demonstration

// Handle GET request to fetch all posts
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return res.status(200).json(posts);
  }

  if (req.method === 'POST') {
    const { title, body, slug }: { title: string; body: string; slug: string } = req.body;

    if (!title || !body || !slug) {
      return res.status(400).json({ message: 'Title, body, and slug are required' });
    }

    const newPost: Post = {
      id: posts.length + 1,
      title,
      body,
      slug,
    };

    posts.push(newPost);
    return res.status(201).json(newPost);
  }

  return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
}
