import Link from 'next/link';
import Image from 'next/image';  // Import Image from next/image
import { GetStaticProps } from 'next';

interface Post {
    id: string;
    title: string;
    slug: string;
    content: string;
    image: string;
}

interface Props {
    posts: Post[];
}

const BlogList = ({ posts }: Props) => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-10 text-center">
          Featured Blog Posts
        </h1>

        {posts && posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative w-full h-60">
                    <Image
                      src={post.image}  // Use Image instead of img
                      alt={post.title}
                      layout="fill"  // Ensures the image covers the div area
                      objectFit="cover"  // Ensures the image maintains aspect ratio
                      className="rounded-t-lg"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-3 hover:text-indigo-600 transition-colors duration-200 ease-in-out">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {post.content.substring(0, 120)}...
                    </p>
                  </div>
                </Link>
              </article>
            ))}
          </div>
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
    const res = await fetch('http://localhost:3000/api/posts'); // Fetch from API
    if (!res.ok) {
      console.error(`Failed to fetch posts with status ${res.status}`);
      return { props: { posts: [] } };
    }
    const posts = await res.json();
    return { props: { posts } };
  } catch (error) {
    console.error('Error fetching posts:', error);
    return { props: { posts: [] } };
  }
};

export default BlogList;
