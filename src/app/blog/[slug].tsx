import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CommentForm from '../components/commentForm';

const BlogPage = () => {
    const router = useRouter();
    const { slug } = router.query;
    const [postId, setPostId] = useState('');


    useEffect(() => {
        if (typeof slug !== 'string') {
            router.push('/404');
        } else {
            setPostId(slug);
        }
    }, [slug, router]);

    return (
        <div>
            <h1>Blog Post</h1>
            <CommentForm postId={postId} onCommentSubmitted={() => { console.log("Comments Refreshed")}} />
        </div>
    );
};

export default BlogPage;