import { useState } from 'react';

const CommentForm = ({ slug }: { slug: string }) => {
  const [text, setText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return; // Prevent empty comments

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text, slug }), // Ensure the slug is being sent
      });

      const data = await response.json();

      if (response.ok) {
        alert('Comment submitted successfully!');
        setText(''); // Clear the text input after successful submission
      } else {
        alert('Error submitting comment: ' + data.message);
      }
    } catch (error) {
      console.error('Error submitting comment:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md space-y-4">
      <h3 className="text-2xl font-semibold text-gray-800">Add Your Comment</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write your comment here..."
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          rows={4}
        />
        
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
