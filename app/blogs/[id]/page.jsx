"use client";
import { posts } from "@/app/PostData";
import { useRouter } from "next/navigation";
const page = ({ params }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const post = posts.find((p) => p.id === Number(params.id));

  return (
    <div className="max-w-2xl mx-auto p-6 my-20">
      <button
      onClick={() =>router.push('/')}
      className="border border-gray-300 rounded-md px-7 text-2xl font-bold active:bg-gray-400 my-5 active:text-white">←</button>
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="text-gray-600 mb-4">
        <span>By {post.author}</span> | <span>{post.date}</span>
      </div>
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-64 object-cover mb-6 rounded"
      />
      <p className="text-gray-700 mb-4">{post.description}</p>
      <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
        {post.category}
      </span>
      <div className="mt-6">
        <h2 className="text-2xl font-bold">Content</h2>
        <p className="text-gray-700">{post.content}</p>
      </div>
    </div>
  );
};

export default page;
