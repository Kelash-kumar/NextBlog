'use client'
import BlogTableItems from '@/app/components/AdminComponents/BlogTableItems';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [blogs,setBlogs] = useState([]);

  // geting all blogs
  const fetchBlogs = async() =>{
    try {
      const res = await axios.get('/api/blog');
     if(res){
      setBlogs(res.data.posts);
     }
      
    } catch (error) {
      console.log(error);
    }
  }
  //delete specific post
  const DeleteBlog = async(id) =>{
    try {
      const res = await axios.delete(`/api/blog/${id}`);
     if(res && res.data){
    setBlogs(blogs.filter(post => post._id!==id));
     }
      
    } catch (error) {
      console.log(error.response);
    }
  
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() =>{
fetchBlogs();
  },[]);
  
  return (
    <div className='flex flex-col flex-1  px-5 sm:pt-12 pl-16'>
      <h1 className='text-2xl font-bold text-gray-800'>All Blogs</h1>

      <div className='relative h-[77vh] max-w-[1000px] overflow-x-auto mt-6 border border-gray-400 shadow-lg rounded-lg scrollBra_hide'>
        <table className='w-full text-sm text-gray-600'>
          <thead className='text-sm uppercase text-gray-700 text-left bg-gray-200'>
            <tr>
              <th scope='col' className='hidden sm:table-cell px-6 py-4'>
                Author Name
              </th>
              <th scope='col' className='px-6 py-4'>
                Title
              </th>
              <th scope='col' className='px-6 py-4'>
                Date
              </th>
              <th scope='col' className='px-6 py-4'>
                Action
              </th>
            </tr>
          </thead>

          <tbody className='bg-white divide-y divide-gray-200'>
          {
              blogs.map(post =>(

            <BlogTableItems

            key={post._id}
            title={post.title}
            date={post.createAt}
            author={post.author}
            DeleteBlogHandler={()=>DeleteBlog(post._id)}
            />
              ))
            }
            {/* <tr className='hover:bg-gray-100 transition duration-150 ease-in-out'>
              <td className='hidden sm:table-cell px-6 py-4'>John Doe</td>
              <td className='px-6 py-4'>My First Blog</td>
              <td className='px-6 py-4'>2024-09-24</td>
              <td className='px-6 py-4'>
                <button className='bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md'>
                  Edit
                </button>
                <button className='ml-2 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md'>
                  Delete
                </button>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
