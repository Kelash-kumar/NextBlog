import React, { useEffect, useState, useMemo } from "react";
import BlogCard from "./BlogPost";
import Link from "next/link";
import axios from "axios";

const categories = ["All", "Technology", "Science", "Creative",'News'];

const BlogList = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const date = new Date();
  // Fetch blogs once
  useEffect(() => {
    const fetchBlogsPosts = async () => {
      try {
        const res = await axios.get("/api/blog");
        setLoading(false);
        setBlogPosts(res.data.posts);
      } catch (error) {
        console.error("Error while loading blogs " + error);
        setLoading(true)
      }
    };
    fetchBlogsPosts();
  }, []);

let disablebtn =false;
  // Filter posts when blogPosts or filter changes
  const filteredPosts = useMemo(() => {
    if (filter === "All") return blogPosts;
    return blogPosts.filter((post) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    if(!post.category)disablebtn=true;
     return post.category === filter}
    );
  }, [blogPosts, filter]);

  if(loading){
    return  <div className="flex justify-center align-middle py-30 my-52">
    <div class="three-body  ">
    <div class="three-body__dot"></div>
    <div class="three-body__dot"></div>
    <div class="three-body__dot"></div>
    </div>
    </div>
  }
  return (
    <div className="p-6">
      {/* Category Filter */}
      <div className="flex space-x-2 justify-center">
        {categories.map((cat) => (
          <button 
            disabled={disablebtn?true:false}
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-2 py-1 my-4 rounded-lg ${filter === cat ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-20 py-10">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => (
            <Link key={index} href={`blogs/${post._id}`}>
              <BlogCard
                title={post.title}
                description={post.description}
                imageUrl={post.image}
                author={post.author}
                category={post?.category}
                date={new Date(post.createdAt).toLocaleDateString()}
              />
            </Link>
          ))
        ) : (
          <div className="flex justify-center align-middle">
            <h1 className="text-2xl text-center">No Posts Available</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogList;
