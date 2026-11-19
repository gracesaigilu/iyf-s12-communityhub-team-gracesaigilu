import { useParams, Link } from 'react-router-dom';

export default function PostDetail({ posts }) {
  const { id } = useParams();
  const post = posts.find((p) => String(p.id) === id);

  if (!post) {
    return (
      <div>
        <h1>Post not found</h1>
        <Link to="/posts">Back to Posts</Link>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p>{post.content}</p>
      <Link to="/posts">Back to Posts</Link>
    </div>
  );
}