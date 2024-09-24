import { useState } from "react";
import {
  ClipboardDocumentListIcon,
  BellIcon,
  ArrowLeftOnRectangleIcon,
  PlusCircleIcon
} from "@heroicons/react/24/outline"; // Updated Heroicons v2 imports

import Link from "next/link";
const Sidebar = () => {
  const [active, setActive] = useState("dashboard"); // Manage active item

  const handleActive = (item) => {
    setActive(item);
  };

  return (
    <div className="h-screen w-64 bg-gray-100  flex flex-col ">
      {/* Logo Section */}
      <div className="flex items-center justify-center h-16 bg-gray-400">
        <h1 className="text-2xl font-bold text-white">Admin Panel</h1>
      </div>

      {/* Navigation Links */}
      <nav className="flex-grow">
        <ul className="mt-4 space-y-2">
          <Link href={"/admin/addproduct"}>
            <li
              onClick={() => handleActive("dashboard")}
              className={`w-full flex items-center p-3 hover:bg-gray-300 transition-colors ${
                active === "dashboard" ? "bg-gray-300" : ""
              }`}
            >
              <PlusCircleIcon className="h-6 w-6 mr-2" />
              <span>Add Products</span>
            </li>
          </Link>
          <Link href={"/admin/blogList"}>
            <li
              onClick={() => handleActive("users")}
              className={`w-full flex items-center p-3 hover:bg-gray-300 transition-colors ${
                active === "users" ? "bg-gray-300" : ""
              }`}
            >
              <ClipboardDocumentListIcon className="h-6 w-6 mr-2" />
              <span>Blog List</span>
              
            </li>
          </Link>
          <Link href={"/admin/subscriptions"}>
            <li
              onClick={() => handleActive("tasks")}
              className={`w-full flex items-center p-3 hover:bg-gray-300 transition-colors ${
                active === "tasks" ? "bg-gray-300" : ""
              }`}
            >
              <BellIcon className="h-6 w-6 mr-2" />
              <span>Subscriptions</span>
            </li>
          </Link>
        </ul>
      </nav>

      {/* Logout Section */}
      <div className="p-3 mt-auto">
        <li className="w-full flex items-center p-3 bg-red-600 hover:bg-red-500 transition-colors rounded-md">
          <ArrowLeftOnRectangleIcon className="h-6 w-6 mr-2" />
          <span>Logout</span>
        </li>
      </div>
    </div>
  );
};

export default Sidebar;
