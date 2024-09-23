import React from "react";

const Header = () => {
  return (
    <div className="bg-gray-100">
      {/* Navbar Section */}
      <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-gray-800">Blog</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <div className="text-center py-12 px-6 bg-gray-50">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Latest Blogs</h1>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ad nobis corporis aspernatur facilis maiores odio laboriosam, doloribus velit ullam.
        </p>

        {/* Search and Subscribe Form */}
        <form action="" className="flex justify-center items-center space-x-3">
          <input 
            type="text" 
            placeholder="Search blogs..." 
            className="border border-gray-300 rounded px-4 py-2 w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
