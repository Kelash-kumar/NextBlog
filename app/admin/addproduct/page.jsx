"use client";
import React, { useState } from "react";
import Image from "next/image";
import upload_area from "../../../Assets/upload_area.png";
import axios from "axios";
import { toast } from "react-toastify";

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [uploadedImage, setUploadedImage] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [inputData, setInputData] = useState({
    title: "",
    description: "",
    category: "",
    author: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };
  // console.log(inputData)
  const handleSubmit = async(e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', inputData.title);
    formData.append('description', inputData.description);
    formData.append('category', inputData.category);
    formData.append('author', inputData.author);

    // Append the image if it's available
    if (uploadedImage) {
      formData.append('image', uploadedImage);
    }

     try {
  const res = await axios.post('/api/blog',formData);
  if(res){
    toast.success("post added")
    setInputData({
      title:'',
      description:'',
      category:'',
      author:''
      
    });
    setUploadedImage(false)


  }
     } catch (error) { 
      console.log(error);
      toast.error(error.response.data.message)
     }
    
  };
  return (
    <div className="w-full max-w-3xl mx-auto p-8  ">
      <form className="w-full " onSubmit={handleSubmit}>
        <h1 className="text-2xl font-semibold mb-1 text-gray-800 capitalize">
          Upload Thumbnail
        </h1>

        <label htmlFor="image" className="block mb-2 cursor-pointer">
          <Image
            className="rounded-md"
            src={
              !uploadedImage ? upload_area : URL.createObjectURL(uploadedImage)
            }
            width={150}
            height={70}
            alt="Upload Area"
          />
          <input
            type="file"
            name="image"
            id="image"
            hidden
            onChange={(e) => setUploadedImage(e.target.files[0])}
          />
        </label>

        <div className="mb-2">
          <label className="text-lg font-medium text-gray-700">Title</label>
          <input
            className="w-full border border-gray-300 rounded-md h-10 px-4 mt-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
            type="text"
            name="title"
            placeholder="Enter Title"
            value={inputData.title}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mb-2">
          <label className="text-lg font-medium text-gray-700">
            Description
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-md h-18 px-4 py-2 mt-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm resize-none"
            name="description"
            placeholder="Enter Description"
            value={inputData.description}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>

        <div className="mb-2">
          <label className="text-lg font-medium text-gray-700">Category</label>
          <select
            name="category"
            value={inputData.category}
            onChange={handleInputChange}
            required
            className="w-full border bg-white border-gray-300 rounded-md h-10 px-4 mt-2"
          >
            <option value="Technology">Technology</option>
            <option value="Science">Science</option>
            <option value="Creative">Creative</option>
            <option value="News">News</option>
          </select>
        </div>

        <div className="mb-2">
          <label className="text-lg font-medium text-gray-700">Author</label>
          <input
            className="w-full border border-gray-300 rounded-md h-10 px-4 mt-2 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
            type="text"
            name="author"
            placeholder="Enter Author Name"
            value={inputData.author}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="mt-3">
          <button
            type="submit"
            className="w-full py-3 px-4 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition-colors shadow-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default page;
