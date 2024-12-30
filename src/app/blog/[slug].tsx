import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CommentForm from '../components/commentForm';

const BlogPage = () => {
    const router = useRouter();
    const { slug } = router.query;

    // Type `string | null` for postId, which starts as `null` until the `slug` is valid
    const [postId, setPostId] = useState<string | null>(null);

    useEffect(() => {
        if (slug && typeof slug === 'string') {
            setPostId(slug); // Set the postId once the slug is a valid string
        } else {
            router.push('/404'); // Redirect to 404 if slug is not valid
        }
    }, [slug, router]);

    return (
        <div>
            <h1>Blog Post</h1>
            {postId ? (
                <CommentForm postId={postId} onCommentSubmitted={() => { console.log("Comments Refreshed")}} />
            ) : (
                <p>Loading...</p> // Optional loading state if postId is not set
            )}
        </div>
    );
};

export default BlogPage;
