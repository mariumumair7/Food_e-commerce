'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';

interface Comment {
  id: number;
  text: string;
}

interface Deal {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
}

export default function DealDetail() {
  const [deal, setDeal] = useState<Deal | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState('');
  const searchParams = useSearchParams();

  // Get the 'id' from the query params
  const id = searchParams.get('id');

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      if (typeof id === 'string') {
        try {
          const dealResponse = await axios.get<Deal>(`/api/deals/${id}`);
          setDeal(dealResponse.data);

          const commentsResponse = await axios.get<Comment[]>(`/api/comments?dealId=${id}`);
          setComments(commentsResponse.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setIsLoading(false);
        }
      }
    };
    fetchData();
  }, [id]);

  const handleCommentSubmit = async () => {
    if (!newComment.trim()) return;
    setIsSubmitting(true);
    setSubmissionMessage('');

    try {
      const response = await axios.post<Comment>(
        '/api/comments',
        { text: newComment, dealId: id },
        { headers: { 'Content-Type': 'application/json' } }
      );
      setComments((prevComments) => [...prevComments, response.data]);
      setSubmissionMessage('Comment Submitted Successfully');
      setNewComment('');
    } catch (error) {
      console.error('Error posting comment:', error);
      setSubmissionMessage('Error submitting comment. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) return <div>Loading...</div>;

  if (!deal) return <div>Deal not found</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">{deal.title}</h1>
      <p>{deal.description}</p>
      <span>Price: {deal.price}</span>

      <div className="comments mt-4">
        <h2>Comments</h2>
        {comments.map((comment) => (
          <div key={comment.id}>
            <p>{comment.text}</p>
          </div>
        ))}
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
        />
        <button onClick={handleCommentSubmit} disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit Comment'}
        </button>
        {submissionMessage && <p>{submissionMessage}</p>}
      </div>
    </div>
  );
}
