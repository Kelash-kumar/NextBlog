import React from "react";
import BlogCard from "./BlogPost";

  
const BlogList = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {posts.map((post, index) => (
        <BlogCard
          key={index}
          title={post.title}
          description={post.description}
          imageUrl={post.imageUrl}
          author={post.author}
          date={post.date}
        />
      ))}
    </div>
  );
};

export default BlogList;
