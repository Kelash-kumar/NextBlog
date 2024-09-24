import React, { useEffect, useState } from "react";
import BlogCard from "./BlogPost";
import Link from "next/link";
import { posts } from "../PostData";
const category = [
  "All",
  "Web Development",
  "Andriod",
  "Science",
  "Education",
  "Data Science",
];
const BlogList = () => {
  const [filteredPost, setFilteredPost] = useState(posts);
  const [filteredPostText, setFilteredPostText] = useState("All");

  useEffect(() => {
    if (filteredPostText === "All") setFilteredPost(posts);
    else {
      const filteredArrayPost = posts.filter(
        (post) => post.category === filteredPostText
      );
      setFilteredPost(filteredArrayPost);
    }
  }, [filteredPostText]);

  return (
    <div className="p-6">
      <div className="flex space-x-2 justify-center">
        {category.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilteredPostText(cat)}
            className={`px-2 py-1  my-4 rounded-lg ${
              filteredPostText === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-20 py-10 ">
        {filteredPost.length > 0 ? (
          filteredPost.map((post, index) => (
            <Link  key={index} href={`blogs/${post.id}`}>
            <BlogCard
             
              title={post.title}
              description={post.description}
              imageUrl={post.imageUrl}
              author={post.author}
              category={post.category}
              date={post.date}
              />
              </Link>
          ))
        ) : (
          <div className="flex justify-center align-middle ">
            <h1 className="text-2xl text-center ">No Post Available for Now</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogList;
