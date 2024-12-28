import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;  // Get the comment ID from the query parameter

  if (req.method === 'DELETE') {
    if (!id) {
        console.log("Missing Comment ID in DELETE request");
      return res.status(400).json({ message: "Comment ID is required" });
    }

    try {
        //  Dummy Logic - Replace this with your actual logic
         console.log(`Deleting item with ID: ${id}`);
      return res.status(200).json({ message: `Item with ID ${id} has been deleted` });
    } catch (error) {
       console.error('Error deleting comment:', error);
        return res.status(500).json({ message: "Error deleting comment" });
    }
  }

  return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
}