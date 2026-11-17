export default function PostList({ posts }) {
  if (!posts || posts.length === 0) {
    return <p className="text-gray-500 p-4">No posts yet. Be the first to post!</p>;
  }

  return (
    <div className="space-y-4 p-4">
      {posts.map((post, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow border border-gray-200">
          <h3 className="font-bold text-lg text-gray-800">{post.title}</h3>
          <p className="text-gray-600 mt-1">{post.content}</p>
        </div>
      ))}
    </div>
  );
}
