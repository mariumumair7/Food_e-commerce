import { useEffect, useState } from 'react';

const CommentSection = ({ slug }: { slug: string }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch comments when the page loads
  useEffect(() => {
    const fetchComments = async () => {
      const query = `*[_type == "comment" && blog->slug.current == $slug]`;
      const commentData = await client.fetch(query, { slug });
      setComments(commentData);
    };

    fetchComments();
  }, [slug]);

  const handleDelete = async (commentId: string) => {
    try {
      // Send delete request to backend
      await fetch(`/api/comments/${commentId}`, {
        method: 'DELETE',
      });

      // Remove the comment from the UI
      setComments((prevComments) => prevComments.filter(comment => comment._id !== commentId));
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  const handleCommentSubmit = async () => {
    if (!newComment.trim()) return;

    setIsSubmitting(true);

    try {
      const mutation = {
        _type: 'comment',
        text: newComment,
        blog: { _type: 'reference', _ref: slug },
      };

      await client.create(mutation);

      setComments((prev) => [...prev, mutation]);
      setNewComment('');
    } catch (error) {
      console.error('Error submitting comment:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Comments</h3>

      {comments.length === 0 ? (
        <p className="text-gray-500">No comments yet. Be the first to comment!</p>
      ) : (
        <div className="space-y-4">
          {comments.map((comment) => (
            <div key={comment._id} className="bg-gray-50 p-4 rounded-md shadow-sm flex justify-between items-start">
              <p className="text-lg text-gray-700">{comment.text}</p>
              <button
                onClick={() => handleDelete(comment._id)}
                className="text-red-500 hover:text-red-700 font-semibold"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="mt-6">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
          className="w-full p-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
        />

        <button
          onClick={handleCommentSubmit}
          disabled={isSubmitting}
          className={`w-full mt-4 py-2 rounded-lg text-white ${isSubmitting ? 'bg-gray-400' : 'bg-pink-500 hover:bg-pink-600'} transition-colors`}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>
    </div>
  );
};

export default CommentSection;
