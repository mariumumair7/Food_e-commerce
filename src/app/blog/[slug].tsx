import { useRouter } from 'next/router';
import CommentForm from '../components/commentForm';

const BlogPage = () => {
  const router = useRouter();
  const { slug } = router.query; // Extract the slug from the URL

  return (
    <div>
      <h1>Blog Post</h1>
      {/* Ensure slug is passed to the comment form */}
      <CommentForm slug={slug} />
    </div>
  );
};

export default BlogPage;
