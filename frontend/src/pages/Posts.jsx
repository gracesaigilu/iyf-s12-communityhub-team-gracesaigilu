import { Link } from 'react-router-dom';

export default function Posts({ posts }) {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Posts</h1>

      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="p-4 bg-white rounded shadow">
            <h2 className="text-lg font-semibold">
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </h2>
            <p>{post.content}</p>
          </div>
        ))
      )}
    </div>
  );
}