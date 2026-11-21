import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Sidebar from './components/Sidebar.jsx';
import CreatePost from './pages/CreatePost.jsx';
import Posts from './pages/Posts.jsx';
import PostDetail from './pages/PostDetail.jsx';
import About from './pages/About.jsx';
export default function App() {
  const [posts, setPosts] = useState([
   { id: 1, title: 'Welcome to CommunityHub!', content: 'Glad to have you here. Start sharing your thoughts!' }
  ]);

  const handleAddPost = (newPost) => {
    setPosts([{ ...newPost, id: Date.now() }, ...posts]);
  };

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />

        <div className="flex flex-1">
          <Sidebar />

          <main className="flex-1 p-4 max-w-2xl mx-auto space-y-6">
            <nav className="flex gap-4">
              <Link to="/">Home</Link>
              <Link to="/posts">Posts</Link>
              <Link to="/create">Create Post</Link>
              <Link to="/about">About</Link>
            </nav>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/posts" element={<Posts posts={posts} />} />
          <Route path="/posts/:id" element={<PostDetail posts={posts} />} />
<Route path="/create" element={<CreatePost onAddPost={handleAddPost} />} />
<Route path="/about" element={<About />} />
         </Routes>
          </main>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
