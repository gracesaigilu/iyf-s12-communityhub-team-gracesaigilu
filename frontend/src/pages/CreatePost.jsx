import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreatePost({ onAddPost }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    onAddPost({ title: title.trim(), content: content.trim() });
    setTitle('');
    setContent('');
    navigate('/posts');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h1 className="text-2xl font-bold">Create Post</h1>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-2 border rounded"
      />

      <textarea
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={5}
        className="w-full p-2 border rounded"
      />

      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
        Publish
      </button>
    </form>
  );
}