import Link from 'next/link';
import client from '../sanity'; // Assuming you have set up sanity client

const BlogList = ({ posts }) => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post._id} className="mb-4">
            <Link href={`/blog/${post.slug.current}`}>
              <a className="text-xl font-semibold text-blue-600 hover:underline">{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Fetching all blog posts for the listing page
export const getStaticProps = async () => {
  const query = `*[_type == "post"] { title, slug, _id }`;
  const posts = await client.fetch(query);

  return { props: { posts } };
};

export default BlogList;
