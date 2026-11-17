import { useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Sidebar from './components/Sidebar.jsx';
import PostList from './components/Postlist.jsx';
import CreatePost from './components/Createpost.jsx';

export default function App() {
  const [posts, setPosts] = useState([
    { title: 'Welcome to CommunityHub!', content: 'Glad to have you here. Start sharing your thoughts!' }
  ]);

  const handleAddPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <div className="flex flex-1">
        <Sidebar />
        
        <main className="flex-1 p-4 max-w-2xl mx-auto space-y-6">
          <CreatePost onAddPost={handleAddPost} />
          <PostList posts={posts} />
        </main>
      </div>

      <Footer />
    </div>
  );
}

