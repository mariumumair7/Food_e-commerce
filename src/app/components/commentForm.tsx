import React, { useState } from 'react';

interface Props {
    slug: string;
    postId: string;
    onCommentSubmitted: () => void;
}

const CommentForm: React.FC<Props> = ({ slug, postId, onCommentSubmitted }) => {
    const [name, setName] = useState('');
     const [id, setId] = useState('');
    const [comment, setComment] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
         console.log("Name value:", name);
         console.log("Comment value:", comment);
         console.log("ID value:", id);
       if (!name.trim() || !comment.trim() || !id.trim()) {
            setError("Name, comment and Gmail ID are required");
             return;
       }

        setIsSubmitting(true);
       setError(null);

        const commentData = {
           postId: postId,
            name: (name || "").trim(),
            comment: (comment || "").trim(),
            id: (id || "").trim(),
        };
       console.log("Data being sent: ", JSON.stringify(commentData));
        if(!commentData.postId || !commentData.name || !commentData.comment || !commentData.id) {
            console.error("Error: One of the values is incorrect: ", commentData);
           setError("One of the values is not correct");
           return;
        }
        try {
             const response = await fetch('/api/comments', {
               method: 'POST',
              headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(commentData),
           });

            if (!response.ok) {
                 const message = await response.text();
                 console.error('Failed to submit comment:', message);
                 setError(message || "Failed to submit comment");
                 return;
            }
            alert('Comment submitted successfully!');
           setComment('');
            setName('');
            setId('');
            onCommentSubmitted();
       } catch (error: any) {
            console.error('Error submitting comment:', error);
           setError(error.message || "Failed to submit comment");
        } finally {
            setIsSubmitting(false);
       }
   };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800">Add Your Comment</h3>
            {error && <p className="text-red-500">{error}</p>}
             <form onSubmit={handleSubmit} className="space-y-4">
                 <div>
                       <label htmlFor="id" className="block text-sm font-medium text-gray-700">
                           Gmail Id
                       </label>
                      <input
                           type="email"
                            id="id"
                         value={id}
                          onChange={(e) => setId(e.target.value)}
                           placeholder="Your Gmail Id"
                           className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                       />
                   </div>
                 <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                             type="text"
                           id="name"
                           value={name}
                             onChange={(e) => setName(e.target.value)}
                             placeholder="Your name"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                       />
                 </div>
                <div>
                     <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
                         Comment
                     </label>
                      <textarea
                        id="comment"
                          value={comment}
                           onChange={(e) => setComment(e.target.value)}
                           placeholder="Write your comment here..."
                            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                         rows={4}
                     />
                 </div>

                 <button
                   type="submit"
                     disabled={isSubmitting}
                    className={`w-full p-2 mt-4 rounded-lg text-white ${isSubmitting ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'} focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors`}
                 >
                    {isSubmitting ? 'Submitting...' : 'Submit Comment'}
                </button>
            </form>
        </div>
    );
};

export default CommentForm;