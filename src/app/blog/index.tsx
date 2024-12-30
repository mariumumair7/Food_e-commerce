import Link from 'next/link';
import Image from 'next/image'; // Import Image from next/image

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
                      src={post.image} // Ensure this is a valid path
                      alt={post.title}
                      layout="fill" // Ensures the image covers the div area
                      objectFit="cover" // Ensures the image maintains aspect ratio
                      className="rounded-t-lg"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-3 hover:text-indigo-600 transition-colors duration-200 ease-in-out">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {post.content.length > 120
                        ? post.content.substring(0, 120) + '...'
                        : post.content}
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

export default BlogList;