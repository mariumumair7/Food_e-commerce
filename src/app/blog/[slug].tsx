import { useRouter } from 'next/router';
import { useEffect } from 'react';
import CommentForm from '../components/commentForm';

const BlogPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (typeof slug !== 'string') {
      // Redirect or handle invalid slug scenario
      router.push('/404');
    }
  }, [slug]);

  // Ensure slug is a string before passing to the CommentForm
  const slugString = typeof slug === 'string' ? slug : '';

  return (
    <div>
      <h1>Blog Post</h1>
      <CommentForm slug={slugString} />
    </div>
  );
};

export default BlogPage;
