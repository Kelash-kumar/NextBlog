"use client";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";
const page = ({ params }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [post,setPost] = useState({});
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [loading, setLoading] = useState(true);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const fetchBlogsPostsDetails = async () => {
      try {
        const res = await axios.get(`/api/blog/${params.id}`);
       if(res){
         setPost(res.data.post);
         setLoading(false);
       }
      } catch (error) {
        console.error("Error to get blog post details " + error.response.data.message);
      setLoading(true);
      }
    };
   fetchBlogsPostsDetails();
  }, [params.id]);
  if(loading){
    return  <div className="flex justify-center align-middle py-30 my-52">
    <div class="three-body  ">
    <div class="three-body__dot"></div>
    <div class="three-body__dot"></div>
    <div class="three-body__dot"></div>
    </div>
    </div>
  }
  if(!post)return <div className="p-20 text-3xl">Loading</div>
  return (
    <div className="max-w-2xl mx-auto p-6 my-20">
      <button
      onClick={() =>router.push('/')}
      className="border border-gray-300 rounded-md px-7 text-2xl font-bold active:bg-gray-400 my-5 active:text-white">←</button>
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="text-gray-600 mb-4">
        <span>By {post.author}</span> | <span>{new Date(post.createdAt).toLocaleDateString()}</span>
      </div>
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-64 object-cover mb-6 rounded"
      />
      <p className="text-gray-700 mb-4">{post.description}</p>
      <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
        {!post.category?"unKnown":post.category}
      </span>
      <div className="mt-6">
        <h2 className="text-2xl font-bold">Content</h2>
        {/* <p className="text-gray-700">{post.content}</p> */}
      </div>
    </div>
  );
};

export default page;
