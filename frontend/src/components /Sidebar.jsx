export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-100 p-4 h-full hidden md:block">
      <nav className="space-y-2">
        <a href="#" className="block p-2 rounded hover:bg-gray-200 font-medium">Home</a>
        <a href="#" className="block p-2 rounded hover:bg-gray-200 font-medium">Explore</a>
        <a href="#" className="block p-2 rounded hover:bg-gray-200 font-medium">Profile</a>
      </nav>
    </aside>
  );
}
