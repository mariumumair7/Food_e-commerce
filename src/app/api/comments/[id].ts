// /pages/api/comments/[id].ts

import { NextApiRequest, NextApiResponse } from 'next';
import client from '../../sanity';  // Ensure client is properly imported

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;  // Get the comment ID from the query parameter

  if (req.method === 'DELETE') {
    if (!id) {
      return res.status(400).json({ message: "Comment id is required" });
    }

    try {
      // Delete the comment from Sanity using its ID
      await client.delete(id as string);  // Make sure this is a valid ID from your Sanity schema

      return res.status(200).json({ message: "Comment deleted successfully" });
    } catch (error) {
      console.error('Error deleting comment:', error);
      return res.status(500).json({ message: "Error deleting comment" });
    }
  }

  return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
}
