import React from "react";
import Image from "next/image";
import Avtar from "../../../Assets/Avtar.jpg";
const BlogTableItems = ({ title, date ,author}) => {
  return (
    <tr className="bg-white border-b hover:bg-gray-100 transition duration-150 ease-in-out">
      <td
        scope="row"
        className="flex items-center gap-3 px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        <div className="relative w-10 h-10">
          {/* Image handling with placeholder if no image src is passed */}
          <Image
            src={Avtar}
            fill
            alt="avtar"
            className="object-cover rounded-full"
          />
        </div>
        <span className="hidden sm:block">{author}</span>
      </td>
      <td className="px-6 py-4">{title ? title : "No title"}</td>
      <td className="px-6 py-4">{date ? date : "25/09/2024"}</td>
      <td className="px-6 py-4">
        {/* Action buttons */}
        {/* <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md">
          Edit
        </button> */}
        <button className="ml-2 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default BlogTableItems;
