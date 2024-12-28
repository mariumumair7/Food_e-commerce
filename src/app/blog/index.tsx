import Link from 'next/link';
import { GetStaticProps } from 'next';


interface Post {
  id: string; 
  title: string;
  slug: string;
  content: string;
}

interface Props {
  posts: Post[];
}


const BlogList = ({ posts }: Props) => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Latest Blog Posts
        </h1>
        {posts && posts.length > 0 ? (
          <ul className="space-y-6">
            {posts.map((post) => (
              <li
                key={post.id}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="block p-6"
                >
                  <h2 className="text-xl font-semibold text-gray-800 hover:text-indigo-600 transition-colors duration-200 ease-in-out mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm">
                    {/* Add a summary of the post here */}
                    {post.content.substring(0, 100)}...
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600 text-center">No posts to display</p>
        )}
      </div>
    </div>
  );
};


// Fetching all blog posts for the listing page
export const getStaticProps: GetStaticProps<Props> = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/posts');
    if (!res.ok) {
         console.error(`Failed to fetch posts with status ${res.status}`)
      return { props: { posts: [] } }
     }
    const posts = await res.json();
    return { props: { posts } };
  } catch (error) {
    console.error('Error fetching posts:', error);
    return { props: { posts: [] } };
  }
};

export default BlogList;