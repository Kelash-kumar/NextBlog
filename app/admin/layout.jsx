'use client'
import React from "react";
import Sidebar from "../components/AdminComponents/Sidebar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Layout = ({ children }) => {
  return (
    <div className="flex">
      <ToastContainer/>
        <Sidebar />
      <div className="flex flex-col w-full">
        <div className="  h-15 bg-gray-100 border  border-b-gray-400 flex justify-between align-middle p-3 ">Blog Admin panel</div>
      {children}
      </div>
    </div>
  );
};

export default Layout;
