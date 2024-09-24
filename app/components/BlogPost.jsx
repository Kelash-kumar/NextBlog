import React from "react";

const BlogCard = ({ title, description, imageUrl, author,category ,date }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
    
      <img
        className="w-full h-48 object-cover"
        src={imageUrl}
        alt={title}
      />
     
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
        <span className="border border-blue-300 bg-gray-100 px-7 py-1 rounded-sm">{category}</span>
        <p className="mt-2 text-gray-600 mb-4">{description}</p>

        {/* Author and Date */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>By {author}</span>
          <span>{date}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
