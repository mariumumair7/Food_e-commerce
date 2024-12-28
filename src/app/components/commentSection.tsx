import React, { useState, useEffect, useCallback } from 'react';
import CommentForm from '../components/commentForm';

interface Comment {
    _id: string;
    name: string;
    comment: string;
    createdAt: string;
   id: string;
}

interface Props {
    postId: string;
    // slug: string; Remove the unused `slug` prop
}

const CommentSection: React.FC<Props> = ({ postId }) => {
    const [comments, setComments] = useState<Comment[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    const fetchComments = useCallback(async () => {
        console.log("Fetching comments with postID:", postId);
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`/api/comments?postId=${postId}`);
            if (!response.ok) {
                const message = await response.text();
                console.error('Failed to fetch comments:', message);
               throw new Error(`Failed to fetch comments: ${response.status} ${message}`);
            }
            const data = await response.json();
           setComments(data);
        } catch (error: unknown) {
             console.error('Error fetching comments:', error);
            setError((error as Error).message || "Failed to fetch comments");
       } finally {
            setLoading(false);
        }
    }, [postId]);


    useEffect(() => {
       if(postId) fetchComments();
   }, [postId, fetchComments]);


  const handleCommentSubmitted = useCallback(() => {
         fetchComments()
     }, [fetchComments])


    return (
         <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Comments</h3>

             {loading && <p className="text-gray-500">Loading Comments...</p>}

             {error && <p className="text-red-500">Error: {error}</p>}

              {!loading && !error && (
                    comments.length > 0 ? (
                      <ul className="space-y-4">
                         {comments.map(comment => (
                            <li key={comment._id} className="bg-white p-4 rounded-md shadow-sm">
                               <p className="font-medium">{comment.name} <span className="text-gray-500 text-sm">({new Date(comment.createdAt).toLocaleDateString()})</span></p>
                                <p className="text-gray-700">{comment.comment}</p>
                            </li>
                        ))}
                      </ul>
                    ) : (
                        <p className="text-gray-500">No comments yet.</p>
                     )
                )}
               <CommentForm
                    postId={postId}
                    onCommentSubmitted={handleCommentSubmitted}
                 />
           </div>
      );
};

export default CommentSection;